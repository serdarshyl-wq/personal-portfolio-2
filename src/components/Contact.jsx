import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.from(".line", {
                y: 70,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            })
                .from(".contact-details", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.5");

        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="contact-section" id="contact" ref={contactRef}>
            <div className="contact-container">
                <h2 className="cascading-title" ref={textRef}>
                    <span className="line line-1">Let's</span>
                    <span className="line line-2">create</span>
                    <span className="line line-3">something.</span>
                </h2>

                <div className="contact-details">
                    <a href="mailto:serdar.shyl@gmail.com" className="email-link">
                        serdar.shyl@gmail.com
                    </a>

                    <div className="social-icons">

                        <a href="https://www.instagram.com/serdar.shyl.yildiz/" target="_blank" rel="noreferrer" className="icon-link instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/serdar-s%C3%BCheyl-yildiz-215829385/" target="_blank" rel="noreferrer" className="icon-link linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/serdarshyl-wq" target="_blank" rel="noreferrer" className="icon-link github">
                            <i className="fa-brands fa-github"></i>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;