import React from 'react';
import { profile } from '../data/config';

export default function Footer() {
  return (
    <footer className="site-footer text-center">
      <p className="mb-0">© {new Date().getFullYear()} {profile.name} · {profile.role}</p>
    </footer>
  );
}
