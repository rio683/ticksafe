import React from 'react';
import './VideoEmbed.css';

interface VideoEmbedProps {
    videoId: string;
    title?: string;
}

export default function VideoEmbed({ videoId, title }: VideoEmbedProps) {
    return (
        <div className="video-embed-container">
            <div className="video-responsive">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title || "YouTube video player"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
