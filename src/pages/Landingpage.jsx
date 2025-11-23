import React from 'react';

// Custom component for the feature cards
function FeatureCard({ title, content, icon, delay }) {
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
}

// Custom component for the Call-to-Action banner
const CTASection = ({ title, content }) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-text">{content}</p>
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

// Healthcare Section
const HealthcareSection = () => {
    return (
        <section className="healthcare-section">
            <div className="container healthcare-container">
                <div className="healthcare-image-wrapper">
                    <img 
                        src="./asset/health.png" 
                        alt="Healthcare AI Analysis" 
                        className="healthcare-real-image"
                    />
                </div>
                <div className="healthcare-content">
                    <p className="healthcare-tagline">Tevacraft AI Systems - Healthcare AI Solutions</p>
                    <h2 className="healthcare-title">
                        Smarter, Safer, and More Ethical Intelligence for Modern Healthcare
                    </h2>
                    <p className="healthcare-description">
                        We develop cutting-edge AI solutions for the healthcare industry, focusing on diagnostic precision, operational efficiency, and patient data security. Our systems help clinicians make better decisions, accelerate drug discovery, and optimize hospital management, all while maintaining strict compliance with regulations like HIPAA.
                    </p>
                    <a href="/healthcare" className="primary-button healthcare-button" >
                        Healthcare AI Solutions
                    </a>
                </div>
            </div>
        </section>
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
            
            /* Mapped Variables */
            --primary-color: var(--brand-color); 
            --secondary-color: #004c99; 
            --text-light: #f0f4f8; 
            --text-dark: #1f2937;
            --bg-dark: #071a33; 
            --bg-hero-dark: #020b1f; 
            --bg-light: var(--card-bg);
            --bg-subtle: var(--main-bg); 
            
            /* Calculated/Derived Styles */
            --brand-hover: #337dff;
            --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.08);
            --shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.03); 
            
            --hero-glow-color: rgba(255, 255, 255, 0.9); 
            
            /* Healthcare Section Colors */
            --healthcare-accent: #4CAF50; 
            --healthcare-bg: #ffffffff; 
            --healthcare-title-color: #2a7a2dff;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-light); 
            color: var(--text-dark);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        .tevacraft-app { display: flex; flex-direction: column; min-height: 100vh; }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 80px 0; }

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
            text-decoration: none; 
            display: inline-block; 
        }
        .primary-button:hover {
            transform: translateY(-5px);
            background-color: var(--secondary-color);
            box-shadow: 0 12px 30px rgba(11, 92, 255, 0.5);
        }
        
        .healthcare-button { background-color: var(--healthcare-accent); box-shadow: 0 6px 15px rgba(0, 163, 137, 0.4); }
        .healthcare-button:hover { background-color: #00735E; box-shadow: 0 12px 30px rgba(0, 163, 137, 0.6); }

        /* --- Hero Section --- */
        .hero-section {
            color: var(--text-light);
            padding: 130px 5%; 
            text-align: center;
            position: relative;
            overflow: hidden; 
            animation: fadeIn 1.2s ease-in-out;
            background: linear-gradient(135deg, #020b1f 0%, #004c99 60%, #0b5cff 100%);
        }
        
        /* Overlay Animations */
        .hero-section::before {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; opacity: 0.7; pointer-events: none;
            background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px);
            background-size: 100px 100px, 100px 100px; background-position: 0 0, 0 0; 
            animation: robotToolsFlow1 30s linear infinite, robotToolsFlow2 40s linear reverse infinite;
        }
        .hero-section::after {
            content: ''; position: absolute; top: 50%; left: -20%; width: 40%; height: 100%; transform: translateY(-50%) rotate(10deg); 
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 10%, rgba(173, 216, 230, 0.2) 50%, rgba(255, 255, 255, 0.1) 90%, transparent);
            filter: blur(80px); z-index: 2; opacity: 0.8; pointer-events: none; animation: teachingSpotlight 25s ease-in-out infinite alternate; 
        }
        .hero-section .hero-content::before {
            content: ''; position: absolute; top: 50%; left: 50%; width: 50px; height: 50px; 
            background: radial-gradient(circle, var(--hero-glow-color) 0%, transparent 70%); border-radius: 50%; transform: translate(-50%, -50%); z-index: 5; pointer-events: none; animation: quantumPulse 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        /* Keyframes */
        @keyframes robotToolsFlow1 { 0% { background-position: 0 0; } 100% { background-position: 200px 200px; } }
        @keyframes robotToolsFlow2 { 0% { background-position: 0 0; } 100% { background-position: -150px 150px; } }
        @keyframes teachingSpotlight { 0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } 50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } }
        @keyframes quantumPulse { 0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); } 50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gridFlow { 0% { background-position: 0 0; } 100% { background-position: 300px 300px; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .hero-content { max-width: 900px; margin: 0 auto; position: relative; z-index: 10; }
        .hero-headline { font-size: 4.5rem; font-weight: 900; margin-bottom: 25px; line-height: 1.1; animation: slideInDown 1.5s ease-out; }
        .hero-subheadline { font-size: 1.45rem; font-weight: 300; margin-bottom: 50px; opacity: 0.95; animation: slideInDown 1.8s ease-out; }
        
        .hero-grid {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.3; 
            background-image: linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px);
            background-size: 30px 30px, 30px 30px; animation: gridFlow 60s linear infinite; 
        }

        /* --- Features Section --- */
        .features-section { background-color: var(--bg-light); }
        .section-title { font-size: 3rem; font-weight: 800; color: var(--text-dark); text-align: center; margin-bottom: 70px; position: relative; animation: slideInDown 0.8s ease-out; }
        .section-title::after { content: ''; display: block; width: 90px; height: 6px; background-color: var(--primary-color); margin: 15px auto 0; border-radius: 3px; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; }

        @keyframes fadeInRise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        .feature-card {
            background-color: var(--card-bg); border-radius: var(--border-radius); padding: 40px; box-shadow: var(--shadow-subtle); 
            transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            opacity: 0; transform: translateY(30px); animation: fadeInRise 0.8s forwards; animation-delay: var(--delay);
            height: 100%; display: flex; flex-direction: column; border: 1px solid #e0e0e0; position: relative; overflow: hidden; z-index: 1;
        }
        .feature-card::before { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; background-color: var(--brand-color); transition: height 0.4s ease-in-out; z-index: -1; }
        .feature-card:hover::before { height: 100%; }
        .feature-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-premium); border-color: transparent; }
        .feature-card:hover .card-title, .feature-card:hover .card-content { color: #ffffff; transition: color 0.3s ease; }
        .icon-container { color: var(--primary-color); width: 65px; height: 65px; margin-bottom: 20px; padding: 8px; border-radius: 50%; background: rgba(11, 92, 255, 0.1); transition: all 0.3s ease; }
        .feature-card:hover .icon-container { background: rgba(255, 255, 255, 0.2); color: #ffffff; }
        .icon-container svg { width: 100%; height: 100%; }
        .card-title { font-size: 1.6rem; font-weight: 700; color: var(--text-dark); margin-bottom: 15px; position: relative; z-index: 2; }
        .card-content { font-size: 1rem; color: var(--muted-text); flex-grow: 1; font-weight: 400; position: relative; z-index: 2; }
        
        /* --- Healthcare Section Styles --- */
        .healthcare-section { background-color: var(--healthcare-bg); padding: 100px 5%; border-top: 1px solid #0f8946ff; border-bottom: none; }
        .healthcare-container { display: flex; align-items: center; gap: 60px; padding: 0; }
        .healthcare-image-wrapper { flex: 1; display: flex; justify-content: center; align-items: center; position: relative; }
        .healthcare-real-image { width: 100%; max-width: 500px; height: auto; border-radius: var(--border-radius); box-shadow: var(--shadow-premium); border: 5px solid var(--healthcare-accent); transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .healthcare-real-image:hover { transform: scale(1.03); }
        .healthcare-content { flex: 1; padding: 20px 0; animation: fadeIn 1.2s ease-in-out 0.3s forwards; opacity: 0; }
        .healthcare-tagline { font-size: 0.95rem; font-weight: 700; color: var(--healthcare-accent); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; }
        .healthcare-title { font-size: 2.8rem; font-weight: 800; color: var(--healthcare-title-color); margin-bottom: 25px; line-height: 1.2; }
        .healthcare-description { font-size: 1.15rem; color: #0f8946ff; margin-bottom: 40px; line-height: 1.7; }
        
        /* --- CTA Section --- */
        .cta-section { background-color: var(--secondary-color); color: var(--text-light); padding: 100px 5%; text-align: center; animation: fadeIn 1.2s ease-in-out; border-top: 1px solid rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .cta-content { max-width: 900px; margin: 0 auto; }
        .cta-title { font-size: 2.8rem; font-weight: 700; margin-bottom: 25px; }
        .cta-text { font-size: 1.25rem; margin-bottom: 40px; opacity: 0.95; font-weight: 300; }
        
        /* --- Insights Section --- */
        .insights-section { background-color: var(--bg-subtle); }
        .insights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .insight-link { display: flex; flex-direction: column; background-color: var(--card-bg); padding: 35px; border-radius: var(--border-radius); text-decoration: none; color: var(--text-dark); box-shadow: var(--shadow-subtle); transition: transform 0.4s, box-shadow 0.4s, border-top 0.4s; animation: fadeIn 0.8s ease-in-out; border-top: 4px solid transparent; }
        .insight-link:hover { transform: translateY(-5px); box-shadow: 0 18px 35px rgba(0, 0, 0, 0.1); border-top: 4px solid var(--primary-color); }
        .insight-title { font-size: 1.45rem; color: var(--text-dark); margin-bottom: 10px; font-weight: 800; }
        .insight-description { font-size: 1rem; color: var(--muted-text); font-weight: 400; }

        /* --- FOOTER --- */
        .main-footer {
            background-color: #020b1f;
            color: #f0f4f8;
            padding-top: 60px;
            border-top: 5px solid var(--primary-color);
            font-size: 0.95rem;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1.5fr;
            gap: 60px;
            padding-bottom: 40px;
            align-items: flex-start;
        }
        .footer-col h3 { color: #fff; font-size: 1.2rem; margin-bottom: 20px; position: relative; padding-bottom: 10px; }
        .footer-col h3::after { content: ''; position: absolute; left: 0; bottom: 0; width: 30px; height: 3px; background-color: var(--primary-color); }
        .footer-about p { line-height: 1.6; color: #cbd5e1; margin-bottom: 20px; max-width: 90%; }
        .footer-links { list-style: none; padding: 0; }
        .footer-links li { margin-bottom: 12px; }
        .footer-links a { color: #cbd5e1; text-decoration: none; transition: color 0.3s, padding-left 0.3s; }
        .footer-links a:hover { color: var(--primary-color); padding-left: 5px; }
        .contact-info li { margin-bottom: 15px; display: flex; align-items: flex-start; color: #cbd5e1; }
        .contact-icon { margin-right: 10px; font-size: 1.1rem; color: var(--primary-color); min-width: 25px; }
        .copyright-bar { background-color: rgba(0,0,0,0.3); padding: 20px 0; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); color: #94a3b8; font-size: 0.9rem; }

        /* --- Media Queries (Desktop/Tablet) --- */
        @media (max-width: 1024px) {
            .hero-headline { font-size: 3.5rem; }
            .features-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
            .insights-grid { gap: 20px; }
            .cta-title { font-size: 2.4rem; }
            .healthcare-container { flex-direction: column; text-align: center; }
            .healthcare-content { order: 2; }
            .healthcare-image-wrapper { order: 1; margin-bottom: 30px; }
            .healthcare-button { width: 100%; max-width: 350px; }
            .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
            .footer-about { grid-column: 1 / -1; }
        }

        /* --- Mobile Styles (FIXED GAPS) --- */
        @media (max-width: 600px) {
            /* REDUCED CONTAINER PADDING */
            .container { padding: 30px 0; }
            
            /* REDUCED HERO PADDING */
            .hero-section { padding: 60px 5%; }
            
            /* REDUCED SECTION PADDINGS */
            .healthcare-section { padding: 50px 5%; }
            .cta-section { padding: 50px 5%; }
            .main-footer { padding-top: 40px; }
            
            /* TYPOGRAPHY ADJUSTMENTS */
            .hero-headline { font-size: 2.2rem; }
            .hero-subheadline { font-size: 1.1rem; margin-bottom: 20px; }
            .section-title { font-size: 2rem; margin-bottom: 30px; } /* Reduced bottom margin */
            
            /* COMPONENT SPECIFIC */
            .primary-button { padding: 12px 30px; font-size: 1rem; }
            .features-grid { grid-template-columns: 1fr; gap: 25px; }
            .insights-grid { grid-template-columns: 1fr; gap: 25px; }
            .cta-title { font-size: 1.8rem; }
            
            .healthcare-title { font-size: 1.8rem; }
            .healthcare-description { font-size: 1rem; margin-bottom: 25px; }
            .healthcare-button { width: 100%; }
            
            /* FOOTER STACKING */
            .footer-grid { grid-template-columns: 1fr; gap: 30px; }
            .footer-about { grid-column: auto; }
            
            /* HIDE DECORATIONS ON MOBILE */
            .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before { display: none; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <h1 className="hero-headline">
            Transforming Business Through Intelligent AI Solutions
          </h1>
          <p className="hero-subheadline">
            From intelligent automation to custom AI applications, our innovative and reliable AI solutions give you the competitive advantage in today's digital landscape.
          </p>
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
      
      {/* Healthcare AI Solutions */}
      <HealthcareSection />

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

      {/* Comprehensive Footer */}
      <footer className="main-footer">
        <div className="container" style={{padding: '0'}}>
            <div className="footer-grid">
                {/* Column 1: About */}
                <div className="footer-col footer-about">
                    <h3>Tevacraft AI Systems</h3>
                    <p>
                        We specialize in delivering custom AI solutions, cloud infrastructure, and intelligent automation to help businesses scale and innovate securely.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/industries">Industries</a></li>
                        <li><a href="/case-studies">Case Studies</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <ul className="footer-links contact-info">
                        <li>
                            <span className="contact-icon">📧</span> 
                            <a href="mailto:biz.operations@tevacraft.in">biz.operations@tevacraft.in</a>
                        </li>
                        <li>
                            <span className="contact-icon">📞</span> 
                            <a href="tel:+919010805455">+91 9010805455</a>
                        </li>
                        <li>
                            <span className="contact-icon">📍</span> 
                            <span>Urbanrise Spring is in the air, Sri Vani Nagar, Ameenpur, Hyderabad, India</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright-bar">
            <p>© 2025 Tevacraft AI Systems. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;