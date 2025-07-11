import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  BookOpen,
  Award,
  Download,
  Share
} from "lucide-react";

// Sample course data - in a real app this would come from an API
// This mirrors the course data structure from Courses.tsx
const courseCategories = [
  {
    id: "design-visual-arts",
    courses: [
      {
        title: "Advanced Typography & Layout",
        description: "Professional typography, grid systems, and layout design",
        duration: "6 weeks",
        level: "Intermediate",
        students: "2.4k",
        rating: 4.8,
        instructor: "Sarah Chen",
        instructorTitle: "Senior Design Director at Adobe",
        price: "$149"
      },
      {
        title: "Color Theory & Brand Systems",
        description: "Strategic color application and brand identity development",
        duration: "4 weeks", 
        level: "Beginner",
        students: "3.1k",
        rating: 4.9,
        instructor: "Michael Rodriguez",
        instructorTitle: "Brand Design Lead at Nike",
        price: "$99"
      },
      {
        title: "UI/UX Design Mastery",
        description: "User-centered design, prototyping, and usability testing",
        duration: "8 weeks",
        level: "Advanced",
        students: "1.8k", 
        rating: 4.7,
        instructor: "Emma Thompson",
        instructorTitle: "UX Director at Google",
        price: "$199"
      }
    ]
  },
  {
    id: "digital-creation",
    courses: [
      {
        title: "3D Modeling & Rendering",
        description: "Blender fundamentals, modeling, texturing, and photorealistic rendering",
        duration: "10 weeks",
        level: "Intermediate",
        students: "1.5k",
        rating: 4.6,
        instructor: "Alex Kim",
        instructorTitle: "3D Artist at Pixar",
        price: "$249"
      },
      {
        title: "Digital Illustration Pro",
        description: "Concept art, character design, and digital painting techniques",
        duration: "7 weeks",
        level: "Intermediate", 
        students: "2.2k",
        rating: 4.8,
        instructor: "Luna Martinez",
        instructorTitle: "Senior Illustrator at Marvel",
        price: "$179"
      },
      {
        title: "Video Editing & Post-Production",
        description: "Professional video editing, motion graphics, and color grading",
        duration: "6 weeks",
        level: "Beginner",
        students: "1.9k",
        rating: 4.5,
        instructor: "David Park",
        instructorTitle: "Video Producer at Netflix",
        price: "$159"
      }
    ]
  },
  {
    id: "creative-technology", 
    courses: [
      {
        title: "Creative Coding Fundamentals",
        description: "p5.js, Three.js, and generative art programming",
        duration: "8 weeks",
        level: "Intermediate",
        students: "890",
        rating: 4.7,
        instructor: "Sophie Chen",
        instructorTitle: "Creative Technologist at Adobe",
        price: "$189"
      },
      {
        title: "AI-Assisted Design Workflows", 
        description: "Integrate AI tools into your creative process effectively",
        duration: "4 weeks",
        level: "Beginner",
        students: "3.2k",
        rating: 4.9,
        instructor: "Marcus Johnson",
        instructorTitle: "AI Design Lead at OpenAI",
        price: "$129"
      },
      {
        title: "VR/AR Content Creation",
        description: "Immersive experience design and 3D spatial interfaces",
        duration: "9 weeks",
        level: "Advanced",
        students: "654",
        rating: 4.6,
        instructor: "Lisa Wang",
        instructorTitle: "VR/AR Director at Meta",
        price: "$299"
      }
    ]
  },
  {
    id: "professional-skills",
    courses: [
      {
        title: "Portfolio & Client Presentation",
        description: "Showcase your work and win clients with compelling presentations",
        duration: "3 weeks",
        level: "Beginner", 
        students: "2.7k",
        rating: 4.8,
        instructor: "Ryan Scott",
        instructorTitle: "Creative Director at Pentagram",
        price: "$79"
      },
      {
        title: "Creative Project Management",
        description: "Manage creative projects, teams, and deadlines effectively",
        duration: "5 weeks",
        level: "Intermediate",
        students: "1.4k",
        rating: 4.5,
        instructor: "Julia Adams",
        instructorTitle: "Project Director at IDEO",
        price: "$119"
      },
      {
        title: "Freelancing & Creative Business",
        description: "Build a sustainable creative business and manage client relationships",
        duration: "6 weeks",
        level: "Beginner",
        students: "2.1k", 
        rating: 4.7,
        instructor: "Carlos Mendez",
        instructorTitle: "Creative Entrepreneur & Coach",
        price: "$139"
      }
    ]
  }
];

