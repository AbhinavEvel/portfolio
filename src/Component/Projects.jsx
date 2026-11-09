import React from 'react';
import { projects } from '../data/config';

export default function Projects() {
  return (
    <section className="section alt" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Real work you can open, click through and read the code for.</p>
        <div className="row g-4">
          {projects.map((p) => (
            <div className={p.featured ? 'col-12' : 'col-md-6'} key={p.title}>
              <div className={`project card-x p-0 overflow-hidden h-100 ${p.featured ? 'featured' : ''}`}>
                <div className="row g-0 h-100">
                  <div className={p.featured ? 'col-lg-6' : 'col-12'}>
                    <img className="project-img" src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className={p.featured ? 'col-lg-6' : 'col-12'}>
                    <div className="p-4">
                      {p.featured && <span className="badge text-bg-danger mb-2">Featured · Live</span>}
                      <h4 className="fw-bold">{p.title}</h4>
                      <p>{p.text}</p>
                      <div className="tags mb-3">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                      <div className="d-flex flex-wrap gap-2">
                        {p.live && <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt me-1"></i> Live Demo</a>}
                        {p.github && <a className="btn btn-outline-dark btn-sm" href={p.github} target="_blank" rel="noreferrer"><i className="fab fa-github me-1"></i> Source Code</a>}
                        {p.post && <a className="btn btn-outline-primary btn-sm" href={p.post} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in me-1"></i> LinkedIn Post</a>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
