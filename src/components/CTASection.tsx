import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import './CTASection.css';

interface CTASectionProps {
    message: string;
    buttonText: string;
    onButtonClick: () => void;
    styleVariant?: 'card' | 'inline' | 'banner' | 'sidePop' | 'floating' | 'miniBanner';
    scrollThreshold?: number; // For sidePop and floating
}

export default function CTASection({
    message,
    buttonText,
    onButtonClick,
    styleVariant = 'card',
    scrollThreshold = 400
}: CTASectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        if (styleVariant !== 'sidePop' && styleVariant !== 'floating') {
            setIsVisible(true);
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [styleVariant, scrollThreshold]);

    if (!isVisible || isDismissed) return null;

    if (styleVariant === 'inline') {
        return (
            <span className="cta-inline">
                {message} <button onClick={onButtonClick} className="cta-inline-btn">{buttonText}</button>
            </span>
        );
    }

    if (styleVariant === 'floating') {
        return (
            <button onClick={onButtonClick} className="cta-floating-btn" title={message}>
                <span className="cta-floating-text">{buttonText}</span>
                <ArrowRight size={20} />
            </button>
        );
    }

    return (
        <div className={`cta-section ${styleVariant}`}>
            {styleVariant === 'sidePop' && (
                <button className="cta-dismiss" onClick={() => setIsDismissed(true)}>
                    <X size={16} />
                </button>
            )}
            <div className="cta-content">
                <p className="cta-message">{message}</p>
                <button onClick={onButtonClick} className={`btn cta-button ${styleVariant === 'banner' ? 'btn-light' : 'btn-primary'}`}>
                    {buttonText} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </button>
            </div>
        </div>
    );
}
