import React from 'react';

// Reusable component for a single Core Service card
const ServiceCard = ({ title, details, iconPath, listItems, delay }) => (
  <div 
    className="service-card"
    // Setting CSS variable for animation delay
    style={{ '--delay': `${delay}ms` }} 
  >
    {/* Optional Icon/Visual Placeholder */}
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
    
    // --- Data Structure for Core Services ---
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
                "AI/ML Service Integration (SageMaker, Bedrock, Comprehend)",
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
                /* --- Color Variables (Consistent) --- */
                :root {
                    --brand-color: #0b5cff; 
                    --secondary-color: #004c99; 
                    --accent-yellow: #FFC300; 
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --bg-dark: #121212; 
                    --muted-text: #4b5563;
                    --border-radius: 12px;
                    --shadow-card: 0 8px 25px rgba(0, 0, 0, 0.05);
                }

                /* --- Base/Global Layout (Default: Desktop/Large Screens) --- */
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

                /* --- Hero Header Section --- */
                .page-hero-header {
                    background-color: var(--brand-color); 
                    color: var(--text-light);
                    padding: 30px 5% 70px; 
                    text-align: center; 
                    background-image: linear-gradient(135deg, var(--brand-color) 0%, var(--secondary-color) 100%);
                }
                
                .header-content {
                    max-width: 900px;
                    margin: 0 auto; 
                }
                
                .page-subtitle {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--accent-yellow); 
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    opacity: 1; 
                }

                .main-headline {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: var(--text-light); 
                    margin-bottom: 20px;
                    line-height: 1.1;
                    opacity: 1;
                }

                .intro-text {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.9); 
                    max-width: 800px;
                    margin: 0 auto;
                    font-weight: 300;
                    opacity: 1;
                }
                
                /* --- Core Services Grid (Default: 3-column or more) --- */
                .services-grid {
                    display: grid;
                    /* Allows for 3 columns on large screens, or 2 if screen is smaller but still wide */
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
                    gap: 40px;
                    padding-top: 20px;
                }

                /* --- Service Card Styling --- */
                @keyframes fadeInRise {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .service-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 35px;
                    box-shadow: var(--shadow-card);
                    transition: transform 0.4s, box-shadow 0.4s, border-top 0.4s;
                    border-top: 6px solid transparent; 
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRise 0.8s forwards;
                    animation-delay: var(--delay); 
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    text-align: left;
                }

                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
                    border-top: 6px solid var(--brand-color); 
                    background-color: var(--bg-light);
                }

                .icon-placeholder {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    color: var(--brand-color);
                    width: 50px;
                    height: 50px;
                    line-height: 1;
                    background: rgba(11, 92, 255, 0.1); 
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .card-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-bottom: 15px;
                }

                .card-details {
                    font-size: 1rem;
                    color: var(--muted-text);
                    margin-bottom: 25px;
                    font-weight: 400;
                    flex-grow: 1; 
                }
                
                .list-wrapper {
                    border-top: 1px solid #e0e0e0;
                    padding-top: 20px;
                    margin-top: auto; 
                }

                .list-heading {
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-bottom: 10px;
                }
                
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
                }
                
                .list-item::before {
                    content: '•';
                    color: var(--brand-color);
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                    margin-left: -1em;
                }

                /* --- Simple Footer --- */
                .page-footer {
                    background-color: var(--bg-dark);
                    color: rgba(255, 255, 255, 0.5);
                    text-align: center; 
                    padding: 30px 5%;
                    font-size: 0.9rem;
                    border-top: 4px solid var(--accent-yellow); 
                }

                /* ======================================================= */
                /* --- MEDIA QUERIES FOR RESPONSIVENESS --- */
                /* ======================================================= */
                
                /* --- Laptop and Large Tablet (max-width: 1024px) --- */
                @media (max-width: 1024px) {
                    .services-grid {
                        /* On medium screens, force a minimum 300px card width, making it 2 or 3 columns */
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 30px;
                    }
                }

                /* --- Tablet (max-width: 768px) --- */
                @media (max-width: 768px) {
                    .container {
                        padding: 60px 0;
                    }

                    .page-hero-header {
                        padding: 20px 5% 60px; 
                    }

                    .main-headline {
                        font-size: 2.5rem; /* Reduce headline size */
                    }
                    .intro-text {
                        font-size: 1.1rem; /* Reduce intro text size */
                    }

                    .services-grid {
                        /* On tablets, switch to a single column to give cards more width */
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }

                    .service-card {
                        padding: 30px;
                    }
                    .card-title {
                        font-size: 1.5rem; /* Reduce card title size */
                    }
                }

                /* --- Small Mobile Phones (max-width: 480px) --- */
                @media (max-width: 480px) {
                    .container {
                        width: 95%; /* Increase container width for small screens */
                        padding: 40px 0;
                    }
                    
                    .page-hero-header {
                        padding: 20px 5% 50px; 
                    }

                    .main-headline {
                        font-size: 2rem; /* Further reduce headline size */
                    }

                    .page-subtitle {
                        font-size: 0.9rem;
                        letter-spacing: 1.5px;
                    }

                    .intro-text {
                        font-size: 1rem;
                    }

                    .service-card {
                        padding: 25px;
                    }
                    
                    .icon-placeholder {
                        font-size: 2rem;
                        width: 40px;
                        height: 40px;
                        margin-bottom: 15px;
                    }

                    .card-title {
                        font-size: 1.3rem;
                    }
                    
                    .card-details {
                        font-size: 0.95rem;
                    }
                    
                    .list-item {
                        font-size: 0.9rem;
                    }

                    .page-footer {
                        padding: 20px 5%;
                    }
                }
            `}</style>

            {/* Header Section (Blue Background) */}
            <header className="page-hero-header">
                <div className="header-content">
                    <p className="page-subtitle">Our Expertise</p>
                    <h1 className="main-headline">
                        Comprehensive AI Solutions for Every Business Need
                    </h1>
                    <p className="intro-text">
                        At Tevacraft AI Systems, we offer end-to-end AI development and
                        deployment services tailored to your organization's unique requirements. Our expertise spans
                        the entire AI lifecycle, from strategy and design to implementation and optimization.
                    </p>
                </div>
            </header>
            
            <hr/>

            {/* Core Services Section */}
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
            
            <hr/>
            
            {/* Simple Footer */}
            <footer className="page-footer">
                <p>AI Solutions & Services | © 2025. All Rights Reserved.</p>
            </footer>

        </div>
    );
};

export default ServicesPage;