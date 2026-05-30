import { site } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 bg-primary-dark text-white/70">
      <div className="max-w-4xl mx-auto text-center text-sm space-y-2">
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p>&copy; {year} {site.domain}. All rights reserved.</p>
      </div>
    </footer>
  );
}
