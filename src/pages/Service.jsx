import React, { useRef, useEffect, useState } from 'react';

// --- Custom Hook for Intersection Observer (Scroll Trigger) ---
/**
 * Hook to determine if an element is currently in the viewport.
 */
const useInView = (options) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                // Stop observing after it has entered the view once
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, inView];
};

// Reusable component for a single Core Service card
const ServiceCard = ({ title, details, iconPath, listItems, delay, parentInView }) => (
    <div 
        className={`service-card ${parentInView ? 'is-animated' : ''}`}
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

// New: FAQ Item Component
const FAQItem = ({ question, answer, delay, parentInView }) => (
    <div 
        className={`faq-item ${parentInView ? 'is-animated' : ''}`}
        style={{ '--delay': `${delay}ms` }}
    >
        <h4 className="faq-question">{question}</h4>
        <p className="faq-answer">{answer}</p>
    </div>
);

// New: Call to Action Component (English)
const CTASection = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });
    return (
        <section 
            className={`cta-section fade-in-up-section ${inView ? 'is-visible' : ''}`}
            ref={ref}
        >
            <div className="container cta-content">
                <h2 className="cta-title">Get Custom AI Solutions for Your Business.</h2>
                <p className="cta-text">Contact us for a free AI consultation and start your next digital transformation journey today.</p>
                <a href="/contact" className="primary-button">
                    Speak to an Advisor Now
                </a>
            </div>
        </section>
    );
};

