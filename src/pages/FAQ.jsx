import React, { useState } from 'react';

// --- Reusable Component for a single FAQ item (Accordion) ---
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
                }

                /* --- General Layout --- */
                .faq-wrapper {
                    padding: 80px 0;
                    background-color: var(--bg-light);
                    font-family: 'Inter', sans-serif;
                    color: var(--text-dark);
                }
                .faq-container {
                    width: 90%;
                    max-width: 900px; /* Narrower container is better for FAQs */
                    margin: 0 auto; 
                }

                /* --- Header Styles --- */
                .faq-header {
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
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--text-dark);
                    margin: 0;
                }
                
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
                    transition: background-color 0.3s;
                }
                .faq-question:hover {
                    background-color: #e8ecf1;
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
                @media (max-width: 600px) {
                    .header-headline {
                        font-size: 2rem;
                    }
                    .faq-question {
                        font-size: 1rem;
                        padding: 15px 20px;
                    }
                }
            `}</style>

            <div className="faq-container">
                <header className="faq-header">
                    <p className="header-subtitle">FAQ</p>
                    <h1 className="header-headline">
                        Frequently Asked Questions
                    </h1>
                </header>

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