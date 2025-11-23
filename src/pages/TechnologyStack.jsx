import React from 'react';

// --- Reusable Component for AWS Service Block ---
const TechnologyCard = ({ title, description, icon, delay }) => (
    <div 
        className="tech-card"
        style={{ '--delay': `${delay}ms` }} 
    >
        <div className="tech-icon">{icon}</div>
        <h3 className="card-title-tech">{title}</h3>
        <p className="card-description-tech">{description}</p>
    </div>
);

// --- Reusable Component for Framework/Security List ---
const SimpleListItem = ({ text }) => (
    <li className="simple-list-item">{text}</li>
);


const TechnologyStack = () => {

    // --- Data for AWS Services Section ---
    const awsServices = [
        {
            title: "Amazon Bedrock",
            description: "Build and scale generative AI applications with foundation models from leading AI companies. We help you implement secure, customizable AI solutions.",
            icon: "🧱",
            delay: 0,
        },
        {
            title: "Amazon SageMaker",
            description: "Develop, train, and deploy machine learning models at scale. Our expertise enables rapid development and deployment of custom ML solutions tailored to your needs.",
            icon: "🧪",
            delay: 100,
        },
        {
            title: "AWS Lambda & Serverless",
            description: "Build cost-effective, scalable AI applications with serverless architecture, designing solutions that automatically scale with demand while minimizing overhead.",
            icon: "⚡",
            delay: 200,
        },
        {
            title: "Amazon Comprehend",
            description: "Extract insights from text using natural language processing. We integrate Comprehend to analyze customer feedback, documents, and communication at scale.",
            icon: "📝",
            delay: 300,
        },
        {
            title: "Amazon Rekognition",
            description: "Add intelligent image and video analysis to your applications. We implement computer vision solutions for object detection, facial analysis, and content moderation.",
            icon: "👁️",
            delay: 400,
        },
        {
            title: "Amazon Textract",
            description: "Automatically extract text and data from documents. We build intelligent document processing systems that eliminate manual data entry and accelerate workflows.",
            icon: "📄",
            delay: 500,
        },
    ];

    // --- Data for Development Frameworks Section ---
    const frameworks = [
        "Accelerate development with modern low-code tools that enable rapid prototyping and deployment without sacrificing flexibility or scalability.",
        "Connect your AI solutions seamlessly with existing systems using robust API development and integration frameworks.",
        "Ensure consistency, repeatability, and version control with IaC tools like AWS CloudFormation and Terraform.",
        "Implement automated testing and deployment pipelines for continuous delivery of AI solutions with minimal downtime.",
    ];

    // --- Data for Security & Compliance Section ---
    const securityItems = [
        "Data encryption at rest and in transit",
        "Identity and access management (IAM)",
        "VPC isolation and network security",
        "Compliance with GDPR, HIPAA, and industry standards",
        "Regular security audits and monitoring",
        "Disaster recovery and business continuity planning",
    ];

    return (
        <div className="tech-stack-wrapper">
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

                /* --- Section Layout --- */
                .tech-stack-wrapper {
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                    background-color: var(--bg-light);
                }
                .tech-container {
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
                    
                    /* Green Linear Gradient Background */
                    background: linear-gradient(135deg, #0a150a 0%, #1e4d2b 60%, #4CAF50 100%);
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

                /* Overlay Elements */
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
                    animation: robotToolsFlow1 30s linear infinite, robotToolsFlow2 40s linear reverse infinite;
                }
                
                .hero-section::after {
                    content: '';
                    position: absolute;
                    top: 50%; 
                    left: -20%; 
                    width: 40%;
                    height: 100%; 
                    transform: translateY(-50%) rotate(10deg); 
                    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 10%, rgba(76, 175, 80, 0.3) 50%, rgba(255, 255, 255, 0.1) 90%, transparent);
                    filter: blur(80px);
                    z-index: 2; 
                    opacity: 0.8;
                    pointer-events: none;
                    animation: teachingSpotlight 25s ease-in-out infinite alternate; 
                }

                .hero-content {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10; 
                }
                
                .hero-content::before {
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
                
                .hero-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0; 
                    pointer-events: none;
                    opacity: 0.3; 
                    background-image: linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px);
                    background-size: 30px 30px, 30px 30px;
                    animation: gridFlow 60s linear infinite; 
                }
                @keyframes gridFlow {
                    0% { background-position: 0 0; }
                    100% { background-position: 300px 300px; }
                }

                /* --- AWS Services Grid --- */
                .aws-services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-bottom: 80px;
                }
                
                @keyframes fadeInRise {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                /* --- Technology Card (AWS Services) --- */
                .tech-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 30px;
                    box-shadow: var(--shadow-card);
                    transition: transform 0.3s, box-shadow 0.3s;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    border: 1px solid #e0e0e0;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRise 0.8s forwards;
                    animation-delay: var(--delay);
                }

                /* CARD HOVER FILL (Green Gradient) */
                .tech-card::before {
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

                .tech-card:hover::before {
                    height: 100%;
                }

                .tech-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-premium);
                    border-color: transparent;
                }
                
                .tech-icon {
                    font-size: 2rem;
                    margin-bottom: 15px;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(76, 175, 80, 0.1);
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                .tech-card:hover .tech-icon {
                    background: rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                }

                .card-title-tech {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 0 0 10px 0;
                    transition: color 0.3s ease;
                }
                .tech-card:hover .card-title-tech {
                    color: #ffffff;
                }

                .card-description-tech {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    margin: 0;
                    flex-grow: 1;
                    transition: color 0.3s ease;
                }
                .tech-card:hover .card-description-tech {
                    color: #ffffff;
                }

                /* --- Sub-Sections (Frameworks & Security) --- */
                .sub-sections-flex {
                    display: flex;
                    gap: 40px;
                    flex-wrap: wrap;
                }
                .sub-section-content {
                    flex: 1;
                    min-width: 300px; 
                }
                .sub-section-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 25px;
                    color: var(--text-dark);
                }
                
                /* --- List Styling --- */
                .simple-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .simple-list-item {
                    font-size: 1rem;
                    color: var(--muted-text);
                    margin-bottom: 15px;
                    padding-left: 25px;
                    position: relative;
                    line-height: 1.5;
                }
                .simple-list-item::before {
                    content: '✓'; 
                    color: var(--brand-color);
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                    top: 0;
                    font-size: 1.1em;
                }

                /* --- Media Queries --- */
                @media (max-width: 1024px) {
                    .hero-headline { font-size: 3.5rem; }
                }
                @media (max-width: 768px) {
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    
                    .sub-section-title { font-size: 1.6rem; }
                    .aws-services-grid {
                        gap: 20px;
                        margin-bottom: 60px;
                    }
                }
                @media (max-width: 480px) {
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before {
                         display: none; 
                    }
                }
            `}</style>

            {/* --- Animated Hero Section --- */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Built on the Industry's Leading AI & Cloud Technologies
                    </h1>
                    <p className="hero-subheadline">
                        Tevacraft AI Systems leverages cutting-edge technologies and proven
                        platforms to deliver reliable, scalable AI solutions. Our <strong>AWS-first approach</strong> ensures you
                        benefit from the most advanced cloud and AI services available.
                    </p>
                </div>
            </section>

            <div className="tech-container">
                {/* --- AWS Services Grid --- */}
                <section>
                    <h2 className="sub-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        AWS AI & Machine Learning Services
                    </h2>
                    <div className="aws-services-grid">
                        {awsServices.map((service) => (
                            <TechnologyCard
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                delay={service.delay}
                            />
                        ))}
                    </div>
                </section>
                
                {/* --- Development Frameworks & Security Section --- */}
                <section className="sub-sections-flex">
                    
                    <div className="sub-section-content">
                        <h2 className="sub-section-title">Development Frameworks & Tools</h2>
                        <ul className="simple-list">
                            {frameworks.map((item, index) => (
                                <SimpleListItem key={index} text={item} />
                            ))}
                        </ul>
                    </div>

                    <div className="sub-section-content">
                        <h2 className="sub-section-title">Security & Compliance</h2>
                        <ul className="simple-list">
                            {securityItems.map((item, index) => (
                                <SimpleListItem key={index} text={item} />
                            ))}
                        </ul>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default TechnologyStack;