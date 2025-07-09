import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target, 
  TrendingUp, 
  PlayCircle,
  Star,
  ArrowRight,
  Calendar,
  Users
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  progress: number;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  instructor: string;
  rating: number;
  nextLesson: string;
}

interface Recommendation {
  id: string;
  title: string;
  reason: string;
  type: "course" | "lesson" | "exercise";
  estimatedTime: string;
  priority: "high" | "medium" | "low";
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    progress: 65,
    duration: "8 hours",
    difficulty: "advanced",
    category: "Programming",
    instructor: "Sarah Chen",
    rating: 4.8,
    nextLesson: "Custom Hooks Deep Dive"
  },
  {
    id: "2", 
    title: "UI/UX Design Fundamentals",
    progress: 30,
    duration: "12 hours",
    difficulty: "beginner",
    category: "Design",
    instructor: "Alex Rodriguez",
    rating: 4.9,
    nextLesson: "User Research Methods"
  },
  {
    id: "3",
    title: "Python for Data Science",
    progress: 0,
    duration: "15 hours",
    difficulty: "intermediate",
    category: "Programming",
    instructor: "Dr. Maya Patel",
    rating: 4.7,
    nextLesson: "Getting Started with Pandas"
  }
];

const mockRecommendations: Recommendation[] = [
  {
    id: "1",
    title: "JavaScript ES6+ Features",
    reason: "Builds on your current JavaScript skills",
    type: "course",
    estimatedTime: "4 hours",
    priority: "high"
  },
  {
    id: "2",
    title: "Component Testing with Jest",
    reason: "Perfect next step after React patterns",
    type: "lesson",
    estimatedTime: "45 min",
    priority: "high"
  },
  {
    id: "3",
    title: "Design Systems Workshop",
    reason: "Connects your design and programming interests",
    type: "exercise",
    estimatedTime: "2 hours",
    priority: "medium"
  }
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "courses" | "recommendations">("overview");

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: "learning-beginner",
      intermediate: "learning-intermediate",
      advanced: "learning-advanced"
    };
    return colors[difficulty as keyof typeof colors] || "learning-beginner";
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "destructive",
      medium: "primary", 
      low: "muted"
    };
    return colors[priority as keyof typeof colors] || "muted";
  };

  return (
    <section className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground text-lg">Continue your personalized learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-learning-progress/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-learning-progress" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Courses Started</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-learning-intermediate/10 rounded-lg">
                  <Clock className="w-6 h-6 text-learning-intermediate" />
                </div>
                <div>
                  <p className="text-2xl font-bold">47h</p>
                  <p className="text-sm text-muted-foreground">Learning Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-learning-advanced/10 rounded-lg">
                  <Trophy className="w-6 h-6 text-learning-advanced" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Certificates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Goal Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-8 bg-muted p-1 rounded-lg w-fit">
          {[
            { id: "overview", label: "Overview" },
            { id: "courses", label: "My Courses" },
            { id: "recommendations", label: "Recommendations" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Continue Learning */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
              <div className="space-y-4">
                {mockCourses.filter(course => course.progress > 0).map((course) => (
                  <Card key={course.id} className="hover:shadow-card transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                          <p className="text-muted-foreground text-sm">Next: {course.nextLesson}</p>
                        </div>
                        <Badge variant="outline" className={`bg-${getDifficultyColor(course.difficulty)}/10`}>
                          {course.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {course.rating}
                          </span>
                        </div>
                        <Button size="sm">
                          <PlayCircle className="w-4 h-4" />
                          Continue
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">AI Recommendations</h2>
              <div className="space-y-4">
                {mockRecommendations.slice(0, 3).map((rec) => (
                  <Card key={rec.id} className="hover:shadow-card transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 bg-${getPriorityColor(rec.priority)}/10 rounded-lg flex-shrink-0`}>
                          <TrendingUp className={`w-4 h-4 text-${getPriorityColor(rec.priority)}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{rec.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{rec.reason}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{rec.estimatedTime}</span>
                            <Button size="sm" variant="ghost">
                              <ArrowRight className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-card transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className={`bg-${getDifficultyColor(course.difficulty)}/10`}>
                        {course.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{course.category}</span>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {course.rating}
                        </span>
                      </div>
                      <Button size="sm" variant={course.progress > 0 ? "default" : "outline"}>
                        {course.progress > 0 ? "Continue" : "Start"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "recommendations" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Personalized Recommendations</h2>
            <div className="space-y-6">
              {mockRecommendations.map((rec) => (
                <Card key={rec.id} className="hover:shadow-card transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-${getPriorityColor(rec.priority)}/10 rounded-lg`}>
                          <TrendingUp className={`w-6 h-6 text-${getPriorityColor(rec.priority)}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{rec.title}</h3>
                          <p className="text-muted-foreground">{rec.reason}</p>
                        </div>
                      </div>
                      <Badge variant={rec.priority === "high" ? "destructive" : "secondary"}>
                        {rec.priority} priority
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {rec.estimatedTime}
                        </span>
                        <span className="flex items-center gap-1 capitalize">
                          {rec.type === "course" && <BookOpen className="w-4 h-4" />}
                          {rec.type === "lesson" && <PlayCircle className="w-4 h-4" />}
                          {rec.type === "exercise" && <Target className="w-4 h-4" />}
                          {rec.type}
                        </span>
                      </div>
                      <Button>
                        Start Learning
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}