import React from 'react';

// Reusable component for a single Core Service card
const ServiceCard = ({ title, details, iconPath, listItems, delay }) => (
  <div 
    className="service-card"
    style={{ '--delay': `${delay}ms` }} 
  >
    <div className="icon-placeholder">
      {iconPath}
    </div>
    
    <h3 className="card-title">{title}</h3>
    <p className="card-details">{details}</p>
    
    <div className="list-wrapper">
      <h4 className="list-heading">Key Capabilities:</h4>
      <ul className="capability-list">
        {listItems.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Main Services Page Component
const ServicesPage = () => {
    
    const coreServices = [
        {
            title: "Custom AI Application Development",
            details: "Transform your business processes with custom-built AI applications designed specifically for your needs. We develop intelligent systems that automate workflows, enhance decision-making, and deliver measurable business value.",
            listItems: [
                "Conversational AI & Chatbot Development",
                "Intelligent Document Processing",
                "Predictive Analytics Systems",
                "Computer Vision Applications",
                "Natural Language Processing Solutions",
            ],
            iconPath: "💻",
            delay: 0,
        },
        {
            title: "AWS Cloud & AI Infrastructure",
            details: "Leverage the power of AWS to build scalable, secure, and cost-effective AI infrastructure. Our AWS expertise ensures your AI systems are optimized for performance, reliability, and cost efficiency.",
            listItems: [
                "AWS Architecture Design & Implementation",
                "AI/ML Service Integration (SageMaker, Bedrock)",
                "Serverless AI Application Development",
                "Cloud Migration & Optimization",
                "Infrastructure as Code (IaC) Implementation",
            ],
            iconPath: "☁️",
            delay: 100,
        },
        {
            title: "AI Strategy & Consulting",
            details: "Navigate your AI journey with confidence. Our consulting services help you identify high-impact AI opportunities, develop implementation roadmaps, and establish governance frameworks for responsible AI adoption.",
            listItems: [
                "AI Readiness Assessment",
                "Use Case Identification & Prioritization",
                "Technology Stack Selection",
                "ROI Analysis & Business Case Development",
                "AI Governance & Ethics Framework",
            ],
            iconPath: "🧠",
            delay: 200,
        },
        {
            title: "AI Integration & Automation",
            details: "Seamlessly integrate AI capabilities into your existing business systems. We connect AI services with your current technology stack to create unified, intelligent workflows that enhance operational efficiency.",
            listItems: [
                "API Development & Integration",
                "Legacy System Modernization",
                "Workflow Automation",
                "Data Pipeline Development",
                "Third-Party AI Service Integration",
            ],
            iconPath: "🔗",
            delay: 300,
        },
        {
            title: "Intelligent Data Solutions",
            details: "Unlock the value hidden in your data. We build data pipelines, analytics platforms, and AI-powered insights systems that transform raw data into actionable business intelligence.",
            listItems: [
                "Data Engineering & Pipeline Development",
                "Real-time Analytics & Reporting",
                "AI-Powered Business Intelligence",
                "Data Warehousing Solutions",
                "Master Data Management",
            ],
            iconPath: "📊",
            delay: 400,
        },
        {
            title: "Managed AI Services & Support",
            details: "Focus on your business while we manage your AI systems. Our managed services ensure your AI applications remain optimized, secure, and continuously improving.",
            listItems: [
                "24/7 System Monitoring & Support",
                "Performance Optimization",
                "Security & Compliance Management",
                "Model Retraining & Updates",
                "Cost Optimization & Reporting",
            ],
            iconPath: "🛠️",
            delay: 500,
        },
    ];

    return (
        <div className="services-page-wrapper">
            <style jsx>{`
                /* --- Color Variables --- */
                :root {
                    /* CHANGED: Brand Color to Green */
                    --brand-color: #4CAF50; 
                    --secondary-color: #2E7D32; /* Darker Green */
                    --accent-yellow: #FFC300; 
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --bg-dark: #121212; 
                    --muted-text: #4b5563;
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                    
                    --border-radius: 14px;
                    --shadow-card: 0 8px 25px rgba(0, 0, 0, 0.05);
                    --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.15);
                }

                /* --- Base/Global Layout --- */
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: var(--bg-light);
                    color: var(--text-dark);
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                    padding: 80px 0;
                }

                /* ========================================= */
                /* --- HERO SECTION (Green Gradient) --- */
                /* ========================================= */
                .hero-section {
                    color: var(--text-light);
                    padding: 130px 5%; 
                    text-align: center;
                    position: relative;
                    overflow: hidden; 
                    animation: fadeIn 1.2s ease-in-out;
                    
                    /* UPDATED: GREEN LINEAR GRADIENT */
                    /* Deep Dark Green -> Forest Green -> Bright Brand Green */
                    background: linear-gradient(135deg, #0a150a 0%, #1e4d2b 60%, #4CAF50 100%);
                }
                
                /* 1. "Robot & Tools" Data Flow (::before) */
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
                    background-image: 
                        repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px),
                        repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px);
                    background-size: 100px 100px, 100px 100px;
                    background-position: 0 0, 0 0; 
                    animation: 
                        robotToolsFlow1 30s linear infinite,
                        robotToolsFlow2 40s linear reverse infinite;
                }
                
                /* 2. "Teaching Moment" Spotlight/Glow (::after) */
                .hero-section::after {
                    content: '';
                    position: absolute;
                    top: 50%; 
                    left: -20%; 
                    width: 40%;
                    height: 100%; 
                    transform: translateY(-50%) rotate(10deg); 
                    background: linear-gradient(
                        to right, 
                        transparent, 
                        rgba(255, 255, 255, 0.1) 10%, 
                        rgba(76, 175, 80, 0.3) 50%, /* Green Hint */
                        rgba(255, 255, 255, 0.1) 90%, 
                        transparent
                    );
                    filter: blur(80px);
                    z-index: 2; 
                    opacity: 0.8;
                    pointer-events: none;
                    animation: teachingSpotlight 25s ease-in-out infinite alternate; 
                }

                /* 3. "Quantum Pulse" */
                .hero-section .hero-content::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 50px; 
                    height: 50px; 
                    background: radial-gradient(circle, var(--hero-glow-color) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 5; 
                    pointer-events: none;
                    animation: quantumPulse 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
                }

                /* Hero Animations */
                @keyframes robotToolsFlow1 {
                    0% { background-position: 0 0; }
                    100% { background-position: 200px 200px; }
                }
                @keyframes robotToolsFlow2 {
                    0% { background-position: 0 0; }
                    100% { background-position: -150px 150px; }
                }
                @keyframes teachingSpotlight {
                    0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; }
                    50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 
                    100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; }
                }
                @keyframes quantumPulse {
                    0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); }
                    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } 
                    100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); }
                }
                @keyframes slideInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
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
                    animation: slideInDown 1.5s ease-out; 
                }

                .hero-subheadline {
                    font-size: 1.45rem;
                    font-weight: 300;
                    margin-bottom: 50px;
                    opacity: 0.95;
                    animation: slideInDown 1.8s ease-out; 
                }
                
                /* Flowing Grid Background */
                .hero-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0; 
                    pointer-events: none;
                    opacity: 0.3; 
                    background-image: linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px);
                    background-size: 30px 30px, 30px 30px;
                    animation: gridFlow 60s linear infinite; 
                }
                @keyframes gridFlow {
                    0% { background-position: 0 0; }
                    100% { background-position: 300px 300px; }
                }

                /* ========================================= */
                /* --- CORE SERVICES GRID & CARDS --- */
                /* ========================================= */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
                    gap: 40px;
                    padding-top: 20px;
                }

                @keyframes fadeInRise {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* --- Service Card Styling --- */
                .service-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 35px;
                    box-shadow: var(--shadow-card);
                    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRise 0.8s forwards;
                    animation-delay: var(--delay); 
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    text-align: left;
                    border: 1px solid #e0e0e0;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }

                /* CARD HOVER GRADIENT EFFECT (GREEN) */
                .service-card::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0%; 
                    
                    /* CHANGED TO GREEN LINEAR GRADIENT */
                    background: linear-gradient(135deg, #1e4d2b 0%, #4CAF50 100%);
                    
                    transition: height 0.4s ease-in-out;
                    z-index: -1;
                }

                .service-card:hover::before {
                    height: 100%;
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-premium);
                    border-color: transparent;
                }

                /* Icon */
                .icon-placeholder {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    color: var(--brand-color);
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(76, 175, 80, 0.1); /* Green tint */
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }
                
                .service-card:hover .icon-placeholder {
                    background: rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                }

                /* Title */
                .card-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-bottom: 15px;
                    transition: color 0.3s ease;
                }
                .service-card:hover .card-title {
                    color: #ffffff;
                }

                /* Description */
                .card-details {
                    font-size: 1rem;
                    color: var(--muted-text);
                    margin-bottom: 25px;
                    font-weight: 400;
                    flex-grow: 1; 
                    transition: color 0.3s ease;
                }
                .service-card:hover .card-details {
                    color: #ffffff;
                }
                
                /* List Wrapper */
                .list-wrapper {
                    border-top: 1px solid #e0e0e0;
                    padding-top: 20px;
                    margin-top: auto; 
                    transition: border-color 0.3s ease;
                }
                .service-card:hover .list-wrapper {
                    border-top: 1px solid rgba(255, 255, 255, 0.3);
                }

                /* List Heading */
                .list-heading {
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-bottom: 10px;
                    transition: color 0.3s ease;
                }
                .service-card:hover .list-heading {
                    color: #ffffff;
                }
                
                /* List Items */
                .capability-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .list-item {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    margin-bottom: 8px;
                    position: relative;
                    padding-left: 20px;
                    transition: color 0.3s ease;
                }
                .service-card:hover .list-item {
                    color: #ffffff;
                }
                
                /* List Bullets */
                .list-item::before {
                    content: '•';
                    color: var(--brand-color);
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                    margin-left: -1em;
                    transition: color 0.3s ease;
                }
                .service-card:hover .list-item::before {
                    color: var(--accent-yellow); 
                }

                /* --- Simple Footer --- */
                .page-footer {
                    background-color: #0a150a; /* Matches Hero Start Color */
                    color: rgba(255, 255, 255, 0.7);
                    text-align: center; 
                    padding: 30px 5%;
                    font-size: 0.9rem;
                    border-top: 4px solid var(--brand-color); 
                }

                /* --- Responsiveness --- */
                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 30px;
                    }
                    .hero-headline { font-size: 3.5rem; }
                }

                @media (max-width: 768px) {
                    .container { padding: 60px 0; }
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2.5rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    .services-grid { grid-template-columns: 1fr; }
                }

                @media (max-width: 480px) {
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before {
                         display: none; 
                    }
                    .hero-headline { font-size: 2rem; }
                    .service-card { padding: 25px; }
                }
            `}</style>

            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Comprehensive AI Solutions for Every Business Need
                    </h1>
                    <p className="hero-subheadline">
                        At Tevacraft AI Systems, we offer end-to-end AI development and deployment services tailored to your organization's unique requirements. Our expertise spans the entire AI lifecycle, from strategy and design to implementation and optimization.
                    </p>
                </div>
            </section>
            
            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        {coreServices.map((service) => (
                            <ServiceCard
                                key={service.title}
                                title={service.title}
                                details={service.details}
                                listItems={service.listItems}
                                iconPath={service.iconPath}
                                delay={service.delay}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;