import React from 'react';
import './NewsAlert.css';
import { AlertOctagon, ExternalLink } from 'lucide-react';

export default function NewsAlert({ onOpenQuote }: { onOpenQuote: () => void }) {
    return (
        <section className="news-alert-section">
            <div className="container">
                <div className="alert-card glass-panel flex-col md:flex-row align-center">
                    <div className="alert-icon-container">
                        <AlertOctagon size={48} className="text-danger bounce-subtle" />
                    </div>

                    <div className="alert-content">
                        <h2 className="alert-heading text-danger">URGENT: Tragic Incident on the Central Coast</h2>
                        <p className="alert-text">
                            Recently, a 16-year-old boy from the Central Coast tragically became the first confirmed Australian to pass away from a <strong>tick-induced red meat allergy (alpha-gal syndrome)</strong>.
                            The coroner confirmed the allergy was triggered by repeated tick bites in the local bushland.
                        </p>
                        <p className="alert-text">
                            Don't leave your family exposed to these preventable dangers in your own backyard.
                        </p>

                        <div className="alert-actions mt-4">
                            <button onClick={onOpenQuote} className="btn btn-danger mr-sm">
                                Secure Your Property Today
                            </button>
                            <a
                                href="https://www.abc.net.au/news/2026-02-26/jeremy-webb-first-confirmed-red-meat-tick-allergy-death/106390088"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-link mt-2 md:mt-0 flex-center"
                            >
                                Read the ABC News Article <ExternalLink size={16} className="ml-xs" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
