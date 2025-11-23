import React from 'react';

// --- Custom Components ---

// Component for Core Services/Features
const ServiceCard = ({ number, title, content, points, delay }) => (
    <div 
        className="service-card"
        style={{ '--delay': `${delay}ms` }}
    >
        <div className="card-header">
            <span className="card-number">{number}</span>
            <h3 className="card-title">{title}</h3>
        </div>
        <p className="card-content">{content}</p>
        {points && (
            <ul className="service-points">
                {points.map((point, index) => (
                    <li key={index} className="point-item">{point}</li>
                ))}
            </ul>
        )}
    </div>
);

// Component for Why Tevacraft/Industries Lists
const SimpleListSection = ({ title, items }) => (
    <div className="simple-list-section">
        <h3 className="list-title">{title}</h3>
        <ul className="info-list">
            {items.map((item, index) => (
                <li key={index} className="list-item">{item}</li>
            ))}
        </ul>
    </div>
);

// Component for CTA Links
const CTALink = ({ title, description, isPrimary = false, delay }) => (
    <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); console.log(`${title} clicked`); }}
        className={`cta-link ${isPrimary ? 'cta-primary' : 'cta-secondary'}`}
        style={{ '--delay': `${delay}ms` }}
    >
        <h4 className="link-title">{title}</h4>
        <p className="link-description">{description}</p>
    </a>
);

