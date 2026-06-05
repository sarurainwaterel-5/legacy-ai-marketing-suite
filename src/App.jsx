import { Sparkles, Megaphone, Mail, FileText, Target } from "lucide-react";
import IntakeWizard from "./components/IntakeWizard";
import "./App.css";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 border border-yellow-500/40 rounded-full px-4 py-2 text-yellow-400">
            <Sparkles size={18} />
            AI Marketing Operator
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            Turn One Business Idea Into 30 Days of Marketing Content
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Generate social posts, emails, ad copy, lead magnets, and follow-up campaigns from one simple intake.
          </p>

          <a
            href="#intake"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400"
          >
            Generate My Free Campaign
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {[
            ["Social Posts", Megaphone],
            ["Email Campaigns", Mail],
            ["Ad Copy", Target],
            ["Lead Magnets", FileText],
          ].map(([title, Icon]) => (
            <div key={title} className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 space-y-4">
              <Icon className="text-yellow-400" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-400">Generate polished marketing assets in seconds.</p>
            </div>
          ))}
        </div>
      </section>

      <div id="intake">
        <IntakeWizard />
      </div>
      <Pricing />
    </main>
  );
}
