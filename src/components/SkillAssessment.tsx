import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, ArrowRight, ArrowLeft } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    skills: [
      { id: "javascript", name: "JavaScript", category: "programming", level: "beginner" as const },
      { id: "python", name: "Python", category: "programming", level: "beginner" as const },
      { id: "react", name: "React", category: "programming", level: "beginner" as const },
      { id: "nodejs", name: "Node.js", category: "programming", level: "beginner" as const },
    ]
  },
  {
    id: "design",
    name: "Design",
    skills: [
      { id: "figma", name: "Figma", category: "design", level: "beginner" as const },
      { id: "photoshop", name: "Photoshop", category: "design", level: "beginner" as const },
      { id: "ui-ux", name: "UI/UX Design", category: "design", level: "beginner" as const },
    ]
  },
  {
    id: "business",
    name: "Business",
    skills: [
      { id: "marketing", name: "Digital Marketing", category: "business", level: "beginner" as const },
      { id: "analytics", name: "Data Analytics", category: "business", level: "beginner" as const },
      { id: "project-management", name: "Project Management", category: "business", level: "beginner" as const },
    ]
  }
];

export function SkillAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<Record<string, string>>({});
  const [goals, setGoals] = useState<string[]>([]);

  const totalSteps = skillCategories.length + 1; // +1 for goals step

  const handleSkillSelect = (skillId: string, level: string) => {
    setSelectedSkills(prev => ({
      ...prev,
      [skillId]: level
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const goalOptions = [
    "Get a promotion",
    "Switch careers",
    "Build a side project",
    "Learn for personal growth",
    "Prepare for certification",
    "Start freelancing"
  ];

  const renderSkillLevel = (skill: Skill) => {
    const levels = ["beginner", "intermediate", "advanced", "expert"];

    const getButtonStyles = (level: string) => {
      const isSelected = selectedSkills[skill.id] === level;
      
      if (isSelected) {
        switch (level) {
          case "beginner":
            return "bg-learning-beginner text-white";
          case "intermediate":
            return "bg-learning-intermediate text-white";
          case "advanced":
            return "bg-learning-advanced text-white";
          case "expert":
            return "bg-learning-expert text-white";
          default:
            return "bg-primary text-primary-foreground";
        }
      }
      
      return "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground";
    };

    return (
      <div className="grid grid-cols-4 gap-2 mt-3">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => handleSkillSelect(skill.id, level)}
            className={`p-2 rounded-lg text-xs font-medium transition-all ${getButtonStyles(level)}`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    );
  };

  const renderStep = () => {
    if (currentStep < skillCategories.length) {
      const category = skillCategories[currentStep];
      
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">{category.name} Skills</h2>
            <p className="text-muted-foreground">Rate your current level in these skills</p>
          </div>
          
          <div className="grid gap-4 max-w-2xl mx-auto">
            {category.skills.map((skill) => (
              <Card key={skill.id} className="border-2 hover:shadow-card transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  {renderSkillLevel(skill)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    } else {
      // Goals step
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">What are your goals?</h2>
            <p className="text-muted-foreground">Select all that apply to personalize your learning path</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {goalOptions.map((goal) => (
              <Card 
                key={goal}
                className={`cursor-pointer border-2 transition-all hover:shadow-card ${
                  goals.includes(goal) ? "border-primary bg-primary/5" : ""
                }`}
                onClick={() => handleGoalToggle(goal)}
              >
                <CardContent className="p-6 flex items-center gap-3">
                  {goals.includes(goal) ? (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                  <span className="font-medium">{goal}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Progress */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
          </div>
          <Progress value={((currentStep + 1) / totalSteps) * 100} className="h-2" />
        </div>

        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between max-w-2xl mx-auto mt-12">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          
          {currentStep < totalSteps - 1 ? (
            <Button 
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={currentStep < skillCategories.length && 
                       skillCategories[currentStep].skills.some(skill => !selectedSkills[skill.id])}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button 
              variant="progress"
              disabled={goals.length === 0}
            >
              Create My Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}