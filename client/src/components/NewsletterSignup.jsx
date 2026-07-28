// src/components/sidebar/NewsletterSignup.jsx
import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      // Wired up to the real endpoint in Step 2 (POST /api/newsletter)
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-blue-900 rounded-2xl shadow-sm p-6 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Mail size={20} />
        <h2 className="text-lg font-bold">Never Miss A Deal!</h2>
      </div>
      <p className="text-sm text-blue-100 mb-4">
        Subscribe for exclusive discounts, new arrivals, and smart-home tips.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-3 text-sm">
          <CheckCircle2 size={18} className="text-green-400" />
          You're subscribed! Check your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 transition-colors font-semibold py-2.5 rounded-lg text-sm"
          >
            {status === "loading" ? "Subscribing..." : "SUBSCRIBE NOW"}
          </button>
          {status === "error" && (
            <p className="text-xs text-red-300 mt-1">{errorMsg}</p>
          )}
        </form>
      )}
    </section>
  );
}