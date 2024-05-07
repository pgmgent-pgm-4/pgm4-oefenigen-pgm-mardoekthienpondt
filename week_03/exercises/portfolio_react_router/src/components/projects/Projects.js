import React from 'react';

export default function Projects() {
  const PROJECTS = [
    {
      title: 'Hearthstone',
      slug: 'hearthstone',
      description: 'This is the first project',
      thumbnail: 'images/hearthstone.jpg',
    },
    {
      title: 'Studio Clean',
      slug: 'studio-clean',
      description: 'This is the second project',
      thumbnail: 'images/studio-clean.png',
    },
  ];
  return (
    <div>
      <ul className="projects-list">
        {PROJECTS.map((project, index) => (
          <a href={`./projects/${project.slug}`}>
            <li key={index}>
              <div className="card__top">
                <img src={project.thumbnail} alt={project.title} />
              </div>
              <div className="card__bottom">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
