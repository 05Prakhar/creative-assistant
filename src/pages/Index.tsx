import { useState } from "react";
import { Hero } from "@/components/Hero";
import { SkillAssessment } from "@/components/SkillAssessment";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"hero" | "assessment" | "dashboard">("hero");

  const renderCurrentView = () => {
    switch (currentView) {
      case "hero":
        return <Hero />;
      case "assessment":
        return <SkillAssessment />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Demo Navigation - Hidden in production */}
      <div className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 flex gap-2">
        <button
          onClick={() => setCurrentView("hero")}
          className={`px-3 py-1 rounded text-sm transition-all ${
            currentView === "hero" 
              ? "bg-white text-primary" 
              : "text-white hover:bg-white/20"
          }`}
        >
          Hero
        </button>
        <button
          onClick={() => setCurrentView("assessment")}
          className={`px-3 py-1 rounded text-sm transition-all ${
            currentView === "assessment" 
              ? "bg-white text-primary" 
              : "text-white hover:bg-white/20"
          }`}
        >
          Assessment
        </button>
        <button
          onClick={() => setCurrentView("dashboard")}
          className={`px-3 py-1 rounded text-sm transition-all ${
            currentView === "dashboard" 
              ? "bg-white text-primary" 
              : "text-white hover:bg-white/20"
          }`}
        >
          Dashboard
        </button>
      </div>

      {renderCurrentView()}
    </div>
  );
};

export default Index;
