import React from 'react';

// --- Reusable Component for a single Case Study Card ---
const CaseStudyCard = ({ study, delay }) => (
    <div 
        className="case-study-card"
        style={{ '--delay': `${delay}ms` }}
    >
        <h3 className="card-title-case">{study.title}</h3>
        <p className="card-client">{study.client}</p>
        
        {/* Challenge & Solution */}
        <div className="content-block challenge-solution-grid">
            <div className="content-area">
                <h4 className="block-heading">The Challenge</h4>
                <p className="block-text challenge-text">{study.challenge}</p>
            </div>
            <div className="content-area">
                <h4 className="block-heading">The Solution</h4>
                <p className="block-text solution-text">{study.solution}</p>
            </div>
        </div>

        {/* Results Section */}
        <div className="content-block results-section">
            <h4 className="block-heading results-heading">Measurable Results:</h4>
            <ul className="results-list">
                {study.results.map((result, index) => (
                    <li key={index} className="result-item">{result}</li>
                ))}
            </ul>
        </div>
    </div>
);


const CaseStudies = () => {

    // --- Data Structure for Case Studies ---
    const caseStudiesData = [
        {
            title: "Healthcare Document Processing Automation",
            client: "Client: Regional Healthcare Network",
            challenge: "Manual processing of thousands of patient documents daily, leading to delays and errors.",
            solution: "Intelligent document processing system using AWS Textract and custom ML models.",
            results: [
                "85% reduction in document processing time",
                "95% accuracy in data extraction",
                "$500K annual cost savings",
                "Improved patient data accessibility",
            ],
            delay: 0,
        },
        {
            title: "E-Commerce Customer Service Transformation",
            client: "Client: Growing Online Retailer",
            challenge: "Overwhelmed customer service team unable to handle rapid growth in customer inquiries.",
            solution: "AI-powered chatbot with natural language understanding and automated response generation.",
            results: [
                "70% of inquiries handled automatically",
                "24/7 customer support availability",
                "40% reduction in customer service costs",
                "Improved customer satisfaction scores",
            ],
            delay: 100,
        },
        {
            title: "Manufacturing Predictive Maintenance",
            client: "Client: Industrial Manufacturing Company",
            challenge: "Unexpected equipment failures causing costly production downtime.",
            solution: "Predictive maintenance system using IoT sensors and ML-based failure prediction.",
            results: [
                "60% reduction in unplanned downtime",
                "30% decrease in maintenance costs",
                "Extended equipment lifespan",
                "Improved production reliability",
            ],
            delay: 200,
        },
        {
            title: "Financial Services Fraud Detection",
            client: "Client: Digital Payment Platform",
            challenge: "Increasing fraud attempts impacting customer trust and financial losses.",
            solution: "Real-time fraud detection system using anomaly detection and pattern recognition.",
            results: [
                "92% fraud detection accuracy",
                "Real-time transaction monitoring",
                "75% reduction in fraud losses",
                "Enhanced customer trust and security",
            ],
            delay: 300,
        },
    ];

    return (
        <div className="case-studies-wrapper">
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
                    --border-radius: 12px;
                    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.08);
                    --success-green: #28a745;
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                    --accent-yellow: #FFC300;
                    --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.15);
                }

                /* --- General Layout --- */
                .case-studies-wrapper {
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                    background-color: var(--bg-light);
                }
                .case-study-container {
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
                    background: linear-gradient(135deg, #0a150a 0%, #1e4d2b 60%, #4CAF50 100%);
                }
                
                /* Hero Animations */
                @keyframes robotToolsFlow1 { 0% { background-position: 0 0; } 100% { background-position: 200px 200px; } }
                @keyframes robotToolsFlow2 { 0% { background-position: 0 0; } 100% { background-position: -150px 150px; } }
                @keyframes teachingSpotlight { 0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } 50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } }
                @keyframes quantumPulse { 0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); } 50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); } }
                @keyframes slideInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

                /* Overlay Elements */
                .hero-section::before {
                    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; opacity: 0.7; pointer-events: none;
                    background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px);
                    background-size: 100px 100px, 100px 100px; animation: robotToolsFlow1 30s linear infinite, robotToolsFlow2 40s linear reverse infinite;
                }
                .hero-section::after {
                    content: ''; position: absolute; top: 50%; left: -20%; width: 40%; height: 100%; transform: translateY(-50%) rotate(10deg);
                    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 10%, rgba(76, 175, 80, 0.3) 50%, rgba(255, 255, 255, 0.1) 90%, transparent);
                    filter: blur(80px); z-index: 2; opacity: 0.8; pointer-events: none; animation: teachingSpotlight 25s ease-in-out infinite alternate;
                }
                .hero-content { max-width: 900px; margin: 0 auto; position: relative; z-index: 10; }
                .hero-content::before {
                    content: ''; position: absolute; top: 50%; left: 50%; width: 50px; height: 50px;
                    background: radial-gradient(circle, var(--hero-glow-color) 0%, transparent 70%); border-radius: 50%; transform: translate(-50%, -50%); z-index: 5; pointer-events: none; animation: quantumPulse 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
                }
                .hero-headline { font-size: 4.5rem; font-weight: 900; margin-bottom: 25px; line-height: 1.1; animation: slideInDown 1.5s ease-out; }
                .hero-subheadline { font-size: 1.45rem; font-weight: 300; margin-bottom: 50px; opacity: 0.95; animation: slideInDown 1.8s ease-out; }
                .hero-grid { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.3; background-image: linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px); background-size: 30px 30px, 30px 30px; animation: gridFlow 60s linear infinite; }
                @keyframes gridFlow { 0% { background-position: 0 0; } 100% { background-position: 300px 300px; } }

                /* --- Grid Layout --- */
                .case-study-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                    gap: 40px;
                }
                
                @keyframes fadeInRise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

                /* --- Individual Case Study Card (WITH HOVER EFFECT) --- */
                .case-study-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-medium);
                    transition: transform 0.3s, box-shadow 0.3s;
                    overflow: hidden; 
                    border-top: 6px solid var(--brand-color);
                    
                    position: relative;
                    z-index: 1;
                    
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRise 0.8s forwards;
                    animation-delay: var(--delay);
                }
                
                /* The Green Gradient Fill */
                .case-study-card::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0%; 
                    background: linear-gradient(135deg, #1e4d2b 0%, #4CAF50 100%);
                    transition: height 0.4s ease-in-out;
                    z-index: -1; 
                }

                .case-study-card:hover::before {
                    height: 100%;
                }

                .case-study-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-premium);
                    border-top: 6px solid transparent; /* Hide top border on hover for clean look */
                }

                /* --- Text Color Changes on Hover --- */
                .card-title-case {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    padding: 30px 30px 10px;
                    margin: 0;
                    transition: color 0.3s ease;
                }
                .case-study-card:hover .card-title-case { color: #ffffff; }

                .card-client {
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--brand-color);
                    padding: 0 30px 20px;
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: color 0.3s ease;
                }
                .case-study-card:hover .card-client { color: var(--accent-yellow); }

                /* --- Challenge/Solution Section --- */
                .challenge-solution-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1px; 
                    background-color: #ddd; /* Grid divider color */
                    padding-bottom: 0px; /* Removed padding bottom */
                    transition: background-color 0.3s ease;
                }
                .case-study-card:hover .challenge-solution-grid {
                    background-color: rgba(255, 255, 255, 0.3); /* Lighter divider on hover */
                }

                .content-area {
                    background-color: var(--bg-light); 
                    padding: 30px;
                    transition: background-color 0.3s ease;
                }
                .case-study-card:hover .content-area {
                    background-color: transparent; /* Show gradient underneath */
                }
                
                .block-heading {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 0 0 10px 0;
                    padding-bottom: 5px;
                    border-bottom: 2px solid var(--bg-subtle);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: color 0.3s ease, border-color 0.3s ease;
                }
                .case-study-card:hover .block-heading {
                    color: #ffffff;
                    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
                }
                
                .block-text {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    margin: 0;
                    transition: color 0.3s ease;
                }
                .case-study-card:hover .block-text { color: #ffffff; }
                .challenge-text { font-style: italic; }

                /* --- Results Section --- */
                .results-section {
                    padding: 30px;
                    background-color: var(--bg-subtle);
                    border-top: 1px solid #ccc;
                    transition: background-color 0.3s ease, border-color 0.3s ease;
                }
                .case-study-card:hover .results-section {
                    background-color: transparent;
                    border-top: 1px solid rgba(255, 255, 255, 0.3);
                }

                .results-heading {
                    font-size: 1.2rem;
                    color: var(--success-green);
                    border-bottom: none;
                    transition: color 0.3s ease;
                }
                .case-study-card:hover .results-heading { color: var(--accent-yellow); }

                .results-list {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0 0 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr; 
                    gap: 15px 30px;
                }
                .result-item {
                    font-size: 1rem;
                    color: var(--text-dark);
                    position: relative;
                    padding-left: 25px;
                    line-height: 1.4;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                .case-study-card:hover .result-item { color: #ffffff; }

                .result-item::before {
                    content: '🚀'; 
                    position: absolute;
                    left: 0;
                    font-size: 1.2em;
                    line-height: 1;
                }

                /* --- Media Queries --- */
                @media (max-width: 1100px) {
                    .case-study-grid { grid-template-columns: 1fr; gap: 30px; }
                    .hero-headline { font-size: 3.5rem; }
                }

                @media (max-width: 768px) {
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    
                    .card-title-case { font-size: 1.5rem; padding: 25px 25px 10px; }
                    .card-client { padding: 0 25px 15px; }
                }

                @media (max-width: 600px) {
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before { display: none; }
                    
                    .challenge-solution-grid { grid-template-columns: 1fr; padding-bottom: 0; }
                    .content-area { padding: 20px; }
                    .results-list { grid-template-columns: 1fr; gap: 8px; margin-top: 15px; }
                    .result-item { font-size: 0.95rem; padding-left: 20px; }
                }
            `}</style>

            {/* --- Animated Hero Section --- */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Real Results for Real Businesses
                    </h1>
                    <p className="hero-subheadline">
                        Explore how organizations across industries have transformed their operations and achieved significant business outcomes with Tevacraft AI Systems.
                    </p>
                </div>
            </section>

            <div className="case-study-container">
                {/* --- Case Studies Grid --- */}
                <section className="case-study-grid">
                    {caseStudiesData.map((study, index) => (
                        <CaseStudyCard
                            key={index}
                            study={study}
                            delay={index * 100} // Staggered animation delay
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default CaseStudies;