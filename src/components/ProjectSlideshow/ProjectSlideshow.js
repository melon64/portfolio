import React, { useState, useEffect } from 'react';
import './ProjectSlideshow.css';

function ProjectSlideshow() {
    const [projects, setProjects] = useState([]);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Failed to load projects:', error));
    }, []);

    const changeProject = (index) => {
        setFade(false);

        setTimeout(() => {
            setCurrentProjectIndex(index);
            setFade(true);
        }, 500); // Transition delay
    };

    return (
        <div className="project-slideshow-container">
            <div className="project-sidebar">
                {projects.map((project, index) => (
                    <button key={index}
                            className={`sidebar-button ${index === currentProjectIndex ? 'active' : ''}`}
                            onClick={() => changeProject(index)}>
                        {project.title}
                    </button>
                ))}
            </div>
            <div className="project-slideshow">
                {projects.length > 0 ? (
                    <>
                        <h2 className="project-title">
                            <a href={projects[currentProjectIndex].link} target="_blank" rel="noopener noreferrer">
                                {projects[currentProjectIndex].title}
                            </a>
                        </h2>
                        <p className="project-description">{projects[currentProjectIndex].description}</p>
                        {
                            projects[currentProjectIndex].imageUrl.includes('youtube') ?
                            <iframe 
                                width="560" 
                                height="400" 
                                src={projects[currentProjectIndex].imageUrl} 
                                title={projects[currentProjectIndex].title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                                className={`project-video ${fade ? 'fade-in' : 'fade-out'}`}
                            /> :
                            <img 
                                src={projects[currentProjectIndex].imageUrl} 
                                alt={projects[currentProjectIndex].title} 
                                className={`project-image ${fade ? 'fade-in' : 'fade-out'}`}
                            />
                        }
                        <div className="button-container">
                            <button className="project-button" onClick={() => changeProject((currentProjectIndex - 1 + projects.length) % projects.length)}>Previous</button>
                            <button className="project-button" onClick={() => changeProject((currentProjectIndex + 1) % projects.length)}>Next</button>
                        </div>
                    </>
                ) : <div>Loading...</div>}
            </div>
        </div>
    );
}

export default ProjectSlideshow;
