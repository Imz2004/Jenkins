import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text-container">
          <span className="subtitle animate-fade-in">New Collection 2026</span>
          <h1 className="title-main animate-fade-in delay-100">
            ELEVATE YOUR<br /><span className="text-accent">EVERYDAY STYLE</span>
          </h1>
          <p className="hero-desc animate-fade-in delay-200">
            Discover our premium selection of contemporary clothing designed for the modern individual. Minimalist aesthetics, maximum comfort.
          </p>
          <div className="hero-actions animate-fade-in delay-300">
            <a href="#shop" className="btn btn-primary">Shop Now</a>
            <a href="#collections" className="btn btn-outline">Explore Collections</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
