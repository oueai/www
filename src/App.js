import React, { useState, useRef } from 'react';
import './App.css';
// import oueLogo from './oue_logo.png'

const App = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' or 'error'
  const newsletterRef = useRef(null);

  // Scroll to the newsletter section
  const scrollToNewsletter = () => {
    if (newsletterRef.current) {
      newsletterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Netlify will handle the actual submission
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <h1 className="logo">OUE.AI</h1>
        {/* <img src={oueLogo} alt="OUE.AI Logo" className="logo-img" /> */}
        <button className="header-btn" onClick={scrollToNewsletter}>
          Join the Revolution
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">
          AI-Driven Educational And Entrepreneurial Advice<br />
          Powered by Emotional Intelligence
        </h2>
        <p className="hero-subtitle">
          Join our pilot: real-time, values-aligned guidance at no cost.
        </p>
        <button className="cta-btn" onClick={scrollToNewsletter}>
          Try Free Advice Now
        </button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>Revolutionary AI Incubator & Consulting</h3>
          <p>
            Empowering innovators and organizations with AI-driven software
            development, strategic consulting, and entrepreneurial acceleration.
          </p>
        </div>
        <div className="feature">
          <h3>Seamless Memory</h3>
          <p>
            Capture every moment and optimize your performance with future-proof
            technology.
          </p>
        </div>
        <div className="feature">
          <h3>Optimized for Success</h3>
          <p>
            Engineered to enhance productivity and elevate human potential to new
            heights.
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section ref={newsletterRef} className="newsletter">
        <h3>Stay Ahead of the Future</h3>
        <p>Subscribe for exclusive updates on our stealth AI technology.</p>
        <form
          name="subscribe"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubscribe}
          className="subscribe-form"
        >
          <input type="hidden" name="form-name" value="subscribe" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
        {status === 'success' && (
          <p className="success-msg">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="error-msg">Subscription failed. Please try again.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023-2025 oue.ai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
