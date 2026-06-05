import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For solo business owners testing AI marketing.",
    features: [
      "30 AI content assets/month",
      "Social posts",
      "Email copy",
      "Ad copy",
      "Copy-to-clipboard exports",
    ],
  },
  {
    name: "Growth",
    price: "$99",
    description: "For businesses ready to generate leads consistently.",
    featured: true,
    features: [
      "150 AI content assets/month",
      "Full campaign blueprints",
      "Lead follow-up sequences",
      "Landing page copy",
      "Priority templates",
    ],
  },
  {
    name: "Agency",
    price: "$299",
    description: "For agencies and consultants managing multiple clients.",
    features: [
      "Unlimited client workspaces",
      "500 AI content assets/month",
      "Campaign libraries",
      "White-label exports",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <p className="text-yellow-400 font-semibold">Simple Pricing</p>
        <h2 className="text-4xl md:text-6xl font-bold mt-3">
          Start free. Upgrade when your campaigns start working.
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
     
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 border ${
              plan.featured
                ? "bg-yellow-500 text-black border-yellow-400 scale-105"
                : "bg-zinc-950 text-white border-zinc-800"
            }`}
          >
            <h3 className="text-2xl font-bold">{plan.name}</h3>

            <div className="mt-4 flex items-end gap-1">
              <span className="text-5xl font-black">{plan.price}</span>
              <span className={plan.featured ? "text-black/70" : "text-gray-400"}>
                /mo
              </span>
            </div>

            <p className={`mt-4 ${plan.featured ? "text-black/75" : "text-gray-400"}`}>
              {plan.description}
            </p>

            <button
              className={`mt-6 w-full rounded-xl py-4 font-bold ${
                plan.featured
                  ? "bg-black text-white"
                  : "bg-yellow-500 text-black hover:bg-yellow-400"
              }`}
            >
              {plan.featured ? "Start Growth Plan" : "Get Started"}
            </button>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className={plan.featured ? "text-black" : "text-yellow-400"}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
