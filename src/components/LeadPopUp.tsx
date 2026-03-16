import React, { useState } from 'react';
import './LeadPopUp.css';
import { X, CheckCircle, ShieldAlert } from 'lucide-react';

interface LeadPopUpProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadPopUp({ isOpen, onClose }: LeadPopUpProps) {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            source_url: typeof window !== 'undefined' ? window.location.href : '',
        };

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    onClose();
                    setSubmitted(false);
                }, 4000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Submission failed. Please try again or call us directly.');
                console.error('Submission failed:', errorData);
            }
        } catch (error) {
            setError('A network error occurred. Please check your connection and try again.');
            console.error('Error submitting form:', error);
        } finally {
            setSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content animate-fade-in glass-panel">
                <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-body">
                    {!submitted ? (
                        <>
                            <div className="modal-header text-center">
                                <ShieldAlert size={40} className="text-danger modal-icon" />
                                <h2 className="modal-title">Secure Your Home Today</h2>
                                <p className="modal-subtitle">
                                    Don't wait. Enter your details below and our Central Coast experts will contact you for a free assessment.
                                </p>
                                {error && (
                                    <div className="error-message">
                                        {error}
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleSubmit} className="lead-form">
                                <div className="form-row">
                                    <div className="form-group flex-1">
                                        <label htmlFor="first_name">First Name *</label>
                                        <input type="text" id="first_name" name="first_name" required placeholder="John" />
                                    </div>
                                    <div className="form-group flex-1">
                                        <label htmlFor="last_name">Last Name *</label>
                                        <input type="text" id="last_name" name="last_name" required placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input type="tel" id="phone" name="phone" required placeholder="0400 000 000" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" required placeholder="How can we help you?" rows={3}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary modal-submit" disabled={submitting}>
                                    {submitting ? 'Submitting...' : 'Get My Free Quote'}
                                </button>

                                <p className="privacy-note">
                                    Your information is highly secure. We will never share your details.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="modal-success text-center">
                            <CheckCircle size={64} className="text-primary success-icon" />
                            <h2 className="modal-title">Request Received!</h2>
                            <p className="modal-subtitle">
                                Thank you. Our team will contact you shortly.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
