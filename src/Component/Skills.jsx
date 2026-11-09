import React from 'react';
import { skillGroups } from '../data/config';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Java at the core, with the frontend and database skills to ship a complete product.</p>
        <div className="row g-4">
          {skillGroups.map((g) => (
            <div className="col-md-6" key={g.title}>
              <div className="card-x h-100">
                <h5 className="fw-bold mb-3">{g.title}</h5>
                <div className="tags">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
