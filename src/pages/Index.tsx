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
      <div className="fixed top-4 right-4 z-50 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-2 flex gap-2 shadow-lg">
        <button
          onClick={() => setCurrentView("hero")}
          className={`px-3 py-1 rounded text-sm transition-all ${
            currentView === "hero" 
              ? "bg-primary text-primary-foreground" 
              : "text-foreground hover:bg-muted"
          }`}
        >
          Hero
        </button>
        <button
          onClick={() => setCurrentView("assessment")}
          className={`px-3 py-1 rounded text-sm transition-all ${
            currentView === "assessment" 
              ? "bg-primary text-primary-foreground" 
              : "text-foreground hover:bg-muted"
          }`}
        >
          Assessment
        </button>
        <button
          onClick={() => setCurrentView("dashboard")}
          className={`px-3 py-1 rounded text-sm transition-all ${
            currentView === "dashboard" 
              ? "bg-primary text-primary-foreground" 
              : "text-foreground hover:bg-muted"
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
