import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup immediately when component mounts
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDiscover = () => {
        setIsOpen(false);
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={handleClose}>
                    &times;
                </button>
                <h2 className="popup-title">Fırsatı Kaçırma!</h2>
                <p className="popup-message">
                    31 Ocak 2026'ya kadar bütün projelerde <strong>%25 indirim</strong> var!
                </p>
                <button className="popup-button" onClick={handleDiscover}>
                    Keşfet
                </button>
            </div>
        </div>
    );
};

export default Popup;
