import React from 'react';

// --- Reusable Component for a single resource item ---
const ResourceItem = ({ title, description, isFeatured = false }) => (
    <div className={`resource-item ${isFeatured ? 'featured' : ''}`}>
        <span className="item-icon">{isFeatured ? '📄' : '▪'}</span>
        <div className="item-content">
            <h4 className="item-title-resource">{title}</h4>
            {description && <p className="item-description">{description}</p>}
        </div>
    </div>
);

// --- Reusable Component for a webinar/event ---
const WebinarItem = ({ title }) => (
    <li className="webinar-item">
        <span className="webinar-icon">📅</span>
        {title}
    </li>
);


const KnowledgeCenter = () => {

    // --- Data Structure for Resources ---
    const resources = {
        whitePapers: [
            {
                title: "The Complete Guide to AWS AI Services for Business",
                description: "Comprehensive overview of AWS AI services and how to select the right tools for your use case.",
            },
            {
                title: "ROI of AI Implementation: Measuring Business Impact",
                description: "Framework for calculating and demonstrating the return on investment of AI projects.",
            },
            {
                title: "Building Responsible AI: Governance & Ethics Framework",
                description: "Best practices for implementing AI governance and ensuring ethical AI deployment.",
            },
        ],
        blogPosts: [
            "5 Ways AI is Transforming Customer Service",
            "Serverless Architecture for AI Applications: Benefits & Best Practices",
            "How to Prepare Your Organization for AI Adoption",
            "Cost Optimization Strategies for AI Workloads on AWS",
            "Understanding Large Language Models: Business Applications",
        ],
        caseStudies: [
            "From Manual to Automated: Healthcare Document Processing Success Story",
            "Scaling Customer Support with Conversational AI",
            "Predictive Analytics in Manufacturing: A Transformation Journey",
        ],
        technicalGuides: [
            "Getting Started with Amazon Bedrock",
            "Building Your First AI Application on AWS",
            "API Integration Best Practices for AI Systems",
            "Data Pipeline Design for ML Workloads",
        ],
        webinars: [
            "AI Strategy Workshop: Identifying High-Impact Use Cases",
            "Hands-On: Building a Chatbot with AWS Services",
            "AI Security & Compliance: What You Need to Know",
        ]
    };

    return (
        <div className="knowledge-center-wrapper">
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
                    --border-radius: 10px;
                    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.05);
                    --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.15);
                    --accent-bg: #e6e9ed;
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                }

                /* --- General Layout --- */
                .knowledge-center-wrapper {
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                    background-color: var(--bg-light);
                }
                .kc-container {
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

                /* --- Resources Grid --- */
                .resources-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 30px;
                    margin-bottom: 60px;
                }
                
                /* --- Resource Category Card (WITH HOVER EFFECT) --- */
                .resource-category {
                    background-color: var(--bg-subtle);
                    padding: 30px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    border-top: 4px solid var(--brand-color);
                    
                    transition: transform 0.3s, box-shadow 0.3s;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                
                /* Hover Gradient Fill */
                .resource-category::before {
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

                .resource-category:hover::before {
                    height: 100%;
                }

                .resource-category:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-premium);
                    border-top: 4px solid transparent;
                }

                /* Text Color Change on Hover */
                .category-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 0 0 20px 0;
                    border-bottom: 2px solid var(--bg-subtle);
                    padding-bottom: 10px;
                    transition: color 0.3s ease, border-color 0.3s ease;
                }
                .resource-category:hover .category-title {
                    color: #ffffff;
                    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
                }

                /* --- Resource Item Styling --- */
                .resource-item {
                    display: flex;
                    align-items: flex-start;
                    padding: 15px 0;
                    border-bottom: 1px solid var(--bg-subtle);
                    transition: border-color 0.3s ease;
                }
                .resource-category:hover .resource-item {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .resource-item:last-child { border-bottom: none; }
                
                .item-icon {
                    font-size: 1.2rem;
                    color: var(--brand-color);
                    margin-right: 15px;
                    line-height: 1.4;
                    transition: color 0.3s ease;
                }
                .resource-category:hover .item-icon { color: #ffffff; }

                .item-content { flex-grow: 1; }
                
                .item-title-resource {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-dark);
                    margin: 0;
                    line-height: 1.4;
                    transition: color 0.3s ease;
                }
                .resource-category:hover .item-title-resource { color: #ffffff; }

                .item-description {
                    font-size: 0.9rem;
                    color: var(--muted-text);
                    margin: 5px 0 0 0;
                    transition: color 0.3s ease;
                }
                .resource-category:hover .item-description { color: #e0e0e0; }

                /* --- Simple Lists Styling --- */
                .simple-list-item {
                    font-size: 1rem;
                    color: var(--muted-text);
                    margin-bottom: 12px;
                    position: relative;
                    padding-left: 20px;
                    transition: color 0.3s ease;
                }
                .resource-category:hover .simple-list-item { color: #ffffff; }

                .simple-list-item::before {
                    content: '•';
                    color: var(--brand-color);
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transition: color 0.3s ease;
                }
                .resource-category:hover .simple-list-item::before { color: #FFC300; } /* Yellow bullet on hover */
                
                /* --- Webinars & Events Section --- */
                .webinars-section {
                    background-color: var(--accent-bg);
                    padding: 40px;
                    border-radius: var(--border-radius);
                }
                .webinars-section h2 {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-top: 0;
                    margin-bottom: 20px;
                }
                .webinar-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .webinar-item {
                    font-size: 1.1rem;
                    color: var(--text-dark);
                    background-color: var(--bg-light);
                    padding: 15px;
                    margin-bottom: 10px;
                    border-left: 5px solid var(--brand-color);
                    border-radius: 5px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                }
                .webinar-icon {
                    margin-right: 15px;
                    font-size: 1.2em;
                }

                /* --- Media Queries --- */
                @media (max-width: 1024px) {
                    .hero-headline { font-size: 3.5rem; }
                }
                @media (max-width: 768px) {
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    .resources-grid { grid-template-columns: 1fr; gap: 20px; }
                    .webinars-section { padding: 30px; }
                }
                @media (max-width: 480px) {
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before { display: none; }
                    .hero-headline { font-size: 2rem; }
                }
            `}</style>

            {/* --- Animated Hero Section --- */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Insights, Best Practices & Industry Trends
                    </h1>
                    <p className="hero-subheadline">
                        Stay informed about the latest developments in AI technology, implementation
                        strategies, and industry trends. Our resource center provides valuable insights to help you
                        make informed decisions.
                    </p>
                </div>
            </section>

            <div className="kc-container">
                
                {/* --- Main Resources Grid --- */}
                <section className="resources-grid">
                    
                    {/* 1. White Papers */}
                    <div className="resource-category">
                        <h2 className="category-title">White Papers</h2>
                        <div className="resource-list">
                            {resources.whitePapers.map((paper, index) => (
                                <ResourceItem 
                                    key={index}
                                    title={paper.title}
                                    description={paper.description}
                                    isFeatured={true}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 2. Blog Posts */}
                    <div className="resource-category">
                        <h2 className="category-title">Blog Posts</h2>
                        <ul className="resource-list">
                            {resources.blogPosts.map((post, index) => (
                                <li key={index} className="simple-list-item">
                                    {post}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* 3. Technical Guides */}
                    <div className="resource-category">
                        <h2 className="category-title">Technical Guides</h2>
                        <ul className="resource-list">
                            {resources.technicalGuides.map((guide, index) => (
                                <li key={index} className="simple-list-item">
                                    {guide}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Case Studies */}
                    <div className="resource-category">
                        <h2 className="category-title">Case Studies</h2>
                        <ul className="resource-list">
                            {resources.caseStudies.map((study, index) => (
                                <li key={index} className="simple-list-item">
                                    {study}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* --- Webinars & Events Section --- */}
                <section className="webinars-section">
                    <h2>Webinars & Events</h2>
                    <ul className="webinar-list">
                        {resources.webinars.map((webinar, index) => (
                            <WebinarItem key={index} title={webinar} />
                        ))}
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default KnowledgeCenter;