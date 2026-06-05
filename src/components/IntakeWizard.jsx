import { useState } from "react";
import { Sparkles, ArrowRight, Copy, CheckCircle } from "lucide-react";

const steps = [
  {
    key: "businessName",
    question: "What is your business called?",
    placeholder: "Legacy Partners",
  },
  {
    key: "industry",
    question: "What do you sell or provide?",
    placeholder: "Life insurance, tax services, consulting...",
  },
  {
    key: "audience",
    question: "Who is your ideal customer?",
    placeholder: "Families, homeowners, small businesses...",
  },
  {
    key: "goal",
    question: "What is your biggest marketing goal?",
    placeholder: "Get more leads, book calls, grow online...",
  },
];

export default function IntakeWizard() {
  const [step, setStep] = useState(0);
  const [copied, setCopied] = useState("");
  const [form, setForm] = useState({
    businessName: "",
    industry: "",
    audience: "",
    goal: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowResults(true);
      }, 2200);
    }
  };

  const copyText = async (label, text) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 1500);
  };

  const results = [
    {
      label: "Social Post",
      content: `If you run ${form.businessName || "a business"}, your customers need to know why your offer matters now. Speak directly to ${form.audience || "your ideal audience"} and show them how your service helps them move forward with confidence.`,
    },
    {
      label: "Email Campaign",
      content: `Subject: A smarter way to solve ${form.goal || "your growth goal"}\n\nHi there,\n\nAt ${form.businessName || "our company"}, we help ${form.audience || "clients"} with ${form.industry || "high-value services"}. If you're ready to take the next step, now is the perfect time to connect.`,
    },
    {
      label: "Ad Copy",
      content: `${form.goal || "Get better results"} with ${form.businessName || "your business"}. Professional support for ${form.audience || "your audience"} looking for ${form.industry || "trusted solutions"}. Start today.`,
    },
    {
      label: "Lead Magnet",
      content: `Free Guide: 5 Mistakes ${form.audience || "Customers"} Make Before Choosing ${form.industry || "a Service Provider"}`,
    },
  ];

  if (showResults) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-semibold">Your AI Growth Blueprint</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Your first campaign is ready.
          </h2>
          <p className="text-gray-400 mt-4">
            Here are 4 starter assets. Create an account to unlock the full 30-day campaign.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((item) => (
            <div key={item.label} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-400">{item.label}</h3>
                <button
                  onClick={() => copyText(item.label, item.content)}
                  className="flex items-center gap-2 text-sm bg-zinc-900 hover:bg-zinc-800 px-3 py-2 rounded-lg"
                >
                  {copied === item.label ? <CheckCircle size={16} /> : <Copy size={16} />}
                  {copied === item.label ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-500 text-black rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-black">Want the remaining 26 campaign assets?</h3>
          <p className="mt-3 text-black/80">
            Save your blueprint, generate more content, and build a full marketing system.
          </p>
          <button className="mt-6 bg-black text-white px-8 py-4 rounded-xl font-bold">
            Create Free Account
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl">
        <div className="flex items-center gap-2 text-yellow-400 mb-6">
          <Sparkles size={20} />
          <span className="font-semibold">Campaign Intake</span>
        </div>

        <div className="w-full bg-zinc-800 rounded-full h-2 mb-8">
          <div
            className="bg-yellow-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {loading ? (
          <div className="text-center py-16 space-y-4">
            <Sparkles className="text-yellow-400 mx-auto animate-pulse" size={44} />
            <h2 className="text-3xl font-bold">Building your campaign...</h2>
            <p className="text-gray-400">Analyzing your business, audience, and growth goal.</p>
          </div>
        ) : (
          <>
            <p className="text-gray-400 mb-2">
              Step {step + 1} of {steps.length}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {current.question}
            </h2>

            <input
              value={form[current.key]}
              onChange={(e) =>
                setForm({
                  ...form,
                  [current.key]: e.target.value,
                })
              }
              placeholder={current.placeholder}
              className="w-full bg-black/50 border border-zinc-700 focus:border-yellow-500 px-5 py-4 rounded-xl outline-none text-white"
            />

            <button
              onClick={nextStep}
              disabled={!form[current.key]}
              className="mt-6 w-full bg-yellow-500 disabled:opacity-40 disabled:cursor-not-allowed text-black px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-400"
            >
              {step === steps.length - 1 ? "Generate My Campaign" : "Continue"}
              <ArrowRight size={20} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
