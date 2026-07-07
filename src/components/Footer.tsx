export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} <span className="gradient-text font-medium">NOVA CODE</span>. All rights reserved.
        </div>
        <div className="text-sm text-muted">
          Built with precision &bull; Powered by passion
        </div>
      </div>
    </footer>
  );
}
