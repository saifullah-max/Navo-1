"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  TrendingUp,
  Target,
  Crown,
  Briefcase,
  Trophy,
  Palette,
  Globe,
  Heart,
  Users,
  Star,
  Dumbbell,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const categories = [
  { id: "school-leadership", label: "School Leadership", icon: Crown },
  { id: "other-leadership", label: "Other Leadership", icon: Users },
  { id: "internships", label: "Internships", icon: Briefcase },
  { id: "athletics", label: "Athletics & Sports", icon: Dumbbell },
  { id: "stem", label: "STEM", icon: Star },
  { id: "academic-competitions", label: "Academic Competitions", icon: Trophy },
  { id: "arts", label: "Arts, Music & Performance", icon: Palette },
  { id: "cultural", label: "Cultural & History", icon: Globe },
  { id: "community", label: "Community Projects", icon: Heart },
  { id: "others", label: "Others", icon: Star },
] as const;

type CategoryId = (typeof categories)[number]["id"];

interface Activity {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  role: string;
  duration: string;
}

interface ActivityAnalysis {
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
  positioning: string;
  overallTier: "Exceptional" | "Strong" | "Developing" | "Needs Work";
}

interface ProfileAssessment {
  strengths: string[];
  improvements: string[];
}

function analyzeActivity(activity: Activity): ActivityAnalysis {
  const desc = `${activity.title} ${activity.description} ${activity.role}`.toLowerCase();
  const strengths: string[] = [];
  const improvements: string[] = [];
  const nextSteps: string[] = [];
  let positioning = "";
  let tier: ActivityAnalysis["overallTier"] = "Developing";

  const hasLeadership = /founder|president|captain|head|lead|director|chief|chair|co-founder/i.test(desc);
  const hasMeasurable = /\d+|raised|impacted|served|built|launched|grew|increased/i.test(desc);
  const hasRecognition = /won|award|finalist|champion|national|international|published|featured/i.test(desc);
  const hasInitiative = /founded|created|started|launched|established|built|developed|designed/i.test(desc);
  const hasSocialImpact = /underprivileged|underserved|community|nonprofit|volunteer|charity|donation/i.test(desc);

  if (hasLeadership) strengths.push("Strong leadership role — admissions officers value demonstrated authority and responsibility.");
  if (hasMeasurable) strengths.push("Quantifiable impact — numbers make your contribution concrete and memorable.");
  if (hasRecognition) strengths.push("External recognition validates your achievement beyond self-reporting.");
  if (hasInitiative) strengths.push("Self-starter mentality — founding or creating shows exceptional initiative.");
  if (hasSocialImpact) strengths.push("Social impact demonstrates values alignment with top universities' missions.");

  if (!hasLeadership) improvements.push("Seek a formal leadership title — even a committee chair role elevates this activity significantly.");
  if (!hasMeasurable) improvements.push("Add measurable outcomes (e.g., 'served 200 students' or 'raised $5,000') to make your impact tangible.");
  if (!hasRecognition) improvements.push("Pursue competitions, awards, or external recognition to validate your work.");

  switch (activity.category) {
    case "school-leadership":
      if (!hasMeasurable) nextSteps.push("Document specific policy changes or initiatives you led and their measurable outcomes.");
      nextSteps.push("Connect your leadership to a broader narrative — how did this shape your perspective or goals?");
      positioning = hasLeadership
        ? "Position as a change-maker who drove tangible improvements in your school community."
        : "Frame this as your path to becoming a community leader — show growth and increasing responsibility.";
      break;
    case "other-leadership":
      nextSteps.push("Highlight the scope and scale — how many people did you lead or impact?");
      nextSteps.push("Show transferable skills: delegation, conflict resolution, strategic planning.");
      positioning = "Position as evidence of leadership beyond your school bubble — shows you can lead in diverse contexts.";
      break;
    case "internships":
      nextSteps.push("Request a deliverable or project outcome you can reference in applications.");
      nextSteps.push("Ask your supervisor for a letter of recommendation highlighting your specific contributions.");
      if (!hasMeasurable) nextSteps.push("Quantify your contributions: projects completed, revenue impacted, or processes improved.");
      positioning = "Frame as professional-grade experience that sets you apart from typical high schoolers. Emphasize what you learned and contributed, not just where you worked.";
      break;
    case "athletics":
      nextSteps.push("If not already competing at state/national level, set specific performance milestones.");
      nextSteps.push("Highlight teamwork, discipline, and time management as transferable qualities.");
      positioning = hasRecognition
        ? "Lead with your competitive achievements, then connect athletic discipline to your academic drive."
        : "Position as a demonstration of commitment, grit, and the ability to balance demanding schedules.";
      break;
    case "stem":
      nextSteps.push("Pursue a research project or publication to elevate from participant to contributor.");
      nextSteps.push("Consider entering ISEF, Science Talent Search, or Siemens for national recognition.");
      if (hasInitiative) nextSteps.push("Open-source your work or present at conferences to amplify impact.");
      positioning = "Frame as intellectual curiosity in action. Top schools want to see you pushing boundaries, not just completing assignments.";
      break;
    case "academic-competitions":
      nextSteps.push("Target the next tier of competition — regional → state → national → international.");
      nextSteps.push("Mentor younger students or start a study group to show leadership within your competitive community.");
      positioning = hasRecognition
        ? "This is a powerful differentiator — lead with your highest placement and show upward trajectory."
        : "Focus on improvement over time and what the competitive journey taught you about perseverance.";
      break;
    case "arts":
      nextSteps.push("Submit work to Scholastic Art & Writing Awards, regional exhibitions, or performance festivals.");
      nextSteps.push("Create a portfolio or performance reel that showcases growth and range.");
      positioning = "Position as evidence of creative thinking and dedication. Top schools value artistic passion as much as academic rigor.";
      break;
    case "cultural":
      nextSteps.push("Connect cultural engagement to broader themes of identity, bridge-building, or community preservation.");
      nextSteps.push("Consider writing about this in your personal essay if it's central to your identity.");
      positioning = "Frame as what makes you uniquely you. Cultural activities reveal depth, perspective, and the diversity of thought you'd bring to campus.";
      break;
    case "community":
      nextSteps.push("Scale your project — can you expand to other schools, neighborhoods, or cities?");
      nextSteps.push("Document before/after impact with data, testimonials, or media coverage.");
      if (!hasInitiative) nextSteps.push("Take ownership of a specific initiative rather than participating in an existing one.");
      positioning = hasSocialImpact
        ? "Position as a mission-driven leader who creates systemic change, not just a volunteer logging hours."
        : "Elevate from participation to impact — show what changed because of your involvement.";
      break;
    default:
      nextSteps.push("Find a way to connect this activity to your intended major or career narrative.");
      nextSteps.push("Seek external validation through competitions, publications, or recognition.");
      positioning = "Frame this as a unique dimension of your profile that reveals something unexpected about you.";
  }

  if (strengths.length === 0) strengths.push("You've taken initiative by pursuing this activity — that's a starting point to build upon.");

  const score = (hasLeadership ? 1 : 0) + (hasMeasurable ? 1 : 0) + (hasRecognition ? 1 : 0) + (hasInitiative ? 1 : 0) + (hasSocialImpact ? 1 : 0);
  if (score >= 4) tier = "Exceptional";
  else if (score >= 3) tier = "Strong";
  else if (score >= 1) tier = "Developing";
  else tier = "Needs Work";

  const durationLower = activity.duration.toLowerCase();
  if (/3\+|4\+|5\+|multi|years/i.test(durationLower)) {
    strengths.push("Long-term commitment demonstrates genuine passion over resume-padding.");
  } else if (/month|semester|few/i.test(durationLower)) {
    improvements.push("Extend your commitment — admissions officers value depth over breadth. Aim for 2+ years.");
  }

  return { strengths, improvements, nextSteps, positioning, overallTier: tier };
}

