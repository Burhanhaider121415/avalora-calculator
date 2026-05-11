import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Explanation from "@/components/Explanation";
import Solution from "@/components/Solution";
import Report from "@/components/Report";
import Objections from "@/components/Objections";
import DemoForm from "@/components/DemoForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Calculator />
      <Explanation />
      <Solution />
      <Report />
      <Objections />
      <DemoForm />
      
      {/* Simple Footer */}
      <footer className="w-full py-8 bg-surface border-t border-gray-100">
        <div className="container mx-auto px-6 text-center text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Avalora. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
