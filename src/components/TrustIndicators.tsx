import React from 'react';
import './TrustIndicators.css';
import { Leaf, Award, ShieldCheck, HeartPulse } from 'lucide-react';

export default function TrustIndicators() {
    const features = [
        {
            icon: <Leaf size={32} />,
            title: 'Water Based & Bio-degradable',
            desc: 'Our synthetic pyrethroids are diluted with water and less toxic than many ordinary household products.'
        },
        {
            icon: <HeartPulse size={32} />,
            title: 'Low Toxicity',
            desc: 'The product we use is so safe that the WHO has approved its base formula for use in human drinking water.'
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'Fully Approved',
            desc: 'Registered by the APVMA for controlling ticks and mosquitoes in homes, schools, and gardens.'
        },
        {
            icon: <Award size={32} />,
            title: 'Featured on Channel 9',
            desc: 'Recognized statewide for our expert approach to residential pest management.'
        }
    ];

    return (
        <section className="section trust-section">
            <div className="container">
                <div className="trust-grid">
                    {features.map((feature, idx) => (
                        <div key={idx} className="trust-item">
                            <div className="trust-icon text-primary">{feature.icon}</div>
                            <div>
                                <h4 className="trust-title">{feature.title}</h4>
                                <p className="trust-desc">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
