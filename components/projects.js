import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const apiUrl = `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/projects`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const limitedProjects = data.data.slice(0, 6);
                setProjects(limitedProjects);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div className="mt-10">
            <h1 className="text-[#ffffff] text-3xl" style={{ fontFamily: 'Kong' }}>Projects</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {projects.map(project => (
                    <div className="p-4" key={project.id}>
                        <h2 className="text-[#ffffff] text-lg">
                            <a href={project.attributes.URL} target='_blank' rel='noreferrer'>{project.attributes.Title}</a>
                        </h2>
                        <p className="text-[#737373]">{project.attributes.Description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
