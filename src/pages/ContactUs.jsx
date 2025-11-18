import React, { useState } from 'react'; 

const serviceOptions = [
    "Custom AI Development",
    "AWS Infrastructure",
    "AI Strategy",
    "Integration Services",
    "Managed Services",
    "Other",
];

const timelineOptions = [
    "Immediate",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring",
];

// --- Reusable Component for Way to Connect ---
const ConnectMethod = ({ title, description, icon }) => (
    <div className="connect-method">
        <span className="method-icon">{icon}</span>
        <h3 className="method-title">{title}</h3>
        <p className="method-description">{description}</p>
    </div>
);


const ContactUs = () => {
    // காப்பி செய்யப்பட்டதா என்பதைக் காட்ட state
    const [isCopied, setIsCopied] = useState(false); 

    const EMAIL_ADDRESS = "biz.operations@tevacraft.in";

    // மின்னஞ்சல் முகவரியை காப்பி செய்யும் Function
    const copyToClipboard = () => {
        navigator.clipboard.writeText(EMAIL_ADDRESS)
            .then(() => {
                setIsCopied(true);
                // 3 வினாடிகளுக்குப் பிறகு நிலையான உரையை மீண்டும் காண்பிக்கிறது
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
        },
        {
            title: "Request a Proposal",
            description: "Share your project requirements and receive a detailed proposal outlining our approach, timeline, and investment.",
            icon: "📝",
        },
        {
            title: "General Inquiries",
            description: "Have questions? Reach out to our team for information about our services, capabilities, or anything else.",
            icon: "💡",
        },
    ];

    return (
        <div className="contact-us-wrapper">
            <style jsx>{`
                /* (CSS Styles are omitted for brevity, assuming they are unchanged, but adding styles for the copy button) */
                
                /* --- Color Variables (Consistent) --- */
                :root {
                    --brand-color: #0b5cff; 
                    --brand-color-light: #4c8cff;
                    --text-dark: #1f2937; 
                    --text-light: #f0f4f8;
                    --bg-light: #ffffff;
                    --bg-subtle: #f7f9fb;
                    --muted-text: #4b5563;
                    --border-radius: 10px;
                    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.05);
                    --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.1); 
                    --input-border: #ccc;
                }

                /* --- General Layout (Existing styles retained) --- */
                .contact-us-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-subtle); 
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                }
                .contact-container {
                    width: 90%;
                    max-width: 1200px; 
                    margin: 0 auto; 
                }

                /* --- Header Styles (Existing styles retained) --- */
                .contact-header {
                    text-align: center;
                    margin-bottom: 50px;
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

                /* --- Main Content Layout (Existing styles retained) --- */
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr; 
                    gap: 40px; 
                    background-color: transparent; 
                    border-radius: var(--border-radius);
                    padding: 0;
                    max-width: 700px; 
                    margin: 0 auto; 
                }
                
                /* --- Info / Connect Methods Section (Existing styles retained) --- */
                .contact-info-section {
                    display: flex;
                    flex-direction: column;
                    gap: 40px; 
                }
                .info-block {
                    margin-bottom: 0; 
                    padding: 30px; 
                    background-color: var(--bg-light);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                    transition: box-shadow 0.3s ease;
                }

                .info-block:hover {
                    box-shadow: var(--shadow-hover);
                }

                .info-block h2, .connect-methods h2 {
                    font-size: 1.5rem;
                    color: var(--text-dark);
                    font-weight: 700;
                    margin-bottom: 20px;
                    border-bottom: 2px solid var(--bg-subtle);
                    padding-bottom: 10px;
                }

                /* Contact Details Styling (Existing styles retained) */
                .contact-details p {
                    font-size: 1rem;
                    margin: 15px 0; 
                    color: var(--muted-text);
                    display: flex; 
                    align-items: center;
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
                    color: var(--brand-color-light); 
                }

                /* --- NEW STYLES for Copy Button --- */
                .email-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap; /* Allows wrapping on small screens */
                }
                .copy-button {
                    background: var(--bg-subtle);
                    border: 1px solid #ddd;
                    color: var(--brand-color);
                    padding: 5px 10px;
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
                    background-color: #e8eef6; /* Light hover effect */
                    border-color: var(--brand-color-light);
                }
                .copy-button.copied {
                    background-color: #4CAF50; /* Green background when copied */
                    color: var(--text-light);
                    border-color: #4CAF50;
                }

                /* --- Media Queries (Existing styles retained) --- */
                @media (max-width: 768px) {
                    /* ... existing mobile styles ... */
                }
                @media (max-width: 480px) {
                    /* ... existing mobile styles ... */
                    .copy-button {
                        margin-left: 0;
                        margin-top: 5px; /* Separate button below email on very small screens */
                    }
                }
            `}</style>

            <div className="contact-container">
                <header className="contact-header">
                    <p className="header-subtitle">CONTACT US</p>
                    <h1 className="header-headline">
                        Ready to Transform Your Business with AI?
                    </h1>
                    <p className="header-intro">
                        Whether you're just beginning to explore AI possibilities or ready to implement a specific solution, 
                        we're here to help. Let's discuss how Tevacraft AI Systems can accelerate your digital transformation journey.
                    </p>
                </header>

                <div className="contact-grid">
                    
                    {/* --- ONLY COLUMN: Connect Methods & Contact Info --- */}
                    <div className="contact-info-section">
                        
                        <div className="info-block connect-methods">
                            <h2>Ways to Connect</h2>
                            {connectMethods.map((method, index) => (
                                <ConnectMethod 
                                    key={index}
                                    title={method.title}
                                    description={method.description}
                                    icon={method.icon}
                                />
                            ))}
                        </div>

                        {/* --- Contact Information Block --- */}
                        <div className="info-block contact-details"> 
                            <h2>Contact Information</h2>
                            <p>
                                <strong>Email:</strong> 
                                <span className="email-content">
                                    {/* Mailto link retained as primary option */}
                                    <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a> 
                                    
                                    {/* Copy Button added */}
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