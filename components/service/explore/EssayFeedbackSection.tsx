"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Send, Lock, CheckCircle, AlertTriangle, Lightbulb, Target, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type EssayType = "common-app" | "ucas";

interface EssayFeedback {
  freePoints: string[];
  topicChallenge: string;
  mistakes: string[];
  suggestions: string[];
}

const EssayFeedbackSection = () => {
  const [essayType, setEssayType] = useState<EssayType>("common-app");
  const [essay, setEssay] = useState("");
  const [feedback, setFeedback] = useState<EssayFeedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasUsedFree, setHasUsedFree] = useState(false);

  const isAnalyzeDisabled = !essay.trim() || loading || essay.trim().length < 50;

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;
  const charCount = essay.length;

  const maxLabel = essayType === "common-app" ? `${wordCount}/650 words` : `${charCount}/4000 characters`;
  const isOverLimit = essayType === "common-app" ? wordCount > 650 : charCount > 4000;

  const analyzeEssay = async () => {
    if (!essay.trim() || essay.trim().length < 50) {
      setError("Please enter at least 50 characters for meaningful feedback.");
      return;
    }

    setLoading(true);
    setError("");
    setFeedback(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("analyze-essay", {
        body: { essay: essay.trim(), essayType },
      });

      if (fnError) throw new Error(fnError.message);
      if (data?.error) throw new Error(data.error);

      setFeedback(data as EssayFeedback);
      if (!hasUsedFree) setHasUsedFree(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze essay. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="essay-feedback" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mx-auto mb-16"
        >
          <h3 className="text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-normal font-bold text-black mb-4">Essay Review</h3>
          <p className="text-left font-['Poppins'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-6 tracking-tight uppercase">
            Sharpen Your Personal Essay
          </p>
          <p className="font-['Poppins'] text-3xl text-gray-800 !leading-[2.25rem] md:leading-relaxed text-center mb-10">
            Get brutally honest, precision feedback on your Common App essay or UCAS personal statement. No generic advice — only specific, actionable insights that admissions officers actually care about.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <div className="mb-6">
              <label className="font-['Poppins'] text-3xl text-gray-800 !leading-[2.25rem] md:leading-relaxed text-left font-medium">
                Essay Type
              </label>
              <div className="flex gap-3 pt-4">
                {[
                  { id: "common-app" as EssayType, label: "Common App Essay", desc: "US universities" },
                  { id: "ucas" as EssayType, label: "UCAS Personal Statement", desc: "UK universities" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEssayType(type.id)}
                    className={`flex-1 p-4 rounded-lg border-2 transition-all text-left ${essayType === type.id
                      ? "bg-[#1a3a8a] border-[#1a3a8a] text-white"
                      : "border-border hover:border-[#1a3a8a]/30"
                      }`}
                  >
                    <span
                      className={`block font-semibold text-sm ${essayType === type.id ? "text-white" : "text-foreground"
                        }`}
                    >
                      {type.label}
                    </span>

                    <span
                      className={`text-xs ${essayType === type.id
                        ? "text-white/80"
                        : "text-muted-foreground"
                        }`}
                    >
                      {type.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="font-['Poppins'] text-3xl text-gray-800 !leading-[2.25rem] md:leading-relaxed text-left font-medium">
                  Your Essay
                </label>
                <span className={`text-xs font-medium ${isOverLimit ? "text-destructive" : "text-muted-foreground"}`}>
                  {maxLabel}
                </span>
              </div>
              <textarea
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                placeholder={
                  essayType === "common-app"
                    ? "Paste your Common App personal statement here (max 650 words)..."
                    : "Paste your UCAS personal statement here (max 4,000 characters)..."
                }
                rows={12}
                className={`w-full rounded-xl border border-slate-200 bg-white px-6 py-4 text-[#163b55] placeholder:text-slate-400 text-sm outline-none focus:border-blue-400 shadow-sm transition-all resize-none leading-relaxed ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                {error}
              </div>
            )}
            <Button
              onClick={analyzeEssay}
              disabled={isAnalyzeDisabled}
              className={`font-semibold w-full disabled:pointer-events-auto disabled:cursor-not-allowed ${loading || isAnalyzeDisabled
                ? "bg-[#768cbe] text-white"
                : "bg-[#03336d] hover:bg-[#022955] text-white"
                }`}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing your essay...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Get Essay Feedback
                </>
              )}
            </Button>
            {hasUsedFree && !loading && !feedback && (
              <p className="text-xs text-muted-foreground text-center mt-3">
                You've used your free analysis. Submit again to see the 5 key points, or get in touch for the full deep-dive review.
              </p>
            )}
          </div>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 space-y-6"
              >
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <h3 className="font-display text-xl font-bold text-foreground">Key Feedback Points</h3>
                  </div>
                  <div className="space-y-3">
                    {feedback.freePoints.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-background rounded-lg"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-sm text-foreground leading-relaxed">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm filter blur-[6px] select-none pointer-events-none">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-5 w-5 text-gold" />
                      <h3 className="font-display text-xl font-bold text-foreground">Topic Challenge</h3>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{feedback.topicChallenge}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg text-center max-w-sm">
                      <Lock className="h-8 w-8 text-gold mx-auto mb-3" />
                      <p className="font-semibold text-foreground text-sm mb-1">Topic Challenge</p>
                      <p className="text-xs text-muted-foreground mb-3">See whether your essay topic truly stands out from thousands of similar submissions.</p>
                      <Button onClick={scrollToContact} size="sm" className="bg-gold hover:bg-gold-light text-primary font-semibold">
                        Get Full Review
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm filter blur-[6px] select-none pointer-events-none">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <h3 className="font-display text-xl font-bold text-foreground">Critical Mistakes</h3>
                    </div>
                    <div className="space-y-2">
                      {feedback.mistakes.map((m, i) => (
                        <p key={i} className="text-sm text-foreground">{m}</p>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-destructive/20 shadow-lg text-center max-w-sm">
                      <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-3" />
                      <p className="font-semibold text-foreground text-sm mb-1">{feedback.mistakes.length} Critical Mistakes Found</p>
                      <p className="text-xs text-muted-foreground mb-3">We identified specific mistakes that could cost you an admission. Get in touch to see them.</p>
                      <Button onClick={scrollToContact} size="sm" className="bg-gold hover:bg-gold-light text-primary font-semibold">
                        Unlock Mistakes
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm filter blur-[6px] select-none pointer-events-none">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="h-5 w-5 text-gold" />
                      <h3 className="font-display text-xl font-bold text-foreground">Improvement Suggestions</h3>
                    </div>
                    <div className="space-y-2">
                      {feedback.suggestions.map((s, i) => (
                        <p key={i} className="text-sm text-foreground">{s}</p>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg text-center max-w-sm">
                      <Lightbulb className="h-8 w-8 text-gold mx-auto mb-3" />
                      <p className="font-semibold text-foreground text-sm mb-1">5 Tailored Suggestions</p>
                      <p className="text-xs text-muted-foreground mb-3">Concrete rewrite suggestions with example phrasing to elevate your essay.</p>
                      <Button onClick={scrollToContact} size="sm" className="bg-gold hover:bg-gold-light text-primary font-semibold">
                        Get Suggestions
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EssayFeedbackSection;
