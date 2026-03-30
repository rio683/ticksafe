'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LeadPopUp from '@/components/LeadPopUp';
import CTASection from '@/components/CTASection';
import { ChevronDown } from 'lucide-react';
import './landing.css';

export default function GetRidOfTicksPage() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [openInfo, setOpenInfo] = useState<number | null>(0); // First one open by default

    const handleOpenQuote = () => setIsPopUpOpen(true);
    const handleCloseQuote = () => setIsPopUpOpen(false);

    const toggleInfo = (index: number) => {
        if (openInfo === index) {
            setOpenInfo(null);
        } else {
            setOpenInfo(index);
        }
    };

    const informationSections = [
        {
            title: "Are your treatments safe for my family and pets?",
            content: (
                <>
                    <p><strong>Yes, safety is our priority.</strong></p>
                    <ul>
                        <li>Our products are entirely water-based and biodegradable.</li>
                        <li>They possess very low toxicity to all mammals, including people and household pets (even chickens and birds).</li>
                        <li>They are less toxic than many common household cleaning products.</li>
                        <li>Fully approved for use in and around homes, schools, and restaurants.</li>
                        <li>Our specific larvae treatment is approved by the World Health Organisation.</li>
                    </ul>
                </>
            )
        },
        {
            title: "I didn't think you could get rid of ticks from a garden!",
            content: (
                <p>100% wrong! With the highly specialised approach we’ve developed, we will give you back your garden. Our process immediately eliminates active ticks and continues to kill new ticks as they hatch for months. Regular scheduled visits mean we break their breeding cycle completely. You don’t even need to be home when we treat.</p>
            )
        },
        {
            title: "When is the best time of year to treat?",
            content: (
                <>
                    <p>You can start at any time of the year—the sooner you start, the sooner tick numbers plummet. Ticks don't follow a strict calendar; eggs and larvae can exist year-round. However, juvenile ticks peak in autumn, "nymphs" in winter, and adults in spring and summer.</p>
                    <p>Because our treatment acts as a residual barrier for months, it continuously destroys hatching eggs and migrating ticks long after application.</p>
                </>
            )
        },
        {
            title: "What happens on the day of treatment?",
            content: (
                <p>Our licensed technician will assess your property and apply a targeted, high-pressure spray to the foliage and boundary lines where ticks harbor. Once the water-based treatment is dry (usually a few hours), it is entirely safe for children and pets to re-enter the yard.</p>
            )
        },
        {
            title: "What is the Treat the Street programme?",
            content: (
                <p>Because ticks are mobile, we offer a 15% discount for you and your neighbors if we treat multiple properties in your immediate area on the same day. It drastically reduces the local tick population. Ask us about it when you request a quote!</p>
            )
        }
    ];

    return (
        <main className="service-landing-page">
            {/* Header */}
            <header className="service-header">
                <div className="container header-container">
                    <Link href="/">
                        <img src="/logo-news.png" alt="TickSafe Logo" className="header-logo" />
                    </Link>
                    <button onClick={handleOpenQuote} className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontWeight: 'bold' }}>
                        Free Quote
                    </button>
                </div>
            </header>

            {/* Split Hero Section */}
            <section className="hero-split">
                <div className="hero-image-half"></div>
                <div className="hero-text-half animate-fade-in-up">
                    <h1>We Get Rid Of Ticks</h1>
                    <p>Don’t let you or your children get bitten by ticks....</p>
                    <div className="hero-cta-group">
                        <button onClick={handleOpenQuote} className="btn-hero-dark animate-pulse">
                            LETS CHAT
                        </button>
                        <a href="tel:1300842572" className="btn-hero-outline">
                            CALL NOW 1300 842 572
                        </a>
                    </div>
                </div>
            </section>

            {/* The Problem / Intro Section */}
            <section className="intro-section">
                <div className="container intro-container">
                    <h2>The Gold Standard in Tick Control</h2>
                    <p>
                        If you, your children, or your pet has been bitten by a tick, you have every reason to worry. You likely already know the consequences can be severe. But you may not realise that small "grass ticks" are actually juvenile Australian Paralysis Ticks. They rapidly grow and can lay up to 10,000 eggs.
                    </p>
                    <p>
                        At TickSafe, we have developed a targeted, scientifically backed approach. We immediately rid your outdoor areas of ticks using fully approved, family-safe products to eliminate them at all stages of their life cycle.
                    </p>
                    
                    <div style={{ marginTop: '2.5rem' }}>
                        <CTASection 
                            styleVariant="card"
                            message="Secure your backyard against Mammalian Meat Allergy and Pet Paralysis."
                            buttonText="Schedule an Inspection"
                            onButtonClick={handleOpenQuote}
                        />
                    </div>
                </div>
            </section>

            {/* Information Accordion */}
            <section className="info-section">
                <div className="container info-container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2.5rem', color: '#2d3748' }}>Common Questions & Safety Info</h2>
                    
                    {informationSections.map((info, index) => (
                        <div key={index} className={`info-item ${openInfo === index ? 'active' : ''}`}>
                            <button className="info-question" onClick={() => toggleInfo(index)}>
                                <h3>{info.title}</h3>
                                <div className="info-icon">
                                    <ChevronDown size={24} />
                                </div>
                            </button>
                            <div className="info-answer">
                                <div className="info-answer-content">
                                    {info.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bottom-cta-wrap">
                <div className="container">
                    <CTASection 
                        styleVariant="heroBanner"
                        message="Ready to reclaim your backyard safely?"
                        buttonText="CALL NOW 1300 842 572"
                        onButtonClick={() => window.location.href = 'tel:1300842572'}
                        secondaryButtonText="LETS CHAT"
                        secondaryButtonLink="#"
                        onSecondaryButtonClick={handleOpenQuote}
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="article-footer text-center" style={{ padding: '2rem 1rem', borderTop: '1px solid #eee' }}>
                <div className="container">
                    <p className="text-muted" style={{ margin: 0 }}>
                        &copy; 2026 Tick Safe & The Mozzie Team. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* The existing lead popup component */}
            <LeadPopUp isOpen={isPopUpOpen} onClose={handleCloseQuote} />
        </main>
    );
}
