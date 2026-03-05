import React, { useState } from 'react';
import './LeadPopUp.css';
import { X, CheckCircle, ShieldAlert } from 'lucide-react';

interface LeadPopUpProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadPopUp({ isOpen, onClose }: LeadPopUpProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call for lead capturing
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content animate-fade-in glass-panel">
                <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
                    <X size={24} />
                </button>

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
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input type="text" id="name" required placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input type="tel" id="phone" required placeholder="0400 000 000" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Primary Concern *</label>
                                <select id="service" required>
                                    <option value="">Select an option</option>
                                    <option value="ticks">Tick Control (Urgent)</option>
                                    <option value="mosquitoes">Mosquito Control</option>
                                    <option value="both">Both Ticks & Mosquitoes</option>
                                    <option value="event">Special Event Treatment</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary modal-submit">
                                Get My Free Quote
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
                            Thank you for choosing TickSafe. One of our experts will be in touch with you shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
