import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './About.css';


const About = () => {
    const aboutRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    const techStack = [
        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "GSAP", src: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(imageRef.current, {
                x: '-100%',
                opacity: 1
            });

            gsap.set(textRef.current, {
                opacity: 0
            });

            const tl = gsap.timeline({
                delay: 0.3
            });

            tl.to(imageRef.current, {
                x: 0,
                duration: 1.5,
                ease: "power3.out"
            })
                .to(textRef.current, {
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.inOut"
                }, "<");

        }, aboutRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about-section" ref={aboutRef}>
            <div className="video-background">
                <iframe
                    src="https://www.youtube.com/embed/tJgDYjrDLMA?start=13&autoplay=1&mute=1&loop=1&playlist=tJgDYjrDLMA&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="background-iframe"
                ></iframe>
            </div>
            <div className="about-container">
                <div className="about-text" ref={textRef}>
                    <h2>About Me</h2>
                    <p>
                        Hey! I'm <span className="about-name">Serdar Süheyl</span>, a junior frontend developer based in Denizli, Turkey.
                        I'm passionate about creating engaging and user-friendly websites.
                        I'm always learning new technologies and techniques to improve my skills.


                    </p>
                    <p>
                        Currently, I'm focusing on React and GSAP, working on adding life to static
                        pages through animations.
                    </p>
                </div>

                <div className="about-image-wrapper" ref={imageRef}>
                    <img src="./profil2.jpeg" alt="Profile" className="profile-pic" />
                </div>
            </div>

            <div className="tech-slider">
                <div className="slider-track">
                    {[...techStack, ...techStack].map((tech, index) => (
                        <div className="slide" key={index}>
                            <img src={tech.src} alt={tech.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;