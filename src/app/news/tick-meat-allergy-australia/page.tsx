'use client';

import React, { useState } from 'react';
import LeadPopUp from '@/components/LeadPopUp';
import VideoEmbed from '@/components/VideoEmbed';
import CTASection from '@/components/CTASection';
import './article.css';

export default function JeremyWebbArticle() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const handleOpenQuote = () => setIsPopUpOpen(true);
    const handleCloseQuote = () => setIsPopUpOpen(false);

    return (
        <main className="article-page">
            <header className="article-header">
                <div className="container header-container">
                    <a href="https://ticksafe.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src="/logo-news.png" alt="TickSafe News & Updates" className="header-logo" />
                    </a>
                </div>
            </header>

            <article className="article-container">
                <div className="container">
                    <div className="article-hero-cta">
                        <CTASection
                            styleVariant="heroBanner"
                            message={`Call now to remove ticks\nfrom your property.`}
                            buttonText="CALL NOW 1300 842 572"
                            onButtonClick={() => {}}
                            secondaryButtonLink="tel:1300842572"
                        />
                    </div>

                    <VideoEmbed
                        videoId="6sBuN_pRgcs"
                        title="Teenager Jeremy Webb died of meat allergy from tick bites"
                    />

                    <div className="article-top-cta">
                        <CTASection
                            styleVariant="miniBanner"
                            message="Ticks are spreading. Protect your property today."
                            buttonText="Get Free Quote"
                            onButtonClick={handleOpenQuote}
                        />
                    </div>

                    <header className="article-content-header">
                        <h1 className="article-title">NSW teen becomes first Australian to die from tick-induced red meat allergy</h1>
                        <div className="article-meta">
                            <span>Published: March 9, 2026</span>
                            <span className="separator">|</span>
                            <span>Ref: <a href="https://www.abc.net.au/news/2026-02-26/jeremy-webb-first-confirmed-red-meat-tick-allergy-death/106390088" target="_blank" rel="noopener noreferrer">ABC News</a></span>
                        </div>
                    </header>

                    <div className="article-body">
                        <p className="lead-text">
                            A NSW coroner has confirmed the tragic death of 16-year-old Jeremy Webb, marking the first documented case in Australia of a fatality caused by a tick-induced mammalian meat allergy (MMA).
                        </p>

                        <h2>A Landmark Finding</h2>
                        <p>
                            Jeremy Webb, a teenager from the Central Coast, passed away in June 2022 after consuming beef sausages during a camping trip. While his death was initially attributed to asthma, a long-awaited coronial inquest has ruled that an anaphylactic reaction to mammalian meat—triggered by previous tick bites—was the primary cause. {" "}
                            <CTASection
                                styleVariant="inline"
                                message="Protect your family today."
                                buttonText="Get Free Inspection"
                                onButtonClick={handleOpenQuote}
                            />
                        </p>
                        <p>
                            Clinical immunologist Sheryl van Nunen, who posthumously diagnosed Jeremy, emphasized that this is only the second confirmed fatal case of alpha-gal syndrome (MMA) in the world.
                        </p>

                        <VideoEmbed
                            videoId="wC-3B6cg9lw"
                            title="Tick Safety for Summer"
                        />

                        <CTASection
                            styleVariant="card"
                            message="Ticks are spreading across the Central Coast. Protect your property before peak tick season."
                            buttonText="Get Free Tick Inspection"
                            onButtonClick={handleOpenQuote}
                        />

                        <h2>The Hidden Danger of Tick Bites</h2>
                        <p>
                            Mammalian meat allergy, also known as alpha-gal syndrome, is a condition where a person develops a life-threatening allergy to red meat (beef, pork, lamb) and sometimes animal fats. Unlike many other allergies, the reaction often occurs two to ten hours after eating, making it difficult to diagnose.
                        </p>
                        <p>
                            The condition is uniquely linked to tick bites. Research indicates that propelled by clinical experts, even just two tick bites can create a 50% chance of developing the allergy. Australia's east coast, particularly the northern beaches of Sydney and the Central Coast, are global hotspots for this condition.
                        </p>

                        <CTASection
                            styleVariant="banner"
                            message="Don't risk your family's safety. Tick bites can cause serious allergic reactions. Secure your home today."
                            buttonText="PROTECT YOUR HOME NOW"
                            onButtonClick={handleOpenQuote}
                            secondaryButtonText="CALL NOW 1300 842 572"
                            secondaryButtonLink="tel:1300842572"
                        />

                        <h2>Increasing Risks Along the Coast</h2>
                        <p>
                            Cases of mammalian meat allergy have been increasing by 40% annually over the past five years. Experts warn that the Australian paralysis tick is the primary culprit, with its habitat stretching from North Queensland down to Victoria.
                        </p>
                        <p>
                            Jeremy's parents, Myfanwy and Johnathan Webb, hope that by sharing their son's story, they can raise awareness and prevent other families from enduring similar tragedies. "Jeremy continues to make a positive impact by saving lives into the future," his mother shared outside the court.
                        </p>

                        <CTASection
                            styleVariant="sidePop"
                            message="Keep your backyard safe for children and animals. Schedule a treatment."
                            buttonText="Schedule Treatment"
                            onButtonClick={handleOpenQuote}
                        />
                    </div>

                    <div className="article-bottom-cta">
                        <CTASection
                            styleVariant="miniBanner"
                            message="Ready to protect your property from ticks and mosquitoes?"
                            buttonText="Get Free Quote"
                            onButtonClick={handleOpenQuote}
                        />
                    </div>
                </div>
            </article>

            <footer className="article-footer text-center">
                <div className="container">
                    <p className="text-muted">
                        &copy; 2026 Tick Safe & The Mozzie Team. All rights reserved. <br />
                        Original story source: <a href="https://www.abc.net.au/news/2026-02-26/jeremy-webb-first-confirmed-red-meat-tick-allergy-death/106390088" target="_blank" rel="noopener noreferrer">ABC News</a>
                    </p>
                </div>
            </footer>

            <LeadPopUp isOpen={isPopUpOpen} onClose={handleCloseQuote} />
        </main>
    );
}
