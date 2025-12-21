import React, { useState, useRef } from 'react';
import './Projects.css';


const projectsData = [
    { id: 1, title: 'Project One' },
    { id: 2, title: 'Project Two' },
    { id: 3, title: 'Project Three' },
    { id: 4, title: 'Project Four' },
    { id: 5, title: 'Project Five' },
    { id: 6, title: 'Project Six' },
    { id: 7, title: 'Project Seven' },
    { id: 8, title: 'Project Eight' },
    { id: 9, title: 'Project Nine' },
    { id: 10, title: 'Project Ten' },
    { id: 11, title: 'Project Eleven' },
    { id: 12, title: 'Project Twelve' },
    { id: 13, title: 'Project Thirteen' },
    { id: 14, title: 'Project Fourteen' },
    { id: 15, title: 'Project Fifteen' },
    { id: 16, title: 'Project Sixteen' },
    { id: 17, title: 'Project Seventeen' },
    { id: 18, title: 'Project Eighteen' },
];

const Projects = () => {
    const PROJECTS_PER_LOAD = 3; // 1 row × 3 columns = 3 projects
    const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD);
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const sectionRef = useRef(null);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + PROJECTS_PER_LOAD, projectsData.length));
    };

    const showLess = () => {
        // Smooth scroll to the projects section
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Delay the state update slightly to allow scroll to complete
        setTimeout(() => {
            setVisibleCount(PROJECTS_PER_LOAD);
        }, 300);
    };

    const handleProjectClick = (projectId) => {
        if (projectId >= 1 && projectId <= 6) {
            setCurrentProject(projectId);
            setShowModal(true);
        }
    };

    const getProjectUrl = (projectId) => {
        const projectUrls = {
            1: '/SignUp--LogIn page/index.html',
            2: '/js2/calculator.html',
            3: '/js2/clock.html',
            4: '/js2/rpc.html',
            5: '/js2/stopwatch.html',
            6: '/js2/temp.html'
        };
        return projectUrls[projectId] || '';
    };

    const visibleProjects = projectsData.slice(0, visibleCount);
    const hasMore = visibleCount < projectsData.length;
    const canShowLess = visibleCount > PROJECTS_PER_LOAD;

    return (
        <section className="projects-section" id="projects" ref={sectionRef}>
            <div className="projects-container">
                <div className="projects-header">
                    <h2>Selected Works</h2>
                    <p>Explore my projects</p>
                </div>

                <div className="projects-grid">
                    {visibleProjects.map((project) => (
                        <div
                            className={`project-card ${project.id >= 1 && project.id <= 6 ? 'project-card-with-image' : ''}`}
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                            style={{
                                cursor: project.id >= 1 && project.id <= 6 ? 'pointer' : 'default',
                                backgroundImage: project.id >= 1 && project.id <= 6 ? `url(/proje-${project.id}.png)` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="card-content">
                                <span className="project-number">{project.id < 10 ? `0${project.id}` : project.id}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Projects */}
                {showModal && currentProject && (
                    <div className="project-modal" onClick={() => setShowModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setShowModal(false)}>
                                &times;
                            </button>
                            <iframe
                                src={getProjectUrl(currentProject)}
                                title={`Project ${currentProject}`}
                                className="modal-iframe"
                            />
                        </div>
                    </div>
                )}

                <div className="projects-buttons">
                    {hasMore && (
                        <button className="load-more-btn" onClick={loadMore}>
                            Daha Fazla Göster
                        </button>
                    )}
                    {canShowLess && (
                        <button className="show-less-btn" onClick={showLess}>
                            Daha Az Göster
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;