import { Sparkles, Megaphone, Mail, FileText, Target } from "lucide-react";
import IntakeWizard from "./components/IntakeWizard";
import "./App.css";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
     <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
  <div className="font-black text-xl text-yellow-400">
    Legacy AI
  </div>

  <div id="features" className="grid md:grid-cols-4 gap-6 mt-20">
    <a href="#features" className="hover:text-yellow-400">Features</a>
    <a href="#intake" className="hover:text-yellow-400">Try It</a>
    <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
  </div>

  <a
    href="#intake"
    className="bg-yellow-500 text-black px-5 py-3 rounded-xl font-bold hover:bg-yellow-400"
  >
    Start Free
  </a>
</nav>
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
      <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
    <p className="text-yellow-400 font-semibold">How It Works</p>
    <h2 className="text-4xl md:text-6xl font-bold mt-3">
      From idea to campaign in minutes.
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      ["1", "Describe Your Business", "Tell the system what you sell, who you serve, and what you want to grow."],
      ["2", "Generate Campaign Assets", "Get social posts, emails, ad copy, lead magnets, and follow-up ideas."],
      ["3", "Copy, Publish, and Grow", "Use the content immediately or save it for your full campaign plan."],
    ].map(([num, title, text]) => (
      <div key={title} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
        <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center font-black text-xl">
          {num}
        </div>
        <h3 className="text-2xl font-bold mt-6">{title}</h3>
        <p className="text-gray-400 mt-3">{text}</p>
      </div>
    ))}
  </div>
</section>
      <div id="intake">
        <IntakeWizard />
      </div>
      <div id="pricing">
      <Pricing />
      </div>
    </main>
  );
}