// Function to get course by ID
const getCourseById = (courseId: string) => {
  const [categoryId, courseIndex] = courseId.split('-').slice(0, -1).join('-') === courseId ? 
    courseId.split('-') : 
    [courseId.split('-').slice(0, -1).join('-'), courseId.split('-').slice(-1)[0]];
  
  const category = courseCategories.find(cat => cat.id === categoryId);
  if (!category) return null;
  
  const course = category.courses[parseInt(courseIndex)];
  if (!course) return null;

  return {
    ...course,
    whatYouLearn: [
      "Master professional techniques and best practices",
      "Build industry-standard projects and portfolio pieces", 
      "Learn from experienced professionals and experts",
      "Gain practical skills applicable to real-world projects",
      "Access to exclusive resources and tools"
    ],
    curriculum: [
      {
        week: 1,
        title: "Fundamentals & Getting Started",
        lessons: 5,
        duration: "2h 30min",
        completed: true
      },
      {
        week: 2, 
        title: "Core Concepts & Techniques",
        lessons: 6,
        duration: "3h 15min",
        completed: true
      },
      {
        week: 3,
        title: "Practical Applications", 
        lessons: 7,
        duration: "3h 45min",
        completed: false,
        current: true
      },
      {
        week: 4,
        title: "Advanced Methods",
        lessons: 6,
        duration: "3h 20min", 
        completed: false
      },
      {
        week: 5,
        title: "Professional Workflows",
        lessons: 8,
        duration: "4h 10min",
        completed: false
      },
      {
        week: 6,
        title: "Final Project & Portfolio",
        lessons: 4,
        duration: "2h 45min",
        completed: false
      }
    ],
    tools: ["Industry Software", "Professional Tools", "Design Resources"],
    certificate: true,
    prerequisites: "Basic knowledge and willingness to learn"
  };
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = getCourseById(courseId || '');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const completedLessons = course.curriculum.filter(week => week.completed).length;
  const totalLessons = course.curriculum.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/courses">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                CreativeLab
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{course.level}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span>{course.rating}</span>
                  <span>({course.students} students)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
              <p className="text-lg text-muted-foreground">{course.description}</p>
              
              {/* Course Meta */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{totalLessons} modules</span>
                </div>
                {course.certificate && (
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Certificate included</span>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Progress</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {completedLessons}/{totalLessons} modules completed
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {progressPercentage.toFixed(0)}% complete
                </p>
              </CardContent>
            </Card>

            {/* Course Content Tabs */}
            <Tabs defaultValue="curriculum" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="space-y-4">
                {course.curriculum.map((week, index) => (
                  <Card key={index} className={week.current ? "border-primary" : ""}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {week.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : week.current ? (
                            <Play className="h-5 w-5 text-primary" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                          )}
                          <div>
                            <CardTitle className="text-lg">Week {week.week}: {week.title}</CardTitle>
                            <CardDescription>
                              {week.lessons} lessons · {week.duration}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {week.current && (
                            <Link to={`/courses/${courseId}/assignment`}>
                              <Button variant="outline" size="sm">
                                Submit Assignment
                              </Button>
                            </Link>
                          )}
                          <Button 
                            variant={week.current ? "default" : week.completed ? "outline" : "ghost"}
                            size="sm"
                          >
                            {week.completed ? "Review" : week.current ? "Continue" : "Start"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.whatYouLearn.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Software</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.tools.map((tool, index) => (
                        <Badge key={index} variant="outline">{tool}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{course.prerequisites}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Typography Reference Guide</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive guide to typography principles</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Grid System Templates</h4>
                        <p className="text-sm text-muted-foreground">Ready-to-use grid templates for various formats</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Font Pairing Cheatsheet</h4>
                        <p className="text-sm text-muted-foreground">Quick reference for effective font combinations</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor Card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">{course.instructor}</h4>
                    <p className="text-sm text-muted-foreground">{course.instructorTitle}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span>4.9</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>15k students</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Actions */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{course.price}</div>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
                <Button className="w-full" size="lg">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Course Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Course Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Enrollment</span>
                  <span className="font-medium">{course.students} students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Average Rating</span>
                  <span className="font-medium">{course.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium">March 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;