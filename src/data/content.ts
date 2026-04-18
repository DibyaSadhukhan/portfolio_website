export const portfolioData = {
    name: "Dibya Sadhukhan",
    role: "Data Engineer / AI Engineer",
    speciality: "Building • Automating • Solving",
    tagline: "Here to help you Build Automate and Solve",
    projects: 25,
    clients: 10,
    experience: 3,
    description: "AI and Data Engineer experienced in developing machine learning systems, LLM-powered applications, and scalable data pipelines. Skilled in building intelligent automation platforms, deploying NLP models, and integrating AI solutions into production workflows. Strong expertise in Python, ML frameworks, and cloud-based data systems.",
    github: "https://github.com/DibyaSadhukhan",
    linkedin: "https://linkedin.com/in/dibyasadhukhan",
    email: "dibyasadhukhan@gmail.com",
    phone: "+91933096039",
    upwork: "https://www.upwork.com/freelancers/~01966c01f20da5e99a"
};
export const icons = {
    laptop: "/laptop.svg",
    database: "/database.svg",
    cloud: "/cloud.svg",
    vis: "/vis.svg",
    rocket: "/rocket.svg",
    home_active: "/home_active.svg",
    home_inactive: "/home_inactive.svg",
    skills: "/wrench.svg",
    gear_active: "/gear_active.svg",
    gear_inactive: "/gear_inactive.svg",
    contact_active: "/contact_active.svg",
    contact_inactive: "/contact_inactive.svg"
}
export const core_skills = [
    {
        id: "languages",
        category: "Languages",
        icon: icons.laptop,
        items: [
            { name: "Python", value: 90 },
            { name: "Javascript", value: 75 },
            { name: "PHP", value: 90 }
        ]
    },
    {
        id: "databases",
        category: "Databases",
        icon: "/database.svg",
        items: [
            { name: "PostgreSQL", value: 91 },
            { name: "MySQL", value: 90 }
        ]
    },
    {
        id: "cloud",
        category: "Hosting & Cloud",
        icon: "/cloud.svg",
        items: [
            { name: "Docker", value: 90 },
            { name: "AWS", value: 80 },
            { name: "GCP", value: 80 }
        ]
    },
    {
        id: "viz",
        category: "Visualization",
        icon: "/vis.svg",
        items: [
            { name: "Looker Studios", value: 95 },
            { name: "Tableau", value: 72 }
        ]
    }
];

export const capsule_skills = [
    "Python", "PHP", "JavaScript",
    "Feature Engineering", "Model Selection", "Supervised & Unsupervised Learning",
    "LSTM", "CNN", "Neural Networks", "Time Series Forecasting",
    "LLMs", "Prompt Engineering", "Retrieval Augmented Generation (RAG)", "Embeddings",
    "PySpark", "Pandas", "NumPy", "ETL Pipelines",
    "PostgreSQL", "MySQL",
    "AWS", "GCP", "Docker", "Apache Airflow"
];

