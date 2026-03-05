'use client';

import React from 'react';
import './Hero.css';
import { ShieldAlert, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenQuote }: { onOpenQuote: () => void }) {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="gradient-overlay"></div>
            </div>

            <div className="container hero-content text-center">
                <img
                    src="/logo.png"
                    alt="TickSafe Logo"
                    style={{ height: '80px', marginBottom: '2rem' }}
                    className="animate-fade-in"
                />
                <div className="badge animate-fade-in">
                    <ShieldAlert size={18} className="badge-icon" />
                    <span>Central Coast's #1 Tick & Mozzie Experts</span>
                </div>

                <h1 className="hero-title animate-fade-in delay-100">
                    Protect Your Family From<br />
                    <span style={{ color: 'black' }}>Dangerous</span> <span className="text-secondary">Ticks & Mosquitoes</span>
                </h1>

                <p className="hero-subtitle animate-fade-in delay-200">
                    We provide the Gold Standard in tick and mosquito control for your garden.
                    Don't risk the rising threat of tick-borne allergies. Secure your peace of mind today.
                </p>

                <div className="hero-actions animate-fade-in delay-300">
                    <button onClick={onOpenQuote} className="btn btn-primary btn-large cta-pulse">
                        Get a free quote now
                    </button>
                    <a href="tel:1300842572" className="btn btn-outline flex-center">
                        <PhoneCall size={20} style={{ marginRight: '8px' }} />
                        Call Now 1300 842 572
                    </a>
                </div>

                <div className="mt-12 text-center animate-fade-in delay-300" style={{ marginTop: '3rem' }}>
                    <img
                        src="/no_ticks_mosquitoes.png"
                        alt="No Ticks and Mosquitoes"
                        style={{ maxWidth: '180px', height: 'auto', margin: '0 auto' }}
                    />
                </div>
            </div>
        </section>
    );
}
