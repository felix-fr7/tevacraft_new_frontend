import React from 'react';

// --- Custom Components ---

// Component for Core Services/Features
const ServiceCard = ({ number, title, content, points }) => (
    <div className="service-card">
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
const CTALink = ({ title, description, isPrimary = false }) => (
    <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); console.log(`${title} clicked`); }}
        className={`cta-link ${isPrimary ? 'cta-primary' : 'cta-secondary'}`}
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
                    /* Base Theme Colors (BLUE - General Tevacraft/Non-Healthcare Sections) */
                    --primary-color: #0b5cff; 
                    --text-light: #f0f4f8;
                    --text-dark: #1f2937;
                    --bg-dark: #071a33; 
                    --bg-light: #ffffff;
                    --muted-text: #4b5563;
                    --shadow-light: 0 4px 20px rgba(0, 0, 0, 0.05);
                    
                    /* 💚 Healthcare Theme Colors (GREEN - For this Page's Focus) */
                    --hc-primary: #4CAF50;    /* Bright Green - Main Accent/Background */
                    --hc-secondary: #00A389;  /* Deep Teal - Hover/Darker Accent */
                    --hc-bg-light: #e8f5e9;   /* Very Light Green - Subtle Background */
                    --hc-text-light: #ffffff;
                    --hc-text-dark: var(--text-dark);
                }

                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { font-family: 'Inter', sans-serif; background-color: var(--bg-light); color: var(--text-dark); line-height: 1.6; }
                .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 80px 0; }
                .section-title { font-size: 2.8rem; font-weight: 800; color: var(--hc-text-dark); text-align: center; margin-bottom: 50px; }
                .divider { height: 1px; background-color: #e0e0e0; margin: 40px 0; }

                /* --- 1. Hero Section (Green Theme Applied as requested in previous steps for high contrast) --- */
                .hc-hero-section {
                    background-color: var(--hc-primary); /* Bright Green Background */
                    color: var(--hc-text-light); /* White Text */
                    padding: 120px 5%; 
                    text-align: center;
                    position: relative;
                }
                .hc-hero-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 5px, transparent 5px, transparent 15px);
                    opacity: 0.8;
                }
                .hc-hero-content {
                    max-width: 800px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }
                .hc-hero-tagline {
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                    opacity: 0.8;
                }
                .hc-hero-title {
                    font-size: 3.5rem; 
                    font-weight: 900;
                    margin-bottom: 20px;
                    line-height: 1.1;
                }
                .hc-hero-subtitle {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 30px;
                }
                .hc-hero-description {
                    font-size: 1.15rem;
                    margin-bottom: 40px;
                    opacity: 0.9;
                }

                /* --- 2. Core Services Section --- */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 35px;
                    padding-top: 20px;
                }
                .service-card {
                    background-color: var(--hc-bg-light); 
                    border: 1px solid #c8e6c9;
                    border-radius: 12px;
                    padding: 30px;
                    transition: transform 0.3s, box-shadow 0.3s;
                    box-shadow: var(--shadow-light);
                    height: 100%;
                }
                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .card-number {
                    background-color: var(--hc-primary);
                    color: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.1rem;
                    margin-right: 15px;
                }
                .card-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--hc-primary);
                }
                .card-content {
                    color: var(--muted-text);
                    margin-bottom: 15px;
                }
                .service-points {
                    list-style: none;
                    padding-left: 0;
                }
                .point-item {
                    font-size: 0.95rem;
                    padding-left: 20px;
                    position: relative;
                    margin-bottom: 8px;
                    color: var(--text-dark);
                }
                .point-item::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: var(--hc-secondary);
                    font-weight: 800;
                }
                
                /* --- 3. Other Information Sections (WHY TEVACRAFT, INDUSTRIES, PROJECTS) --- */
                .info-section {
                    background-color: var(--hc-bg-light);
                    padding: 60px 5%;
                    margin-top: 50px;
                    border-radius: 15px;
                }
                .list-title {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: var(--hc-primary);
                    margin-bottom: 30px;
                    text-align: center;
                }
                .info-list {
                    list-style: none;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 20px;
                }
                .list-item {
                    background-color: white;
                    padding: 18px 25px;
                    border-left: 5px solid var(--hc-secondary);
                    border-radius: 6px;
                    box-shadow: var(--shadow-light);
                    font-weight: 600;
                    color: var(--text-dark);
                }
                
                /* --- 4. Vision & Contact Section --- */
                .vision-section {
                    text-align: center;
                    padding: 60px 5%;
                }
                .vision-quote {
                    font-size: 1.8rem;
                    font-style: italic;
                    color: var(--hc-secondary);
                    margin-bottom: 20px;
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .vision-text {
                    font-size: 1.1rem;
                    color: var(--muted-text);
                    max-width: 800px;
                    margin: 0 auto 50px;
                }
                
                /* --- 5. Partner With Us (Contact Info) --- */
                .contact-info {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 30px;
                    margin-bottom: 50px;
                }
                .contact-item {
                    padding: 20px 30px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    background-color: #f7f9fb;
                    text-align: left;
                    font-weight: 600;
                    min-width: 250px;
                }
                .contact-label {
                    color: var(--hc-primary);
                    display: block;
                    font-size: 0.9rem;
                    margin-bottom: 5px;
                }
                .contact-value {
                    font-size: 1.1rem;
                    color: var(--text-dark);
                }

                /* --- 6. Call To Action (CTA) --- */
                .cta-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 25px;
                    margin-top: 50px;
                }
                .cta-link {
                    background-color: var(--hc-bg-light);
                    border-radius: 10px;
                    padding: 30px;
                    text-decoration: none;
                    transition: background-color 0.3s, transform 0.3s;
                    border: 1px solid #d4e7d5;
                }
                .cta-link:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(76, 175, 80, 0.2);
                }
                .cta-primary {
                    background-color: var(--hc-primary);
                    color: white;
                }
                .cta-primary:hover {
                    background-color: var(--hc-secondary);
                }
                .cta-primary .link-title, .cta-primary .link-description {
                    color: white;
                }

                .link-title {
                    font-size: 1.3rem;
                    font-weight: 800;
                    margin-bottom: 8px;
                    color: var(--hc-primary);
                }
                .link-description {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                }

                /* --- SEO Description (Hidden, for visibility only) --- */
                .seo-description {
                    display: none; 
                }

                /* --- Media Queries --- */
                @media (max-width: 768px) {
                    .hc-hero-title { font-size: 2.5rem; }
                    .hc-hero-subtitle { font-size: 1.2rem; }
                    .section-title { font-size: 2.2rem; }
                    .info-list { grid-template-columns: 1fr; }
                    .services-grid, .cta-grid { grid-template-columns: 1fr; }
                    .contact-info { flex-direction: column; align-items: stretch; }
                    .contact-item { text-align: center; }
                    .vision-quote { font-size: 1.4rem; }
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
                        {services.map(service => (
                            <ServiceCard key={service.number} {...service} />
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

                    <h2 className="section-title" style={{marginTop: '60px', marginBottom: '30px'}}>CALL TO ACTION</h2>
                    <div className="cta-grid">
                        <CTALink 
                            title="Schedule a Free Consultation →" 
                            description="Book a call to discuss how AI can transform your medical workflow." 
                            isPrimary={true} 
                        />
                        <CTALink 
                            title="Become a Data Partner →" 
                            description="Join our hospital & diagnostic center network to co-develop anonymized medical datasets ethically." 
                        />
                        <CTALink 
                            title="Request a Demo →" 
                            description="See how our annotation and validation pipeline works in action." 
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