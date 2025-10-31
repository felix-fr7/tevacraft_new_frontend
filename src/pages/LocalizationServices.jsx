import React, { useState } from 'react';

// --- Reusable Component: Accordion Item (from previous FAQ solution) ---
const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
    <div className="faq-item">
        <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
            <span className="question-text">{question}</span>
            <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
        </button>
        <div className={`faq-answer-container ${isOpen ? 'open' : ''}`}>
            <p className="faq-answer">{answer}</p>
        </div>
    </div>
);

// --- Reusable Component: Service Card for the grid ---
const ServiceCard = ({ number, title, services }) => (
    <div className="service-card">
        <div className="service-header">
            <span className="service-number">{number}</span>
            <h3 className="service-title">{title}</h3>
        </div>
        <p className="sub-header">Services Include:</p>
        <ul className="service-list">
            {services.map((service, index) => (
                <li key={index}>{service}</li>
            ))}
        </ul>
    </div>
);


const LocalizationServices = () => {
    // State for FAQ accordion
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // --- DATA ---

    const hybridApproachData = [
        {
            title: "AI-Powered Machine Translation",
            features: [
                "Rapid translation for high-volume content",
                "Cost-effective solution for time-sensitive projects",
                "Continuous learning and improvement",
                "Ideal for internal documentation and general content"
            ],
            icon: "🤖"
        },
        {
            title: "AI-Assisted Human Translation",
            features: [
                "AI provides initial translation draft",
                "Professional linguists refine and perfect the content",
                "Optimal balance of speed and quality",
                "Best for marketing materials and customer-facing content"
            ],
            icon: "🧠"
        },
        {
            title: "Human-Led Premium Translation",
            features: [
                "Expert translators handle the entire process",
                "Subject matter experts for specialized content",
                "Maximum accuracy and cultural authenticity",
                "Recommended for legal, medical, and high-stakes content"
            ],
            icon: "🧑‍💻"
        }
    ];

    const comprehensiveServices = [
        {
            number: 1,
            title: "Document Translation & Localization",
            services: ["Legal contracts and agreements", "Technical documentation and manuals", "Marketing materials and brochures", "Training materials and guides", "Financial documents"]
        },
        {
            number: 2,
            title: "Website & App Localization",
            services: ["Website content translation", "Mobile application localization (iOS/Android)", "E-commerce platform localization", "Content management system integration", "SEO optimization for local markets"]
        },
        {
            number: 3,
            title: "Software & Product Localization",
            services: ["User interface (UI) translation", "Help documentation and tooltips", "Error messages and system notifications", "Resource file localization", "Functional testing in target languages"]
        },
        {
            number: 4,
            title: "Multimedia & Video Localization",
            services: ["Video subtitle creation and translation", "Closed captioning and SDH", "Voice-over recording and dubbing", "Transcription and translation", "Video editing and post-production"]
        },
        {
            number: 5,
            title: "E-Learning & Training Content Localization",
            services: ["Course content translation", "LMS platform localization", "Interactive module adaptation", "Assessment and quiz localization", "SCORM package localization"]
        },
        {
            number: 6,
            title: "Marketing & Creative Content Localization",
            services: ["Transcreation for advertising copy", "Social media content adaptation", "Email marketing campaigns", "Brand messaging and taglines", "Local market research and insights"]
        },
        {
            number: 7,
            title: "Technical Documentation Localization",
            services: ["User manuals and guides", "API documentation", "Technical specifications", "Knowledge base articles", "Engineering terminology accuracy"]
        },
        {
            number: 8,
            title: "E-Commerce Localization",
            services: ["Product catalog translation", "Checkout process adaptation", "Customer review management", "Payment method localization", "SEO-optimized product descriptions"]
        },
        {
            number: 9,
            title: "Legal & Financial Translation",
            services: ["Legal contracts and agreements", "Patents and intellectual property documents", "Regulatory filings and submissions", "Financial reports and statements", "Certified legal translators"]
        },
        {
            number: 10,
            title: "Accessibility Services",
            services: ["WCAG compliance translation", "Alternative text (alt-text) creation", "Audio description scripts", "Screen reader optimization", "Accessible document formatting"]
        }
    ];

    const faqData = [
        {
            question: "What is the difference between translation and localization?",
            answer: "Translation converts text from one language to another, while localization adapts content for cultural, regional, and functional relevance in the target market. Localization includes translation but also addresses formatting, cultural nuances, visual elements, and user experience to ensure content resonates authentically with local audiences."
        },
        {
            question: "How does Tevacraft ensure localization quality?",
            answer: "We employ a multi-layered quality assurance process combining AI-powered checks with expert human review. Every project includes translation memory for consistency, terminology management, native-speaker review, cultural adaptation verification, and final quality assurance testing. For specialized content, we use subject matter experts with relevant industry credentials."
        },
        {
            question: "What types of content can Tevacraft localize?",
            answer: "We localize virtually any content type including documents, websites, software applications, mobile apps, multimedia content, e-learning courses, marketing materials, technical documentation, legal contracts, and more. Our technology stack and global linguist network enable us to handle projects of any size and complexity."
        },
        {
            question: "How long does localization take?",
            answer: "Timeline depends on content volume, complexity, language pairs, and service level selected. Simple documents may be completed in 24-48 hours, while complex software localization projects may take several weeks. We provide detailed timelines during project scoping and offer expedited services for urgent needs."
        },
        {
            question: "Do you use AI or machine translation?",
            answer: "Yes, we leverage AI and machine translation as part of our intelligent localization approach. Depending on content type and quality requirements, we offer AI-powered translation with human review (for speed and cost efficiency) or premium human translation (for maximum accuracy). Our hybrid approach combines the best of both technologies."
        },
        {
            question: "What languages does Tevacraft support?",
            answer: "We provide localization services in 75+ languages covering major global markets. Our most requested languages include Spanish, French, German, Chinese, Japanese, Arabic, Portuguese, Korean, Italian, and Dutch. We also support less common languages through our extensive linguist network. Contact us to confirm availability for your specific language requirements."
        },
        {
            question: "Can you integrate with our existing systems?",
            answer: "Yes, we specialize in integration with existing content management systems, translation management systems, e-commerce platforms, and business applications. We provide API integration for automated workflows and can work with your development team to ensure seamless integration with your technology stack."
        },
    ];

    // --- RENDER ---
    return (
        <div className="localization-services-wrapper">
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
                }

                /* --- General Layout --- */
                .localization-services-wrapper {
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                    background-color: var(--bg-light);
                }
                .loc-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                    padding: 60px 0;
                }

                /* --- Hero Section --- */
                .hero-section {
                    text-align: center;
                    padding: 80px 0;
                    background-color: var(--bg-subtle);
                    margin-bottom: 60px;
                    border-bottom: 5px solid var(--brand-color);
                }
                .hero-headline {
                    font-size: 3.5rem;
                    font-weight: 900;
                    color: var(--brand-color);
                    margin: 0;
                }
                .hero-subheadline {
                    font-size: 1.5rem;
                    color: var(--text-dark);
                    margin: 10px 0 30px 0;
                }
                .hero-intro {
                    font-size: 1.1rem;
                    color: var(--muted-text);
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.7;
                }
                
                /* --- Standard Section Titles --- */
                .section-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    text-align: center;
                    margin-bottom: 20px;
                    color: var(--text-dark);
                }
                .section-subtitle-small {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--brand-color);
                    text-align: center;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                }
                
                /* --- Strategic Partner Section (2-Column Layout) --- */
                .partner-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 50px;
                    margin-bottom: 80px;
                    align-items: center;
                }
                .partner-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                .partner-content p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--muted-text);
                    margin-bottom: 20px;
                }
                .key-differentiators {
                    list-style: none;
                    padding: 0;
                }
                .key-differentiators li {
                    font-size: 1rem;
                    margin-bottom: 10px;
                    padding-left: 25px;
                    position: relative;
                    font-weight: 500;
                }
                .key-differentiators li::before {
                    content: '⭐';
                    position: absolute;
                    left: 0;
                    color: var(--brand-color);
                }

                /* --- Hybrid Approach Cards --- */
                .hybrid-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-bottom: 80px;
                }
                .hybrid-card {
                    background-color: var(--bg-light);
                    padding: 30px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-medium);
                    border-bottom: 5px solid var(--brand-color);
                }
                .hybrid-icon {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                }
                .hybrid-title {
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin: 0 0 15px 0;
                }
                .hybrid-features-list {
                    list-style: none;
                    padding: 0;
                }
                .hybrid-features-list li {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    margin-bottom: 8px;
                    padding-left: 20px;
                    position: relative;
                }
                .hybrid-features-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: var(--brand-color);
                    font-weight: bold;
                }

                /* --- Comprehensive Services Grid --- */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                .service-card {
                    background-color: var(--bg-subtle);
                    padding: 30px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    transition: transform 0.3s;
                }
                .service-card:hover {
                    transform: translateY(-5px);
                }
                .service-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    border-bottom: 2px solid #ddd;
                    padding-bottom: 10px;
                }
                .service-number {
                    font-size: 1.8rem;
                    font-weight: 900;
                    color: var(--brand-color);
                    margin-right: 15px;
                }
                .service-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin: 0;
                }
                .sub-header {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text-dark);
                    margin-bottom: 10px;
                }
                .service-list {
                    padding-left: 20px;
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                }
                
                /* --- Success Stories Grid --- */
                .success-stories-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                    margin-bottom: 80px;
                }
                .story-card {
                    background-color: var(--bg-light);
                    padding: 30px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-medium);
                    border-left: 6px solid var(--brand-color);
                }
                .story-title {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: var(--brand-color);
                    margin-top: 0;
                }
                .story-challenge, .story-solution, .story-results {
                    margin-bottom: 20px;
                }
                .story-challenge p, .story-solution p {
                    font-style: italic;
                    color: var(--muted-text);
                    font-size: 1rem;
                    margin: 5px 0 0 0;
                }
                .story-results h4 {
                    color: #28a745; /* Success Green */
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                }
                .story-results ul {
                    padding-left: 20px;
                    font-size: 0.95rem;
                    color: var(--text-dark);
                }
                
                /* --- CTA Section --- */
                .cta-section {
                    text-align: center;
                    padding: 40px;
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    margin-top: 60px;
                }
                .cta-headline {
                    font-size: 2rem;
                    color: var(--text-dark);
                    margin-bottom: 15px;
                }
                .cta-buttons a {
                    display: inline-block;
                    padding: 12px 30px;
                    margin: 10px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s;
                }
                .btn-primary {
                    background-color: var(--brand-color);
                    color: var(--bg-light);
                    border: 2px solid var(--brand-color);
                }
                .btn-primary:hover {
                    background-color: #0045e0;
                }
                .btn-secondary {
                    background-color: transparent;
                    color: var(--brand-color);
                    border: 2px solid var(--brand-color);
                }
                .btn-secondary:hover {
                    background-color: var(--brand-color);
                    color: var(--bg-light);
                }
                .contact-details-cta {
                    margin-top: 20px;
                    color: var(--muted-text);
                }
                .contact-details-cta a {
                    color: var(--brand-color);
                    font-weight: 600;
                    text-decoration: none;
                }

                /* --- FAQ Styling (Re-used) --- */
                .faq-list {
                    max-width: 900px;
                    margin: 0 auto;
                    margin-bottom: 80px;
                }
                .faq-item {
                    border: 1px solid #ddd;
                    margin-bottom: 10px;
                    border-radius: var(--border-radius);
                    overflow: hidden;
                }
                .faq-question {
                    width: 100%;
                    background-color: var(--bg-light);
                    color: var(--text-dark);
                    text-align: left;
                    padding: 18px 25px;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 1.1rem;
                    font-weight: 600;
                }
                .faq-question[aria-expanded="true"] {
                    background-color: var(--brand-color);
                    color: white;
                }
                .faq-answer-container {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease-in-out;
                    background-color: var(--bg-subtle);
                }
                .faq-answer-container.open {
                    max-height: 500px;
                }
                .faq-answer {
                    padding: 15px 25px 25px;
                    font-size: 1rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    margin: 0;
                }
                .toggle-icon {
                    font-size: 1.5rem;
                    margin-left: 20px;
                    line-height: 1;
                }

                /* --- Media Queries --- */
                @media (max-width: 992px) {
                    .partner-section {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }
                    .hero-headline {
                        font-size: 2.8rem;
                    }
                    .section-title {
                        font-size: 2rem;
                    }
                }
                @media (max-width: 600px) {
                    .services-grid, .hybrid-cards-grid, .success-stories-grid {
                        grid-template-columns: 1fr;
                    }
                    .hero-section {
                        padding: 40px 0;
                    }
                    .hero-headline {
                        font-size: 2rem;
                    }
                    .hero-subheadline {
                        font-size: 1.2rem;
                    }
                    .cta-buttons a {
                        display: block;
                        margin: 10px 0;
                    }
                }
            `}</style>

            {/* --- HERO SECTION --- */}
            <header className="hero-section">
                <p className="header-subtitle">AI-POWERED LOCALIZATION SERVICES</p>
                <h1 className="hero-headline">AI-Powered Localization Services</h1>
                <h2 className="hero-subheadline">Your Global Voice Starts Here</h2>
                <p className="hero-intro">
                    Expanding into global markets requires more than translation – it demands localization that
                    preserves your brand's voice while resonating with diverse audiences. At Tevacraft AI Systems, 
                    we combine cutting-edge AI technology with linguistic expertise to deliver localization 
                    services that are fast, accurate, and culturally authentic.
                </p>
            </header>

            <div className="loc-container">
                {/* --- STRATEGIC PARTNER SECTION --- */}
                <section className="partner-section">
                    <div className="partner-content">
                        <h2 className="section-title" style={{textAlign: 'left', marginBottom: '10px'}}>
                            Your Strategic Localization Partner
                        </h2>
                        <p>
                            For organizations leading the way in global markets, we're more than just a localization 
                            service provider; we're your **strategic partner** in achieving international success. 
                            We understand that breaking language barriers isn't just about converting words; it's about 
                            connecting with audiences authentically across cultures.
                        </p>
                        <p>
                            Our collaborative approach ensures we understand your unique business goals and deliver 
                            localization services that help you achieve your global ambitions.
                        </p>
                    </div>
                    <div>
                        <h2>What Sets Us Apart:</h2>
                        <ul className="key-differentiators">
                            <li>Deep understanding of **cultural nuances** and market-specific requirements</li>
                            <li>**Industry-specific expertise** across multiple sectors</li>
                            <li>**Scalable solutions** that grow with your business</li>
                            <li>Consistent **brand voice** across all languages and regions</li>
                            <li>End-to-end **project management and support**</li>
                        </ul>
                    </div>
                </section>

                {/* --- AI-ENHANCED HYBRID APPROACH --- */}
                <section>
                    <p className="section-subtitle-small">The Power of AI-Enhanced Localization</p>
                    <h2 className="section-title">Intelligent Technology Meets Human Expertise</h2>
                    <p className="hero-intro" style={{marginBottom: '40px'}}>
                        At Tevacraft AI Systems, we believe in the power of **intelligent localization** – the seamless 
                        integration of AI technology with human linguistic expertise. Our services leverage the strengths 
                        of both, ensuring speed, accuracy, fluency, and cultural relevance.
                    </p>
                    <div className="hybrid-cards-grid">
                        {hybridApproachData.map((data, index) => (
                            <div key={index} className="hybrid-card">
                                <span className="hybrid-icon">{data.icon}</span>
                                <h3 className="hybrid-title">{data.title}</h3>
                                <ul className="hybrid-features-list">
                                    {data.features.map((feature, i) => <li key={i}>{feature}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- COMPREHENSIVE LOCALIZATION SERVICES --- */}
                <section style={{marginBottom: '80px'}}>
                    <p className="section-subtitle-small">The Complete Solution for Every Localization Need</p>
                    <h2 className="section-title">Comprehensive Localization Services</h2>
                    <div className="services-grid">
                        {comprehensiveServices.map((service) => (
                            <ServiceCard
                                key={service.number}
                                number={service.number}
                                title={service.title}
                                services={service.services}
                            />
                        ))}
                    </div>
                </section>
                
                {/* --- LOCALIZATION SUCCESS STORIES --- */}
                <section>
                    <p className="section-subtitle-small">Real-World Impact</p>
                    <h2 className="section-title">Localization Success Stories</h2>
                    <div className="success-stories-grid">
                        {/* Story 1 */}
                        <div className="story-card">
                            <h3 className="story-title">Global SaaS Platform Expansion</h3>
                            <div className="story-challenge">
                                <h4>Challenge:</h4>
                                <p>Technology company needed to localize their SaaS platform for 15 European and Asian markets within 3 months.</p>
                            </div>
                            <div className="story-solution">
                                <h4>Solution:</h4>
                                <p>Implemented AI-assisted translation with human review, centralized terminology, and API integration for continuous localization.</p>
                            </div>
                            <div className="story-results">
                                <h4>Results:</h4>
                                <ul>
                                    <li>Launched in 15 markets **on schedule**</li>
                                    <li>**40% cost savings** compared to fully manual translation</li>
                                    <li>**180% increase** in international revenue in first year</li>
                                </ul>
                            </div>
                        </div>

                        {/* Story 2 */}
                        <div className="story-card">
                            <h3 className="story-title">Healthcare Regulatory Documentation</h3>
                            <div className="story-challenge">
                                <h4>Challenge:</h4>
                                <p>Medical device manufacturer required accurate translation of regulatory documentation and user manuals for FDA/CE marking in 20 countries.</p>
                            </div>
                            <div className="story-solution">
                                <h4>Solution:</h4>
                                <p>Assigned specialized medical translators with regulatory expertise and implemented rigorous dual-linguist QA verification.</p>
                            </div>
                            <div className="story-results">
                                <h4>Results:</h4>
                                <ul>
                                    <li>**100% regulatory approval rate**</li>
                                    <li>Zero translation-related compliance issues</li>
                                    <li>Reduced regulatory approval timeline by **25%**</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Story 3 */}
                        <div className="story-card">
                            <h3 className="story-title">E-Commerce International Sales Growth</h3>
                            <div className="story-challenge">
                                <h4>Challenge:</h4>
                                <p>Online retailer wanted to expand to 10 new international markets with localized product catalogs, customer service, and marketing materials.</p>
                            </div>
                            <div className="story-solution">
                                <h4>Solution:</h4>
                                <p>Comprehensive e-commerce localization including 50,000+ product descriptions, content, and continuous localization workflow for new products.</p>
                            </div>
                            <div className="story-results">
                                <h4>Results:</h4>
                                <ul>
                                    <li>Successfully launched in all 10 markets within **6 months**</li>
                                    <li>**250% increase** in international sales within first year</li>
                                    <li>**30% reduction** in customer support tickets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* --- FAQ SECTION (Re-used) --- */}
                <section>
                    <p className="section-subtitle-small">Transparency and Clarity</p>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </section>

                {/* --- FINAL CTA SECTION --- */}
                <section className="cta-section">
                    <h2 className="cta-headline">Ready to Go Global?</h2>
                    <p>Take Your Business to Global Markets with Confidence.</p>
                    <div className="cta-buttons">
                        <a href="#quote" className="btn-primary">Request a Custom Quote</a>
                        <a href="#consultation" className="btn-secondary">Schedule a Free Consultation</a>
                    </div>
                    <div className="contact-details-cta">
                        Contact Our Localization Specialists: Email: <a href="mailto:coord@tevacraft.in">coord@tevacraft.in</a> | Phone / Whatsapp: 9010805455
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LocalizationServices;