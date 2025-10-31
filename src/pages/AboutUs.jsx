import React from 'react';

// Reusable component for displaying a core value
const ValueItem = ({ title, description }) => (
    <div className="value-item">
        <h4 className="value-title">{title}</h4>
        <p className="value-description">{description}</p>
    </div>
);

// Reusable component for displaying a "Why Partner" bullet point
const BenefitItem = ({ text }) => (
    <li className="benefit-list-item">{text}</li>
);


const AboutUs = () => {

    // --- Data for Values Section ---
    const coreValues = [
        {
            title: "Innovation",
            description: "We stay at the forefront of AI technology, continuously exploring new capabilities and approaches to solve business challenges.",
        },
        {
            title: "Integrity",
            description: "We operate with transparency and honesty, building trust through consistent delivery and open communication.",
        },
        {
            title: "Excellence",
            description: "We maintain the highest standards in everything we do, from code quality to customer service.",
        },
        {
            title: "Collaboration",
            description: "We work as partners with our clients, combining our expertise with their domain knowledge to create optimal solutions.",
        },
        {
            title: "Impact",
            description: "We measure our success by the tangible business outcomes our solutions deliver for clients.",
        },
    ];

    // --- Data for Why Partner With Us Section ---
    const whyPartnerItems = [
        "Deep knowledge of AWS services and architecture patterns optimized for AI workloads.",
        "We focus on solutions that work in the real world, not just in theory.",
        "We leverage modern development approaches to deliver solutions faster and more cost-effectively.",
        "From strategy to deployment to ongoing support, we're with you every step of the way.",
        "Our clients achieve measurable results, from cost savings to revenue growth to operational efficiency.",
    ];

    return (
        <div className="about-us-wrapper">
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
                    --accent-bg: #e6e9ed; /* Light gray for subtle background contrast */
                }

                /* --- General Layout (Desktop Base) --- */
                .about-us-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-light);
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                }
                .about-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                }

                /* --- Header Section (Our Story) --- */
                .story-section {
                    margin-bottom: 80px;
                    padding: 40px;
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    display: grid;
                    grid-template-columns: 1fr 1fr; /* Two columns for story/mission */
                    gap: 60px;
                }
                .story-header {
                    grid-column: 1 / -1; /* Header spans full width */
                    text-align: center;
                    margin-bottom: 20px;
                }
                .story-subtitle {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--brand-color);
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .story-headline {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin: 0 0 20px 0;
                }
                .story-text {
                    font-size: 1.15rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    border-left: 3px solid var(--brand-color);
                    padding-left: 20px;
                }

                /* --- Mission/Vision Block --- */
                .mission-vision-block h3 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 0 0 15px 0;
                    border-bottom: 2px solid var(--accent-bg);
                    padding-bottom: 10px;
                }
                .mission-vision-block p {
                    font-size: 1.05rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    margin-bottom: 30px;
                }

                /* --- Our Values Section --- */
                .values-section {
                    padding: 60px 0;
                    background-color: var(--accent-bg);
                    margin-bottom: 80px;
                    text-align: center;
                }
                .values-header {
                    margin-bottom: 40px;
                }
                .values-header h2 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin: 0;
                }
                .values-grid {
                    display: grid;
                    /* Base: 4 columns or more */
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 30px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .value-item {
                    background-color: var(--bg-light);
                    padding: 25px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    text-align: left;
                    transition: border-bottom 0.3s;
                    border-bottom: 4px solid transparent;
                }
                .value-item:hover {
                    border-bottom: 4px solid var(--brand-color);
                }
                .value-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--brand-color);
                    margin: 0 0 10px 0;
                }
                .value-description {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    line-height: 1.5;
                    margin: 0;
                }

                /* --- Why Partner Section --- */
                .partner-section {
                    margin-bottom: 80px;
                }
                .partner-section h2 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin-bottom: 40px;
                    text-align: center;
                }
                .benefit-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    /* Base: 2 columns */
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    display: grid;
                }
                .benefit-list-item {
                    font-size: 1.05rem;
                    color: var(--text-dark);
                    padding: 20px;
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    position: relative;
                    padding-left: 50px;
                    font-weight: 500;
                    box-shadow: var(--shadow-light);
                }
                .benefit-list-item::before {
                    content: '✨'; 
                    font-size: 1.5rem;
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--brand-color);
                }


                /* ======================================================= */
                /* --- ENHANCED MEDIA QUERIES --- */
                /* ======================================================= */

                /* --- Tablet (max-width: 900px) --- */
                @media (max-width: 900px) {
                    .about-us-wrapper {
                        padding: 60px 0;
                    }

                    /* Story Section: Switch to single column */
                    .story-section {
                        grid-template-columns: 1fr; 
                        gap: 40px;
                        padding: 30px;
                    }
                    .story-headline {
                        font-size: 2rem;
                    }
                    .story-text {
                        font-size: 1.05rem;
                        border-left: none;
                        border-top: 3px solid var(--brand-color);
                        padding-left: 0;
                        padding-top: 20px;
                        margin-top: 20px;
                    }
                    .mission-vision-block h3 {
                        font-size: 1.5rem;
                    }

                    /* Values Grid: Switch to 2 columns */
                    .values-grid {
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    }
                    .values-section, .partner-section {
                        margin-bottom: 60px;
                    }
                }

                /* --- Large Phone / Portrait Tablet (max-width: 600px) --- */
                @media (max-width: 600px) {
                    .about-us-wrapper {
                        padding: 40px 0;
                    }
                    .story-headline {
                        font-size: 1.75rem;
                        margin-bottom: 15px;
                    }
                    
                    /* Values Grid: Switch to 1 column */
                    .values-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .values-header h2, .partner-section h2 {
                        font-size: 1.8rem;
                        margin-bottom: 30px;
                    }

                    /* Partner List: Switch to 1 column */
                    .benefit-list {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }
                    .benefit-list-item {
                        font-size: 1rem;
                        padding: 15px;
                        padding-left: 45px;
                    }
                    .benefit-list-item::before {
                        font-size: 1.2rem;
                        left: 10px;
                    }
                }

                /* --- Small Phone (max-width: 400px) --- */
                @media (max-width: 400px) {
                    .story-section {
                        padding: 20px;
                    }
                    .story-headline {
                        font-size: 1.5rem;
                    }
                    .story-subtitle {
                        font-size: 0.9rem;
                    }
                    .story-text, .value-description {
                        font-size: 0.9rem;
                    }
                    .value-title {
                        font-size: 1.1rem;
                    }
                }
            `}</style>

            <div className="about-container">
                {/* --- OUR STORY Section --- */}
                <section className="story-section">
                    <div className="story-header">
                        <p className="story-subtitle">ABOUT US</p>
                        <h1 className="story-headline">Your Partner in AI-Powered Digital Transformation</h1>
                    </div>
                    
                    {/* Left Column: Story */}
                    <div>
                        <h3 className="sub-section-title">Our Story</h3>
                        <p className="story-text">
                            Tevacraft AI Systems was founded with a clear mission: to make advanced AI
                            technology accessible and practical for businesses of all sizes. We believe that every
                            organization deserves the opportunity to leverage AI for competitive advantage, regardless of
                            technical expertise or resources.
                            <br/><br/>
                            Based in India and serving clients globally, we specialize in developing custom AI
                            applications and deploying them on AWS infrastructure. Our approach combines technical
                            excellence with practical business understanding, ensuring that every solution we build
                            delivers real, measurable value.
                        </p>
                    </div>

                    {/* Right Column: Mission & Vision */}
                    <div className="mission-vision-block">
                        <h3>Our Mission</h3>
                        <p>
                            To **democratize AI technology** by delivering innovative, reliable, and cost-effective AI
                            solutions that transform how businesses operate and compete in the digital age.
                        </p>
                        <h3>Our Vision</h3>
                        <p>
                            To be the **trusted partner of choice** for organizations seeking to harness the power of AI,
                            known for our technical expertise, business acumen, and commitment to client success.
                        </p>
                    </div>
                </section>
            </div>

            {/* --- OUR VALUES Section (Full Width Background) --- */}
            <section className="values-section">
                <div className="about-container">
                    <header className="values-header">
                        <h2>Our Values</h2>
                    </header>
                    <div className="values-grid">
                        {coreValues.map((value) => (
                            <ValueItem
                                key={value.title}
                                title={value.title}
                                description={value.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY PARTNER WITH US Section --- */}
            <section className="partner-section">
                <div className="about-container">
                    <h2>Why Partner With Us</h2>
                    <ul className="benefit-list">
                        {whyPartnerItems.map((item, index) => (
                            <BenefitItem key={index} text={item} />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;