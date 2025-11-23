import React, { useState } from 'react'; 

// --- Reusable Component for Way to Connect ---
const ConnectMethod = ({ title, description, icon, delay }) => (
    <div 
        className="connect-method"
        style={{ '--delay': `${delay}ms` }}
    >
        <span className="method-icon">{icon}</span>
        <h3 className="method-title">{title}</h3>
        <p className="method-description">{description}</p>
    </div>
);


const ContactUs = () => {
    const [isCopied, setIsCopied] = useState(false); 

    const EMAIL_ADDRESS = "biz.operations@tevacraft.in";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(EMAIL_ADDRESS)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 3000); 
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };


    const connectMethods = [
        {
            title: "Schedule a Consultation",
            description: "Book a free 30-minute consultation to discuss your AI needs and explore potential solutions.",
            icon: "🗓️",
            delay: 0,
        },
        {
            title: "Request a Proposal",
            description: "Share your project requirements and receive a detailed proposal outlining our approach, timeline, and investment.",
            icon: "📝",
            delay: 100,
        },
        {
            title: "General Inquiries",
            description: "Have questions? Reach out to our team for information about our services, capabilities, or anything else.",
            icon: "💡",
            delay: 200,
        },
    ];

    return (
        <div className="contact-us-wrapper">
            <style jsx>{`
                /* --- Color Variables (Green Theme) --- */
                :root {
                    --brand-color: #4CAF50; /* Green */
                    --secondary-color: #2E7D32;
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --border-radius: 10px;
                    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.05);
                    --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.1); 
                    --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.15);
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                    --accent-yellow: #FFC300;
                }

                /* --- General Layout --- */
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: var(--bg-light);
                    color: var(--text-dark);
                    margin: 0;
                    padding: 0;
                }
                .contact-us-wrapper {
                    display: flex;
                    flex-direction: column;
                }
                .contact-container {
                    width: 90%;
                    max-width: 1200px; 
                    margin: 0 auto; 
                    padding: 80px 0;
                }

                /* ========================================= */
                /* --- HERO SECTION (Green Gradient) --- */
                /* ========================================= */
                .hero-section {
                    color: var(--text-light);
                    padding: 130px 5%; 
                    text-align: center;
                    position: relative;
                    overflow: hidden; 
                    animation: fadeIn 1.2s ease-in-out;
                    
                    /* Green Linear Gradient */
                    background: linear-gradient(135deg, #0a150a 0%, #1e4d2b 60%, #4CAF50 100%);
                }
                
                /* Hero Animations */
                @keyframes robotToolsFlow1 { 0% { background-position: 0 0; } 100% { background-position: 200px 200px; } }
                @keyframes robotToolsFlow2 { 0% { background-position: 0 0; } 100% { background-position: -150px 150px; } }
                @keyframes teachingSpotlight { 0% { left: -20%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } 50% { left: 50%; transform: translateY(-50%) rotate(-5deg); opacity: 1; } 100% { left: 120%; transform: translateY(-50%) rotate(10deg); opacity: 0.7; } }
                @keyframes quantumPulse { 0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); } 50% { opacity: 0.8; transform: translate(-50%, -50%) scale(3); } 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(6); } }
                @keyframes slideInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

                /* Overlay Elements */
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

                /* --- Main Content Layout --- */
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr; 
                    gap: 40px; 
                    max-width: 800px; 
                    margin: 0 auto; 
                }
                
                /* --- Info / Connect Methods Section --- */
                .contact-info-section {
                    display: flex;
                    flex-direction: column;
                    gap: 40px; 
                }
                
                @keyframes fadeInRise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

                /* --- Connect Method Card (WITH HOVER EFFECT) --- */
                .connect-method {
                    background-color: var(--bg-subtle);
                    padding: 25px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    text-align: left;
                    margin-bottom: 20px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #e0e0e0;
                    
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInRise 0.8s forwards;
                    animation-delay: var(--delay);
                }
                
                /* Hover Gradient Fill */
                .connect-method::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0%; 
                    background: linear-gradient(135deg, #1e4d2b 0%, #4CAF50 100%);
                    transition: height 0.4s ease-in-out;
                    z-index: -1; 
                }

                .connect-method:hover::before {
                    height: 100%;
                }

                .connect-method:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-premium);
                    border-color: transparent;
                }
                
                .method-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 15px 0 10px 0;
                    transition: color 0.3s ease;
                }
                .connect-method:hover .method-title { color: #ffffff; }

                .method-description {
                    font-size: 1rem;
                    color: var(--muted-text);
                    line-height: 1.5;
                    margin: 0;
                    transition: color 0.3s ease;
                }
                .connect-method:hover .method-description { color: #ffffff; }
                
                .method-icon {
                    font-size: 2rem;
                    transition: transform 0.3s ease;
                    display: inline-block;
                }
                .connect-method:hover .method-icon { transform: scale(1.1); }

                /* --- Contact Info Block --- */
                .info-block {
                    padding: 30px; 
                    background-color: var(--bg-light);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    border-top: 4px solid var(--brand-color);
                }

                .info-block h2 {
                    font-size: 1.8rem;
                    color: var(--text-dark);
                    font-weight: 700;
                    margin-bottom: 20px;
                    border-bottom: 2px solid var(--bg-subtle);
                    padding-bottom: 10px;
                }

                /* Contact Details Styling */
                .contact-details p {
                    font-size: 1.05rem;
                    margin: 15px 0; 
                    color: var(--muted-text);
                    display: flex; 
                    align-items: center;
                    flex-wrap: wrap;
                }
                .contact-details strong {
                    color: var(--text-dark);
                    font-weight: 600;
                    min-width: 80px; 
                    display: inline-block;
                }
                .contact-details a {
                    color: var(--brand-color);
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .contact-details a:hover {
                    text-decoration: underline;
                    color: var(--secondary-color); 
                }

                /* --- Copy Button --- */
                .email-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .copy-button {
                    background: var(--bg-subtle);
                    border: 1px solid #ddd;
                    color: var(--brand-color);
                    padding: 5px 12px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    transition: all 0.2s ease;
                    margin-left: 10px;
                }
                .copy-button:hover {
                    background-color: #e8f5e9; /* Light Green Hover */
                    border-color: var(--brand-color);
                }
                .copy-button.copied {
                    background-color: var(--brand-color);
                    color: var(--bg-light);
                    border-color: var(--brand-color);
                }

                /* --- Media Queries --- */
                @media (max-width: 1024px) {
                    .hero-headline { font-size: 3.5rem; }
                }
                @media (max-width: 768px) {
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2.2rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    .copy-button { margin-left: 0; margin-top: 5px; }
                }
                @media (max-width: 480px) {
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before { display: none; }
                    .info-block { padding: 20px; }
                }
            `}</style>

            {/* --- Animated Hero Section --- */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Ready to Transform Your Business with AI?
                    </h1>
                    <p className="hero-subheadline">
                        Whether you're just beginning to explore AI possibilities or ready to implement a specific solution, 
                        we're here to help. Let's discuss how Tevacraft AI Systems can accelerate your digital transformation journey.
                    </p>
                </div>
            </section>

            <div className="contact-container">
                <div className="contact-grid">
                    
                    <div className="contact-info-section">
                        
                        {/* --- Ways to Connect (Cards with Hover) --- */}
                        <div className="connect-methods-wrapper">
                            <h2 style={{fontSize: '1.8rem', fontWeight:'700', marginBottom:'25px', color:'var(--text-dark)', textAlign:'center'}}>Ways to Connect</h2>
                            {connectMethods.map((method, index) => (
                                <ConnectMethod 
                                    key={index}
                                    title={method.title}
                                    description={method.description}
                                    icon={method.icon}
                                    delay={index * 100}
                                />
                            ))}
                        </div>

                        {/* --- Contact Information Block --- */}
                        <div className="info-block contact-details"> 
                            <h2>Contact Information</h2>
                            <p>
                                <strong>Email:</strong> 
                                <span className="email-content">
                                    <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a> 
                                    
                                    <button 
                                        onClick={copyToClipboard} 
                                        className={`copy-button ${isCopied ? 'copied' : ''}`}
                                        title="Copy email address"
                                    >
                                        {isCopied ? '✅ Copied!' : '📋 Copy'}
                                    </button>
                                </span>
                            </p>
                            <p>
                                <strong>Website:</strong> <a href="http://www.tevacraft.in" target="_blank" rel="noopener noreferrer">www.tevacraft.in</a>
                            </p>
                            <p>
                                <strong>Phone:</strong> <a href="tel:+919010805455">+91 9010805455</a>
                            </p>
                            <p>
                                <strong>Location:</strong> Urbanrise Spring is in the air, Sri Vani Nagar, Ameenpur, Hyderabad, India
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;