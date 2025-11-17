import React from 'react';
import '../App.css';

export default function Registration() {
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Registration</h1>
        <p>Secure your spot at ICIET 2025</p>
      </div>
      <div className="page-content">
        <h2>Registration Fees</h2>
        <table className="reg-table">
          <tr><td>Early Bird (Local)</td><td>LKR 15,000</td></tr>
          <tr><td>Regular (Local)</td><td>LKR 18,000</td></tr>
          <tr><td>International</td><td>USD 150</td></tr>
        </table>
        <a href="#" className="btn-primary">Register Now</a>
      </div>
    </div>
  );
}