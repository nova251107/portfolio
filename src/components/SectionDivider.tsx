export default function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      <svg className="absolute w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="divider-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f5d4" stopOpacity="0" />
            <stop offset="30%" stopColor="#00f5d4" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.08" />
            <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 40 Q 200 0, 400 30 T 800 20 T 1200 40 L 1200 100 L 0 100 Z" fill="url(#divider-grad)" />
        <path d="M0 60 Q 300 30, 600 50 T 1200 45" fill="none" stroke="url(#divider-grad)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
