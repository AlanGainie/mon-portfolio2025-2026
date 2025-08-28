import React, { useState, useEffect } from 'react';
import { BUTTONCARROUSELLE, BUTTONCARROUSELLEARROWLEFT, BUTTONCARROUSELLEARROWRIGHT, GLOBALCARROUSELLE, SLIDECARROUSELLE } from '../../styles/tw';

interface CarrouselProps {
    slides: React.ReactNode[];
    captions?: string[];
    autoScroll?: boolean;
    interval?: number;
}

const Carrousel: React.FC<CarrouselProps> = ({
    slides,
    captions = [],
    autoScroll = true,
    interval = 3000,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = slides.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (!autoScroll || totalSlides <= 1) return;

        const timer = setInterval(goToNext, interval);
        return () => clearInterval(timer);
    }, [currentIndex, autoScroll, interval, totalSlides]);

    if (totalSlides === 0) {
        return (
            <div className="text-center text-gray-500 py-8">
                Aucun contenu à afficher.
            </div>
        );
    }

    return (
        <div className={`${GLOBALCARROUSELLE}`}>
            <div className={`${SLIDECARROUSELLE}`}>
                {slides[currentIndex]}
            </div>

            {captions.length > currentIndex && (
                <div className="absolute top-0 left-0 w-full bg-black bg-opacity-70 text-white p-3 text-center text-lg font-semibold backdrop-blur-sm pointer-events-none">
                    {captions[currentIndex]}
                </div>
            )}

            {/* Flèche gauche */}
            <button
                onClick={goToPrevious}
                className={BUTTONCARROUSELLEARROWLEFT}
                aria-label="Slide précédente"
            >
                ◀
            </button>

            {/* Flèche droite */}
            <button
                onClick={goToNext}
                className={BUTTONCARROUSELLEARROWRIGHT}
                aria-label="Slide suivante"
            >
                ▶
            </button>
        </div>
    );
};

export default Carrousel;
