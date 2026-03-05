import React from 'react';
import './Services.css';
import { Bug, Droplets, PartyPopper } from 'lucide-react';

export default function Services({ onOpenQuote }: { onOpenQuote: () => void }) {
    const services = [
        {
            title: 'Expert Tick Control',
            icon: <Bug size={40} className="service-icon" />,
            description: 'Our Gold Standard service targets and eliminates deadly paralysis and red meat allergy ticks. Protect your children and pets so they can play safely outdoors.',
            highlight: true
        },
        {
            title: 'Mosquito Eradication',
            icon: <Droplets size={40} className="service-icon text-secondary" />,
            description: 'Mosquitoes are worse than just annoying—they carry diseases. Our low-toxicity treatments reclaim your yard from these pests.',
            highlight: false
        },
        {
            title: 'Special Event Treatments',
            icon: <PartyPopper size={40} className="service-icon text-primary" />,
            description: 'Planning an outdoor wedding or party? Ensure your guests remember the event, not the bug bites, with our targeted pre-event sprays.',
            highlight: false
        }
    ];

    return (
        <section className="section services-section bg-light" id="services">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">We Get Rid of Ticks & Mozzies</h2>
                    <p className="section-subtitle">
                        Don't risk it. Our proven solutions are safe for your family and tough on pests.
                    </p>
                </div>

                <div className="mb-12 text-center" style={{ marginBottom: '3rem' }}>
                    <img
                        src="/Mask-Group-12.jpg"
                        alt="TickSafe Service Team"
                        style={{ borderRadius: '16px', maxWidth: '100%', height: 'auto', boxShadow: 'var(--shadow-md)', margin: '0 auto' }}
                    />
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className={`service-card ${service.highlight ? 'service-highlight' : ''}`}>
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-xl">
                    <button onClick={onOpenQuote} className="btn btn-primary">
                        Request a Free Assessment
                    </button>
                </div>
            </div>
        </section >
    );
}
