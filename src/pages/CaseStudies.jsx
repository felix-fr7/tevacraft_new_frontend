import React from 'react';

// --- Reusable Component for a single Case Study Card ---
const CaseStudyCard = ({ study }) => (
    <div className="case-study-card">
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
        },
    ];

    return (
        <div className="case-studies-wrapper">
            <style jsx>{`
                /* --- Color Variables (Consistent) --- */
                :root {
                    --brand-color: #0b5cff; 
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --border-radius: 12px;
                    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.08);
                    --success-green: #28a745;
                }

                /* --- General Layout (Desktop Base) --- */
                .case-studies-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-light);
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                }
                .case-study-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                }

                /* --- Header Styles --- */
                .case-study-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .header-subtitle {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--brand-color);
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .header-headline {
                    font-size: 2.8rem;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin: 0;
                }
                .header-intro {
                    font-size: 1.15rem;
                    color: var(--muted-text);
                    max-width: 800px;
                    margin: 20px auto 0;
                    line-height: 1.6;
                }

                /* --- Grid Layout for Case Studies --- */
                .case-study-grid {
                    display: grid;
                    /* Base: Allow 2 columns to persist by reducing min width to 450px */
                    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                    gap: 40px;
                }
                
                /* --- Individual Case Study Card --- */
                .case-study-card {
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-medium);
                    transition: transform 0.3s, box-shadow 0.3s;
                    overflow: hidden; 
                    border-top: 6px solid var(--brand-color);
                }
                .case-study-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
                }

                .card-title-case {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    padding: 30px 30px 10px;
                    margin: 0;
                }
                .card-client {
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--brand-color);
                    padding: 0 30px 20px;
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                /* --- Challenge/Solution Section --- */
                .challenge-solution-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1px; 
                    background-color: #ddd; 
                    padding-bottom: 30px;
                }

                .content-area {
                    background-color: var(--bg-light); 
                    padding: 30px;
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
                }
                
                .challenge-text {
                    font-style: italic;
                }
                .block-text {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    margin: 0;
                }

                /* --- Results Section --- */
                .results-section {
                    padding: 30px;
                    background-color: var(--bg-subtle);
                    border-top: 1px solid #ccc;
                }
                .results-heading {
                    font-size: 1.2rem;
                    color: var(--success-green);
                    border-bottom: none;
                }
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
                }
                .result-item::before {
                    content: '🚀'; 
                    position: absolute;
                    left: 0;
                    font-size: 1.2em;
                    line-height: 1;
                }


                /* ======================================================= */
                /* --- ENHANCED MEDIA QUERIES --- */
                /* ======================================================= */

                /* --- Tablet/Medium Screens (max-width: 1100px) --- */
                @media (max-width: 1100px) {
                    .case-study-grid {
                        grid-template-columns: 1fr; /* Single column layout for studies */
                        gap: 30px;
                    }
                    .case-study-header {
                        margin-bottom: 40px;
                    }
                    .header-headline {
                        font-size: 2.5rem; /* Slightly smaller heading */
                    }
                }

                /* --- Large Phone/Portrait Tablet (max-width: 768px) --- */
                @media (max-width: 768px) {
                     .case-studies-wrapper {
                        padding: 60px 0;
                    }
                    .header-headline {
                        font-size: 2.2rem;
                    }
                    .header-intro {
                        font-size: 1.05rem;
                    }

                    .card-title-case {
                        font-size: 1.5rem;
                        padding: 25px 25px 10px;
                    }
                    .card-client {
                        padding: 0 25px 15px;
                    }
                }

                /* --- Small Phone (max-width: 600px) --- */
                @media (max-width: 600px) {
                    .case-studies-wrapper {
                        padding: 40px 0;
                    }
                    .case-study-card {
                        /* Remove horizontal margin since container handles it */
                        margin: 0; 
                    }
                    
                    /* Stack challenge and solution vertically */
                    .challenge-solution-grid {
                        grid-template-columns: 1fr; 
                        padding-bottom: 0;
                    }
                    .content-area {
                        padding: 20px;
                    }
                    .block-heading {
                        font-size: 1rem;
                    }
                    .block-text {
                        font-size: 0.9rem;
                    }

                    /* Stack results vertically */
                    .results-list {
                        grid-template-columns: 1fr; 
                        gap: 8px;
                        margin-top: 15px;
                    }
                    .result-item {
                        font-size: 0.95rem;
                        padding-left: 20px;
                    }
                    .result-item::before {
                        font-size: 1em;
                    }
                    .results-heading {
                        font-size: 1.1rem;
                    }
                    
                    .header-headline {
                        font-size: 1.8rem;
                    }
                }
            `}</style>

            <div className="case-study-container">
                <header className="case-study-header">
                    <p className="header-subtitle">CASE STUDIES / SUCCESS STORIES</p>
                    <h1 className="header-headline">
                        Real Results for Real Businesses
                    </h1>
                    <p className="header-intro">
                        Our clients' success is our success. Explore how organizations across
                        industries have transformed their operations and achieved significant business outcomes with
                        Tevacraft AI Systems.
                    </p>
                </header>

                {/* --- Case Studies Grid --- */}
                <section className="case-study-grid">
                    {caseStudiesData.map((study, index) => (
                        <CaseStudyCard
                            key={index}
                            study={study}
                        />
                    ))}
                </section>
                
            </div>
        </div>
    );
};

export default CaseStudies;