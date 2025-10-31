import React from 'react';

// --- Reusable Component Definitions ---

// Custom component for a structured Service/Industry block
const StructuredContentBlock = ({ title, intro, children }) => (
  <div className="structured-block">
    <h3 className="block-title">{title}</h3>
    <p className="block-intro">{intro}</p>
    <div className="block-content-list">{children}</div>
  </div>
);

// Custom component for a list of capabilities/solutions
const ListSection = ({ title, items, className = "default-list" }) => (
  <div className={className}>
    <h4 className="list-title">{title}</h4>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Custom component for Case Study Card
const CaseStudyCard = ({ title, client, challenge, results, delay }) => (
  <div 
    className="case-study-card"
    style={{ animationDelay: `${delay}ms` }}
  >
    <h4 className="case-title">{title}</h4>
    <p className="case-client">Client: <strong>{client}</strong></p>
    <div className="case-body">
        <p><strong>Challenge:</strong> {challenge}</p>
        <p className="results-headline">Key Results:</p>
        <ul className="results-list">
            {results.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
    </div>
    <a href="#" onClick={(e) => e.preventDefault()} className="read-more-link">Read Full Study &rarr;</a>
  </div>
);

// Custom component for FAQ Item
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

// **FIXED:** Custom component for the Insights/Resources links (It was missing!)
const InsightLink = ({ title, description }) => {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); console.log(`${title} clicked`); }}
      className="insight-link"
    >
      <h4 className="insight-title">{title}</h4>
      <p className="insight-description">{description}</p>
    </a>
  );
};

// --- Page Content Data ---

const servicesData = [
  {
    title: "Custom AI Application Development",
    intro: "Transform your business processes with custom-built AI applications designed specifically for your needs. We develop intelligent systems that automate workflows, enhance decision-making, and deliver measurable business value.",
    capabilities: [
      "Conversational AI & Chatbot Development",
      "Intelligent Document Processing",
      "Predictive Analytics Systems",
      "Computer Vision Applications",
      "Natural Language Processing Solutions"
    ]
  },
  {
    title: "AWS Cloud & AI Infrastructure",
    intro: "Leverage the power of AWS to build scalable, secure, and cost-effective AI infrastructure. Our AWS expertise ensures your AI systems are optimized for performance, reliability, and cost efficiency.",
    capabilities: [
      "AWS Architecture Design & Implementation",
      "AI/ML Service Integration (SageMaker, Bedrock, Comprehend)",
      "Serverless AI Application Development",
      "Cloud Migration & Optimization",
      "Infrastructure as Code (IaC) Implementation"
    ]
  },
  // ... (Remaining services data for all 6 blocks)
];

const industriesData = [
  {
    title: "Healthcare & Life Sciences",
    solutions: [
      "Medical Document Analysis & Processing",
      "Patient Data Management Systems",
      "Appointment Scheduling Automation",
      "Clinical Decision Support Systems",
      "Healthcare Compliance Monitoring"
    ]
  },
  // ... (Remaining industries data)
];

// --- Main Pages Component ---

