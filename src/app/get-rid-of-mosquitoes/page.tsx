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
                        <li>Our specific larvae treatment is approved by the World Health Organisation.</li>
                    </ul>
                </>
            )
        },
        {
            title: "I didn't think you could get rid of mosquitoes from a garden!",
            content: (
                <p>100% wrong! Our targeted process will quickly eliminate active mosquitoes and continue to kill new mozzies as they arrive. You will enjoy a big reduction in mozzie numbers throughout your house and garden! What’s more, we’ll target areas where mosquitoes breed, treating those areas to stop larval development. Regular scheduled visits mean we break their breeding cycle completely.</p>
            )
        },
        {
            title: "Why do you need to re-treat every four weeks?",
            content: (
                <>
                    <p>Warmer months are when mosquitoes are most active. Our treatment has a strong residual quality on the surfaces where mozzies rest and feed during the day. However, properly approved products are bio-degradable and break down with sunlight, so after four weeks their effect starts to "tail off".</p>
                    <p>Repeat visits ensure a thorough residual barrier is maintained, similar to multiple coats of oil on a timber deck, giving you the very best result throughout the season.</p>
                </>
            )
        },
        {
            title: "What happens on the day of treatment?",
            content: (
                <p>Our licensed specialist will thoroughly assess your garden and use specialized powered equipment to treat all the places where mosquitoes rest, feed, and breed. Once the water-based treatment is dry (usually after an hour or so), it is entirely safe for children and pets to re-enter the yard.</p>
            )
        },
        {
            title: "Is every house and garden suitable for treatment?",
            content: (
                <p>Our mosquito barrier treatment is most effective for freestanding homes with well-established gardens. Beneath decks, patio areas, and outdoor living structures all provide ideal habitats. We can also treat townhouses and semis, though we recommend adjoining neighbors treat at the same time for maximum effectiveness.</p>
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
                <div className="hero-image-half" style={{ backgroundImage: 'url("/hero-child-dog.jpg")', filter: 'contrast(1.1)' }}></div>
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

            {/* The Problem / Intro Section */}
            <section className="intro-section">
                <div className="container intro-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748' }}>The Gold Standard in Mosquito Control</h2>
                    <p>
                        Who doesn’t have childhood memories of summer mozzie bites? But increasing cases of serious mosquito-borne diseases like <strong>Ross River Virus</strong> right here in Sydney is the real reason you should get rid of mozzies around your place.
                    </p>
                    <p>
                        The Mozzie Team provides a specialized barrier protection treatment that reduces the number of mosquitoes around your house and garden by over 90%. It kills mosquitoes on contact then keeps on working for weeks to come! We expertly target areas where they feed, hide, and breed to break their cycle completely.
                    </p>
                    
                    <div style={{ marginTop: '2.5rem' }}>
                        <CTASection 
                            styleVariant="card"
                            message="Protect your family from Ross River and Barmah Forest viruses today."
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
