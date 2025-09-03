import * as icon  from 'react-icons/si'
import * as iconFa from "react-icons/fa";


const profile = {
	name: 'Felix Xie',
	role: 'Software Developer',
	description: 'Computer Science and Finance Double Major (Computational Mathematics Minor) at the University of Waterloo.',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/melon64' },
	{ icon: icon.SiLinkedin, link: 'https://www.linkedin.com/in/~fx/' },
];

const brand = 'FX'


const work = [
    {
        name: 'AI Research Paper',
        description: 'A research paper on the use of AI in financial fraud detection. Wrote while under the mentorship of professor Giovanna Maria Dimitri.',
        stack: [
            { icon: icon.SiRstudio, name: 'R' },
            { icon: icon.SiLatex, name: 'LaTeX' },
        ],
        linkProject: 'https://www.academia.edu/118290333',
        linkGithub: 'https://www.academia.edu/118290333',
    },
    {
        name: 'ASCII Game Engine',
        description: 'An ASCII art game engine built in C++ from the ground up. Powered by ncurses.',
        stack: [
            { icon: icon.SiCplusplus, name: 'C++'},
        ],
        linkProject: 'https://github.com/melon64/ascii-engine/',
        linkGithub: 'https://github.com/melon64/ascii-engine/',
    },
    {
        name: 'Boggle',
        description: 'A Java implementation of the Boggle game with a GUI.',
        stack: [
            { icon: iconFa.FaJava, name: 'Java' },
        ],
        linkProject: 'https://github.com/melon64/ICS4UBoggle',
        linkGithub: 'https://github.com/melon64/ICS4UBoggle',
    },
    {
        name: 'ConsciousDB',
        description: 'A C++ DBMS from scratch with included unit testing via GTest.',
        stack: [
            { icon: icon.SiCplusplus, name: 'C++'},
            { icon: icon.SiCmake, name: 'CMake' },
            { icon: icon.SiGoogleanalytics, name: 'Google Test' },
        ], // add the technologies used in this project
        linkProject: 'https://github.com/melon64/conscious-db/',
        linkGithub: 'https://github.com/melon64/conscious-db/',
    },
    {
        name: 'Atomic',
        description: 'A full stack application made using Flask, React (TypeScript), MongoDB, and GCP.\nUses NLP to create a schedule matching the inputted goals of a user. Goals and progress tracking can be shared as if it were a social media post with other users.',
        stack: [
            { icon: icon.SiPython, name: 'Python' },
            { icon: icon.SiReact, name: 'ReactJS' },
            { icon: icon.SiMongodb, name: 'MongoDB' },
            { icon: icon.SiGooglecloud, name: 'Google Cloud' },
            { icon: icon.SiOpenai, name: 'OpenAI' },
        ], // add the technologies used in this project
        linkProject: 'https://devpost.com/software/atomic-oatcb6',
        linkGithub: 'https://github.com/melon64/Atomic-App/',
    },
	{
		name: 'Cheat Sheet',
		description: 'Used Google’s ML library MediaPipe and OpenCV’s image processing algorithms to detect the motion of hands and the placement of drawn buttons on a piece of paper. Also implemented macro configurations and hotkey playback using a GUI automation module and local JSON storage.',
		stack: [
			{ icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiGooglecloud, name: 'Google Cloud Mediapipe' },
		],
		linkProject: 'https://devpost.com/software/cheat-sheet',
		linkGithub: 'https://github.com/melon64/Cheat-Sheet',
	},
	{
		name: 'Tag Team',
		description: 'A powerful yet lightweight collaborative notes app. Linked a Google Cloud Vision OCR model to parse uploaded base64 image files and pipe them into OpenAI’s davinci-003 model and Cohere’s xlarge NLP model to perform text correction and prompt generation.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
			{ icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiGooglecloud, name: 'Google Cloud Vision' },
			{ icon: icon.SiOpenai, name: 'OpenAI' },
			{ icon: icon.SiMongodb, name: 'MongoDB' }
		],
		linkProject: 'https://devpost.com/software/tagteam-c7o4pz',
		linkGithub: 'https://github.com/melon64/ml-note-app',
	},
	{
		name: 'Session',
		description: 'An app that tracks study habits and rewards them with points. Made entirely using Flutter as the frontend and Firebase as the backend and database. Built in Android Studio.',
		stack: [
			{ icon: icon.SiFlutter, name: 'Flutter' },
			{ icon: icon.SiFirebase, name: 'Firebase' },
			{ icon: icon.SiAndroidstudio, name: 'Android Studio' }		
		],
		linkProject: 'https://devpost.com/software/session-53z2ie',
		linkGithub: 'https://github.com/melon64/Session',
	},
	{
		name: 'NatureReads',
		description: 'Made for non-profit use (https://naturecounts.ca), intended for Birds Canada. Developed an R package for the naturecounts dataset using the Plotly library to visualize information and dplyr and sf to process geographic data. ',
		stack: [
			{ icon: icon.SiRstudio, name: 'R' },
			{ icon: icon.SiGooglemaps, name: 'Google Maps' },
		],	
		linkProject: 'https://devpost.com/software/naturereads',
		linkGithub: 'https://github.com/melon64/NatureReads',
	},
	{
		name: 'Frood',
		description: 'A MERN stack web app that allows people to effortlessly figure out what’s for dinner while being able to explore new dishes. Backend made with NodeJS linked to a Mongo cluster, frontend done in React.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiMongodb, name: 'MongoDB' }
		],
		linkProject: 'https://devpost.com/software/frood-wknszx',
		linkGithub: 'https://github.com/melon64/frood'
	},
	{
		name: 'Stock Algorithm',
		description: 'Leveraged financial data analysis techniques, including beta, covariance, and Sharpe ratio calculations, to identify optimal stocks within a predefined pool, driving informed investment decisions and maximizing returns. 3rd Place in CFM portfolio competition.',
		stack: [
			{ icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiJupyter, name: 'Jupyter Notebook' },
			{ icon: icon.SiPandas, name: 'Pandas' },
			{ icon: icon.SiNumpy, name: 'Numpy' }
		],
		linkProject: '',
		linkGithub: 'https://github.com/melon64/stock-trading-algo'
	}
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
			{ icon: icon.SiFlutter, name: 'Flutter', },
			{ icon: icon.SiAngular, name: 'Angular', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiMysql, name: 'MySQL', },	
			{ icon: icon.SiPython, name: 'Python', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
			{ icon: icon.SiKotlin, name: 'Kotlin', },
			{ icon: icon.SiGo, name: 'Golang', },
		],
	},
	{
		name: 'Tools',
		items: [
			{ icon: icon.SiGit, name: 'Git' },
			{ icon: icon.SiJenkins, name: 'Jenkins' },
			{ icon: icon.SiDocker, name: 'Docker' },
			{ icon: icon.SiKubernetes, name: 'Kubernetes' },
			{ icon: icon.SiPostman, name: 'Postman' },
			{ icon: icon.SiMicrosoftazure, name: 'Azure' },
			{ icon: icon.SiGooglecloud, name: 'Google Cloud' },
			{ icon: icon.SiAmazonaws, name: 'AWS' },
		],
	},
]

