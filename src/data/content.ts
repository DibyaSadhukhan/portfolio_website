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
        duration: "Sept 23 - Present",
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
        "duration": "Dec 25 - Mar 26",
        "description": [
            "Led end-to-end backend development and automation for the company’s MVP, designing and implementing scalable system architecture from the ground up.",
            "Built and deployed automation workflows to streamline core business processes, improving operational efficiency and reducing manual effort.",
            "Developed and integrated backend services using PHP and JavaScript frameworks, ensuring reliable data flow and system performance.",
            "Utilized n8n to orchestrate complex workflows, enabling seamless communication between services and automating key business operations.",
            "Managed hosting, deployment, and infrastructure setup to support production-ready applications.",
            "Led and coordinated a team of frontend developers to deliver a cohesive and fully functional product."
        ],
        "tools": ["PHP", "JavaScript", "n8n", "SQL", "System Design", "Automation", "APIs", "Cloud Hosting"]
    }
];
