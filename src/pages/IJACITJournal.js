// src/pages/IJACITJournal.js
import React from 'react';
import '../App.css';

export default function IJACITJournal() {
  return (
    <div className="journal-page">
      <div className="journal-hero">
        <h1>IJACIT JOURNAL</h1>
        <p className="breadcrumb">HOME > IJACIT JOURNAL</p>
      </div>

      <div className="journal-content">
        <div className="journal-card glass-effect">
          <h2>International Journal of Advanced Computing and Information Technology</h2>
          <p className="issn">ISSN: 0000-0000 (Online)</p>
          
          <div className="journal-info">
            <p><strong>Publisher:</strong> NIBM School of Computing</p>
            <p><strong>Frequency:</strong> Biannual (June & December)</p>
            <p><strong>Scope:</strong> AI, Data Science, Cybersecurity, Software Engineering, IoT</p>
          </div>

          <div className="journal-actions">
            <a href="https://journal.nibm.lk" target="_blank" rel="noopener" className="journal-btn primary">
              Visit Journal Website
            </a>
            <a href="/downloads/cfp-ijacit.pdf" className="journal-btn secondary">
              Call for Papers
            </a>
          </div>

          <div className="latest-issue">
            <h3>Latest Issue: Volume 3, Issue 1 (June 2025)</h3>
            <ul>
              <li><a href="#">AI-Driven Healthcare Systems</a></li>
              <li><a href="#">Blockchain in Supply Chain</a></li>
              <li><a href="#">Quantum Computing Applications</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}