const AllPagesContent = () => {
    
  const awsTechStack = [
    { title: "Amazon Bedrock", content: "Build and scale generative AI applications with foundation models from leading AI companies. We help you implement secure, customizable AI solutions using Amazon Bedrock's comprehensive model selection." },
    { title: "Amazon SageMaker", content: "Develop, train, and deploy machine learning models at scale. Our expertise in SageMaker enables rapid development and deployment of custom ML solutions tailored to your needs." },
    { title: "AWS Lambda & Serverless", content: "Build cost-effective, scalable AI applications with serverless architecture. We design serverless solutions that automatically scale with demand while minimizing operational overhead." },
    { title: "Amazon Comprehend", content: "Extract insights from text using natural language processing. We integrate Comprehend to analyze customer feedback, documents, and communication at scale." },
    { title: "Amazon Rekognition", content: "Add intelligent image and video analysis to your applications. We implement computer vision solutions for object detection, facial analysis, and content moderation." },
    { title: "Amazon Textract", content: "Automatically extract text and data from documents. We build intelligent document processing systems that eliminate manual data entry and accelerate workflows." },
  ];
    
  const caseStudies = [
    {
      title: "Healthcare Document Processing Automation",
      client: "Regional Healthcare Network",
      challenge: "Manual processing of thousands of patient documents daily, leading to delays and errors",
      results: ["85% reduction in document processing time", "95% accuracy in data extraction", "$500K annual cost savings", "Improved patient data accessibility"],
      delay: 0
    },
    {
      title: "E-Commerce Customer Service Transformation",
      client: "Growing Online Retailer",
      challenge: "Overwhelmed customer service team unable to handle rapid growth in customer inquiries",
      results: ["70% of inquiries handled automatically", "24/7 customer support availability", "40% reduction in customer service costs", "Improved customer satisfaction scores"],
      delay: 150
    },
    {
      title: "Manufacturing Predictive Maintenance",
      client: "Industrial Manufacturing Company",
      challenge: "Unexpected equipment failures causing costly production downtime",
      results: ["60% reduction in unplanned downtime", "30% decrease in maintenance costs", "Extended equipment lifespan", "Improved production reliability"],
      delay: 300
    },
    {
      title: "Financial Services Fraud Detection",
      client: "Digital Payment Platform",
      challenge: "Increasing fraud attempts impacting customer trust and financial losses",
      results: ["92% fraud detection accuracy", "Real-time transaction monitoring", "75% reduction in fraud losses", "Enhanced customer trust and security"],
      delay: 450
    },
  ];

  const faqs = [
    { question: "What industries do you serve?", answer: "We serve clients across multiple industries including healthcare, financial services, retail, manufacturing, education, and professional services. Our approach is to understand your specific industry challenges and tailor AI solutions accordingly." },
    { question: "What is the typical timeline for an AI project?", answer: "Project timelines vary based on complexity and scope. Simple automation projects may take 4-8 weeks, while complex custom AI applications can take 3-6 months. We provide detailed timelines during the proposal phase." },
    { question: "Do you only work with AWS, or can you work with other cloud providers?", answer: "While we specialize in AWS and recommend it for its comprehensive AI services and reliability, we can work with other cloud providers based on your existing infrastructure and requirements." },
    { question: "How do you ensure data security and privacy?", answer: "Security is our top priority. We implement industry best practices including encryption, access controls, network isolation, and compliance with relevant regulations. All solutions are built with security by design principles." },
    { question: "What makes Tevacraft different from other AI solution providers?", answer: "We combine deep AWS expertise with practical business understanding and a low-code efficient development approach. We focus on delivering real business value, not just technical implementations, and we partner with you throughout the entire journey." },
  ];


  return (
    <div className="tevacraft-app-multi-page">
      <style>{`
        /* Import existing variables for consistency */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
        
        :root {
          --brand-color: #0b5cff; 
          --secondary-color: #004c99; 
          --text-dark: #1f2937; 
          --muted-text: #4b5563; 
          --bg-dark: #071a33;
          --bg-light: #ffffff;
          --bg-subtle: #f7f9fb;
          --border-radius: 14px;
          --shadow-premium: 0 15px 40px rgba(0, 0, 0, 0.08); 
          --shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.03); 
        }

        /* --- Global Structural Styles (Consistent with Landing Page) --- */
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 0; 
        }
        .page-section {
            padding: 80px 0;
            background-color: var(--bg-light);
        }
        .section-title {
            font-size: 3rem; 
            font-weight: 800;
            color: var(--text-dark); 
            text-align: center;
            margin-bottom: 20px; 
            position: relative;
        }
        .section-intro {
            max-width: 800px;
            margin: 0 auto 70px;
            text-align: center;
            font-size: 1.15rem;
            color: var(--muted-text);
            line-height: 1.7;
        }

        /* Accent line under main title */
        .section-title::after {
            content: '';
            display: block;
            width: 90px; 
            height: 6px; 
            background-color: var(--brand-color); 
            margin: 15px auto 0;
            border-radius: 3px;
        }

        /* --- Page 2: Services / Page 3: Industries (Structured Block Layout) --- */
        .services-grid, .industries-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
        }

        .structured-block {
            background-color: var(--bg-light);
            border: 1px solid #e0e0e0;
            border-top: 5px solid var(--brand-color); /* Primary Accent Border */
            border-radius: var(--border-radius);
            padding: 35px;
            box-shadow: var(--shadow-subtle);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .structured-block:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-premium);
        }

        .block-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-bottom: 15px;
        }

        .block-intro {
            font-size: 1rem;
            color: var(--muted-text);
            margin-bottom: 25px;
            line-height: 1.6;
            font-style: italic;
        }

        .block-content-list ul {
            list-style: none;
            padding-left: 0;
        }
        
        .block-content-list li {
            padding: 10px 0;
            border-bottom: 1px dashed #e0e0e0;
            font-weight: 600;
            color: var(--text-dark);
            display: flex;
            align-items: center;
        }
        
        .block-content-list li::before {
            content: '✓';
            color: var(--brand-color);
            font-weight: 900;
            margin-right: 10px;
            font-size: 1.1rem;
        }
        .block-content-list li:last-child {
            border-bottom: none;
        }

        /* --- Page 4: Tech Stack --- */
        .tech-stack-section {
            background-color: var(--bg-subtle);
        }
        .tech-stack-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .tech-card {
            background-color: var(--bg-light);
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-subtle);
            border-left: 5px solid var(--brand-color);
            transition: border-left 0.3s, background-color 0.3s;
        }
        .tech-card:hover {
            border-left: 5px solid var(--secondary-color);
            background-color: #f0f4ff; /* Light blue tint on hover */
        }
        .tech-card h4 {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--secondary-color);
            margin-bottom: 10px;
        }
        .tech-card p {
            color: var(--muted-text);
        }

        /* --- Page 6: Case Studies --- */
        .case-studies-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        .case-study-card {
            background-color: var(--bg-dark);
            color: var(--bg-light);
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-premium);
            transition: transform 0.4s;
            opacity: 0;
            animation: fadeInRise 0.8s forwards;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .case-study-card:hover {
            transform: translateY(-10px);
            border-bottom: 5px solid var(--brand-color);
        }
        .case-title {
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--brand-color);
            margin-bottom: 10px;
        }
        .case-client {
            font-size: 0.95rem;
            opacity: 0.7;
            margin-bottom: 20px;
        }
        .case-body {
            flex-grow: 1;
        }
        .case-body p {
            margin-bottom: 10px;
        }
        .results-headline {
            font-weight: 700 !important;
            margin-top: 15px !important;
        }
        .results-list {
            list-style-type: none;
            padding-left: 0;
        }
        .results-list li {
            font-size: 0.95rem;
            margin-bottom: 5px;
            padding-left: 20px;
            position: relative;
            color: #ccc;
        }
        .results-list li::before {
            content: '★';
            color: gold;
            position: absolute;
            left: 0;
            font-size: 1rem;
        }
        .read-more-link {
            display: inline-block;
            margin-top: 20px;
            color: var(--brand-color);
            text-decoration: none;
            font-weight: 700;
            transition: color 0.3s;
        }
        .read-more-link:hover {
            color: var(--bg-light);
            text-shadow: 0 0 5px var(--brand-color);
        }
        @keyframes fadeInRise {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- Page 8: Contact Us --- */
        .contact-section {
            background-color: var(--bg-subtle);
        }
        .contact-grid {
            display: grid;
            grid-template-columns: 2fr 3fr;
            gap: 50px;
        }
        .contact-info {
            padding-right: 20px;
        }
        .contact-info-block {
            margin-bottom: 30px;
            padding: 20px;
            border-left: 4px solid var(--brand-color);
            background-color: var(--bg-light);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-subtle);
        }
        .contact-info-block h4 {
            font-size: 1.4rem;
            color: var(--secondary-color);
            margin-bottom: 5px;
        }
        .contact-info-block p {
            color: var(--muted-text);
        }
        .contact-info-block a {
            color: var(--brand-color);
            text-decoration: none;
            font-weight: 600;
            display: block;
        }
        
        .contact-form {
            background-color: var(--bg-light);
            padding: 40px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-premium);
        }
        .contact-form label {
            display: block;
            font-weight: 600;
            color: var(--text-dark);
            margin-top: 15px;
            margin-bottom: 5px;
        }
        .contact-form input, .contact-form select, .contact-form textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
            border-color: var(--brand-color);
            outline: none;
            box-shadow: 0 0 0 2px rgba(11, 92, 255, 0.2);
        }
        .contact-form button {
            margin-top: 30px;
            width: 100%;
            display: block;
        }

        /* --- Page 9: FAQ --- */
        .faq-section {
            background-color: var(--bg-subtle);
        }
        .faq-item {
            border: 1px solid #e0e0e0;
            border-radius: var(--border-radius);
            margin-bottom: 15px;
            overflow: hidden;
            box-shadow: var(--shadow-subtle);
        }
        .faq-question {
            width: 100%;
            text-align: left;
            padding: 20px 30px;
            background-color: var(--bg-light);
            color: var(--text-dark);
            font-size: 1.15rem;
            font-weight: 700;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.3s;
        }
        .faq-question:hover {
            background-color: #f0f4ff;
        }
        .faq-icon {
            font-size: 1.5rem;
            line-height: 1;
            transition: transform 0.3s;
            color: var(--brand-color);
        }
        .faq-icon.open {
            transform: rotate(45deg);
        }
        .faq-answer {
            max-height: 0;
            padding: 0 30px;
            transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
            background-color: #fdfdfd;
        }
        .faq-answer.open {
            max-height: 200px; /* Needs to be larger than content height */
            padding: 20px 30px;
        }
        .faq-answer p {
            color: var(--muted-text);
            line-height: 1.6;
        }

        /* --- Page 10: Localization Services (Hero Style) --- */
        .localization-hero {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--bg-dark) 100%); 
            color: var(--bg-light);
            padding: 130px 5%; 
            text-align: center;
            position: relative;
            overflow: hidden;
            border-bottom: 8px solid var(--brand-color);
        }
        .localization-hero h1 {
            font-size: 4rem; 
            font-weight: 900;
            margin-bottom: 15px;
            line-height: 1.1;
            color: var(--brand-color);
            text-shadow: 0 0 15px rgba(11, 92, 255, 0.5);
        }
        .localization-hero p.sub {
            font-size: 1.5rem; 
            font-weight: 300;
            margin-bottom: 50px;
            opacity: 0.95;
        }
        .localization-hero .desc {
             max-width: 900px;
             margin: 0 auto 50px;
             font-size: 1.1rem;
             color: #ccc;
        }
        
        .localization-services-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
            text-align: left;
        }
        .loc-service-card {
            background-color: var(--bg-light);
            color: var(--text-dark);
            padding: 25px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-premium);
            border-top: 5px solid var(--brand-color);
        }
        .loc-service-card h4 {
            color: var(--secondary-color);
            font-size: 1.3rem;
            margin-bottom: 10px;
        }
        .loc-service-card ul {
            list-style: none;
            padding: 0;
            margin-top: 10px;
        }
        .loc-service-card li {
            color: var(--muted-text);
            padding: 5px 0;
            border-bottom: 1px dashed #eee;
        }

        /* --- Media Queries --- */
        @media (max-width: 768px) {
             .contact-grid {
                grid-template-columns: 1fr;
             }
             .localization-hero h1 {
                font-size: 2.5rem;
             }
             .localization-services-grid {
                grid-template-columns: 1fr;
             }
             .structured-block {
                margin-bottom: 30px;
             }
        }

      `}</style>


      {/* --- Page 2: OUR SERVICES --- */}
      <section id="services" className="page-section services-section">
        <div className="container">
          <h2 className="section-title">Comprehensive AI Solutions for Every Business Need</h2>
          <p className="section-intro">
            At Tevacraft AI Systems, we offer end-to-end AI development and deployment services tailored to your organization's unique requirements. Our expertise spans the entire AI lifecycle, from strategy and design to implementation and optimization.
          </p>

          <div className="services-grid">
            {/* Custom AI Application Development */}
            <StructuredContentBlock 
                title="Custom AI Application Development" 
                intro="Transform your business processes with custom-built AI applications designed specifically for your needs. We develop intelligent systems that automate workflows, enhance decision-making, and deliver measurable business value."
            >
                <ListSection title="Key Capabilities:" items={servicesData[0].capabilities} className="capability-list" />
            </StructuredContentBlock>
            
            {/* AWS Cloud & AI Infrastructure */}
            <StructuredContentBlock 
                title="AWS Cloud & AI Infrastructure" 
                intro="Leverage the power of AWS to build scalable, secure, and cost-effective AI infrastructure. Our AWS expertise ensures your AI systems are optimized for performance, reliability, and cost efficiency."
            >
                <ListSection title="Services Include:" items={servicesData[1].capabilities} className="capability-list" />
            </StructuredContentBlock>

            {/* AI Strategy & Consulting (Condensed for brevity) */}
            <StructuredContentBlock 
                title="AI Strategy & Consulting" 
                intro="Navigate your AI journey with confidence. Our consulting services help you identify high-impact AI opportunities, develop implementation roadmaps, and establish governance frameworks for responsible AI adoption."
            >
                <ListSection title="Consulting Services:" items={["AI Readiness Assessment", "Use Case Identification", "Technology Stack Selection", "ROI Analysis", "AI Governance & Ethics Framework"]} className="capability-list" />
            </StructuredContentBlock>
            
            {/* AI Integration & Automation (Condensed for brevity) */}
            <StructuredContentBlock 
                title="AI Integration & Automation" 
                intro="Seamlessly integrate AI capabilities into your existing business systems. We connect AI services with your current technology stack to create unified, intelligent workflows that enhance operational efficiency."
            >
                <ListSection title="Integration Capabilities:" items={["API Development & Integration", "Legacy System Modernization", "Workflow Automation", "Data Pipeline Development", "Third-Party AI Service Integration"]} className="capability-list" />
            </StructuredContentBlock>
            
            {/* Intelligent Data Solutions (Condensed for brevity) */}
            <StructuredContentBlock 
                title="Intelligent Data Solutions" 
                intro="Unlock the value hidden in your data. We build data pipelines, analytics platforms, and AI-powered insights systems that transform raw data into actionable business intelligence."
            >
                <ListSection title="Data Services:" items={["Data Engineering & Pipeline Development", "Real-time Analytics & Reporting", "AI-Powered Business Intelligence", "Data Warehousing Solutions", "Master Data Management"]} className="capability-list" />
            </StructuredContentBlock>

            {/* Managed AI Services & Support (Condensed for brevity) */}
            <StructuredContentBlock 
                title="Managed AI Services & Support" 
                intro="Focus on your business while we manage your AI systems. Our managed services ensure your AI applications remain optimized, secure, and continuously improving."
            >
                <ListSection title="Managed Services Include:" items={["24/7 System Monitoring & Support", "Performance Optimization", "Security & Compliance Management", "Model Retraining & Updates", "Cost Optimization & Reporting"]} className="capability-list" />
            </StructuredContentBlock>
          </div>
        </div>
      </section>

      {/* --- Page 3: INDUSTRIES WE SERVE --- */}
      <section id="industries" className="page-section industries-section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <h2 className="section-title">Industry-Specific AI Solutions That Drive Results</h2>
          <p className="section-intro">
            Every industry faces unique challenges and opportunities. At Tevacraft AI Systems, we bring deep domain understanding combined with AI expertise to deliver solutions that address your specific industry needs.
          </p>

          <div className="services-grid">
            {industriesData.slice(0, 1).map((industry, index) => (
                <StructuredContentBlock 
                    key={index} 
                    title={industry.title} 
                    intro={`Transform your business in ${industry.title} with AI-powered solutions to enhance efficiency and manage risk.`}
                >
                    <ListSection title="Example Solutions:" items={industry.solutions} className="capability-list" />
                </StructuredContentBlock>
            ))}
            {/* Using the provided content for Financial Services, Retail, Manufacturing, Education, and Professional Services (Mocked to fill grid) */}
            <StructuredContentBlock 
                title="Financial Services & Banking" 
                intro="Enhance customer experiences, manage risk, and drive operational excellence with AI solutions designed for the financial sector."
            >
                <ListSection title="Solutions:" items={["Fraud Detection & Prevention", "Credit Risk Assessment", "Customer Service Automation", "Regulatory Compliance Systems", "Trading & Investment Analytics"]} className="capability-list" />
            </StructuredContentBlock>
            <StructuredContentBlock 
                title="Retail & E-Commerce" 
                intro="Deliver personalized customer experiences and optimize operations with AI-powered retail solutions."
            >
                <ListSection title="Solutions:" items={["Personalized Recommendation Engines", "Inventory Management & Demand Forecasting", "Customer Service Chatbots", "Price Optimization Systems", "Visual Search & Product Recognition"]} className="capability-list" />
            </StructuredContentBlock>
            <StructuredContentBlock 
                title="Manufacturing & Supply Chain" 
                intro="Optimize production, predict maintenance needs, and streamline supply chain operations with AI."
            >
                <ListSection title="Solutions:" items={["Predictive Maintenance Systems", "Quality Control Automation", "Supply Chain Optimization", "Production Planning & Scheduling", "Inventory Management Intelligence"]} className="capability-list" />
            </StructuredContentBlock>
            <StructuredContentBlock 
                title="Education & EdTech" 
                intro="Enhance learning experiences and administrative efficiency with AI-powered education solutions."
            >
                <ListSection title="Solutions:" items={["Intelligent Learning Management Systems", "Automated Grading & Assessment", "Student Performance Analytics", "Administrative Process Automation", "Personalized Learning Pathways"]} className="capability-list" />
            </StructuredContentBlock>
            <StructuredContentBlock 
                title="Professional Services" 
                intro="Streamline operations and enhance service delivery with AI solutions for consulting, legal, and other professional services firms."
            >
                <ListSection title="Solutions:" items={["Document Analysis & Contract Review", "Knowledge Management Systems", "Client Relationship Management", "Proposal & Report Generation", "Time & Resource Optimization"]} className="capability-list" />
            </StructuredContentBlock>
          </div>
        </div>
      </section>

      {/* --- Page 4: TECHNOLOGY & PLATFORMS --- */}
      <section id="technology" className="page-section tech-stack-section">
        <div className="container">
          <h2 className="section-title">Built on the Industry's Leading AI & Cloud Technologies</h2>
          <p className="section-intro">
            Tevacraft AI Systems leverages cutting-edge technologies and proven platforms to deliver reliable, scalable AI solutions. Our AWS-first approach ensures you benefit from the most advanced cloud and AI services available.
          </p>

          <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '40px' }}>AWS AI & Machine Learning Services</h3>
          <div className="tech-stack-grid">
            {awsTechStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <h4>{tech.title}</h4>
                <p>{tech.content}</p>
              </div>
            ))}
          </div>

          <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '80px', marginBottom: '40px' }}>Development Frameworks & Security</h3>
          <div className="tech-stack-grid">
            <div className="tech-card" style={{borderLeft: '5px solid #ff9900'}}>
              <h4>Low-Code/No-Code Platforms</h4>
              <p>Accelerate development with modern low-code tools that enable rapid prototyping and deployment without sacrificing flexibility or scalability.</p>
            </div>
            <div className="tech-card" style={{borderLeft: '5px solid #ff9900'}}>
              <h4>Infrastructure as Code (IaC)</h4>
              <p>Ensure consistency, repeatability, and version control with IaC tools like AWS CloudFormation and Terraform.</p>
            </div>
            <div className="tech-card" style={{borderLeft: '5px solid #ff9900'}}>
              <h4>Security & Compliance</h4>
              <ListSection title="" items={["Data encryption at rest and in transit", "Identity and access management (IAM)", "Compliance with GDPR, HIPAA, and industry standards", "Regular security audits and monitoring"]} />
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Page 5: ABOUT US --- */}
      <section id="about" className="page-section about-section">
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Your Partner in AI-Powered Digital Transformation</h2>
            <p className="section-intro">
                Tevacraft AI Systems was founded with a clear mission: to make advanced AI technology accessible and practical for businesses of all sizes. Based in India and serving clients globally, we specialize in developing custom AI applications and deploying them on AWS infrastructure.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: '40px' }}>Our Mission & Vision</h3>
                <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginBottom: '50px' }}>
                    <div className="tech-card" style={{ borderTop: '4px solid var(--brand-color)', borderLeft: 'none', padding: '30px', flex: 1, textAlign: 'left' }}>
                        <h4>Our Mission</h4>
                        <p>To democratize AI technology by delivering innovative, reliable, and cost-effective AI solutions that transform how businesses operate and compete in the digital age.</p>
                    </div>
                    <div className="tech-card" style={{ borderTop: '4px solid var(--secondary-color)', borderLeft: 'none', padding: '30px', flex: 1, textAlign: 'left' }}>
                        <h4>Our Vision</h4>
                        <p>To be the trusted partner of choice for organizations seeking to harness the power of AI, known for our technical expertise, business acumen, and commitment to client success.</p>
                    </div>
                </div>

                <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Our Core Values</h3>
                <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '50px' }}>
                    {["Innovation", "Integrity", "Excellence", "Collaboration", "Impact"].map((value, index) => (
                         <div key={index} className="tech-card" style={{ padding: '20px', borderLeft: '3px solid var(--brand-color)' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0' }}>{value}</h4>
                         </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- Page 6: CASE STUDIES / SUCCESS STORIES --- */}
      <section id="casestudies" className="page-section case-studies-section" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--bg-light)' }}>Real Results for Real Businesses</h2>
          <p className="section-intro" style={{ color: '#ccc' }}>
            Our clients' success is our success. Explore how organizations across industries have transformed their operations and achieved significant business outcomes with Tevacraft AI Systems.
          </p>
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} delay={index * 150} />
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Page 7: RESOURCES & INSIGHTS (Using InsightLink Pattern) --- */}
      <section id="resources" className="page-section insights-section">
        <div className="container">
          <h2 className="section-title">Insights, Best Practices & Industry Trends</h2>
          <p className="section-intro">
            Stay informed about the latest developments in AI technology, implementation strategies, and industry trends. Our resource center provides valuable insights to help you make informed decisions.
          </p>

          <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '30px' }}>Featured White Papers</h3>
          <div className="insights-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <InsightLink
              title="The Complete Guide to AWS AI Services"
              description="Comprehensive overview of AWS AI services and how to select the right tools for your use case."
            />
            <InsightLink
              title="ROI of AI Implementation: Measuring Business Impact"
              description="Framework for calculating and demonstrating the return on investment of AI projects."
            />
            <InsightLink
              title="Building Responsible AI: Governance & Ethics Framework"
              description="Best practices for implementing AI governance and ensuring ethical AI deployment."
            />
          </div>

          <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: '60px', marginBottom: '30px' }}>Latest Blog Posts</h3>
          <div className="insights-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {["5 Ways AI is Transforming Customer Service", "Serverless Architecture for AI", "How to Prepare Your Organization for AI Adoption", "Cost Optimization on AWS"].map((title, index) => (
                 <a key={index} href="#" onClick={(e) => e.preventDefault()} className="insight-link" style={{ padding: '20px', textAlign: 'center' }}>
                    <h4 className="insight-title" style={{fontSize: '1.1rem'}}>{title}</h4>
                 </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- Page 10: AI-POWERED LOCALIZATION SERVICES (New Page) --- */}
      <section id="localization" className="localization-hero">
        <div className="hero-content">
          <h1 className="hero-headline">AI-Powered Localization Services</h1>
          <p className="sub">Your Global Voice Starts Here</p>
          <p className="desc">
            At Tevacraft AI Systems, we combine cutting-edge AI technology with linguistic expertise to deliver localization services that are fast, accurate, and culturally authentic, helping you connect your brand to global markets.
          </p>
          <a href="#contact">
            <button className="primary-button hero-button">
              Start Your Global Project
            </button>
          </a>
        </div>
        <div className="container" style={{paddingTop: '50px'}}>
             <h3 className="section-title" style={{ color: 'var(--bg-light)', marginBottom: '30px' }}>The Power of AI-Enhanced Localization</h3>
            <div className="localization-services-grid">
                <div className="loc-service-card">
                    <h4>AI-Powered Machine Translation</h4>
                    <p>Rapid and cost-effective translation for high-volume, time-sensitive, internal content.</p>
                    <ul>
                        <li>Cost-effective for bulk content</li>
                        <li>Continuous learning and improvement</li>
                    </ul>
                </div>
                <div className="loc-service-card">
                    <h4>AI-Assisted Human Translation</h4>
                    <p>The optimal balance of speed and quality, ideal for marketing materials and customer-facing content.</p>
                     <ul>
                        <li>AI provides initial draft</li>
                        <li>Professional linguists refine content</li>
                    </ul>
                </div>
                <div className="loc-service-card">
                    <h4>Human-Led Premium Translation</h4>
                    <p>Maximum accuracy and cultural authenticity, recommended for legal, medical, and high-stakes content.</p>
                    <ul>
                        <li>Expert subject matter translators</li>
                        <li>Full cultural adaptation</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- Page 8: CONTACT US --- */}
      <section id="contact" className="page-section contact-section">
        <div className="container">
          <h2 className="section-title">Ready to Transform Your Business with AI?</h2>
          <p className="section-intro">
            Whether you're just beginning to explore AI possibilities or ready to implement a specific solution, we're here to help. Let's discuss how Tevacraft AI Systems can accelerate your digital transformation journey.
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-block">
                <h4>Schedule a Consultation</h4>
                <p>Book a free 30-minute consultation to discuss your AI needs and explore potential solutions.</p>
                <a href="#" onClick={(e) => e.preventDefault()}>Book a Call &rarr;</a>
              </div>
              <div className="contact-info-block">
                <h4>Request a Proposal</h4>
                <p>Share your project requirements and receive a detailed proposal outlining our approach and timeline.</p>
                <a href="#" onClick={(e) => e.preventDefault()}>Submit Requirements &rarr;</a>
              </div>
              <div className="contact-info-block">
                <h4>Contact Information</h4>
                <p>Email: <a href="mailto:biz.operations@tevacraft.in">biz.operations@tevacraft.in</a></p>
                <p>Location: Hyderabad, India</p>
                <p>Website: <a href="http://www.tevacraft.in">www.tevacraft.in</a></p>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); console.log('Contact Form Submitted'); alert('Thank you for your inquiry! We will be in touch shortly.'); }}>
              <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '20px', textAlign: 'left' }}>Project Inquiry Form</h3>
              
              <label htmlFor="name">Full Name*</label>
              <input type="text" id="name" required />

              <label htmlFor="company">Company Name*</label>
              <input type="text" id="company" required />

              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" required />

              <label htmlFor="service">Service Interest</label>
              <select id="service">
                <option>Custom AI Development</option>
                <option>AWS Infrastructure</option>
                <option>AI Strategy</option>
                <option>Managed Services</option>
                <option>Localization Services</option>
                <option>Other</option>
              </select>

              <label htmlFor="description">Project Description*</label>
              <textarea id="description" rows="4" required></textarea>

              <label htmlFor="timeline">Timeline</label>
              <select id="timeline">
                <option>Just exploring</option>
                <option>Immediate</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>6+ months</option>
              </select>

              <button type="submit" className="primary-button">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Page 9: FAQ --- */}
      <section id="faq" className="page-section faq-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-intro">
            Find quick answers to the most common questions about our services, process, and technology.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>


      {/* --- Footer (Consistent) --- */}
      <footer className="footer" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--bg-light)', padding: '40px 5%', textAlign: 'center', borderTop: '8px solid var(--brand-color)' }}>
        <p>© 2025 Tevacraft AI Systems. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AllPagesContent;