// Main Services Page Component
const ServicesPage = () => {
    
    // Scroll Refs for new sections
    const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
    const [valuePropRef, valuePropInView] = useInView({ threshold: 0.3 });
    const [caseStudiesRef, caseStudiesInView] = useInView({ threshold: 0.2 });
    const [faqRef, faqInView] = useInView({ threshold: 0.1 });

    // --- Core Services Data ---
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

    // --- FAQ Data ---
    const faqData = [
        {
            question: "What is the typical cost to start an AI project?",
            answer: "The cost varies based on project complexity, data requirements, and the scale of the AWS infrastructure needed. We offer a free initial consultation and a transparent pricing plan tailored to your budget.",
            delay: 0,
        },
        {
            question: "Can your AI solutions integrate with our current systems?",
            answer: "Yes, that is our core expertise. We seamlessly integrate our AI solutions via robust APIs with your existing legacy systems, CRM/ERP platforms, and other data sources to ensure unified workflows.",
            delay: 100,
        },
        {
            question: "What assurance do you provide regarding Data Security and Privacy?",
            answer: "We utilize compliance-ready AWS infrastructure (adhering to HIPAA, GDPR, etc.). Your data is encrypted, and privacy is ensured through strict access controls and state-of-the-art security practices.",
            delay: 200,
        },
    ];

    return (
        <div className="services-page-wrapper">
            <style jsx>{`
                /* --- Color Variables --- */
                :root {
                    --brand-color: #4CAF50; 
                    --secondary-color: #2E7D32; 
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

                /* --- Base/Global Layout (UNCHANGED) --- */
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
                
                /* New: Primary Button Style (for CTA) */
                .primary-button {
                    background-color: var(--brand-color);
                    color: var(--text-light); 
                    padding: 15px 40px;
                    border: none;
                    border-radius: 50px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
                    box-shadow: 0 6px 15px rgba(76, 175, 80, 0.4);
                    text-decoration: none; 
                    display: inline-block; 
                }
                .primary-button:hover {
                    transform: translateY(-3px);
                    background-color: var(--secondary-color);
                    box-shadow: 0 10px 20px rgba(76, 175, 80, 0.6);
                }

                /* New: Section Title Style */
                .section-title { 
                    font-size: 3rem; 
                    font-weight: 800; 
                    color: var(--text-dark); 
                    text-align: center; 
                    margin-bottom: 70px; 
                    position: relative; 
                }
                .section-title::after { 
                    content: ''; 
                    display: block; 
                    width: 90px; 
                    height: 6px; 
                    background-color: var(--brand-color); 
                    margin: 15px auto 0; 
                    border-radius: 3px; 
                }

                /* ========================================= */
                /* --- SCROLL ANIMATION STYLES (UNCHANGED) --- */
                /* ========================================= */
                @keyframes fadeInRiseStagger {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .fade-in-up-section {
                    opacity: 0; 
                    transform: translateY(50px); 
                    transition: opacity 1.2s ease-out, transform 1.2s ease-out; 
                }
                .fade-in-up-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .service-card.is-animated {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRiseStagger 0.8s forwards;
                    animation-delay: var(--delay); 
                }
                .faq-item.is-animated {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRiseStagger 0.8s forwards;
                    animation-delay: var(--delay); 
                }

                /* ========================================= */
                /* --- HERO SECTION (UNCHANGED STYLES) --- */
                /* ========================================= */
                .hero-section {
                    color: var(--text-light);
                    padding: 130px 5%; 
                    text-align: center;
                    position: relative;
                    overflow: hidden; 
                    background: linear-gradient(135deg, #0a150a 0%, #1e4d2b 60%, #4CAF50 100%);
                }
                
                .hero-section::before {
                    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; opacity: 0.7; pointer-events: none;
                    background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px);
                    background-size: 100px 100px, 100px 100px; background-position: 0 0, 0 0; 
                    animation: robotToolsFlow1 30s linear infinite, robotToolsFlow2 40s linear reverse infinite;
                }
                .hero-section::after {
                    content: ''; position: absolute; top: 50%; left: -20%; width: 40%; height: 100%; transform: translateY(-50%) rotate(10deg); 
                    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 10%, rgba(76, 175, 80, 0.3) 50%, rgba(255, 255, 255, 0.1) 90%, transparent);
                    filter: blur(80px); z-index: 2; opacity: 0.8; pointer-events: none; animation: teachingSpotlight 25s ease-in-out infinite alternate; 
                }
                .hero-section .hero-content::before {
                    content: ''; position: absolute; top: 50%; left: 50%; width: 50px; height: 50px; background: radial-gradient(circle, var(--hero-glow-color) 0%, transparent 70%); border-radius: 50%; transform: translate(-50%, -50%); z-index: 5; pointer-events: none; animation: quantumPulse 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
                }
                @keyframes robotToolsFlow1 { 0% { background-position: 0 0; } 100% { background-position: 200px 200px; } }
                @keyframes robotToolsFlow2 { 0% { background-position: 0 0; } 100% { background-position: -150px 150px; } }
                @keyframes teachingSpotlight { 0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } 50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } }
                @keyframes quantumPulse { 0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); } 50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); } }
                @keyframes slideInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes gridFlow { 0% { background-position: 0 0; } 100% { background-position: 300px 300px; } }

                .hero-content { max-width: 900px; margin: 0 auto; position: relative; z-index: 10; }
                .hero-headline { font-size: 4.5rem; font-weight: 900; margin-bottom: 25px; line-height: 1.1; animation: slideInDown 1.5s ease-out; }
                .hero-subheadline { font-size: 1.45rem; font-weight: 300; margin-bottom: 50px; opacity: 0.95; animation: slideInDown 1.8s ease-out; }
                .hero-grid { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.3; background-image: linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px); background-size: 30px 30px, 30px 30px; animation: gridFlow 60s linear infinite; }

                /* ========================================= */
                /* --- CORE SERVICES GRID & CARDS (Hover Effects ADDED) --- */
                /* ========================================= */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
                    gap: 40px;
                    padding-top: 20px;
                }
                
                .service-card {
                    /* Initial opacity and transform are for scroll animation */
                    opacity: 0; 
                    transform: translateY(30px);
                    
                    /* Base styles and transition for smooth hover effects */
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 35px;
                    box-shadow: var(--shadow-card);
                    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s, border-color 0.4s;
                    border: 1px solid #e0e0e0; 
                    display: flex; flex-direction: column; height: 100%; text-align: left;
                    position: relative; overflow: hidden; z-index: 1;
                }
                
                /* Hover Background Fill */
                .service-card::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0%; 
                    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--brand-color) 100%);
                    transition: height 0.4s ease-in-out;
                    z-index: -1;
                }

                .service-card:hover::before { 
                    height: 100%; 
                }

                /* Hover Animation and Shadow */
                .service-card:hover { 
                    transform: translateY(-10px); 
                    box-shadow: var(--shadow-premium); 
                    border-color: transparent; /* Hide initial border on hover */
                }

                /* Text and Icon Color Change on Hover */
                .service-card:hover .card-title, 
                .service-card:hover .card-details, 
                .service-card:hover .list-heading, 
                .service-card:hover .list-item { 
                    color: #ffffff; 
                    transition: color 0.3s ease;
                }
                
                .service-card:hover .icon-placeholder { 
                    background: rgba(255, 255, 255, 0.2); 
                    color: #ffffff; 
                    transition: all 0.3s ease;
                }
                
                .service-card:hover .list-wrapper { 
                    border-top: 1px solid rgba(255, 255, 255, 0.3); 
                    transition: border-color 0.3s ease;
                }
                
                .service-card:hover .list-item::before { 
                    color: var(--accent-yellow); 
                    transition: color 0.3s ease;
                }

                /* Base Styles (Simplified/Moved) */
                .icon-placeholder { font-size: 2.5rem; margin-bottom: 20px; color: var(--brand-color); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: rgba(76, 175, 80, 0.1); border-radius: 10px; transition: all 0.3s ease; }
                .card-title { font-size: 1.75rem; font-weight: 700; color: var(--text-dark); margin-bottom: 15px; transition: color 0.3s ease; }
                .card-details { font-size: 1rem; color: var(--muted-text); margin-bottom: 25px; font-weight: 400; flex-grow: 1; transition: color 0.3s ease; }
                .list-wrapper { border-top: 1px solid #e0e0e0; padding-top: 20px; margin-top: auto; transition: border-color 0.3s ease; }
                .list-heading { font-size: 1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 10px; transition: color 0.3s ease; }
                .list-item { font-size: 0.95rem; color: var(--muted-text); margin-bottom: 8px; position: relative; padding-left: 20px; transition: color 0.3s ease; }
                .list-item::before { content: '•'; color: var(--brand-color); font-weight: bold; display: inline-block; width: 1em; margin-left: -1em; transition: color 0.3s ease; }


                /* ========================================= */
                /* --- 3. FAQ SECTION STYLES (Hover Effects ADDED) --- */
                /* ========================================= */
                .faq-section {
                    background-color: var(--bg-light);
                }
                .faq-grid {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .faq-item {
                    /* Base styles for FAQ item */
                    background-color: var(--bg-subtle); /* Changed from bg-light to bg-subtle for contrast */
                    padding: 25px;
                    border-radius: var(--border-radius);
                    border-left: 5px solid var(--brand-color);
                    box-shadow: var(--shadow-card);
                    margin-bottom: 20px;
                    
                    /* Added transition for smooth hover effects */
                    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s, background-color 0.4s;

                    opacity: 0; 
                    transform: translateY(30px);
                }

                .faq-item:hover {
                    transform: translateY(-5px); /* Lift up animation */
                    box-shadow: var(--shadow-premium);
                    background-color: var(--brand-color); /* Color change on hover */
                    border-left-color: var(--accent-yellow);
                }
                
                .faq-item:hover .faq-question, 
                .faq-item:hover .faq-answer {
                    color: #ffffff; /* Text color change on hover */
                    transition: color 0.4s ease;
                }

                .faq-question {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-bottom: 10px;
                    transition: color 0.4s ease;
                }
                .faq-answer {
                    font-size: 1rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    transition: color 0.4s ease;
                }

                /* ========================================= */
                /* --- Other Sections (UNCHANGED STYLES) --- */
                /* ========================================= */
                .case-studies-section { background-color: var(--bg-subtle); }
                .case-study-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
                .case-study-card { background-color: var(--bg-light); padding: 30px; border-radius: var(--border-radius); border-top: 5px solid var(--accent-yellow); box-shadow: var(--shadow-card); transition: transform 0.3s; }
                .case-study-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1); }
                .case-study-card h4 { font-size: 1.4rem; color: var(--text-dark); margin-bottom: 15px; font-weight: 800; }
                .case-study-card p { color: var(--muted-text); margin-bottom: 20px; }
                .case-study-card .metric { display: inline-block; font-size: 2.5rem; font-weight: 900; color: var(--brand-color); margin-right: 15px; }
                
                .value-proposition-section { background-color: var(--bg-light); padding: 80px 5%; text-align: center; border-bottom: 1px solid #e0e0e0; }
                .value-prop-item { max-width: 800px; margin: 0 auto 40px; border-left: 6px solid var(--brand-color); padding: 30px; background-color: var(--bg-subtle); border-radius: var(--border-radius); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); text-align: left; }
                .value-prop-item h3 { font-size: 1.8rem; color: var(--secondary-color); margin-bottom: 15px; font-weight: 700; }
                .value-prop-item p { font-size: 1.1rem; color: var(--muted-text); line-height: 1.6; }

                .cta-section { background-color: var(--secondary-color); color: var(--text-light); padding: 100px 5%; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); }
                .cta-content { max-width: 900px; margin: 0 auto; padding: 0;}
                .cta-title { font-size: 2.8rem; font-weight: 700; margin-bottom: 25px; }
                .cta-text { font-size: 1.25rem; margin-bottom: 40px; opacity: 0.95; font-weight: 300; }

                /* --- Responsiveness (UNCHANGED) --- */
                @media (max-width: 1024px) {
                    .services-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
                    .case-study-grid { grid-template-columns: 1fr; }
                    .cta-title { font-size: 2.2rem; }
                    .faq-item { margin-bottom: 15px; }
                }

                @media (max-width: 768px) {
                    .container { padding: 60px 0; }
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2.5rem; }
                    .services-grid { grid-template-columns: 1fr; }
                    .section-title { font-size: 2.2rem; margin-bottom: 40px; }
                    .value-prop-item h3 { font-size: 1.5rem; }
                    .cta-section { padding: 60px 5%; }
                }

                @media (max-width: 480px) {
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before { display: none; }
                    .hero-headline { font-size: 2rem; }
                    .service-card { padding: 25px; }
                    .value-prop-item { padding: 20px; }
                }
            `}</style>

            {/* --- 1. Hero Section --- */}
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
            
            {/* --- 2. Core Services Section (with Scroll Animation Trigger) --- */}
            <section 
                className="services-section"
                ref={servicesRef} 
            >
                <div className="container">
                    <h2 className="section-title fade-in-up-section is-visible" style={{ animationDelay: '0ms' }}>
                        Our Core AI Services
                    </h2>
                    <div className="services-grid">
                        {coreServices.map((service) => (
                            <ServiceCard
                                key={service.title}
                                {...service}
                                parentInView={servicesInView} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. Value Proposition / Why Us Section (Scroll Animated) --- */}
            <section 
                className={`value-proposition-section fade-in-up-section ${valuePropInView ? 'is-visible' : ''}`}
                ref={valuePropRef}
            >
                <h2 className="section-title">How Our AI Solutions Make the Difference</h2>
                <div className="value-prop-grid">
                    <div className="value-prop-item">
                        <h3>Reliability & Scalability</h3>
                        <p>Built on the foundation of Amazon Web Services (AWS), our AI models are capable of accurately handling millions of data points and can easily scale as your business grows and your demands increase.</p>
                    </div>
                    <div className="value-prop-item">
                        <h3>Data Security & Regulatory Compliance</h3>
                        <p>We only build secure, encrypted AI solutions that comply with stringent data regulations like HIPAA (for healthcare) or European GDPR. Data security is our highest priority from day one.</p>
                    </div>
                </div>
            </section>

            {/* --- 4. Case Studies / Success Stories (Scroll Animated) --- */}
            <section 
                className={`case-studies-section fade-in-up-section ${caseStudiesInView ? 'is-visible' : ''}`}
                ref={caseStudiesRef}
            >
                <div className="container">
                    <h2 className="section-title">Success Stories Powered by AI</h2>
                    <div className="case-study-grid">
                        <div className="case-study-card">
                            <span className="metric">30%</span>
                            <h4>Reduction in Production Costs</h4>
                            <p>For a leading manufacturing client, implementing our AI-driven quality control system reduced material waste and significantly cut overall production costs through automated inspection.</p>
                            <a href="#" style={{ color: 'var(--brand-color)', fontWeight: '600' }}>Read the Success Story</a>
                        </div>
                        <div className="case-study-card">
                            <span className="metric">15%</span>
                            <h4>Increase in Diagnostic Accuracy</h4>
                            <p>In the medical sector, our Computer Vision AI model for image analysis achieved 15% higher accuracy than human practitioners in detecting early-stage diseases, speeding up treatment.</p>
                            <a href="#" style={{ color: 'var(--brand-color)', fontWeight: '600' }}>Explore the Case Study</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. FAQ Section (Scroll Animated) --- */}
            <section 
                className={`faq-section fade-in-up-section ${faqInView ? 'is-visible' : ''}`}
                ref={faqRef}
            >
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>
                    <div className="faq-grid">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                delay={item.delay}
                                parentInView={faqInView} // Trigger animation based on parent visibility
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 6. Final Call-to-Action (CTA) --- */}
            <CTASection />

        </div>
    );
};

export default ServicesPage;