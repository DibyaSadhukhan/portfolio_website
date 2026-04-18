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
        title: "WhatsApp Automation Suite",
        category: "Backend / Automation",
        description: "A robust scalable messaging architecture leveraging Meta's API to handle high-throughput automated interactions.",
        tools: ["Node.js", "Express", "PostgreSQL", "Meta API"],
        github: "https://github.com/DibyaSadhukhan", // Add real link later
        live: "#" // Leave as # if there is no live link
    },
    {
        id: 2,
        title: "AI Therapy Client Simulator",
        category: "Machine Learning / NLP",
        description: "An LLM-driven platform that realistically simulates distressed clients to train therapists, featuring automated safety escalation.",
        tools: ["Python", "LLMs", "Prompt Engineering", "FastAPI"],
        github: "https://github.com/DibyaSadhukhan",
        live: "#"
    },
    {
        id: 3,
        title: "Financial Tracking Dashboard",
        category: "Full Stack",
        description: "A comprehensive web app for small businesses connecting transaction ingestion with visual analytics to track expenditure effortlessly.",
        tools: ["Next.js", "Flask", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/DibyaSadhukhan",
        live: "#"
    }
];
