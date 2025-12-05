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

// Reusable component for a single Industry Card
const IndustryCard = ({ title, intro, solutions, delay, parentInView }) => (
    <div 
        // Apply 'is-animated' class only if the parent section is visible
        className={`industry-card ${parentInView ? 'is-animated' : ''}`}
        style={{ '--delay': `${delay}ms` }} 
    >
        <h3 className="card-title">{title}</h3>
        <p className="card-intro">{intro}</p>
        
        <div className="solutions-wrapper">
            <h4 className="solutions-heading">Key Solutions:</h4>
            <ul className="solution-list">
                {solutions.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

// --- CTA Section (Reused from previous version) ---
const CTASection = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });
    return (
        <section 
            className={`cta-section fade-in-up-section ${inView ? 'is-visible' : ''}`}
            ref={ref}
        >
            <div className="container cta-content">
                <h2 className="cta-title">Ready to Transform Your Industry?</h2>
                <p className="cta-text">Book a consultation to see how Tevacraft AI Systems can custom-engineer a solution that delivers measurable ROI in your sector.</p>
                <a href="/contact" className="primary-button">
                    Start Your AI Strategy Now
                </a>
            </div>
        </section>
    );
};

// Main Industries Section Component
const IndustriesSection = () => {
    
    // 1. Get a ref and visibility state for the Industries Grid Section
    const [industriesRef, industriesInView] = useInView({ threshold: 0.1 }); 

    const industriesData = [
        {
            title: "Healthcare & Life Sciences",
            intro: "Transform patient care and operational efficiency with AI-powered healthcare solutions. From diagnostic assistance to administrative automation, we help healthcare organizations improve outcomes while reducing costs.",
            solutions: [
                "Medical Document Analysis & Processing",
                "Patient Data Management Systems",
                "Appointment Scheduling Automation",
                "Clinical Decision Support Systems",
                "Healthcare Compliance Monitoring",
            ],
            delay: 0,
        },
        {
            title: "Financial Services & Banking",
            intro: "Enhance customer experiences, manage risk, and drive operational excellence with AI solutions designed for the financial sector. We help financial institutions leverage AI while maintaining strict security and regulatory compliance.",
            solutions: [
                "Fraud Detection & Prevention",
                "Credit Risk Assessment",
                "Customer Service Automation",
                "Regulatory Compliance Systems",
                "Trading & Investment Analytics",
            ],
            delay: 100,
        },
        {
            title: "Retail & E-Commerce",
            intro: "Deliver personalized customer experiences and optimize operations with AI-powered retail solutions. We help retailers understand customer behavior, optimize inventory, and increase sales through intelligent automation.",
            solutions: [
                "Personalized Recommendation Engines",
                "Inventory Management & Demand Forecasting",
                "Customer Service Chatbots",
                "Price Optimization Systems",
                "Visual Search & Product Recognition",
            ],
            delay: 200,
        },
        {
            title: "Manufacturing & Supply Chain",
            intro: "Optimize production, predict maintenance needs, and streamline supply chain operations with AI. We help manufacturers improve efficiency, reduce downtime, and enhance quality control.",
            solutions: [
                "Predictive Maintenance Systems",
                "Quality Control Automation",
                "Supply Chain Optimization",
                "Production Planning & Scheduling",
                "Inventory Management Intelligence",
            ],
            delay: 300,
        },
        {
            title: "Education & EdTech",
            intro: "Enhance learning experiences and administrative efficiency with AI-powered education solutions. We help educational institutions personalize learning, automate administration, and improve student outcomes.",
            solutions: [
                "Intelligent Learning Management Systems",
                "Automated Grading & Assessment",
                "Student Performance Analytics",
                "Administrative Process Automation",
                "Personalized Learning Pathways",
            ],
            delay: 400,
        },
        {
            title: "Professional Services",
            intro: "Streamline operations and enhance service delivery with AI solutions for consulting, legal, and other professional services firms. We help service providers work more efficiently and deliver greater value to clients.",
            solutions: [
                "Document Analysis & Contract Review",
                "Knowledge Management Systems",
                "Client Relationship Management",
                "Proposal & Report Generation",
                "Time & Resource Optimization",
            ],
            delay: 500,
        },
    ];

    return (
        <div className="industries-page-wrapper">
            <style jsx>{`
                /* --- Color Variables (Green Theme) --- */
                :root {
                    --brand-color: #4CAF50; /* Green */
                    --secondary-color: #2E7D32;
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --accent-yellow: #FFC300;
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                    
                    --border-radius: 12px;
                    --shadow-card: 0 8px 25px rgba(0, 0, 0, 0.05);
                    --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.15);
                }

                /* --- Base Styles --- */
                body {
                    font-family: 'Inter', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: var(--bg-light);
                }
                .industries-page-wrapper {
                    display: flex;
                    flex-direction: column;
                }
                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                    padding: 80px 0;
                }
                
                /* Global Section Title */
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
                
                /* Primary Button for CTA */
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

                /* ========================================= */
                /* --- SCROLL ANIMATION KEYFRAMES --- */
                /* ========================================= */
                @keyframes fadeInRise {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                /* Base class for general sections (CTA) */
                .fade-in-up-section {
                    opacity: 0; 
                    transform: translateY(50px); 
                    transition: opacity 1.2s ease-out, transform 1.2s ease-out; 
                }
                .fade-in-up-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
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
                    background: linear-gradient(135deg, #0a150a 0%, #1e4d2b 60%, #4CAF50 100%);
                }
                
                /* Animations Keyframes */
                @keyframes robotToolsFlow1 { 0% { background-position: 0 0; } 100% { background-position: 200px 200px; } }
                @keyframes robotToolsFlow2 { 0% { background-position: 0 0; } 100% { background-position: -150px 150px; } }
                @keyframes teachingSpotlight { 0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } 50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } }
                @keyframes quantumPulse { 0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); } 50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); } }
                @keyframes slideInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes gridFlow { 0% { background-position: 0 0; } 100% { background-position: 300px 300px; } }

                /* Hero Overlays/Content Styles (Unchanged) */
                .hero-section::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; opacity: 0.7; pointer-events: none; background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px); background-size: 100px 100px, 100px 100px; background-position: 0 0, 0 0; animation: robotToolsFlow1 30s linear infinite, robotToolsFlow2 40s linear reverse infinite; }
                .hero-section::after { content: ''; position: absolute; top: 50%; left: -20%; width: 40%; height: 100%; transform: translateY(-50%) rotate(10deg); background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 10%, rgba(76, 175, 80, 0.3) 50%, rgba(255, 255, 255, 0.1) 90%, transparent); filter: blur(80px); z-index: 2; opacity: 0.8; pointer-events: none; animation: teachingSpotlight 25s ease-in-out infinite alternate; }
                .hero-content { max-width: 900px; margin: 0 auto; position: relative; z-index: 10; }
                .hero-content::before { content: ''; position: absolute; top: 50%; left: 50%; width: 50px; height: 50px; background: radial-gradient(circle, var(--hero-glow-color) 0%, transparent 70%); border-radius: 50%; transform: translate(-50%, -50%); z-index: 5; pointer-events: none; animation: quantumPulse 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
                .hero-headline { font-size: 4.5rem; font-weight: 900; margin-bottom: 25px; line-height: 1.1; animation: slideInDown 1.5s ease-out; }
                .hero-subheadline { font-size: 1.45rem; font-weight: 300; margin-bottom: 50px; opacity: 0.95; animation: slideInDown 1.8s ease-out; }
                .hero-grid { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.3; background-image: linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px); background-size: 30px 30px, 30px 30px; animation: gridFlow 60s linear infinite; }


                /* ========================================= */
                /* --- INDUSTRIES GRID & CARDS --- */
                /* ========================================= */
                .industries-list-section {
                    background-color: var(--bg-light);
                }

                .industries-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 40px;
                }

                /* --- Card Styles with Scroll Trigger --- */
                .industry-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 35px;
                    box-shadow: var(--shadow-card);
                    
                    /* Initial state for scroll animation */
                    opacity: 0;
                    transform: translateY(30px);
                    transition: transform 0.4s, box-shadow 0.4s; 
                    
                    /* Base styles for structure and hover */
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    border: 1px solid #e0e0e0;
                    position: relative;
                    overflow: hidden; 
                    z-index: 1;
                }
                
                /* Class to trigger the scroll animation */
                .industry-card.is-animated {
                    animation: fadeInRise 0.8s forwards;
                    animation-delay: var(--delay);
                }

                /* --- Hover Effect Styles (Unchanged) --- */
                .industry-card::before {
                    content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; 
                    background: linear-gradient(135deg, #1e4d2b 0%, #4CAF50 100%);
                    transition: height 0.4s ease-in-out; z-index: -1; 
                }
                .industry-card:hover::before { height: 100%; }
                .industry-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-premium); border-color: transparent; }
                .industry-card:hover .card-title { color: #ffffff; }
                .industry-card:hover .card-intro { color: #ffffff; }
                .industry-card:hover .solutions-wrapper { border-top: 1px solid rgba(255, 255, 255, 0.3); }
                .industry-card:hover .solutions-heading { color: #ffffff; }
                .industry-card:hover .list-item { color: #ffffff; }
                .industry-card:hover .list-item::before { color: var(--accent-yellow); }
                
                /* Inner Text Styles (Unchanged) */
                .card-title { font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 15px; transition: color 0.3s ease; }
                .card-intro { font-size: 1rem; color: var(--muted-text); margin-bottom: 25px; flex-grow: 1; transition: color 0.3s ease; }
                .solutions-wrapper { border-top: 1px solid #e0e0e0; padding-top: 20px; margin-top: auto; transition: border-color 0.3s ease; }
                .solutions-heading { font-size: 1rem; font-weight: 700; color: var(--brand-color); margin-bottom: 10px; transition: color 0.3s ease; }
                .solution-list { list-style: none; padding: 0; margin: 0; }
                .list-item { font-size: 0.95rem; color: var(--muted-text); margin-bottom: 5px; position: relative; padding-left: 20px; transition: color 0.3s ease; }
                .list-item::before { content: '—'; color: var(--brand-color); font-weight: bold; display: inline-block; width: 1em; margin-left: -1em; transition: color 0.3s ease; }
                
                /* ========================================= */
                /* --- CTA SECTION STYLES (FROM PREVIOUS CODE) --- */
                /* ========================================= */
                .cta-section { 
                    background-color: var(--secondary-color); 
                    color: var(--text-light); 
                    padding: 100px 5%; 
                    text-align: center; 
                    border-top: 1px solid rgba(255, 255, 255, 0.1); 
                }
                .cta-content { max-width: 900px; margin: 0 auto; padding: 0;}
                .cta-title { font-size: 2.8rem; font-weight: 700; margin-bottom: 25px; }
                .cta-text { font-size: 1.25rem; margin-bottom: 40px; opacity: 0.95; font-weight: 300; }
                
                /* --- Responsiveness (Unchanged) --- */
                @media (max-width: 1024px) {
                    .industries-grid {
                        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    }
                    .hero-headline { font-size: 3.5rem; }
                }

                @media (max-width: 768px) {
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2.5rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    .industries-grid { grid-template-columns: 1fr; }
                    .cta-section { padding: 60px 5%; }
                    .cta-title { font-size: 2rem; }
                }

                @media (max-width: 480px) {
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before {
                           display: none; 
                    }
                    .hero-headline { font-size: 2rem; }
                    .industry-card { padding: 25px; }
                }
            `}</style>

            {/* --- Animated Hero Section --- */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Industry-Specific AI Solutions That Drive Results
                    </h1>
                    <p className="hero-subheadline">
                        Every industry faces unique challenges. At Tevacraft AI Systems, we combine deep domain expertise with advanced AI to deliver solutions tailored to your specific sector.
                    </p>
                </div>
            </section>
            
            {/* --- Industries Grid Section (Scroll Animation Trigger Added) --- */}
            <section 
                className="industries-list-section"
                ref={industriesRef} // Attach the ref to observe visibility
            >
                <div className="container">
                    <h2 className="section-title">
                        AI Expertise Across Key Sectors
                    </h2>
                    <div className="industries-grid">
                        {industriesData.map((industry) => (
                            <IndustryCard
                                key={industry.title}
                                title={industry.title}
                                intro={industry.intro}
                                solutions={industry.solutions}
                                delay={industry.delay}
                                parentInView={industriesInView} // Pass the visibility state to the card
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- CTA Section --- */}
            <CTASection />
        </div>
    );
};

export default IndustriesSection;