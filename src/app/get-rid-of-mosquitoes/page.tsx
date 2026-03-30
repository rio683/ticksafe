'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LeadPopUp from '@/components/LeadPopUp';
import CTASection from '@/components/CTASection';
import { ChevronDown } from 'lucide-react';
import '../get-rid-of-ticks/landing.css';

export default function GetRidOfMosquitoesPage() {
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
                        <li>We are accredited by the NSW Environment Protection Agency.</li>
                    </ul>
                </>
            )
        },
        {
            title: "What is your “Treat the Street” programme?",
            content: (
                <p>Because mosquitoes are highly mobile, we offer a 15% discount for you and your neighbors if we treat multiple properties in your immediate neighborhood at the same time. Banding together makes a massive impact on local mozzie numbers. Ask us about it when you request a quote!</p>
            )
        },
        {
            title: "What does your mozzie barrier treatment cost?",
            content: (
                <p>Our treatment is on par with the very best globally, reducing numbers by more than 90%. As a guide, the standard cost for most homes is around $149 as part of a scheduled summer treatment programme. We provide free quotes by phone or email using online mapping technology to assess your garden first.</p>
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
                <div className="hero-image-half" style={{ backgroundImage: 'url("/hero-mosquito-family.png")', filter: 'contrast(1.05)', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                <div className="hero-text-half animate-fade-in-up">
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>We Get Rid Of Mosquitoes</h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#4a5568' }}>Mosquitoes are worse than just annoying. Don’t risk it!</p>
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

            {/* Section 1: The Danger */}
            <section className="intro-section" style={{ backgroundColor: '#ffffff' }}>
                <div className="container intro-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748' }}>
                        Don't let them ruin your evenings
                    </h2>
                    <p>
                        Who doesn’t have childhood memories of summer mozzie bites and outdoor events ruined by mosquitoes? But increasing cases of serious mosquito-borne diseases like <strong>Ross River Virus</strong> right here in Sydney is the real reason you should take action.
                    </p>
                    <p>
                        Protecting your property isn't just about comfort; it's about making your outdoor living spaces safe for your family and guests.
                    </p>
                </div>
            </section>

            {/* Section 2: Our Solution (Barrier Protection) */}
            <section className="intro-section" style={{ backgroundColor: '#f0f7f2' }}>
                <div className="container intro-container">
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748' }}>
                        World's best practice for suburban mosquito control
                    </h2>
                    <p>
                        The Mozzie Team provides a specialized barrier protection treatment that will reduce the number of mosquitoes around your house and garden by over 90%. It kills mosquitoes on contact then keeps on working for weeks to come! 
                    </p>
                    <p>
                        We know all about mosquito behavior and expertly target areas where they feed, hide, and breed. We'll also use our fish-safe treatment in water features, ponds, and other breeding areas to stop mosquito larvae from developing entirely.
                    </p>
                    
                    <div style={{ marginTop: '2.5rem' }}>
                        <CTASection 
                            styleVariant="card"
                            message="Secure your backyard against Ross River and Barmah Forest viruses."
                            buttonText="Schedule an Inspection"
                            onButtonClick={handleOpenQuote}
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: Breeding & Environment Insights */}
            <section className="intro-section" style={{ backgroundColor: '#ffffff' }}>
                <div className="container intro-container">
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748' }}>
                        Targeting the source
                    </h2>
                    <p>
                        You might not think you can get rid of mosquitoes from an open garden, but our targeted process quickly eliminates active mosquitoes and continues to kill new ones as they arrive.
                    </p>
                    <p>
                        Our mosquito barrier is most effective for freestanding homes with well-established gardens. Beneath decks, patio areas, pool cabana areas, and leafy corners all provide ideal habitats where our treatment thrives, breaking their cycle completely.
                    </p>
                </div>
            </section>

            {/* Section 4: Why 4-Week Top-Ups? (Seasonal Risk) */}
            <section className="intro-section" style={{ backgroundColor: '#fdfaed' }}> {/* Soft yellow/beige matching brand feel */}
                <div className="container intro-container">
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748' }}>
                        Why retreatment every four weeks is essential
                    </h2>
                    <p>
                        Mosquitoes are most active during the warmer months. Because we only use properly approved products that are fully bio-degradable, they break down naturally with sunlight. After four weeks, their effect rapidly starts to "tail off".
                    </p>
                    <p>
                        This is the danger zone where mosquitoes can develop resistance. Our multi-visit schedule ensures a strong residual barrier is maintained—much like applying multiple coats of oil to a timber deck. Regular scheduled top-ups ensure you can enjoy the rest of the season worry-free.
                    </p>
                </div>
            </section>

            {/* Mini FAQ Accordion */}
            <section className="info-section" style={{ backgroundColor: '#ffffff', paddingTop: '3rem' }}>
                <div className="container info-container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2.5rem', color: '#2d3748' }}>Common Questions & Details</h2>
                    
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
                        buttonText="LETS CHAT"
                        onButtonClick={handleOpenQuote}
                        secondaryButtonText="CALL NOW 1300 842 572"
                        secondaryButtonLink="tel:1300842572"
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
