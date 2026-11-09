import React from 'react';

export default function About() {
  const stats = [['3', 'Projects built'], ['6 mo', 'Internship experience'], ['9', 'Tables in RaktSetu DB'], ['PGCP-AC', 'C-DAC Noida']];
  return (
    <section className="section alt" id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <h2 className="section-title">About me</h2>
            <p>I'm a B.Tech (CSE) graduate and C-DAC PGCP-AC trained Java full-stack developer. I build Spring Boot REST APIs, JWT-secured backends and microservices, and connect them to React.js frontends and SQL databases.</p>
            <p>I'm strong in Java, OOP, data structures and debugging across the frontend/backend boundary — and I'm taking on freelance work: APIs, full-stack web apps, authentication and database design.</p>
          </div>
          <div className="col-lg-5">
            <div className="row g-3">
              {stats.map(([n, l]) => (
                <div className="col-6" key={l}><div className="stat"><div className="num">{n}</div><div>{l}</div></div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
