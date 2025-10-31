import React from 'react';

// --- Data for Dropdowns and Services (for easy management) ---
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
                    --input-border: #ccc;
                }

                /* --- General Layout --- */
                .contact-us-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-light);
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                }
                .contact-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto; 
                }

                /* --- Header Styles --- */
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

                /* --- Main Content Grid --- */
                .contact-grid {
                    display: grid;
                    grid-template-columns: 2fr 1.5fr; /* Form is wider than info */
                    gap: 60px;
                    background-color: var(--bg-subtle);
                    border-radius: var(--border-radius);
                    padding: 40px;
                }
                
                /* --- Contact Form Styling --- */
                .contact-form {
                    background-color: var(--bg-light);
                    padding: 30px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                }
                .form-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin-bottom: 30px;
                    border-bottom: 2px solid var(--bg-subtle);
                    padding-bottom: 10px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                label {
                    display: block;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--text-dark);
                    margin-bottom: 8px;
                }
                input, select, textarea {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid var(--input-border);
                    border-radius: 6px;
                    font-size: 1rem;
                    box-sizing: border-box;
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                input:focus, select:focus, textarea:focus {
                    border-color: var(--brand-color);
                    box-shadow: 0 0 0 3px rgba(11, 92, 255, 0.2);
                    outline: none;
                }
                textarea {
                    resize: vertical;
                    min-height: 120px;
                }
                .submit-button {
                    display: block;
                    width: 100%;
                    padding: 15px;
                    background-color: var(--brand-color);
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background-color 0.3s, transform 0.1s;
                }
                .submit-button:hover {
                    background-color: #0045e0; /* Darker blue */
                }
                .optional-label {
                    font-weight: normal;
                    font-style: italic;
                    color: var(--muted-text);
                    margin-left: 5px;
                }

                /* --- Info / Connect Methods Section --- */
                .contact-info-section {
                    display: flex;
                    flex-direction: column;
                }
                .info-block {
                    margin-bottom: 40px;
                    padding: 20px;
                    background-color: var(--bg-light);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-light);
                }
                .info-block h2, .connect-methods h2 {
                    font-size: 1.5rem;
                    color: var(--text-dark);
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .contact-details p {
                    font-size: 1rem;
                    margin: 10px 0;
                    color: var(--muted-text);
                }
                .contact-details strong {
                    color: var(--text-dark);
                    font-weight: 600;
                }
                .contact-details a {
                    color: var(--brand-color);
                    text-decoration: none;
                }
                .contact-details a:hover {
                    text-decoration: underline;
                }

                /* Ways to Connect Styling */
                .connect-method {
                    padding: 20px 0;
                    border-bottom: 1px dashed #ddd;
                }
                .connect-method:last-child {
                    border-bottom: none;
                }
                .method-icon {
                    font-size: 1.8rem;
                    display: block;
                    margin-bottom: 10px;
                }
                .method-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--brand-color);
                    margin: 0 0 5px 0;
                }
                .method-description {
                    font-size: 0.95rem;
                    color: var(--muted-text);
                    margin: 0;
                }

                /* --- Media Queries --- */
                @media (max-width: 992px) {
                    .contact-grid {
                        grid-template-columns: 1fr; /* Single column on tablets/mobile */
                        gap: 40px;
                        padding: 30px;
                    }
                    .contact-form {
                        order: 2; /* Put form second */
                    }
                    .contact-info-section {
                        order: 1; /* Put info first */
                    }
                }
                @media (max-width: 600px) {
                    .header-headline {
                        font-size: 2.2rem;
                    }
                    .form-group-grid {
                        grid-template-columns: 1fr; /* Stack inputs vertically */
                        gap: 15px;
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
                    
                    {/* --- LEFT COLUMN: Contact Form --- */}
                    <div className="contact-form">
                        <h2 className="form-title">Get Started With Tevacraft</h2>
                        <form onSubmit={(e) => e.preventDefault()}> 
                            <div className="form-group-grid">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input type="text" id="companyName" name="companyName" required />
                                </div>
                            </div>

                            <div className="form-group-grid">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>
                            </div>
                            
                            <div className="form-group-grid">
                                <div className="form-group">
                                    <label htmlFor="industry">Industry</label>
                                    <input type="text" id="industry" name="industry" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="serviceInterest">Service Interest</label>
                                    <select id="serviceInterest" name="serviceInterest" required>
                                        <option value="">Select a Service</option>
                                        {serviceOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="projectDescription">Project Description</label>
                                <textarea id="projectDescription" name="projectDescription" rows="4" required></textarea>
                            </div>

                            <div className="form-group-grid">
                                <div className="form-group">
                                    <label htmlFor="timeline">Timeline</label>
                                    <select id="timeline" name="timeline" required>
                                        <option value="">Select a Timeline</option>
                                        {timelineOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="budget">Budget Range <span className="optional-label">(optional)</span></label>
                                    <input type="text" id="budget" name="budget" placeholder="e.g., $50K - $100K" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="heardAboutUs">How did you hear about us?</label>
                                <input type="text" id="heardAboutUs" name="heardAboutUs" />
                            </div>

                            <button type="submit" className="submit-button">
                                Submit Request
                            </button>
                        </form>
                    </div>

                    {/* --- RIGHT COLUMN: Connect Methods & Info --- */}
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

                        <div className="info-block contact-details" style={{ marginTop: 'auto' }}>
                            <h2>Contact Information</h2>
                            <p>
                                <strong>Email:</strong> <a href="mailto:biz.operations@tevacraft.in">biz.operations@tevacraft.in</a>
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