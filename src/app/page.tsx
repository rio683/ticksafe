'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import NewsAlert from '@/components/NewsAlert';
import Services from '@/components/Services';
import TrustIndicators from '@/components/TrustIndicators';
import LeadPopUp from '@/components/LeadPopUp';

export default function Home() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenQuote = () => setIsPopUpOpen(true);
  const handleCloseQuote = () => setIsPopUpOpen(false);

  return (
    <main>
      <Hero onOpenQuote={handleOpenQuote} />
      <NewsAlert onOpenQuote={handleOpenQuote} />
      <Services onOpenQuote={handleOpenQuote} />
      <TrustIndicators />

      {/* Footer minimal for a landing page */}
      <footer className="bg-light text-center" style={{ padding: '2rem', borderTop: '1px solid var(--color-border)' }}>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Tick Safe & The Mozzie Team. All rights reserved. <br />
          Serving Northern Sydney. Since 2015
        </p>
      </footer>

      <LeadPopUp isOpen={isPopUpOpen} onClose={handleCloseQuote} />
    </main>
  );
}
