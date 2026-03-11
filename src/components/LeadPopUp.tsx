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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);
        
        const payload = new URLSearchParams();
        payload.append('input_1.3', (formData.get('first_name') as string) || '');
        payload.append('input_1.6', (formData.get('last_name') as string) || '');
        payload.append('input_3', (formData.get('email') as string) || '');
        payload.append('input_4', (formData.get('phone') as string) || '');
        payload.append('input_5', (formData.get('message') as string) || '');
        payload.append('input_7', ''); // Honeypot
        payload.append('is_submit_2', '1');
        payload.append('gform_submit', '2');
        payload.append('gform_target_page_number_2', '0');
        payload.append('gform_source_page_number_2', '1');

        try {
            await fetch('https://ticksafe.com.au/', {
                method: 'POST',
                mode: 'no-cors', // Standard HTML form post behavior to bypass CORS restrictions
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: payload.toString(),
            });

            // With no-cors, we can't read the exact HTTP response status, 
            // so we assume success if no network exception was thrown.
            setSubmitted(true);
            setTimeout(() => {
                onClose();
                setSubmitted(false);
            }, 4000);
        } catch (error) {
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
