export default function ProjectBgPattern({ type }: { type: string }) {
  switch (type) {
    case "vasu-ai":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="va-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="none" stroke="url(#va-grad)" strokeWidth="1" />
          <circle cx="600" cy="400" r="250" fill="none" stroke="url(#va-grad)" strokeWidth="0.8" />
          <circle cx="350" cy="550" r="120" fill="none" stroke="url(#va-grad)" strokeWidth="1" />
          <circle cx="100" cy="700" r="80" fill="none" stroke="url(#va-grad)" strokeWidth="0.5" />
          <circle cx="700" cy="100" r="100" fill="none" stroke="url(#va-grad)" strokeWidth="0.5" />
          <circle cx="450" cy="300" r="60" fill="none" stroke="url(#va-grad)" strokeWidth="0.5" />
        </svg>
      );
    case "ai-interview-copilot":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <rect x="150" y="150" width="200" height="200" rx="30" fill="none" stroke="url(#ai-grad)" strokeWidth="1" />
          <rect x="450" y="100" width="160" height="160" rx="20" fill="none" stroke="url(#ai-grad)" strokeWidth="0.8" />
          <rect x="100" y="450" width="180" height="180" rx="25" fill="none" stroke="url(#ai-grad)" strokeWidth="0.8" />
          <rect x="500" y="400" width="220" height="220" rx="35" fill="none" stroke="url(#ai-grad)" strokeWidth="1" />
          <rect x="350" y="250" width="80" height="80" rx="10" fill="none" stroke="url(#ai-grad)" strokeWidth="0.5" />
        </svg>
      );
    case "study-tracker":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="st-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path d="M100 400 Q 200 200, 400 300 T 700 200" fill="none" stroke="url(#st-grad)" strokeWidth="1" />
          <path d="M50 600 Q 250 450, 450 550 T 750 400" fill="none" stroke="url(#st-grad)" strokeWidth="0.8" />
          <path d="M200 100 C 300 50, 400 200, 500 100 S 600 300, 700 150" fill="none" stroke="url(#st-grad)" strokeWidth="0.6" />
          <circle cx="400" cy="450" r="4" fill="url(#st-grad)" />
          <circle cx="200" cy="250" r="3" fill="url(#st-grad)" />
          <circle cx="600" cy="300" r="3" fill="url(#st-grad)" />
        </svg>
      );
    case "ee-commerce":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ee-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <polygon points="400,80 480,200 620,220 520,340 540,500 400,420 260,500 280,340 180,220 320,200" fill="none" stroke="url(#ee-grad)" strokeWidth="1" />
          <polygon points="400,160 440,220 500,230 460,290 470,360 400,320 330,360 340,290 300,230 360,220" fill="none" stroke="url(#ee-grad)" strokeWidth="0.6" />
          <line x1="180" y1="500" x2="620" y2="500" stroke="url(#ee-grad)" strokeWidth="0.8" />
          <line x1="180" y1="550" x2="620" y2="550" stroke="url(#ee-grad)" strokeWidth="0.5" />
        </svg>
      );
    default:
      return null;
  }
}
