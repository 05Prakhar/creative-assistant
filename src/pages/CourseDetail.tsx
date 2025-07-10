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
const courseData = {
  "advanced-typography": {
    title: "Advanced Typography & Layout",
    description: "Master professional typography, grid systems, and layout design principles used by top design agencies.",
    instructor: "Sarah Chen",
    instructorTitle: "Senior Design Director at Adobe",
    duration: "6 weeks",
    level: "Intermediate",
    students: "2,400",
    rating: 4.8,
    price: "$149",
    whatYouLearn: [
      "Advanced typographic hierarchy and composition",
      "Grid systems and modular design principles", 
      "Professional layout techniques for print and digital",
      "Brand typography and visual identity systems",
      "Accessibility in typography and inclusive design"
    ],
    curriculum: [
      {
        week: 1,
        title: "Typography Fundamentals Revisited",
        lessons: 5,
        duration: "2h 30min",
        completed: true
      },
      {
        week: 2, 
        title: "Advanced Typographic Hierarchy",
        lessons: 6,
        duration: "3h 15min",
        completed: true
      },
      {
        week: 3,
        title: "Grid Systems & Layout Structure", 
        lessons: 7,
        duration: "3h 45min",
        completed: false,
        current: true
      },
      {
        week: 4,
        title: "Brand Typography Systems",
        lessons: 6,
        duration: "3h 20min", 
        completed: false
      },
      {
        week: 5,
        title: "Digital Typography & Web Fonts",
        lessons: 8,
        duration: "4h 10min",
        completed: false
      },
      {
        week: 6,
        title: "Portfolio Project & Final Review",
        lessons: 4,
        duration: "2h 45min",
        completed: false
      }
    ],
    tools: ["Adobe InDesign", "Figma", "Adobe Illustrator", "Webflow"],
    certificate: true,
    prerequisites: "Basic design knowledge and familiarity with design software"
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];

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