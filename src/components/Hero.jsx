import React, { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [glitchText, setGlitchText] = useState('Samir');
  const [stats, setStats] = useState({ techs: 0, internships: 0, drafts: 0 });
  const heroRef = useRef(null);

  // 1. Text Glitch Effect Logic
  const doGlitch = () => {
    const chars = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMN';
    const original = 'Samir';
    let iterations = 0;
    
    const interval = setInterval(() => {
      setGlitchText(
        original.split('').map((char, index) => {
          if (index < iterations) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      if (iterations >= original.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 40);
  };

  useEffect(() => {
    // Run glitch periodically
    const glitchInterval = setInterval(doGlitch, 6000);

    // 2. Count-Up Stats Animation via Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 1500;
        const intervalTime = 16;
        const steps = duration / intervalTime;
        
        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          setStats({
            techs: Math.min(Math.floor((6 / steps) * currentStep), 6),
            internships: Math.min(Math.floor((1 / steps) * currentStep), 1),
            drafts: Math.min(Math.floor((3 / steps) * currentStep), 3),
          });
          if (currentStep >= steps) clearInterval(timer);
        }, intervalTime);

        observer.unobserve(heroRef.current);
      }
    }, { threshold: 0.5 });

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      clearInterval(glitchInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 4rem', position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
        <div className="hero-badge" style={{ color: 'var(--cyan)', fontFamily: 'monospace', marginBottom: '2rem' }}>
          <span className="badge-dot"></span> Open to internships & collaboration
        </div>
        <h1 style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', fontWeight: 700, lineHeight: 0.95, marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', color: 'var(--text)' }} onMouseEnter={doGlitch}>{glitchText}</span>
          <span style={{ display: 'block', WebkitTextStroke: '1px var(--cyan)', color: 'transparent' }}>Parajuli</span>
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '3rem' }}>
          <strong>BIT Student</strong> at MIT Bagbazar, Kathmandu. Building clean software structures.
        </p>
        <div style={{ display: 'flex', gap: '3rem' }}>
          <div><div style={{ fontSize: '2rem', color: 'var(--cyan)', fontFamily: 'monospace' }}>{stats.techs}+</div><small>Core Techs</small></div>
          <div><div style={{ fontSize: '2rem', color: 'var(--cyan)', fontFamily: 'monospace' }}>{stats.internships}</div><small>Internship</small></div>
          <div><div style={{ fontSize: '2rem', color: 'var(--cyan)', fontFamily: 'monospace' }}>{stats.drafts}+</div><small>Live Drafts</small></div>
        </div>
      </div>
    </section>
  );
}