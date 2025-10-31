import React from 'react';

// --- Reusable Component for a single resource item ---
const ResourceItem = ({ type, title, description, isFeatured = false }) => (
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
                /* --- Color Variables (Consistent) --- */
                :root {
                    --brand-color: #0b5cff; 
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --border-radius: 10px;
                    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.05);
                    --accent-bg: #e6e9ed;
                }

                /* --- General Layout --- */
                .knowledge-center-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-subtle);
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                }
                .kc-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                }

                /* --- Header Styles --- */
                .kc-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .kc-subtitle {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--brand-color);
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .kc-headline {
                    font-size: 2.8rem;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin: 0;
                }
                .kc-intro {
                    font-size: 1.15rem;
                    color: var(--muted-text);
                    max-width: 800px;
                    margin: 20px auto 0;
                    line-height: 1.6;
                }

                /* --- Resources Grid --- */
                .resources-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    margin-bottom: 60px;
                }
                
                /* --- Resource Category Card --- */
                .resource-category {
                    background-color: var(--bg-light);
                    padding: 30px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    border-top: 4px solid var(--brand-color);
                    transition: box-shadow 0.3s;
                }
                .resource-category:hover {
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                }

                .category-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 0 0 20px 0;
                    border-bottom: 2px solid var(--bg-subtle);
                    padding-bottom: 10px;
                }

                /* --- Resource Item Styling (White Papers, Technical Guides) --- */
                .resource-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .resource-item {
                    display: flex;
                    align-items: flex-start;
                    padding: 15px 0;
                    border-bottom: 1px solid var(--bg-subtle);
                }
                .resource-item:last-child {
                    border-bottom: none;
                }
                .item-icon {
                    font-size: 1.2rem;
                    color: var(--brand-color);
                    margin-right: 15px;
                    line-height: 1.4;
                }
                .item-content {
                    flex-grow: 1;
                }
                .item-title-resource {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-dark);
                    margin: 0;
                    line-height: 1.4;
                }
                .item-description {
                    font-size: 0.9rem;
                    color: var(--muted-text);
                    margin: 5px 0 0 0;
                }

                /* --- Specific Styling for Simple Lists (Blog/Case Study) --- */
                .simple-list-item {
                    font-size: 1rem;
                    color: var(--muted-text);
                    margin-bottom: 12px;
                    position: relative;
                    padding-left: 20px;
                }
                .simple-list-item::before {
                    content: '•';
                    color: var(--brand-color);
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                
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
                @media (max-width: 768px) {
                    .kc-headline {
                        font-size: 2.2rem;
                    }
                    .resources-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .webinars-section {
                        padding: 30px;
                    }
                }
            `}</style>

            <div className="kc-container">
                <header className="kc-header">
                    <p className="kc-subtitle">RESOURCES & INSIGHTS</p>
                    <h1 className="kc-headline">
                        Insights, Best Practices & Industry Trends
                    </h1>
                    <p className="kc-intro">
                        Stay informed about the latest developments in AI technology, implementation
                        strategies, and industry trends. Our resource center provides valuable insights to help you
                        make informed decisions about your AI journey.
                    </p>
                </header>

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