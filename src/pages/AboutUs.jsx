import React from 'react';

// Reusable component for displaying a core value
const ValueItem = ({ title, description, delay }) => (
    <div 
        className="value-item"
        style={{ '--delay': `${delay}ms` }}
    >
        <h4 className="value-title">{title}</h4>
        <p className="value-description">{description}</p>
    </div>
);

// Reusable component for displaying a "Why Partner" bullet point
const BenefitItem = ({ text }) => (
    <li className="benefit-list-item">{text}</li>
);


const AboutUs = () => {

    const coreValues = [
        {
            title: "Innovation",
            description: "We stay at the forefront of AI technology, continuously exploring new capabilities and approaches to solve business challenges.",
            delay: 0,
        },
        {
            title: "Integrity",
            description: "We operate with transparency and honesty, building trust through consistent delivery and open communication.",
            delay: 100,
        },
        {
            title: "Excellence",
            description: "We maintain the highest standards in everything we do, from code quality to customer service.",
            delay: 200,
        },
        {
            title: "Collaboration",
            description: "We work as partners with our clients, combining our expertise with their domain knowledge to create optimal solutions.",
            delay: 300,
        },
        {
            title: "Impact",
            description: "We measure our success by the tangible business outcomes our solutions deliver for clients.",
            delay: 400,
        },
    ];

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
                /* --- Color Variables --- */
                :root {
                    --brand-color: #4CAF50; 
                    --secondary-color: #2E7D32;
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --accent-yellow: #FFC300; 
                    --accent-bg: #e6e9ed;
                    
                    --border-radius: 10px;
                    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.05);
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                    --shadow-card: 0 8px 25px rgba(0, 0, 0, 0.05);
                    --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.15);
                }

                /* --- General Layout --- */
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: var(--bg-light);
                    color: var(--text-dark);
                    margin: 0;
                    padding: 0;
                }
                .about-us-wrapper {
                    display: flex;
                    flex-direction: column;
                }
                
                /* --- FIXED CONTAINER SPACING --- */
                .about-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                    /* Reduced padding from 80px to 40px to reduce gap */
                    padding: 40px 0;
                }

                /* ========================================= */
                /* --- HERO SECTION --- */
                /* ========================================= */
                .hero-section {
                    color: var(--text-light);
                    padding: 130px 5%; 
                    text-align: center;
                    position: relative;
                    overflow: hidden; 
                    animation: fadeIn 1.2s ease-in-out;
                    background: linear-gradient(135deg, #0a150a 0%, #1e4d2b 60%, #4CAF50 100%);
                }
                
                /* Animations & Overlay (Same as before) */
                @keyframes robotToolsFlow1 { 0% { background-position: 0 0; } 100% { background-position: 200px 200px; } }
                @keyframes robotToolsFlow2 { 0% { background-position: 0 0; } 100% { background-position: -150px 150px; } }
                @keyframes teachingSpotlight { 0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } 50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } }
                @keyframes quantumPulse { 0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); } 50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); } }
                @keyframes slideInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

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

                /* --- Header Section (Our Story) --- */
                .story-section {
                    /* CHANGED: Removed margin-bottom to close gap */
                    margin-bottom: 0px; 
                    padding: 40px;
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }
                .story-header { grid-column: 1 / -1; text-align: center; margin-bottom: 20px; }
                .story-subtitle { font-size: 1rem; font-weight: 600; color: var(--brand-color); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
                .story-headline { font-size: 2.5rem; font-weight: 800; color: var(--text-dark); margin: 0 0 20px 0; }
                .story-text { font-size: 1.15rem; color: var(--muted-text); line-height: 1.6; border-left: 3px solid var(--brand-color); padding-left: 20px; }

                .mission-vision-block h3 { font-size: 1.8rem; font-weight: 700; color: var(--text-dark); margin: 0 0 15px 0; border-bottom: 2px solid var(--accent-bg); padding-bottom: 10px; }
                .mission-vision-block p { font-size: 1.05rem; color: var(--muted-text); line-height: 1.6; margin-bottom: 30px; }

                /* --- Our Values Section (GAP ADJUSTED) --- */
                .values-section {
                    /* CHANGED: Reduced top padding to 30px */
                    padding: 30px 0 50px 0; 
                    background-color: var(--bg-light);
                    margin-bottom: 20px;
                    text-align: center;
                }
                .values-header { margin-bottom: 30px; }
                .values-header h2 { font-size: 2.2rem; font-weight: 800; color: var(--text-dark); margin: 0; }
                .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; max-width: 1000px; margin: 0 auto; }
                
                @keyframes fadeInRise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

                .value-item {
                    background-color: var(--bg-subtle); padding: 25px; border-radius: var(--border-radius); box-shadow: var(--shadow-light); text-align: left; transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative; overflow: hidden; z-index: 1; opacity: 0; transform: translateY(30px); animation: fadeInRise 0.8s forwards; animation-delay: var(--delay);
                }
                .value-item::before { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; background: linear-gradient(135deg, #1e4d2b 0%, #4CAF50 100%); transition: height 0.4s ease-in-out; z-index: -1; }
                .value-item:hover::before { height: 100%; }
                .value-item:hover { transform: translateY(-5px); box-shadow: var(--shadow-premium); }
                .value-title { font-size: 1.25rem; font-weight: 700; color: var(--brand-color); margin: 0 0 10px 0; transition: color 0.3s ease; }
                .value-item:hover .value-title { color: #ffffff; }
                .value-description { font-size: 0.95rem; color: var(--muted-text); line-height: 1.5; margin: 0; transition: color 0.3s ease; }
                .value-item:hover .value-description { color: #ffffff; }

                /* --- Why Partner Section --- */
                .partner-section { margin-bottom: 80px; padding-top: 20px; }
                .partner-section h2 { font-size: 2.2rem; font-weight: 800; color: var(--text-dark); margin-bottom: 40px; text-align: center; }
                .benefit-list { list-style: none; padding: 0; margin: 0; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; display: grid; }
                .benefit-list-item { font-size: 1.05rem; color: var(--text-dark); padding: 20px; background-color: var(--bg-subtle); border-radius: var(--border-radius); position: relative; padding-left: 50px; font-weight: 500; box-shadow: var(--shadow-light); }
                .benefit-list-item::before { content: '✨'; font-size: 1.5rem; position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--brand-color); }
                
                /* --- Footer --- */
                .page-footer { background-color: #0a150a; color: rgba(255, 255, 255, 0.7); text-align: center; padding: 30px 5%; font-size: 0.9rem; border-top: 4px solid var(--brand-color); }

                /* --- Responsiveness --- */
                @media (max-width: 1024px) { .hero-headline { font-size: 3.5rem; } }
                @media (max-width: 900px) {
                    .about-us-wrapper { padding: 0px 0; }
                    .story-section { grid-template-columns: 1fr; gap: 40px; padding: 30px; }
                    .story-headline { font-size: 2rem; }
                    .story-text { font-size: 1.05rem; border-left: none; border-top: 3px solid var(--brand-color); padding-left: 0; padding-top: 20px; margin-top: 20px; }
                    .values-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
                }
                @media (max-width: 600px) {
                    .about-us-wrapper { padding: 0px 0; }
                    .hero-headline { font-size: 2.2rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    .hero-section { padding: 80px 5%; }
                    .story-headline { font-size: 1.75rem; margin-bottom: 15px; }
                    .values-grid { grid-template-columns: 1fr; gap: 20px; }
                    .values-header h2, .partner-section h2 { font-size: 1.8rem; margin-bottom: 30px; }
                    .benefit-list { grid-template-columns: 1fr; gap: 15px; }
                    .benefit-list-item { font-size: 1rem; padding: 15px; padding-left: 45px; }
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before { display: none; }
                }
            `}</style>

            {/* --- Animated Hero Section --- */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Your Partner in AI-Powered Digital Transformation
                    </h1>
                    <p className="hero-subheadline">
                        We bridge the gap between complex AI technology and real-world business value, delivering solutions that drive growth and efficiency.
                    </p>
                </div>
            </section>

            <div className="about-container">
                {/* --- OUR STORY Section --- */}
                <section className="story-section">
                    <div className="story-header">
                        <p className="story-subtitle">ABOUT US</p>
                        <h2 className="story-headline">Building the Future, One Algorithm at a Time</h2>
                    </div>
                    
                    {/* Left Column: Story */}
                    <div>
                        <h3 className="sub-section-title" style={{fontSize:'1.5rem', fontWeight:'700', marginBottom:'15px'}}>Our Story</h3>
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
                            To <strong>democratize AI technology</strong> by delivering innovative, reliable, and cost-effective AI
                            solutions that transform how businesses operate and compete in the digital age.
                        </p>
                        <h3>Our Vision</h3>
                        <p>
                            To be the <strong>trusted partner of choice</strong> for organizations seeking to harness the power of AI,
                            known for our technical expertise, business acumen, and commitment to client success.
                        </p>
                    </div>
                </section>
            </div>

            {/* --- OUR VALUES Section --- */}
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
                                delay={value.delay}
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