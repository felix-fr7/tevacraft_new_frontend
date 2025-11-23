import React, { useState } from 'react';

// --- Reusable Component for a single FAQ item (Accordion) ---
const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
    <div className={`faq-item ${isOpen ? 'active-item' : ''}`}>
        <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
            <span className="question-text">{question}</span>
            <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
        </button>
        <div className={`faq-answer-container ${isOpen ? 'open' : ''}`}>
            <p className="faq-answer">{answer}</p>
        </div>
    </div>
);


const FAQ = () => {
    // State to manage which FAQ item is open (using index)
    const [openIndex, setOpenIndex] = useState(null);

    // --- Data Structure for FAQs ---
    const faqData = [
        {
            question: "What industries do you serve?",
            answer: "We serve clients across multiple industries including healthcare, financial services, retail, manufacturing, education, and professional services. Our approach is to understand your specific industry challenges and tailor AI solutions accordingly."
        },
        {
            question: "What is the typical timeline for an AI project?",
            answer: "Project timelines vary based on complexity and scope. Simple automation projects may take 4-8 weeks, while complex custom AI applications can take 3-6 months. We provide detailed timelines during the proposal phase."
        },
        {
            question: "Do you only work with AWS, or can you work with other cloud providers?",
            answer: "While we specialize in AWS and recommend it for its comprehensive AI services and reliability, we can work with other cloud providers based on your existing infrastructure and requirements."
        },
        {
            question: "What level of technical expertise does my team need?",
            answer: "We design our solutions to be user-friendly and provide comprehensive training and documentation. Your team doesn't need AI expertise – we handle the technical complexity while ensuring solutions are easy to use and maintain."
        },
        {
            question: "How do you ensure data security and privacy?",
            answer: "Security is our top priority. We implement industry best practices including encryption, access controls, network isolation, and compliance with relevant regulations. All solutions are built with security by design principles."
        },
        {
            question: "What kind of ongoing support do you provide?",
            answer: "We offer various support options including managed services, on-demand support, and maintenance contracts. Our support includes monitoring, optimization, updates, and troubleshooting to ensure your AI systems continue performing optimally."
        },
        {
            question: "How do you price your services?",
            answer: "Pricing depends on project scope, complexity, and ongoing support requirements. We offer both fixed-price project-based pricing and flexible retainer arrangements. We always provide transparent pricing with no hidden costs."
        },
        {
            question: "Can you help us identify where AI can benefit our business?",
            answer: "Absolutely! Our AI Strategy & Consulting service is designed specifically to help organizations identify high-impact AI opportunities and develop implementation roadmaps aligned with business goals."
        },
        {
            question: "What makes Tevacraft different from other AI solution providers?",
            answer: "We combine deep AWS expertise with practical business understanding and a low-code efficient development approach. We focus on delivering real business value, not just technical implementations, and we partner with you throughout the entire journey."
        },
        {
            question: "Do you provide training for our team?",
            answer: "Yes, we provide comprehensive training tailored to different user roles, from end-users to administrators. We ensure your team is fully equipped to use and benefit from the AI solutions we implement."
        },
    ];
    
    // Function to handle accordion open/close
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="faq-wrapper">
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
                    --hero-glow-color: rgba(255, 255, 255, 0.9);
                    
                    --border-radius: 10px;
                    --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.05);
                }

                /* --- General Layout --- */
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: var(--bg-light);
                    color: var(--text-dark);
                    margin: 0;
                    padding: 0;
                }
                .faq-wrapper {
                    display: flex;
                    flex-direction: column;
                }
                .faq-container {
                    width: 90%;
                    max-width: 900px; /* Narrower container is better for FAQs */
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

                /* --- Accordion Styling --- */
                .faq-list {
                    border-top: 1px solid var(--bg-subtle);
                }
                .faq-item {
                    border: 1px solid var(--bg-subtle);
                    border-top: none;
                    margin-bottom: 5px;
                    border-radius: var(--border-radius);
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .faq-item:hover {
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }
                
                /* Active State Style */
                .faq-item.active-item {
                    border-color: var(--brand-color);
                }
                
                .faq-question {
                    width: 100%;
                    background-color: var(--bg-subtle);
                    color: var(--text-dark);
                    text-align: left;
                    padding: 20px 25px;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 1.1rem;
                    font-weight: 600;
                    transition: background-color 0.3s, color 0.3s;
                }
                .faq-question:hover {
                    background-color: #e8f5e9; /* Light Green Tint */
                }
                .faq-question[aria-expanded="true"] {
                    background-color: var(--brand-color);
                    color: white;
                }

                .toggle-icon {
                    font-size: 1.5rem;
                    margin-left: 20px;
                    line-height: 1;
                    transition: transform 0.3s;
                }
                
                /* Answer Content Area */
                .faq-answer-container {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease-in-out;
                    background-color: var(--bg-light);
                }
                .faq-answer-container.open {
                    max-height: 500px; /* Large enough to accommodate content */
                }
                .faq-answer {
                    padding: 20px 25px 30px;
                    font-size: 1rem;
                    color: var(--muted-text);
                    line-height: 1.6;
                    margin: 0;
                }

                /* --- Media Queries --- */
                @media (max-width: 1024px) {
                    .hero-headline { font-size: 3.5rem; }
                }
                @media (max-width: 600px) {
                    .hero-section { padding: 80px 5%; }
                    .hero-headline { font-size: 2.2rem; }
                    .hero-subheadline { font-size: 1.1rem; }
                    .faq-question { font-size: 1rem; padding: 15px 20px; }
                    .hero-section::after, .hero-section::before, .hero-grid, .hero-content::before { display: none; }
                }
            `}</style>

            {/* --- Animated Hero Section --- */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Frequently Asked Questions
                    </h1>
                    <p className="hero-subheadline">
                        Everything you need to know about working with us.
                    </p>
                </div>
            </section>

            <div className="faq-container">
                <section className="faq-list">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default FAQ;