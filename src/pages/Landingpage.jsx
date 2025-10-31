import React from 'react';

// Custom component for the feature cards
const FeatureCard = ({ title, content, icon, delay }) => {
  return (
    <div
      className="feature-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

// Custom component for the Call-to-Action banner
const CTASection = ({ title, content }) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-text">{content}</p>
        <button className="cta-button primary-button" onClick={() => console.log('Contact Us Clicked')}>
          Start Your AI Journey Today
        </button>
      </div>
    </section>
  );
};

// Custom component for the Insights/Resources links
const InsightLink = ({ title, description }) => {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); console.log(`${title} clicked`); }}
      className="insight-link"
    >
      <h4 className="insight-title">{title}</h4>
      <p className="insight-description">{description}</p>
    </a>
  );
};


// Main Application Component
const Landingpage = () => {

  const features = [
    {
      title: "Secure, Strategic AI Implementation",
      content: "Tevacraft AI Systems brings proven expertise in developing secure, scalable AI solutions on AWS infrastructure. Our approach to AI is strategic, compliant, and always aligned with your business objectives. With Tevacraft, you can confidently embrace AI's transformative power.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      delay: 0
    },
    {
      title: "Accelerated Development & Deployment",
      content: "In today's competitive landscape, speed matters. Our AI-powered solutions accelerate your project timelines by automating complex processes and optimizing workflows.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
          <line x1="16" y1="16" x2="8" y2="16" />
          <line x1="16" y1="12" x2="8" y2="12" />
          <line x1="12" y1="20" x2="12" y2="20" />
        </svg>
      ),
      delay: 150
    },
    {
      title: "Maximum Efficiency & Cost Optimization",
      content: "Our AI solutions empower your organization to achieve more with less. By automating manual processes, we free your teams to focus on strategic initiatives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l-5.5 9h11L12 2z" />
          <circle cx="12" cy="17" r="5" />
        </svg>
      ),
      delay: 300
    },
    {
      title: "Enterprise-Grade Quality & Reliability",
      content: "You shouldn't compromise quality for innovation. Our AI-powered solutions, built on AWS's robust infrastructure, ensure that your applications perform reliably at scale.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      delay: 450
    },
    {
      title: "Continuously Evolving Intelligence",
      content: "Our solutions grow with your business. By incorporating real-world feedback, our systems become increasingly accurate and efficient over time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.08a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9c2.37 0 4.54-.7 6.32-1.9L22 22M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
        </svg>
      ),
      delay: 600
    },
  ];

  return (
    <div className="tevacraft-app">
      <style>{`
        /* --- Base Styles & Variables --- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');

        :root {
            /* Color Variables */
            --brand-color: #0b5cff; 
            --muted-text: #4b5563;
            --main-bg: #f7f9fb;
            --card-bg: #ffffff;
            --border-radius: 14px;
            
            /* Mapped Variables - UPDATED FOR DARK HERO SECTION */
            --primary-color: var(--brand-color); 
            --secondary-color: #004c99; 
            --text-light: #f0f4f8; /* Light text for dark backgrounds */
            --text-dark: #1f2937;
            --bg-dark: #071a33; /* Dark background for footer/CTA */
            --bg-hero-dark: #4CAF50; /* Black-ish background for Hero */
            --bg-light: var(--card-bg);
            --bg-subtle: var(--main-bg); 
            
            /* Calculated/Derived Styles for Smoothness */
            --brand-hover: #337dff;
            --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.08);
            --shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.03); 
            
            /* New Glow Color for Dark Mode Hero */
            --hero-glow-color: rgba(255, 255, 255, 0.9); /* Bright white/light blue for contrast */
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            /* Default body background remains light for the rest of the page */
            background-color: var(--bg-light); 
            color: var(--text-dark);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        .tevacraft-app {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 0; 
        }

        /* --- Buttons --- */
        .primary-button {
            background-color: var(--primary-color);
            color: var(--text-light); 
            padding: 15px 40px;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: background-color 0.4s, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s;
            box-shadow: 0 6px 15px rgba(11, 92, 255, 0.3);
        }

        .primary-button:hover {
            transform: translateY(-5px);
            background-color: var(--secondary-color);
            box-shadow: 0 12px 30px rgba(11, 92, 255, 0.5);
        }

        /* --- Hero Section (The BEST Animation Zone) --- */
        .hero-section {
            color: var(--text-light);
            padding: 130px 5%; 
            text-align: center;
            position: relative;
            overflow: hidden; 
            animation: fadeIn 1.2s ease-in-out;
            
            /* UPDATED: Black Background */
            background: var(--bg-hero-dark); 
        }
        
        /* 1. "Robot & Tools" Data Flow (::before) - Moving Lines/Data */
        .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1; 
            opacity: 0.7;
            pointer-events: none;
            
            /* UPDATED: White/Light lines on dark background */
            background-image: 
                repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px),
                repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px);
            background-size: 100px 100px, 100px 100px;
            background-position: 0 0, 0 0; 
            
            animation: 
                robotToolsFlow1 30s linear infinite,
                robotToolsFlow2 40s linear reverse infinite;
        }
        
        /* 2. "Teaching Moment" Spotlight/Glow (::after) - Scanning Light */
        .hero-section::after {
            content: '';
            position: absolute;
            top: 50%; 
            left: -20%; 
            width: 40%;
            height: 100%; 
            transform: translateY(-50%) rotate(10deg); 
            
            /* UPDATED: White/Light Blue scanning light on dark background */
            background: linear-gradient(
                to right, 
                transparent, 
                rgba(255, 255, 255, 0.1) 10%, 
                rgba(173, 216, 230, 0.2) 50%, /* Light Blue hint */
                rgba(255, 255, 255, 0.1) 90%, 
                transparent
            );
            filter: blur(80px); /* Increased blur for a softer glow */
            z-index: 2; 
            opacity: 0.8;
            pointer-events: none;
            animation: teachingSpotlight 25s ease-in-out infinite alternate; 
        }

        /* 3. The BEST: "Quantum Pulse" for the Core Idea */
        .hero-section .hero-content::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50px; 
            height: 50px; 
            
            /* UPDATED: Core pulse is bright white on black background */
            background: radial-gradient(circle, var(--hero-glow-color) 0%, transparent 70%);
            
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: 5; /* Below the text, above the glow */
            pointer-events: none;
            animation: quantumPulse 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }


        /* Keyframes for "Robot & Tools" Data Flow */
        @keyframes robotToolsFlow1 {
            0% { background-position: 0 0; }
            100% { background-position: 200px 200px; }
        }
        @keyframes robotToolsFlow2 {
            0% { background-position: 0 0; }
            100% { background-position: -150px 150px; }
        }

        /* Keyframes for "Teaching Moment" Spotlight/Glow */
        @keyframes teachingSpotlight {
            0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; }
            50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 
            100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; }
        }
        
        /* Keyframes for "Quantum Pulse" - The "Aha!" Moment */
        @keyframes quantumPulse {
            0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); }
            50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } /* Slightly stronger glow */
            100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); }
        }


        .hero-content {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 10; 
        }

        .hero-headline {
            font-size: 4.5rem; 
            font-weight: 900;
            margin-bottom: 25px;
            line-height: 1.1;
            /* Optional Text Animation - Fade In + Slight Rise */
            animation: slideInDown 1.5s ease-out; 
        }

        .hero-subheadline {
            font-size: 1.45rem;
            font-weight: 300;
            margin-bottom: 50px;
            opacity: 0.95;
            animation: slideInDown 1.8s ease-out; 
        }

        /* --- Flowing Grid Background (New Element) --- */
        .hero-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0; 
            pointer-events: none;
            opacity: 0.3; 
            
            /* UPDATED: White grid lines on dark background */
            background-image: linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px);
            background-size: 30px 30px, 30px 30px;
            
            /* Grid subtle movement */
            animation: gridFlow 60s linear infinite; 
        }
        
        @keyframes gridFlow {
            0% { background-position: 0 0; }
            100% { background-position: 300px 300px; }
        }


        /* --- Other Sections (Remains Light Mode) --- */
        .features-section {
            background-color: var(--bg-light);
        }

        .section-title {
            font-size: 3rem;
            font-weight: 800;
            color: var(--text-dark);
            text-align: center;
            margin-bottom: 70px; 
            position: relative;
            animation: slideInDown 0.8s ease-out;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 90px; 
            height: 6px; 
            background-color: var(--primary-color);
            margin: 15px auto 0;
            border-radius: 3px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
            gap: 40px; 
        }

        /* --- Feature Card Styling --- */
        @keyframes fadeInRise {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .feature-card {
            background-color: var(--card-bg); 
            border-radius: var(--border-radius);
            padding: 40px; 
            box-shadow: var(--shadow-subtle); 
            transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInRise 0.8s forwards;
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #e0e0e0; 
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-premium);
        }

        .icon-container {
            color: var(--primary-color); 
            width: 65px;
            height: 65px;
            margin-bottom: 20px;
            padding: 8px;
            border-radius: 50%;
            background: rgba(11, 92, 255, 0.1); 
        }

        .icon-container svg {
            width: 100%;
            height: 100%;
        }

        .card-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 15px;
        }

        .card-content {
            font-size: 1rem;
            color: var(--muted-text); 
            flex-grow: 1;
            font-weight: 400; 
        }

        /* --- CTA Section --- */
        .cta-section {
            /* Background color kept dark for high contrast CTA */
            background-color: var(--secondary-color);
            color: var(--text-light);
            padding: 100px 5%; 
            text-align: center;
            animation: fadeIn 1.2s ease-in-out;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-content {
            max-width: 900px;
            margin: 0 auto;
        }

        .cta-title {
            font-size: 2.8rem; 
            font-weight: 700;
            margin-bottom: 25px;
        }

        .cta-text {
            font-size: 1.25rem; 
            margin-bottom: 40px;
            opacity: 0.95;
            font-weight: 300;
        }
        
        .cta-section .primary-button {
            background-color: var(--brand-hover);
            box-shadow: 0 6px 15px rgba(255, 255, 255, 0.3);
        }
        .cta-section .primary-button:hover {
            background-color: var(--primary-color);
            box-shadow: 0 12px 30px rgba(255, 255, 255, 0.5);
        }

        /* --- Insights & Resources Section --- */
        .insights-section {
            background-color: var(--bg-subtle); 
        }

        .insights-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px; 
        }

        .insight-link {
            display: flex;
            flex-direction: column;
            background-color: var(--card-bg); 
            padding: 35px; 
            border-radius: var(--border-radius);
            text-decoration: none;
            color: var(--text-dark);
            box-shadow: var(--shadow-subtle);
            transition: transform 0.4s, box-shadow 0.4s, border-top 0.4s; 
            animation: fadeIn 0.8s ease-in-out;
            border-top: 4px solid transparent; 
        }

        .insight-link:hover {
            transform: translateY(-5px);
            box-shadow: 0 18px 35px rgba(0, 0, 0, 0.1);
            border-top: 4px solid var(--primary-color);
        }

        .insight-title {
            font-size: 1.45rem; 
            color: var(--text-dark);
            margin-bottom: 10px;
            font-weight: 800;
        }

        .insight-description {
            font-size: 1rem;
            color: var(--muted-text); 
            font-weight: 400;
        }

        /* --- Footer --- */
        .footer {
            background-color: var(--bg-hero-dark); /* Using the same dark color as hero */
            color: var(--text-light);
            text-align: center;
            padding: 40px 5%; 
            font-size: 0.95rem;
            border-top: 8px solid var(--primary-color);
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer p {
            opacity: 0.7;
            font-weight: 300;
        }

        /* --- Keyframe Animations (General) --- */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* --- Media Queries (Responsiveness) --- */
        
        /* --- TABLET/SMALL LAPTOP (Up to 1024px) --- */
        @media (max-width: 1024px) {
            .hero-headline {
                font-size: 3.5rem;
            }
            .features-grid {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
                gap: 30px;
            }
            .insights-grid {
                gap: 20px; 
            }
            .cta-title {
                font-size: 2.4rem;
            }
            .cta-text {
                font-size: 1.1rem;
            }
        }

        /* --- MOBILE (Up to 600px) --- */
        @media (max-width: 600px) {
            .container {
                padding: 50px 0;
            }
            .hero-section {
                padding: 80px 5%;
            }
            .hero-headline {
                font-size: 2.2rem;
            }
            .hero-subheadline {
                font-size: 1.1rem;
                margin-bottom: 30px;
            }
            .primary-button {
                padding: 12px 30px;
                font-size: 1rem;
            }
            .section-title {
                font-size: 2.2rem;
                margin-bottom: 40px;
            }
            .features-grid {
                grid-template-columns: 1fr; /* Stack cards vertically */
                gap: 25px;
            }
            .insights-grid {
                grid-template-columns: 1fr; /* Stack insights vertically */
                gap: 25px;
            }
            .cta-section {
                padding: 70px 5%;
            }
            .cta-title {
                font-size: 1.8rem;
            }
            /* Hide complex animation on small mobile screens for performance */
            .hero-section::after, 
            .hero-section::before,
            .hero-grid,
            .hero-content::before {
                display: none; 
            }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid"></div> {/* New Flowing Grid */}
        <div className="hero-content">
          {/* New Quantum Pulse will animate behind this text */}
          <h1 className="hero-headline">
            Transforming Business Through Intelligent AI Solutions
          </h1>
          <p className="hero-subheadline">
            From intelligent automation to custom AI applications, our innovative and reliable AI solutions give you the competitive advantage in today's digital landscape.
          </p>
          <button className="primary-button hero-button" onClick={() => console.log('Partner Clicked')}>
            Partner with Tevacraft
          </button>
        </div>
      </section>

      {/* Why Choose Tevacraft Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Tevacraft AI Systems</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome to Intelligent Business Transformation (CTA-style content) */}
      <CTASection
        title="Welcome to Intelligent Business Transformation"
        content="AI has the power to transform how businesses operate, innovate, and compete – but implementation is complex. The solution? Expert-guided AI development that combines cutting-edge technology with practical business application. Unlock your organization's potential with custom AI solutions designed for your specific industry, use case, and growth objectives."
      />

      {/* Industry Insights & Resources */}
      <section className="insights-section">
        <div className="container">
          <h2 className="section-title">Industry Insights & Resources</h2>
          <div className="insights-grid">
            <InsightLink
              title="The AI Implementation Advantage Report"
              description="Our research reveals that successful AI adoption depends on strategic planning, robust infrastructure, and seamless integration with existing business processes."
            />
            <InsightLink
              title="Building Trust Through Transparent AI"
              description="Learn how businesses are establishing AI governance frameworks and ethical AI practices to build stakeholder confidence and ensure responsible AI deployment."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Tevacraft AI Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;