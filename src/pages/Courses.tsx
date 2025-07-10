import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Monitor, 
  Sparkles, 
  Briefcase,
  Clock,
  Users,
  Star,
  ArrowRight,
  Play
} from "lucide-react";

const courseCategories = [
  {
    id: "design-visual-arts",
    title: "Design & Visual Arts",
    description: "Master fundamental and advanced design principles",
    icon: Palette,
    color: "bg-purple-500",
    courses: [
      {
        title: "Advanced Typography & Layout",
        description: "Professional typography, grid systems, and layout design",
        duration: "6 weeks",
        level: "Intermediate",
        students: "2.4k",
        rating: 4.8
      },
      {
        title: "Color Theory & Brand Systems",
        description: "Strategic color application and brand identity development",
        duration: "4 weeks", 
        level: "Beginner",
        students: "3.1k",
        rating: 4.9
      },
      {
        title: "UI/UX Design Mastery",
        description: "User-centered design, prototyping, and usability testing",
        duration: "8 weeks",
        level: "Advanced",
        students: "1.8k", 
        rating: 4.7
      }
    ]
  },
  {
    id: "digital-creation",
    title: "Digital Creation",
    description: "Master digital tools and creative techniques",
    icon: Monitor,
    color: "bg-blue-500",
    courses: [
      {
        title: "3D Modeling & Rendering",
        description: "Blender fundamentals, modeling, texturing, and photorealistic rendering",
        duration: "10 weeks",
        level: "Intermediate",
        students: "1.5k",
        rating: 4.6
      },
      {
        title: "Digital Illustration Pro",
        description: "Concept art, character design, and digital painting techniques",
        duration: "7 weeks",
        level: "Intermediate", 
        students: "2.2k",
        rating: 4.8
      },
      {
        title: "Video Editing & Post-Production",
        description: "Professional video editing, motion graphics, and color grading",
        duration: "6 weeks",
        level: "Beginner",
        students: "1.9k",
        rating: 4.5
      }
    ]
  },
  {
    id: "creative-technology", 
    title: "Creative Technology",
    description: "Blend creativity with cutting-edge technology",
    icon: Sparkles,
    color: "bg-green-500",
    courses: [
      {
        title: "Creative Coding Fundamentals",
        description: "p5.js, Three.js, and generative art programming",
        duration: "8 weeks",
        level: "Intermediate",
        students: "890",
        rating: 4.7
      },
      {
        title: "AI-Assisted Design Workflows", 
        description: "Integrate AI tools into your creative process effectively",
        duration: "4 weeks",
        level: "Beginner",
        students: "3.2k",
        rating: 4.9
      },
      {
        title: "VR/AR Content Creation",
        description: "Immersive experience design and 3D spatial interfaces",
        duration: "9 weeks",
        level: "Advanced",
        students: "654",
        rating: 4.6
      }
    ]
  },
  {
    id: "professional-skills",
    title: "Professional Skills", 
    description: "Business and career development for creatives",
    icon: Briefcase,
    color: "bg-orange-500",
    courses: [
      {
        title: "Portfolio & Client Presentation",
        description: "Showcase your work and win clients with compelling presentations",
        duration: "3 weeks",
        level: "Beginner", 
        students: "2.7k",
        rating: 4.8
      },
      {
        title: "Creative Project Management",
        description: "Manage creative projects, teams, and deadlines effectively",
        duration: "5 weeks",
        level: "Intermediate",
        students: "1.4k",
        rating: 4.5
      },
      {
        title: "Freelancing & Creative Business",
        description: "Build a sustainable creative business and manage client relationships",
        duration: "6 weeks",
        level: "Beginner",
        students: "2.1k", 
        rating: 4.7
      }
    ]
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                CreativeLab
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/courses" className="text-primary font-medium">Courses</Link>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Assessment</Link>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              </nav>
            </div>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Master Creative Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional courses designed for creative professionals. Learn advanced techniques, 
            master industry tools, and elevate your creative career.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>12,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.8 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Self-Paced Learning</span>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="space-y-16">
          {courseCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Course Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}>
                          {course.level}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{course.students} students</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/courses/${category.id}-${index}`} className="flex-1">
                          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Play className="h-4 w-4 mr-2" />
                            Start Course
                          </Button>
                        </Link>
                        <Link to={`/courses/${category.id}-${index}`}>
                          <Button variant="outline" size="icon">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold">Ready to Start Your Creative Journey?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of creative professionals who have transformed their careers through our comprehensive courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore All Courses
                </Button>
                <Button size="lg" variant="outline">
                  Take Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;