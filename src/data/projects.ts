export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  gradient: string;
  icon: string;
  techStack: { category: string; items: string[] }[];
  features: { title: string; description: string }[];
  architecture: string;
  fileTree: string[];
  timeline: TimelineEvent[];
  stats: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  isDeployed: boolean;
  built: string;
}

export const projects: Project[] = [
  {
    slug: "vasu-ai",
    title: "VASU-AI",
    tagline: "Personal Local AI Agent — 100% Offline",
    description: "A fully private personal AI agent running on your laptop. No cloud, no OpenAI costs, no data sent anywhere.",
    longDescription:
      "VASU-AI is your private, offline AI companion powered by Ollama + FastAPI + ChromaDB. It runs entirely on your laptop — no cloud dependency, no data leaving your machine. Features include multi-model chat, PDF reading, web search, code execution, and a comprehensive DSA knowledge base with 5,491 vector chunks from 4 DSA books and 117 LeetCode problems.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "VA",
    techStack: [
      { category: "Backend", items: ["Python", "FastAPI", "Ollama", "httpx"] },
      { category: "Memory / RAG", items: ["ChromaDB", "Vector Embeddings", "In-Memory Cache"] },
      { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
      { category: "Voice", items: ["Wake Word", "STT", "TTS Pipeline"] },
    ],
    features: [
      { title: "Multi-Model Chat", description: "Switch between Llama, Qwen, DeepSeek, Phi models directly from the chat UI." },
      { title: "PDF Reader", description: "Upload PDFs, TXT, MD files and ask questions about their content with RAG-powered answers." },
      { title: "Web Search", description: "DuckDuckGo search integration — no API key needed, fully private." },
      { title: "Code Runner", description: "Write and execute Python code in a safe sandboxed environment." },
      { title: "Smart Router", description: "Instant replies for greetings and simple queries; routes complex questions to the LLM." },
      { title: "DSA Mentor", description: "Loaded with 5,491 vector chunks from 4 DSA books + 117 LeetCode solutions." },
    ],
    architecture:
      "FastAPI backend on port 8001 communicates directly with Ollama via httpx (no LangChain). ChromaDB handles vector storage for RAG. Frontend is a clean HTML/CSS/JS chat interface. A smart request router classifies queries — instant replies for greetings, LLM for complex questions, and vector search for DSA/document queries.",
    fileTree: [
      "vasu-ai/",
      "├── backend/",
      "│   ├── main.py           # FastAPI server",
      "│   ├── agent.py          # Core agent logic",
      "│   ├── memory.py         # ChromaDB memory",
      "│   ├── tools.py          # Web search, code runner",
      "│   ├── config.py         # Settings & model config",
      "│   ├── dsa_indexer.py    # Index DSA knowledge",
      "│   ├── full_indexer.py   # Full knowledge base indexer",
      "│   └── system_monitor.py",
      "├── frontend/",
      "│   ├── index.html        # Chat UI",
      "│   ├── app.js            # UI logic",
      "│   └── style.css",
      "├── documents/dsa/        # DSA knowledge base",
      "├── start.bat             # One-click launcher",
      "├── setup.bat             # First-time setup",
      "└── vasu_ai.ico",
    ],
    timeline: [
      { date: "Jun 12", title: "Project Kickoff", description: "Set up FastAPI backend with Ollama integration. Basic chat endpoint working with local LLM." },
      { date: "Jun 13", title: "RAG & Memory Layer", description: "Integrated ChromaDB for vector storage. Added file upload (PDF/TXT/MD) with query capabilities." },
      { date: "Jun 14", title: "Tool Integration", description: "Added DuckDuckGo web search, URL reader, Python code runner, and calculator tool. Smart router implemented." },
      { date: "Jun 15", title: "Frontend & Polish", description: "Built clean chat UI with HTML/CSS/JS. Added system monitor, DSA knowledge base indexer with 5,491 chunks." },
      { date: "Jun 16", title: "Launch", description: "Finalized start/stop scripts, desktop shortcut, hotkey binding. Ready for local deployment." },
    ],
    stats: [
      { label: "Language", value: "Python" },
      { label: "Vector Chunks", value: "5,491" },
      { label: "Models", value: "4+" },
      { label: "Built", value: "Jun 2026" },
    ],
    githubUrl: "https://github.com/nova251107/vasu-ai",
    isDeployed: false,
    built: "June 2026",
  },
  {
    slug: "ai-interview-copilot",
    title: "AI Interview Copilot",
    tagline: "AI-Powered Interview Prep Platform",
    description: "Full-stack interview preparation platform with AI mock interviews, resume analysis, cover letter generation, and more.",
    longDescription:
      "The most feature-rich web app in the portfolio. An AI-powered interview preparation platform for developers. Features AI mock interviews with role-based questions and scoring, resume analysis with ATS scoring, AI cover letter generation, personalized learning roadmaps, DSA progress tracking, and a full analytics dashboard. Built with Next.js + Express + PostgreSQL and deployed on Vercel + Render.",
    gradient: "from-violet-500/20 to-purple-500/20",
    icon: "AI",
    techStack: [
      { category: "Frontend", items: ["Next.js 16", "Tailwind CSS", "Recharts", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "Express", "Helmet.js", "Prisma"] },
      { category: "Database", items: ["PostgreSQL", "Neon", "Prisma ORM"] },
      { category: "AI", items: ["Groq (Llama 3.1)", "Custom AI Prompts"] },
      { category: "Auth", items: ["Clerk"] },
      { category: "Storage", items: ["Cloudinary (PDFs)"] },
    ],
    features: [
      { title: "AI Mock Interview", description: "Choose a role, select 5/10/15 questions, get scored 0–10 with detailed AI feedback on each answer." },
      { title: "Resume Analyzer", description: "Upload a PDF resume and receive an ATS score, skills detection, and actionable improvement suggestions." },
      { title: "Cover Letter Generator", description: "AI-tailored cover letters from job descriptions with Copy/PDF/TXT download options." },
      { title: "Learning Roadmap", description: "Personalized 3/6/9/12-month roadmaps with week-by-week topics and resources." },
      { title: "DSA Tracker", description: "Sync LeetCode progress automatically plus manual problem logging with category breakdowns." },
      { title: "Analytics Dashboard", description: "Score trends, role breakdown charts, activity feed, and comprehensive interview history." },
    ],
    architecture:
      "Next.js 16 frontend communicates with a separate Express backend via REST APIs. PostgreSQL (Neon) stores user data, interviews, and roadmaps. Groq API powers all AI features with Llama 3.1. Clerk handles authentication. Cloudinary stores uploaded resume PDFs. The backend is secured with Helmet.js, rate-limited (10 req/15min for AI routes), and input-sanitized.",
    fileTree: [
      "ai-interview-copilot/",
      "├── frontend/",
      "│   ├── src/app/",
      "│   │   ├── interview/     # Mock interview flow",
      "│   │   ├── dashboard/     # Analytics dashboard",
      "│   │   ├── resume/        # Resume analyzer",
      "│   │   ├── cover-letter/  # Cover letter generator",
      "│   │   ├── roadmap/       # Roadmap generator",
      "│   │   ├── dsa/           # DSA tracker",
      "│   │   └── profile/       # User profile",
      "│   └── src/components/    # Shared components",
      "├── backend/",
      "│   ├── controllers/       # Route handlers",
      "│   ├── routes/            # API route definitions",
      "│   ├── services/          # AI, PDF, Prisma services",
      "│   ├── prisma/            # Schema & migrations",
      "│   └── middleware/        # Auth middleware",
      "├── .github/workflows/     # CI pipeline",
      "└── start.ps1",
    ],
    timeline: [
      { date: "Jun 18", title: "Scaffolding", description: "Set up Next.js frontend + Express backend. PostgreSQL schema designed with Prisma. Clerk auth configured." },
      { date: "Jun 20", title: "AI Interview Engine", description: "Built the core mock interview flow — role selection, question generation via Groq, answer scoring 0–10." },
      { date: "Jun 22", title: "Resume & Cover Letter", description: "Added PDF resume upload via Cloudinary, ATS analysis with AI. Cover letter generator with multiple download formats." },
      { date: "Jun 25", title: "Roadmap & DSA Tracker", description: "Built personalized learning roadmap generator (3/6/9/12 months). Added LeetCode sync and manual DSA logging." },
      { date: "Jun 28", title: "Dashboard & Polish", description: "Created analytics dashboard with Recharts, interview history, filtering. Added rate limiting, Helmet security, SEO." },
      { date: "Jul 01", title: "Deployment", description: "Frontend deployed on Vercel, backend on Render. CI pipeline with GitHub Actions. Full end-to-end testing." },
    ],
    stats: [
      { label: "Language", value: "TypeScript" },
      { label: "Frontend", value: "Next.js 16" },
      { label: "Backend", value: "Express" },
      { label: "Deployed", value: "Vercel + Render" },
    ],
    githubUrl: "https://github.com/nova251107/ai-interview-copilot",
    isDeployed: true,
    built: "June 2026",
  },
  {
    slug: "study-tracker",
    title: "Study Tracker",
    tagline: "Personal Study Progress Dashboard",
    description: "A comprehensive study tracking app for DSA progress, web dev roadmap, study hours, and daily tasks.",
    longDescription:
      "A personal study tracking application built with React 19 + Vite + TypeScript. Features a dashboard with streak tracking, study hours, DSA progress across 110 patterns and 18 categories, an 18-step web development roadmap, task management with deadlines, weekly analytics charts, a 30-day activity heatmap, and full data backup/export. Authenticated with Firebase Google Sign-In.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "ST",
    techStack: [
      { category: "Frontend", items: ["React 19", "TypeScript 6", "Vite 8", "CSS"] },
      { category: "Auth", items: ["Firebase", "Google Sign-In"] },
      { category: "Testing", items: ["Vitest"] },
      { category: "Linting", items: ["Oxlint"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
    features: [
      { title: "Dashboard", description: "Streak counter, study hours, DSA/Web progress bars, activity feed, and weekly chart all in one view." },
      { title: "DSA Tracker", description: "110 patterns across 18 categories with per-category progress bars and detailed tracking." },
      { title: "Web Dev Roadmap", description: "18-step full-stack journey with a clean timeline UI showing completion status." },
      { title: "Task System", description: "Add, toggle, and delete tasks with deadlines. Organize your daily learning." },
      { title: "Analytics", description: "Weekly study hours chart and 30-day activity heatmap to visualize consistency." },
      { title: "Backup & Export", description: "Export and import your entire data as JSON backup. Reset all data when needed." },
    ],
    architecture:
      "React 19 + Vite frontend with Firebase Authentication. Global state managed via React Context. Data is stored locally (localStorage) with Firebase for auth only. The app has 6 main pages: Dashboard, DSA Tracker, Web Roadmap, Tasks, Analytics, and Settings. Protected routes redirect unauthenticated users to a Login page.",
    fileTree: [
      "study-tracker/",
      "├── src/",
      "│   ├── pages/",
      "│   │   ├── Dashboard.tsx      # Main dashboard",
      "│   │   ├── DsaTracker.tsx     # DSA progress",
      "│   │   ├── WebTracker.tsx     # Web roadmap",
      "│   │   ├── Tasks.tsx          # Task management",
      "│   │   ├── Analytics.tsx      # Charts & heatmap",
      "│   │   ├── Settings.tsx       # Backup & reset",
      "│   │   └── Login.tsx          # Google auth",
      "│   ├── components/           # Shared components",
      "│   ├── context/              # Global state",
      "│   ├── data/                 # DSA patterns & roadmap JSON",
      "│   └── config/               # Firebase config",
      "├── .github/workflows/        # CI/CD",
      "└── vercel.json",
    ],
    timeline: [
      { date: "Jun 25", title: "Project Setup", description: "Initialized React 19 + Vite project. Set up Firebase auth, React Context for global state, and routing structure." },
      { date: "Jun 27", title: "Dashboard & DSA Tracker", description: "Built main dashboard with streak counter, study hours, and progress bars. Created DSA tracker with 110 patterns across 18 categories." },
      { date: "Jun 29", title: "Web Roadmap & Tasks", description: "Added 18-step web development roadmap with timeline UI. Implemented task management system with deadlines." },
      { date: "Jul 02", title: "Analytics & Polish", description: "Added weekly study hours chart, 30-day activity heatmap. Implemented JSON backup/export and data reset." },
      { date: "Jul 04", title: "Final Touches", description: "Added Welcome Tour, responsive design fixes. Oxlint configuration, Vitest tests, CI/CD with GitHub Actions." },
    ],
    stats: [
      { label: "Language", value: "TypeScript" },
      { label: "DSA Patterns", value: "110" },
      { label: "Categories", value: "18" },
      { label: "Built", value: "Jun 2026" },
    ],
    githubUrl: "https://github.com/nova251107/study-tracker",
    isDeployed: true,
    built: "June 2026",
  },
  {
    slug: "ee-commerce",
    title: "EE-commerce",
    tagline: "APEX Dynamic Pricing Engine",
    description: "A sophisticated ML-driven dynamic pricing engine with real-time price optimization, recommendations, and A/B testing.",
    longDescription:
      "A sophisticated APEX Dynamic Pricing Engine built with Python + FastAPI + Scikit-learn. Features real-time dynamic pricing with fairness guardrails (hard +15% ceiling, cost-floor protection), session-based product recommendations, A/B testing between static and dynamic pricing, price rationale explanations for customers, sub-1ms latency with in-memory caching, and a full ML pipeline with SHAP/LIME model explainability.",
    gradient: "from-orange-500/20 to-pink-500/20",
    icon: "EE",
    techStack: [
      { category: "Backend", items: ["Python", "FastAPI"] },
      { category: "ML", items: ["Scikit-learn", "SHAP", "LIME"] },
      { category: "Caching", items: ["Redis", "In-Memory Dict Store"] },
      { category: "Frontend", items: ["React (CDN)", "HTML", "CSS"] },
    ],
    features: [
      { title: "Dynamic Pricing", description: "P = base × (1 + min(15%, clicks/10)) with scarcity and competitor price adjustments." },
      { title: "Fairness Guardrails", description: "Hard +15% price ceiling, cost-floor protection, and transparent pricing logic." },
      { title: "Recommendations", description: "Session-based recommendations using category affinity and trending products." },
      { title: "A/B Testing", description: "Static vs Dynamic pricing with conversion tracking and statistical analysis." },
      { title: "Price Rationale", description: "Every price change includes an explanation visible to the customer." },
      { title: "ML Pipeline", description: "Full train → evaluate → deploy pipeline with SHAP/LIME explainability layer." },
    ],
    architecture:
      "FastAPI server with a modular engine architecture. The ML engine handles pricing calculations, the decision engine applies fairness guardrails, and the recommendation system uses session-based affinity scoring. Redis workers handle caching. A full ML pipeline (data cleaning → feature engineering → training → evaluation → deployment) is supported with SHAP/LIME for explainability and A/B testing for conversion optimization.",
    fileTree: [
      "EE-commerce/",
      "├── server.py                  # FastAPI main server",
      "├── ml_engine.py               # Core ML pricing engine",
      "├── decision_engine.py         # Fairness guardrails",
      "├── ab_testing.py              # A/B test framework",
      "├── explainability.py          # SHAP/LIME layer",
      "├── ml_pipeline.py             # Full ML pipeline",
      "├── model_trainer.py           # Model training",
      "├── redis_worker.py            # Redis cache worker",
      "├── data_cleaning.py           # Preprocessing",
      "├── data_preparation.py        # Feature engineering",
      "├── train_models.py            # Training script",
      "├── run_all.py                 # Run full pipeline",
      "└── index.html                 # Frontend UI",
    ],
    timeline: [
      { date: "Apr 08", title: "Core Engine", description: "Built the dynamic pricing engine with base formula, scarcity multiplier, and competitor adjustments." },
      { date: "Apr 10", title: "Fairness Layer", description: "Implemented fairness guardrails — hard +15% price ceiling, cost-floor protection, transparent rationale." },
      { date: "Apr 12", title: "Recommendation System", description: "Built session-based recommendation engine using category affinity scoring and trending products." },
      { date: "Apr 14", title: "A/B Testing Framework", description: "Created A/B testing infrastructure for static vs dynamic pricing with conversion tracking and stats." },
      { date: "Apr 16", title: "ML Pipeline", description: "Developed full ML pipeline: data cleaning → feature engineering → model training → evaluation → deployment." },
      { date: "Apr 18", title: "Explainability & Polish", description: "Added SHAP/LIME explainability layer. Redis caching for <1ms latency. Design docs completed." },
    ],
    stats: [
      { label: "Language", value: "Python" },
      { label: "Latency", value: "<1ms" },
      { label: "Pipeline Steps", value: "12+" },
      { label: "Built", value: "Apr 2026" },
    ],
    githubUrl: "https://github.com/nova251107/EE-commerce",
    isDeployed: false,
    built: "April 2026",
  },
];