export const experience_data = [
    {
        id: 1,
        role: "Data Engineer",
        company: "Heart It Out Pvt Ltd",
        duration: "Sept 2023 - Present",
        description: [
            "Designed and deployed LLM-powered conversational systems using anonymized therapy session data to simulate distressed clients, improving therapist training and increasing client retention by 12%.",
            "Built AI-driven conversational agents capable of assisting in mental health support workflows with automated safety escalation mechanisms.",
            "Developed NLP pipelines using LLM-based scoring models to automatically review and evaluate mental health blog content, reducing hands-on work by 90%, saving over 8 hours of editing each week and boosting reader interest by 15%.",
            "Engineered scalable ETL pipelines and data infrastructure to process platform interaction data, improving data accuracy by 23% and enabling new analytics metrics.",
            "Implemented monitoring dashboards and automated error alerting systems that reduced customer complaints by 75%.",
            "Built predictive models using user interaction data to estimate customer conversion probability, increasing sales conversion success by 48% within one week."
        ],
        tools: ["PHP", "Python", "Javascript", "AWS", "SQL", "LLMs", "Docker", "Airflow", "N8N", "Looker Studios"]
    },
    {
        "id": 2,
        "role": "Automation Engineer / Backend Developer",
        "company": "Lambdacube",
        "duration": "Dec 2025 - Mar 2026",
        "description": [
            "Led end-to-end backend development and automation for the company’s MVP, designing and implementing scalable system architecture from the ground up.",
            "Built and deployed automation workflows to streamline core business processes, improving operational efficiency and reducing manual effort.",
            "Developed and integrated backend services using PHP and JavaScript frameworks, ensuring reliable data flow and system performance.",
            "Utilized n8n to orchestrate complex workflows, enabling seamless communication between services and automating key business operations.",
            "Managed hosting, deployment, and infrastructure setup to support production-ready applications.",
            "Led and coordinated a team of frontend developers to deliver a cohesive and fully functional product."
        ],
        "tools": ["PHP", "JavaScript", "n8n", "SQL", "System Design", "Automation", "APIs", "Cloud Hosting"]
    },
    {
        "id": 3,
        "role": "Backend Developer",
        "company": "Freelance",
        "duration": "Mar 2026 - Apr 2026",
        "description": [
            "Designed and developed a full-stack application from scratch using Next.js, building both frontend and backend architecture for production use.",
            "Implemented WhatsApp messaging capabilities using Meta APIs, enabling automated and scalable communication workflows.",
            "Architected and integrated backend services to handle message routing, user interactions, and API communication reliably.",
            "Built a modular and scalable system design to support future feature expansion and high-volume messaging use cases.",
            "Managed deployment, hosting, and end-to-end system integration to ensure smooth production performance."
        ],
        "tools": ["Next.js", "JavaScript", "Meta WhatsApp API", "APIs", "System Design", "Full Stack Development", "Cloud Hosting"]
    },
    {
        "id": 4,
        "role": "Automation Engineer / Full Stack Developer",
        "company": "Freelance",
        "duration": "Jun 2025 - Aug 2025",
        "description": [
            "Designed and developed an end-to-end automation system for a client’s business workflow, enabling seamless lead-to-meeting conversion.",
            "Built a scheduling system integrated with Google Calendar APIs to automatically create and manage client bookings.",
            "Implemented email automation using Google Email APIs to send confirmations, terms & conditions, and follow-up communication.",
            "Developed backend services using Flask to orchestrate booking logic, user interactions, and payment flow integration.",
            "Enabled automated payment collection and streamlined client onboarding, significantly reducing manual coordination effort.",
            "Architected a reliable and scalable system connecting scheduling, communication, and payments into a unified workflow."
        ],
        "tools": ["Python", "Flask", "Google Calendar API", "Gmail API", "APIs", "Automation", "System Design", "Cloud Hosting"]
    },
    {
        "id": 5,
        "role": "Full Stack Developer / Automation Engineer",
        "company": "Freelance",
        "duration": "Jan 2025 - Mar 2025",
        "description": [
            "Designed and developed a web-based financial tracking application for a small business to manage income and expenditure efficiently.",
            "Built form-based data ingestion systems to capture transaction data and parse monthly financial statements.",
            "Implemented data processing logic to categorize and structure financial records for accurate reporting and analysis.",
            "Developed interactive dashboards to visualize income, expenses, and financial trends, enabling better decision-making.",
            "Automated financial tracking workflows, reducing manual bookkeeping effort and improving data reliability."
        ],
        "tools": ["Python", "Flask", "JavaScript", "SQL", "Data Processing", "APIs", "Dashboarding", "System Design"]
    },
    {
        "id": 6,
        "role": "Research Assistant",
        "company": "University of Kalyani",
        "duration": "Dec 2020 - Apr 2022",
        "description": [
            "Developed and evaluated time-series forecasting models including LSTM, ARIMA, and SARIMA to predict rice production across SAARC countries with accuracy exceeding 87%.",
            "Benchmarked model performance against optimized genetic algorithms to assess robustness and improve predictive accuracy.",
            "Implemented computer vision pipelines using YOLOv5 and custom segmentation algorithms for paddy leaf disease detection and classification.",
            "Built automated pipelines for image preprocessing, feature extraction, and model evaluation to support agricultural disease analysis."
        ],
        "tools": ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLOv5", "Time Series", "Machine Learning"]
    }
];

