import React from 'react';
import { experience, education } from '../data/config';

export default function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="section-title">Experience</h2>
            {experience.map((e) => (
              <div className="timeline-item" key={e.title}>
                <h5 className="fw-bold mb-0">{e.title}</h5>
                <div className="text-muted">{e.org} · {e.date}</div>
                <ul className="mt-2">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">Education</h2>
            {education.map((e) => (
              <div className="timeline-item" key={e.title}>
                <h5 className="fw-bold mb-0">{e.title}</h5>
                <div className="text-muted">{e.org} · {e.date}</div>
                <div className="fw-semibold">{e.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
