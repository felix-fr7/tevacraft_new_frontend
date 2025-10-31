import React from 'react';

// Reusable component for a single Industry Card
const IndustryCard = ({ title, intro, solutions, delay }) => (
  <div 
    className="industry-card"
    // Apply animation delay for staggered entrance effect
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

// Main Industries Section Component
const IndustriesSection = () => {
    
    // --- Data Structure for Industries ---
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
        <section className="industries-section-wrapper">
            <style jsx>{`
                /* --- Color Variables (Consistent) --- */
                :root {
                    --brand-color: #0b5cff; 
                    --text-dark: #1f2937; 
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --border-radius: 12px;
                    --shadow-card: 0 8px 25px rgba(0, 0, 0, 0.05);
                }

                /* --- Base Styles (Desktop/Large Screens) --- */
                .industries-section-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-light); 
                }
                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                }

                /* --- Section Header --- */
                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section-tag {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--brand-color);
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .main-headline {
                    font-size: 2.8rem;
                    font-weight: 800;
                    color: var(--text-dark); 
                    margin-bottom: 20px;
                }

                .section-intro {
                    font-size: 1.15rem;
                    color: var(--muted-text); 
                    max-width: 800px;
                    margin: 0 auto;
                }
                
                /* --- Industries Grid (Desktop: 3 Columns) --- */
                .industries-grid {
                    display: grid;
                    /* Allows for 3 columns on large screens */
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }

                /* --- Card Styles (Base) --- */
                @keyframes fadeInRise {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .industry-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 30px;
                    box-shadow: var(--shadow-card);
                    transition: transform 0.4s, box-shadow 0.4s;
                    border-left: 5px solid transparent; 
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRise 0.8s forwards;
                    animation-delay: var(--delay);
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .industry-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
                    border-left: 5px solid var(--brand-color); 
                }

                .card-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-bottom: 15px;
                }

                .card-intro {
                    font-size: 1rem;
                    color: var(--muted-text);
                    margin-bottom: 25px;
                    flex-grow: 1; 
                }
                
                .solutions-wrapper {
                    border-top: 1px solid #e0e0e0;
                    padding-top: 20px;
                    margin-top: auto; 
                }

                .solutions-heading {
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--brand-color);
                    margin-bottom: 10px;
                }
                
                .solution-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .list-item {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    margin-bottom: 5px;
                    position: relative;
                    padding-left: 20px;
                }
                
                .list-item::before {
                    content: '—'; 
                    color: var(--brand-color);
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                    margin-left: -1em;
                }

                /* ======================================================= */
                /* --- MEDIA QUERIES FOR RESPONSIVENESS --- */
                /* ======================================================= */

                /* --- Laptop and Large Tablet (max-width: 1024px) --- */
                @media (max-width: 1024px) {
                    .industries-grid {
                        /* Switch to 2 columns on medium screens */
                        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    }
                    .main-headline {
                        font-size: 2.2rem;
                    }
                    .section-intro {
                        font-size: 1.1rem;
                    }
                }

                /* --- Tablet (max-width: 768px) --- */
                @media (max-width: 768px) {
                    .industries-section-wrapper {
                        padding: 60px 0;
                    }
                    .main-headline {
                        font-size: 2rem; /* Reduced headline size */
                    }
                    .section-header {
                        margin-bottom: 40px;
                    }
                    .section-intro {
                        font-size: 1rem;
                    }
                    .industries-grid {
                        /* Switch to single column for better readability on tablets */
                        grid-template-columns: 1fr;
                        gap: 25px;
                    }
                    .industry-card {
                        padding: 25px;
                    }
                    .card-title {
                        font-size: 1.4rem;
                    }
                }
                
                /* --- Small Mobile Phones (max-width: 480px) --- */
                @media (max-width: 480px) {
                    .industries-section-wrapper {
                        padding: 40px 0;
                    }
                    .container {
                        width: 95%; /* Maximize space on small phones */
                    }
                    .main-headline {
                        font-size: 1.75rem; /* Further reduce headline size */
                    }
                    .section-tag {
                        font-size: 0.9rem;
                        letter-spacing: 1.5px;
                    }
                    .section-intro {
                        font-size: 0.95rem;
                    }
                    .card-title {
                        font-size: 1.25rem;
                    }
                    .card-intro {
                        font-size: 0.9rem;
                        margin-bottom: 20px;
                    }
                    .list-item {
                        font-size: 0.85rem;
                    }
                }
            `}</style>

            <div className="container">
                <header className="section-header">
                    <p className="section-tag">INDUSTRIES WE SERVE</p>
                    <h2 className="main-headline">
                        Industry-Specific AI Solutions That Drive Results
                    </h2>
                    <p className="section-intro">
                        Every industry faces unique challenges and opportunities. At Tevacraft AI
                        Systems, we bring deep domain understanding combined with AI expertise to deliver
                        solutions that address your specific industry needs.
                    </p>
                </header>

                <div className="industries-grid">
                    {industriesData.map((industry) => (
                        <IndustryCard
                            key={industry.title}
                            title={industry.title}
                            intro={industry.intro}
                            solutions={industry.solutions}
                            delay={industry.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;