export const projects_data = [
    {
        id: 1,
        title: "AI Blog Evaluation & Feedback System",
        category: "GenAI / Automation",
        description: "An LLM-powered content evaluation system that analyzes blog submissions, provides paragraph-level feedback, and ensures consistency with organizational writing style through real-time tooltips and automated email reports.",
        tools: ["PHP", "JavaScript", "Fine-tuned ChatGPT", "PostgreSQL (Vector DB)", "n8n", "Prompt Engineering"],
        long_description: [
            "This system is a production-grade LLM-powered content evaluation pipeline designed to perform structured, paragraph-level analysis of blog content with real-time feedback and asynchronous reporting.",
            "🔹 Ingestion & Preprocessing\nUser-generated blog content is captured through a JavaScript-based editor and sent to the backend via API. The content is segmented into semantically meaningful chunks (primarily paragraph-level, with fallback heuristics for long sections) to ensure granular evaluation. Each chunk is preprocessed to remove noise and normalized for consistent input formatting.",
            "🔹 Embeddings & Context Layer\nEach chunk is embedded using an LLM-compatible embedding model and stored in a PostgreSQL-backed vector store (pgvector). This enables:\n- retrieval of similar historical content\n- comparison against high-quality reference samples\n- contextual grounding for evaluation\nThis layer helps maintain consistency in tone and style across different blog submissions.",
            "🔹 Evaluation Pipeline\nFor each chunk, the system performs multi-dimensional evaluation using a fine-tuned LLM. The evaluation is structured via prompt templates that enforce:\n- scoring (clarity, tone, readability, adherence to style guide)\n- reasoning (why a score was assigned)\n- actionable suggestions\nTo reduce variance and hallucination:\n- prompts are tightly constrained with schema-like outputs\n- temperature is kept low\n- outputs are post-processed and validated",
            "🔹 Feedback Delivery (Synchronous + Asynchronous)\n\t1. Real-time feedback (synchronous):\n\t\t- Inline suggestions are injected into the editor as tooltips\n\t\t- Feedback is mapped back to exact text spans\n\t\t- Enables iterative editing without breaking user flow\n\t2. Report generation (asynchronous):\n\t\t- n8n orchestrates background workflows\n\t\t- Aggregates paragraph-level evaluations into a structured report\n\t\t- Sends email summaries including scores, key issues, and recommendations",
            "🔹 Orchestration Layer\nn8n is used as the workflow engine to:\n- trigger evaluation pipelines\n- handle retries and failure cases\n- coordinate between services (LLM calls, DB, email APIs)\n- decouple synchronous UI feedback from async reporting",
            "🔹 Backend Architecture\n- PHP backend handles API routing, business logic, and integrations\n- Stateless services to allow horizontal scaling\n- Queue-based processing (via n8n) for non-blocking operations",
            "🔹 Performance & Optimization\n- Chunk-level processing enables parallelization\n- Caching of embeddings and repeated evaluations\n- Prompt optimization to minimize token usage while preserving output quality\n- Controlled concurrency to manage API rate limits",
            "🔹 Reliability & Guardrails\n- Output validation layer ensures structured responses\n- Fallback logic for failed or low-confidence evaluations\n- Logging and monitoring for pipeline visibility",
        ],
        github: "NDA",
        live: "NDA"
    },
    {
        "id": 2,
        "title": "AI-Powered Suicide Prevention Helpline",
        "category": "GenAI / Voice AI / Automation",
        "description": "An AI-driven voice-based support system that engages users in distress, performs real-time de-escalation, and intelligently routes high-risk cases to human agents.",
        "tools": ["Node.js", "Python", "Custom LLMs", "Speech-to-Text", "Text-to-Speech", "MLOps", "APIs"],
        "long_description": [
            "This system is a real-time AI-powered suicide prevention helpline designed to engage users via voice, assess emotional distress, and provide immediate de-escalation while ensuring safe handoff to human agents when required.",

            "🔹 Ingestion & Voice Interface\nIncoming user calls are processed through a voice interface where speech is captured and converted into text using a speech-to-text pipeline. The system supports real-time streaming to enable low-latency interaction and continuous conversation flow.",

            "🔹 Distress Classification Layer\nUser inputs are analyzed using fine-tuned custom LLM models trained to detect emotional intensity and categorize distress levels. The system classifies users into multiple risk tiers (low, medium, high) based on linguistic signals, tone, and conversational context.",

            "🔹 Conversational De-escalation Engine\nA dedicated LLM-based conversational agent generates context-aware responses aimed at calming the user and reducing distress. Prompts are carefully engineered and models are tuned to maintain empathetic tone, avoid harmful outputs, and guide the conversation toward stabilization.",

            "🔹 Decision & Routing System\nBased on real-time classification, the system dynamically determines whether the interaction can continue with the AI agent or requires escalation. High-risk cases trigger immediate routing to available human agents, ensuring timely intervention.",

            "🔹 Orchestration & Backend\nNode.js services handle real-time communication, API orchestration, and routing logic. The system is designed to be event-driven and low-latency, supporting continuous conversational sessions and quick decision-making.",

            "🔹 Model Stack & MLOps\nMultiple specialized LLMs are used for distinct tasks including distress classification, response generation, and contextual understanding. Python-based MLOps pipelines manage model updates, monitoring, and performance tracking to ensure reliability in production.",

            "🔹 Performance & Optimization\n- Real-time streaming architecture minimizes response latency\n- Parallel processing for classification and response generation\n- Optimized prompt design to reduce token usage and improve response consistency",

            "🔹 Safety & Guardrails\n- Strict response constraints to avoid unsafe or inappropriate responses\n- Fallback mechanisms for uncertain classifications\n- Human-in-the-loop escalation for high-risk scenarios\n- Logging and monitoring for auditability and continuous improvement",
        ],
        "github": "NDA",
        "live": "NDA"
    },
    {
        "id": 3,
        "title": "Heart It Out - Data Infrastructure, Automation and Backend Systems",
        "category": "Data Engineering / Automation / GenAI",
        "description": "Built and scaled core backend systems, automation pipelines, and data infrastructure to power seamless therapist-client interactions and business operations.",
        "tools": ["Python", "PHP", "JavaScript", "SQL", "n8n", "ETL Pipelines", "APIs", "Chrome Extensions", "Cloud"],
        "long_description": [
            "Led development of backend systems and automation infrastructure supporting the entire platform, enabling smooth session management and interaction between therapists and clients at scale.",

            "🔹 Data Engineering & ETL Pipelines\nDesigned and implemented robust ETL pipelines to collect, transform, and route data across multiple systems, ensuring data consistency and enabling real-time analytics for operational decision-making.",

            "🔹 Automation at Scale\nBuilt and maintained 1000+ automation workflows using n8n and custom backend logic to streamline internal processes, significantly reducing manual effort and allowing a small team to efficiently manage large-scale operations.",

            "🔹 Platform Backend Systems\nDeveloped backend services to handle session scheduling, user interactions, data flow, and system integrations, ensuring reliability and scalability of the web and app platform.",

            "🔹 Marketing & Growth Pipelines\nEngineered automated marketing pipelines for lead capture, nurturing, and conversion tracking, enabling data-driven growth strategies and improving campaign efficiency.",

            "🔹 Chrome Extension Development\nBuilt a Chrome extension to track user mood patterns and deliver contextual positive nudges, enhancing user engagement and promoting mental well-being during daily activities.",

            "🔹 System Architecture & Integration\nDesigned interconnected systems integrating APIs, databases, and automation tools to create a cohesive and efficient platform ecosystem.",

            "🔹 Performance & Scalability\n- Optimized data pipelines for accuracy and speed\n- Ensured system reliability under increasing user load\n- Automated repetitive workflows to improve operational throughput",

        ],
        "github": "NDA",
        "live": "https://heartitout.in/?utm_source=dibya_s_portfolio&utm_param=portfolio_project"
    },
    {
        "id": 4,
        "title": "Platform Automation & Backend Systems – HappyMinds",
        "category": "Data Engineering / Automation / Backend",
        "description": "Built backend systems and automation workflows to support mental wellness operations, enabling efficient session management and streamlined internal processes.",
        "tools": ["Python", "PHP", "JavaScript", "SQL", "n8n", "ETL Pipelines", "APIs", "Cloud"],
        "long_description": [
            "Contributed to the development of backend systems and automation infrastructure for the HappyMinds platform, enabling smooth coordination between clients and mental health professionals.",

            "🔹 Backend Systems Development\nDesigned and implemented backend logic to support scheduling, session tracking, and user data management, ensuring reliable and scalable platform performance.",

            "🔹 Data Engineering & ETL Pipelines\nBuilt ETL workflows to collect, clean, and transform operational data, enabling accurate tracking of sessions, user activity, and business metrics.",

            "🔹 Automation Workflows\nDeveloped automation pipelines using n8n and custom scripts to streamline internal operations, reducing manual intervention and improving process efficiency.",

            "🔹 Integration & API Systems\nIntegrated multiple internal and third-party services using APIs to enable seamless communication between different components of the platform.",

            "🔹 Operational Efficiency\n- Automated repetitive workflows to support a lean operational team\n- Improved data consistency and reduced manual errors\n- Enabled better visibility into platform performance through structured data flows",

            "🔹 System Design & Scalability\nArchitected systems with scalability in mind, ensuring the platform could handle increasing user activity and operational complexity."

        ],
        "github": "NDA",
        "live": "https://happyminds.in/?utm_source=dibya_s_portfolio&utm_param=portfolio_project"
    }
];
