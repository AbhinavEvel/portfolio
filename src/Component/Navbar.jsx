import React from 'react';
import { profile } from '../data/config';

const links = [['home', 'Home'], ['services', 'Services'], ['projects', 'Projects'], ['skills', 'Skills'], ['experience', 'Experience'], ['contact', 'Contact']];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top site-nav">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">AS<span className="dot">.</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {links.map(([id, label]) => (
              <li className="nav-item" key={id}><a className="nav-link" href={`#${id}`}>{label}</a></li>
            ))}
            <li className="nav-item ms-lg-2"><a className="btn btn-outline-primary btn-sm px-3" href={profile.cv} target="_blank" rel="noreferrer" download>Download CV</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
