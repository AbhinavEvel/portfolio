import React, { useState } from 'react';
import { profile } from '../data/config';

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' });
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // No backend needed: opens the visitor's mail app with the message filled in.
  const submit = (e) => {
    e.preventDefault();
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject || 'Project enquiry')}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title text-white">Let's work together</h2>
        <p className="section-sub text-light-soft">Have a project in mind? Tell me about it and I'll reply with timeline and cost.</p>
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="mb-1 text-light-soft">Location</p><h5>{profile.location}</h5><hr />
            <p className="mb-1 text-light-soft">Call / WhatsApp</p><h5><a href={profile.whatsapp} target="_blank" rel="noreferrer">{profile.phone}</a></h5><hr />
            <p className="mb-1 text-light-soft">Email</p><h5><a href={`mailto:${profile.email}`}>{profile.email}</a></h5><hr />
            <div className="d-flex gap-3 hero-social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="col-lg-7">
            <form onSubmit={submit}>
              <div className="row g-3">
                <div className="col-md-6"><input className="form-control" placeholder="Your name" required value={f.name} onChange={on('name')} /></div>
                <div className="col-md-6"><input className="form-control" type="email" placeholder="Your email" required value={f.email} onChange={on('email')} /></div>
                <div className="col-12"><input className="form-control" placeholder="Subject (e.g. Spring Boot API for my app)" value={f.subject} onChange={on('subject')} /></div>
                <div className="col-12"><textarea className="form-control" rows="5" placeholder="Describe your project" required value={f.message} onChange={on('message')}></textarea></div>
                <div className="col-12"><button className="btn btn-primary btn-lg px-5" type="submit">Send Message</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