const experiences = [
	{
		Company: "Amazon",
		Role: "Software Development Engineer",
		StartDate: "Sept 2025",
		EndDate: "Present",
		Description: [
			"TBD...",
		],
		Location: "Vancouver, BC",
		Icon: "./images/amazon.png"
	},
	{
		Company: "Meta",
		Role: "Production Engineer",
		StartDate: "May 2025",
		EndDate: "August 2025",
		Description: [
			"Engineered pipelines for advertisement data in C++ and Python to detect off-site conversion signal regression, reducing signal loss by 34% and improving the reliability of metrics for millions of advertisers.",
			"Built a high-throughput monitoring and alerting system processing billions of rows daily across 12 ad signals, halving SEV response times and enabling faster detection of aggressive SLO burn rates.",
			"Developed a daily statistical-significance Python pipeline for ad accounts and campaigns, slashing response time to regressions and averting over $100K in ad-spend losses within a week of launch.",
			"Automated oncall runbooks with asynchronous rule-based analysis, reducing root cause investigation time by 99%."
		],
		Location: "Bellevue, WA",
		Icon: "./images/meta.png"
	},
	{
		Company: "Shopify",
		Role: "Software Engineer - Backend",
		StartDate: "September 2024",
		EndDate: "December 2024",
		Description: [
			"Developed a Rails geolocation service and refactored Action View components for the Shopify portal.",
			"Improved Kafka topic processing and erasure job SQL query generation to support BigQuery table redactions indexed by cookie IDs, increasing PII erasure coverage from 22% to 100%.",
			"Provisioned GCP Dataplex resources with Terraform and implemented a Rake task in GitHub Actions to synchronize and standardize SQL table metadata and schemas across 250+ applications.",
			"Built a pipeline failure notifier job in Ruby with GitHub issues and Slackbot integration, cutting SEV-3 incident response times across 78 services and improving observability."
		],
		Location: "Toronto, ON",
		Icon: "./images/shopify.png"
	},
    {
        Company: "Sparklease",
		Role: "Full Stack Developer",
        StartDate: "January 2024",
        EndDate: "August 2024",
        Description: [
			"Architected and implemented a C# Redis caching layer for microservices, integrated with an edge CDN and Azure Blob Storage, optimizing API response times from 1.5s to 0.3s for high-traffic services.",
			"Engineered a payment and subscription gateway using ASP.NET Core MVC and Stripe webhooks, processing $30k/month, as well as an analytics dashboard to boost financial reporting efficiency.",
            "Spearheaded a 100% codebase migration from .NET Core 2.0 to 6.0, improving performance and package compatibility."
		],
        Location: "Toronto, ON",
		Icon: "./images/sparklease.jpeg"
    },
	{
        Company: "Royal Bank of Canada",
		Role: "Software Engineer - Infrastructure Security",
        StartDate: "May 2023",
        EndDate: "August 2023",
        Description: [
			"Built and deployed a containerized service update anomaly job for Azure/AWS cloud services with Python using machine learning and web scraping, resulting in over $7000 saved per service reviewed.",
			"Established CI/CD pipelines with Jenkins on AKS integrated with 10+ control tools; configured Kubernetes clusters for security following internal DevSecOps standards.",
			"Implemented robust Terraform IaC for Azure AKS clusters, enabling optimized connections to external OpenAI instances and saving developer hours."
		],
        Location: "Toronto, ON",
		Icon: "./images/RBC.png"
    },
    {
        Company: "Royal Bank of Canada",
		Role: "Innovation Developer - Developer Tools",
        StartDate: "July 2022",
        EndDate: "August 2022",
        Description: [
			"Collaborated with 2 teams in an Agile environment to develop features for an internal application that allows over 4000 RBC developers to view and contribute to enterprise-level InnerSource projects.",
			"Facilitated the addition of various UI/UX interfaces through the creation of SCSS data themes and reactive Angular components using NgRx.",
			"Streamlined the implementation of a backend data pipeline by adding a Elasticsearch engine web crawler as FastAPI service - dynamic threading and a custom router logic flow were used to reduce load times by up to 50x.",
		],
        Location: "Toronto, ON",
		Icon: "./images/RBC.png"
    },
    {
        Company: "Immerse Education",
		Role: "Student Researcher",
        StartDate: "July 2021",
        EndDate: "August 2021",
        Description: [
			"Compiled and augmented financial transactions data from Kaggle datasets and trained NB, DT, LR, and CNN models in R with the collected data for the classification of financial fraud (CNN model was 24% more accurate than conventional classifiers proposed by other papers).",
			"Wrote a paper documenting the project under the mentorship of professor Giovanna Maria Dimitri who has a Cambridge computer science PhD.",
		],
        Location: "Cambridge, England",
		Icon: "./images/Immerse.jpg"
    },
];

const contact = {
	description: 'For any hiring opportunities or questions, please feel free to contact me. Looking to make an impact with you.',
	email: 'fkxie@uwaterloo.ca'
}

export { profile, social, work, stack, experiences, contact, brand }