function getTierColor(tier: ActivityAnalysis["overallTier"]) {
  switch (tier) {
    case "Exceptional": return "text-gold";
    case "Strong": return "text-green-400";
    case "Developing": return "text-blue-400";
    case "Needs Work": return "text-slate-500";
  }
}

function getTierBg(tier: ActivityAnalysis["overallTier"]) {
  switch (tier) {
    case "Exceptional": return "bg-gold/10 border-gold/30";
    case "Strong": return "bg-green-500/10 border-green-400/30";
    case "Developing": return "bg-blue-500/10 border-blue-400/30";
    case "Needs Work": return "bg-slate-50 border-slate-200";
  }
}

const MAX_FREE_ACTIVITIES = 2;

const ActivityPortfolioSection = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("school-leadership");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const [activities, setActivities] = useState<(Activity & { analysis: ActivityAnalysis })[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showLock, setShowLock] = useState(false);
  const [isAssessing, setIsAssessing] = useState(false);

  const addActivity = async () => {
    if (!title.trim()) return;
    if (activities.length >= MAX_FREE_ACTIVITIES) {
      setShowLock(true);
      return;
    }

    setIsAssessing(true);

    const activity: Activity = {
      id: crypto.randomUUID(),
      category: selectedCategory,
      title: title.trim(),
      description: description.trim(),
      role: role.trim(),
      duration: duration.trim(),
    };

    const baseAnalysis = analyzeActivity(activity);
    let analysis = baseAnalysis;

    try {
      const traits = [activity.title, activity.role, activity.description, activity.duration].filter(Boolean);
      const { data, error } = await supabase.functions.invoke("assess-profile", {
        body: { traits },
      });

      if (!error && data) {
        const assessment = data as ProfileAssessment;
        analysis = {
          ...baseAnalysis,
          strengths: assessment.strengths?.length ? assessment.strengths : baseAnalysis.strengths,
          improvements: assessment.improvements?.length ? assessment.improvements : baseAnalysis.improvements,
        };
      }
    } catch {
      // Keep deterministic local analysis if remote call fails.
      analysis = baseAnalysis;
    } finally {
      setIsAssessing(false);
    }

    setActivities((prev) => [...prev, { ...activity, analysis }]);
    setExpandedId(activity.id);
    setTitle("");
    setDescription("");
    setRole("");
    setDuration("");
  };

  const removeActivity = (id: string) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
    if (expandedId === id) setExpandedId(null);
    setShowLock(false);
  };

  const selectedCat = categories.find((c) => c.id === selectedCategory)!;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mx-auto mb-16">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-normal font-bold text-black mb-4">Activity Portfolio</p>
          <p className="font-['Poppins'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-6 tracking-tight uppercase">
            Strengthen Your Activities
          </p>
          <p className="font-['Poppins'] text-3xl text-gray-800 !leading-[2.25rem] md:leading-relaxed text-center mb-10">
            Add your existing activities and get personalized advice on improvements, next steps, and how to position them for top university applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white backdrop-blur-sm rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <label className="font-['Poppins'] text-3xl text-gray-800 !leading-[2.25rem] md:leading-relaxed text-left font-medium">
                Category
              </label>
              <div className="flex flex-wrap gap-2 pt-4">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm lg:text-base font-medium transition-all ${isActive
                        ? "bg-[#768cbe] text-white"
                        : "bg-[#1a3a8a] text-white/85 hover:bg-[#15357d]"
                        }`}
                    >
                      <Icon className="h-3 w-3" />
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={`Activity name (e.g. "${selectedCat.label === "Internships" ? "Summer Research Intern at MIT Lab" : selectedCat.label === "Athletics & Sports" ? "Varsity Tennis Team" : "Student Council President"}")`}
                className="w-full bg-white rounded-lg border border-slate-400 p-3 text-[#163b55] placeholder:text-slate-400 text-sm outline-none focus:border-[#15357d] transition-colors"
                maxLength={150}
                disabled={showLock}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Your role (e.g. Founder, Captain, Member)"
                  className="w-full bg-white rounded-lg border border-slate-400 p-3 text-[#163b55] placeholder:text-slate-400 text-sm outline-none focus:border-[#15357d] transition-colors"
                  maxLength={80}
                  disabled={showLock}
                />
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Duration (e.g. 2 years, 6 months)"
                  className="w-full bg-white rounded-lg border border-slate-400 p-3 text-[#163b55] placeholder:text-slate-400 text-sm outline-none focus:border-[#15357d] transition-colors"
                  maxLength={50}
                  disabled={showLock}
                />
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your involvement, achievements, and impact. Be specific — include numbers, awards, outcomes."
                rows={3}
                className="w-full bg-white rounded-lg border border-slate-400 p-3 text-[#163b55] placeholder:text-slate-400 text-sm outline-none focus:border-[#15357d] transition-colors resize-none"
                maxLength={500}
                disabled={showLock}
              />
              <Button
                onClick={addActivity}
                disabled={!title.trim() || showLock || isAssessing}
                className={`font-semibold w-full disabled:pointer-events-auto disabled:cursor-not-allowed ${isAssessing
                  ? "bg-[#768cbe] text-white"
                  : "bg-[#03336d] hover:bg-[#022955] text-white"
                  }`}
              >
                <Plus className="h-4 w-4 mr-2" />
                {isAssessing ? "Analyzing Activity..." : "Analyze Activity"}
              </Button>
            </div>

            <div className="space-y-4">
              {activities.map((activity) => {
                const { analysis } = activity;
                const isExpanded = expandedId === activity.id;
                const tierColor = getTierColor(analysis.overallTier);
                const tierBg = getTierBg(analysis.overallTier);
                const CatIcon = categories.find((c) => c.id === activity.category)?.icon || Star;

                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`rounded-lg border mb-3 overflow-hidden ${tierBg}`}
                  >
                    <div
                      className="p-4 cursor-pointer flex items-start justify-between"
                      onClick={() => setExpandedId(isExpanded ? null : activity.id)}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${tierColor} bg-primary/30`}>
                          <CatIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-[#163b55] text-sm">{activity.title}</span>
                            <span className={`text-xs font-bold ${tierColor}`}>{analysis.overallTier}</span>
                          </div>
                          <p className="text-slate-500 text-xs mt-0.5">
                            {activity.role && `${activity.role} · `}{activity.duration && `${activity.duration} · `}
                            {categories.find((c) => c.id === activity.category)?.label}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); removeActivity(activity.id); }}
                          className="text-slate-400 hover:text-destructive transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="px-4 pb-4 space-y-4">
                        <div className="h-px bg-slate-200" />

                        {analysis.strengths.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Lightbulb className="h-4 w-4 text-green-400" />
                              <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Strengths</span>
                            </div>
                            <ul className="space-y-1.5">
                              {analysis.strengths.map((s, i) => (
                                <li key={i} className="text-slate-600 text-xs pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400">
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {analysis.improvements.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="h-4 w-4 text-gold" />
                              <span className="text-gold text-xs font-bold uppercase tracking-wider">Improvements</span>
                            </div>
                            <ul className="space-y-1.5">
                              {analysis.improvements.map((s, i) => (
                                <li key={i} className="text-slate-600 text-xs pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gold">
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {analysis.nextSteps.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Target className="h-4 w-4 text-blue-400" />
                              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Next Steps</span>
                            </div>
                            <ul className="space-y-1.5">
                              {analysis.nextSteps.map((s, i) => (
                                <li key={i} className="text-slate-600 text-xs pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-400">
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                          <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">📋 Application Positioning</p>
                          <p className="text-slate-600 text-xs leading-relaxed">{analysis.positioning}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {showLock && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-4"
              >
                <div className="flex items-center justify-center gap-2 text-gold mb-3">
                  <Lock className="h-4 w-4" />
                  <span className="text-sm font-semibold">You've reached the free limit</span>
                </div>
                <p className="text-slate-600 text-xs mb-4">
                  Sign up to analyze unlimited activities with deeper insights, college-specific positioning, and a comprehensive portfolio review.
                </p>
                <Button
                  className="bg-gold hover:bg-gold-light text-primary font-semibold"
                  onClick={() => router.push("/auth")}
                >
                  Unlock Full Portfolio Analysis →
                </Button>
              </motion.div>
            )}

            {activities.length > 0 && activities.length < MAX_FREE_ACTIVITIES && (
              <p className="text-slate-500 text-xs text-center mt-3">
                {MAX_FREE_ACTIVITIES - activities.length} free analysis{MAX_FREE_ACTIVITIES - activities.length !== 1 ? "es" : ""} remaining
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPortfolioSection;