// Main Component
const HealthcareSolutionsPage = () => {
    
    // Data structures for the content
    const services = [
        { 
            number: 1, 
            title: "Medical Data Annotation & Labeling", 
            content: "Precise data fuels powerful AI. We provide expert-verified annotation for medical imaging, clinical text, and biosignal data.",
            points: [
                "Radiology - X-ray, CT, MRI, Ultrasound labeling",
                "Pathology - cell segmentation, tumor boundaries",
                "ECG / EEG - arrhythmia and signal event labeling",
                "EHR / Clinical Notes - NER, relation extraction",
                "Speech / Transcripts - doctor-patient conversation labeling"
            ]
        },
        { 
            number: 2, 
            title: "Data Anonymization & Compliance Solutions", 
            content: "Protecting patient privacy is our highest responsibility. Tevacraft ensures every data pipeline is HIPAA, GDPR, and DPDP Act compliant.",
            points: [
                "Full removal of PHI (names, IDs, hospitals)",
                "AES-256 encrypted storage & secure cloud access",
                "Ethical & legal documentation for all projects",
                "Compliance reports for audits and regulators"
            ]
        },
        { 
            number: 3, 
            title: "AI Model Support & Validation", 
            content: "Whether you're developing a diagnostic algorithm or validating a device model, our team helps you test and refine AI systems using unbiased, independent data.",
            points: [
                "Model performance evaluation (accuracy, bias, F1 scores)",
                "Dataset curation and ground truth validation",
                "Regulatory-ready validation reports",
                "Clinical test environment simulations"
            ]
        },
        { 
            number: 4, 
            title: "Healthcare Data Partnerships", 
            content: "Tevacraft collaborates with diagnostic centers, medical colleges, and hospitals to responsibly unlock the value of medical data.",
            points: [
                "Secure data anonymization handled by Tevacraft",
                "Co-ownership or revenue sharing on anonymized datasets",
                "Free AI screening tools and analytics dashboards",
                "Co-branding as a Tevacraft Data Partner"
            ]
        },
        { 
            number: 5, 
            title: "Custom Healthcare AI Solutions", 
            content: "We build complete AI systems for real clinical challenges. Every solution is tailored to your workflow, integrating securely with existing hospital systems or cloud APIs.",
            points: [
                "Clinical Chatbots & Virtual Health Assistants",
                "Diagnostic Decision Support Models",
                "Automated Medical Report Summarization",
                "Voice-to-Text Clinical Dictation Systems"
            ]
        }
    ];

    const whyTevacraftItems = [
        "Data Security First: Fully encrypted, compliant, and audit-ready pipelines",
        "Medical-Expert QA: Every annotation validated by healthcare professionals",
        "Custom Workflows: Designed for your specialty and dataset format",
        "Scalable Infrastructure: Cloud or on-prem solutions for projects of any size",
        "Global Delivery: Clients across India, Europe, and North America"
    ];

    const industryItems = [
        "Hospitals & Diagnostic Centers",
        "MedTech & HealthTech Startups",
        "Medical Universities & Research Labs",
        "Pharmaceutical R&D & CROs",
        "Telemedicine & Digital Health Platforms"
    ];

    const projectItems = [
        "Chest X-ray Dataset for Pneumonia Detection (20,000 labeled scans)",
        "Oncology Pathology Slide Segmentation Dataset",
        "EHR NLP Corpus for Clinical Entity Extraction",
        "ECG Signal Annotation for Cardiac AI Models",
        "Medical Voice Dataset for Multilingual Health Assistants"
    ];

    return (
        <div className="tevacraft-healthcare-page">
            <style>{`
                /* --- General & Variable Setup --- */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
                
                :root {
                    /* Green Theme Variables */
                    --brand-color: #4CAF50; /* Green */
                    --secondary-color: #2E7D32;
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --border-radius: 12px;
                    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.08);
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                    --accent-yellow: #FFC300;
                    --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.15);
                }

                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { font-family: 'Inter', sans-serif; background-color: var(--bg-light); color: var(--text-dark); line-height: 1.6; }
                .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 80px 0; }
                .section-title { font-size: 2.8rem; font-weight: 800; color: var(--text-dark); text-align: center; margin-bottom: 50px; }
                .divider { height: 1px; background-color: #e0e0e0; margin: 40px 0; }

                /* --- 1. Hero Section (Green Gradient) --- */
                .hc-hero-section {
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
                .hc-hero-section::before {
                    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; opacity: 0.7; pointer-events: none;
                    background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 2px, transparent 2px, transparent 20px);
                    background-size: 100px 100px, 100px 100px; animation: robotToolsFlow1 30s linear infinite, robotToolsFlow2 40s linear reverse infinite;
                }
                .hc-hero-section::after {
                    content: ''; position: absolute; top: 50%; left: -20%; width: 40%; height: 100%; transform: translateY(-50%) rotate(10deg);
                    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 10%, rgba(76, 175, 80, 0.3) 50%, rgba(255, 255, 255, 0.1) 90%, transparent);
                    filter: blur(80px); z-index: 2; opacity: 0.8; pointer-events: none; animation: teachingSpotlight 25s ease-in-out infinite alternate;
                }
                
                .hc-hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 10; }
                .hc-hero-content::before {
                    content: ''; position: absolute; top: 50%; left: 50%; width: 50px; height: 50px;
                    background: radial-gradient(circle, var(--hero-glow-color) 0%, transparent 70%); border-radius: 50%; transform: translate(-50%, -50%); z-index: 5; pointer-events: none; animation: quantumPulse 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
                }

                .hc-hero-tagline { font-size: 1rem; font-weight: 700; letter-spacing: 2px; margin-bottom: 15px; text-transform: uppercase; opacity: 0.8; }
                .hc-hero-title { font-size: 3.5rem; font-weight: 900; margin-bottom: 20px; line-height: 1.1; animation: slideInDown 1.5s ease-out; }
                .hc-hero-subtitle { font-size: 1.5rem; font-weight: 600; margin-bottom: 30px; animation: slideInDown 1.8s ease-out; }
                .hc-hero-description { font-size: 1.15rem; margin-bottom: 40px; opacity: 0.9; }

                /* --- 2. Core Services Section --- */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 35px;
                    padding-top: 20px;
                }
                
                @keyframes fadeInRise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

                .service-card {
                    background-color: var(--bg-subtle); 
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: var(--shadow-medium);
                    height: 100%;
                    border: 1px solid #e0e0e0;
                    transition: transform 0.3s, box-shadow 0.3s;
                    
                    position: relative; overflow: hidden; z-index: 1;
                    opacity: 0; transform: translateY(30px); animation: fadeInRise 0.8s forwards; animation-delay: var(--delay);
                }
                
                /* Hover Gradient Fill */
                .service-card::before { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; background: linear-gradient(135deg, #1e4d2b 0%, #4CAF50 100%); transition: height 0.4s ease-in-out; z-index: -1; }
                .service-card:hover::before { height: 100%; }
                .service-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-premium); border-color: transparent; }

                .card-header { display: flex; align-items: center; margin-bottom: 15px; }
                
                .card-number { background-color: var(--brand-color); color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: 700; font-size: 1.1rem; margin-right: 15px; transition: all 0.3s ease; }
                .service-card:hover .card-number { background-color: white; color: var(--brand-color); }
                
                .card-title { font-size: 1.5rem; font-weight: 700; color: var(--brand-color); transition: color 0.3s ease; }
                .service-card:hover .card-title { color: white; }
                
                .card-content { color: var(--muted-text); margin-bottom: 15px; transition: color 0.3s ease; }
                .service-card:hover .card-content { color: white; }
                
                .service-points { list-style: none; padding-left: 0; }
                .point-item { font-size: 0.95rem; padding-left: 20px; position: relative; margin-bottom: 8px; color: var(--text-dark); transition: color 0.3s ease; }
                .service-card:hover .point-item { color: white; }
                
                .point-item::before { content: '✓'; position: absolute; left: 0; color: var(--brand-color); font-weight: 800; transition: color 0.3s ease; }
                .service-card:hover .point-item::before { color: var(--accent-yellow); }
                
                /* --- 3. Other Information Sections --- */
                .info-section {
                    background-color: var(--bg-subtle);
                    padding: 60px 5%;
                    margin-top: 50px;
                    border-radius: 15px;
                }
                .list-title { font-size: 2.2rem; font-weight: 800; color: var(--brand-color); margin-bottom: 30px; text-align: center; }
                .info-list { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; }
                
                .list-item {
                    background-color: white;
                    padding: 18px 25px;
                    border-left: 5px solid var(--secondary-color);
                    border-radius: 6px;
                    box-shadow: var(--shadow-medium);
                    font-weight: 600;
                    color: var(--text-dark);
                    transition: transform 0.3s;
                }
                .list-item:hover { transform: translateX(10px); }
                
                /* --- 4. Vision & Contact Section --- */
                .vision-section { text-align: center; padding: 60px 5%; }
                .vision-quote { font-size: 1.8rem; font-style: italic; color: var(--secondary-color); margin-bottom: 20px; max-width: 900px; margin-left: auto; margin-right: auto; }
                .vision-text { font-size: 1.1rem; color: var(--muted-text); max-width: 800px; margin: 0 auto 50px; }
                
                /* --- 5. Partner With Us (Contact Info) --- */
                .contact-info { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin-bottom: 50px; }
                .contact-item { padding: 20px 30px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f7f9fb; text-align: left; font-weight: 600; min-width: 250px; }
                .contact-label { color: var(--brand-color); display: block; font-size: 0.9rem; margin-bottom: 5px; }
                .contact-value { font-size: 1.1rem; color: var(--text-dark); }

                /* --- 6. Call To Action (CTA) --- */
                .cta-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 50px; }
                
                .cta-link {
                    background-color: var(--bg-subtle);
                    border-radius: 10px;
                    padding: 30px;
                    text-decoration: none;
                    transition: transform 0.3s, box-shadow 0.3s;
                    border: 1px solid #d4e7d5;
                    position: relative; overflow: hidden; z-index: 1;
                    opacity: 0; transform: translateY(30px); animation: fadeInRise 0.8s forwards; animation-delay: var(--delay);
                }
                
                .cta-link::before { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; background: linear-gradient(135deg, #1e4d2b 0%, #4CAF50 100%); transition: height 0.4s ease-in-out; z-index: -1; }
                .cta-link:hover::before { height: 100%; }
                .cta-link:hover { transform: translateY(-5px); box-shadow: var(--shadow-premium); border-color: transparent; }
                
                .cta-primary { background-color: var(--brand-color); color: white; }
                .cta-primary::before { background: linear-gradient(135deg, #2E7D32 0%, #1e4d2b 100%); } /* Darker gradient for primary */

                .link-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 8px; color: var(--brand-color); transition: color 0.3s ease; }
                .cta-primary .link-title { color: white; }
                .cta-link:hover .link-title { color: white; }
                
                .link-description { font-size: 0.95rem; color: var(--muted-text); transition: color 0.3s ease; }
                .cta-primary .link-description { color: rgba(255,255,255,0.9); }
                .cta-link:hover .link-description { color: white; }

                .seo-description { display: none; }

                /* --- Media Queries --- */
                @media (max-width: 768px) {
                    .hc-hero-title { font-size: 2.5rem; }
                    .hc-hero-subtitle { font-size: 1.2rem; }
                    .info-list { grid-template-columns: 1fr; }
                    .services-grid, .cta-grid { grid-template-columns: 1fr; }
                    .contact-info { flex-direction: column; align-items: stretch; }
                    .contact-item { text-align: center; }
                    .vision-quote { font-size: 1.4rem; }
                }
                @media (max-width: 600px) {
                    .hc-hero-section::after, .hc-hero-section::before, .hc-hero-content::before { display: none; }
                }
            `}</style>

            {/* 1. Hero Section (Green Theme) */}
            <header className="hc-hero-section">
                <div className="hc-hero-content">
                    <p className="hc-hero-tagline">TEVACRAFT AI SYSTEMS - HEALTHCARE AI SOLUTIONS</p>
                    <h1 className="hc-hero-title">
                        Smarter, Safer, and More Ethical Intelligence for Modern Healthcare
                    </h1>
                    <p className="hc-hero-subtitle">
                        At Tevacraft AI Systems, we believe the future of medicine is **intelligent - not artificial**.
                    </p>
                    <p className="hc-hero-description">
                        Our Healthcare AI division empowers hospitals, medical device companies, and healthtech startups to use data responsibly, train accurate AI models, and deliver better care outcomes. We combine deep medical expertise with cutting-edge AI technology to turn raw healthcare data into meaningful, compliant, and life-changing insights.
                    </p>
                </div>
            </header>

            <main>
                {/* 2. Core Services Section */}
                <div className="container">
                    <h2 className="section-title">OUR CORE HEALTHCARE AI SERVICES</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard 
                                key={service.number} 
                                {...service} 
                                delay={index * 50}
                            />
                        ))}
                    </div>
                </div>

                <div className="divider"></div>

                {/* 3. Why Tevacraft Section */}
                <div className="container info-section">
                    <SimpleListSection title="WHY TEVACRAFT" items={whyTevacraftItems} />
                </div>

                {/* 4. Industries We Serve Section */}
                <div className="container">
                    <SimpleListSection title="INDUSTRIES WE SERVE" items={industryItems} />
                </div>

                {/* 5. Sample Projects Section */}
                <div className="container info-section">
                    <SimpleListSection title="SAMPLE HEALTHCARE AI PROJECTS" items={projectItems} />
                </div>
                
                {/* 6. Our Vision Section */}
                <div className="vision-section">
                    <h2 className="section-title">OUR VISION</h2>
                    <p className="vision-quote">
                        "To enable safe, ethical, and intelligent healthcare AI - powered by **precise data and human insight**."
                    </p>
                    <p className="vision-text">
                        At Tevacraft, we are building the foundation for responsible healthcare innovation - where doctors, data, and AI work together to improve every patient's outcome.
                    </p>
                </div>

                <div className="divider"></div>

                {/* 7. Partner With Us (Contact & CTA) */}
                <div className="container">
                    <h2 className="section-title">PARTNER WITH US</h2>
                    <p className="vision-text">Let's build your next breakthrough in healthcare AI. Whether you need compliant data pipelines, annotated datasets, or complete AI development - Tevacraft AI Systems is your trusted partner from concept to deployment.</p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="contact-label">Email</span>
                            <span className="contact-value">biz.operations@tevacraft.in</span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-label">Phone / WhatsApp</span>
                            <span className="contact-value">+91 9010805455</span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-label">Locations</span>
                            <span className="contact-value">Hyderabad | Chennai | Bangalore</span>
                        </div>
                    </div>

                    
                    <div className="cta-grid">
                        <CTALink 
                            title="Schedule a Free Consultation →" 
                            description="Book a call to discuss how AI can transform your medical workflow." 
                            isPrimary={true} 
                            delay={0}
                        />
                        <CTALink 
                            title="Become a Data Partner →" 
                            description="Join our hospital & diagnostic center network to co-develop anonymized medical datasets ethically." 
                            delay={100}
                        />
                        <CTALink 
                            title="Request a Demo →" 
                            description="See how our annotation and validation pipeline works in action." 
                            delay={200}
                        />
                    </div>
                </div>
            </main>

            {/* 8. SEO Description (Hidden element for search engines) */}
            <div className="seo-description">
                Tevacraft AI Systems - Healthcare AI solutions for hospitals, startups, and medtech companies. Secure, HIPAA & DPDP-compliant medical data annotation, anonymization, and AI model validation to build the future of ethical, intelligent healthcare.
            </div>
            
        </div>
    );
};

export default HealthcareSolutionsPage;