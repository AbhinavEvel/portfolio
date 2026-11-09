import React from 'react';
import { profile } from '../data/config';

export default function Home() {
  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="badge-pill"><span className="pulse"></span> Available for freelance projects</span>
            <h1 className="display-4 fw-bold mt-3">Hi, I'm <span className="grad">{profile.name}</span></h1>
            <h2 className="h3 text-light-soft mb-3">{profile.role}</h2>
            <p className="lead text-light-soft">{profile.headline}</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a className="btn btn-primary btn-lg px-4" href="#contact">Hire Me</a>
              <a className="btn btn-outline-light btn-lg px-4" href="#projects">View Projects</a>
              <a className="btn btn-outline-light btn-lg px-4" href={profile.cv} target="_blank" rel="noreferrer" download>Download CV</a>
            </div>
            <div className="d-flex gap-3 mt-4 hero-social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="code-card">
              <div className="code-dots"><span></span><span></span><span></span></div>
              <pre><code>{`@RestController
@RequestMapping("/api/requests")
public class BloodRequestController {

  @PreAuthorize("hasRole('PATIENT')")
  @PostMapping
  public ResponseEntity<?> create(
      @Valid @RequestBody RequestDto dto) {
    return ResponseEntity.ok(service.create(dto));
  }
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
