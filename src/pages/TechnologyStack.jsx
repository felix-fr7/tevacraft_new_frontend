import React from 'react';

// --- Reusable Component for AWS Service Block ---
const TechnologyCard = ({ title, description, icon }) => (
    <div className="tech-card">
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
        },
        {
            title: "Amazon SageMaker",
            description: "Develop, train, and deploy machine learning models at scale. Our expertise enables rapid development and deployment of custom ML solutions tailored to your needs.",
            icon: "🧪",
        },
        {
            title: "AWS Lambda & Serverless",
            description: "Build cost-effective, scalable AI applications with serverless architecture, designing solutions that automatically scale with demand while minimizing overhead.",
            icon: "⚡",
        },
        {
            title: "Amazon Comprehend",
            description: "Extract insights from text using natural language processing. We integrate Comprehend to analyze customer feedback, documents, and communication at scale.",
            icon: "📝",
        },
        {
            title: "Amazon Rekognition",
            description: "Add intelligent image and video analysis to your applications. We implement computer vision solutions for object detection, facial analysis, and content moderation.",
            icon: "👁️",
        },
        {
            title: "Amazon Textract",
            description: "Automatically extract text and data from documents. We build intelligent document processing systems that eliminate manual data entry and accelerate workflows.",
            icon: "📄",
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
                }

                /* --- Section Layout --- */
                .tech-stack-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-light);
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                }
                .tech-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                }

                /* --- Header Styles --- */
                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .section-subtitle {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--brand-color);
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .section-headline {
                    font-size: 2.8rem;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin: 0;
                }
                .section-intro {
                    font-size: 1.15rem;
                    color: var(--muted-text);
                    max-width: 800px;
                    margin: 20px auto 0;
                    line-height: 1.6;
                }

                /* --- AWS Services Grid --- */
                .aws-services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-bottom: 80px;
                }
                
                /* --- Technology Card (AWS Services) --- */
                .tech-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 30px;
                    box-shadow: var(--shadow-light);
                    transition: transform 0.3s, box-shadow 0.3s;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    border-left: 5px solid transparent;
                }
                .tech-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    border-left: 5px solid var(--brand-color);
                }
                .tech-icon {
                    font-size: 2rem;
                    margin-bottom: 15px;
                }
                .card-title-tech {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 0 0 10px 0;
                }
                .card-description-tech {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    margin: 0;
                }

                /* --- Sub-Sections (Frameworks & Security) --- */
                .sub-sections-flex {
                    display: flex;
                    gap: 40px;
                    flex-wrap: wrap;
                }
                .sub-section-content {
                    flex: 1;
                    min-width: 300px; /* Ensures stacking on small screens */
                }
                .sub-section-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 25px;
                    color: var(--text-dark);
                }
                
                /* --- List Styling (Frameworks & Security) --- */
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
                    content: '✓'; /* Checkmark icon */
                    color: var(--brand-color);
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                    top: 0;
                    font-size: 1.1em;
                }

                /* --- Media Queries --- */
                @media (max-width: 768px) {
                    .tech-stack-wrapper {
                        padding: 60px 0;
                    }
                    .section-headline {
                        font-size: 2rem;
                    }
                    .sub-section-title {
                        font-size: 1.6rem;
                    }
                    .aws-services-grid {
                        gap: 20px;
                        margin-bottom: 60px;
                    }
                }
            `}</style>

            <div className="tech-container">
                <header className="section-header">
                    <h2 className="section-subtitle">TECHNOLOGY & PLATFORMS</h2>
                    <h1 className="section-headline">
                        Built on the Industry's Leading AI & Cloud Technologies
                    </h1>
                    <p className="section-intro">
                        Tevacraft AI Systems leverages cutting-edge technologies and proven
                        platforms to deliver reliable, scalable AI solutions. Our **AWS-first approach** ensures you
                        benefit from the most advanced cloud and AI services available.
                    </p>
                </header>

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