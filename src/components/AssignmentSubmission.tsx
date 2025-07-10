import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  FileImage, 
  FileText, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Eye,
  Download,
  MessageSquare
} from "lucide-react";

interface Assignment {
  id: string;
  title: string;
  description: string;
  type: "design" | "video" | "text" | "code";
  dueDate: string;
  maxPoints: number;
  requirements: string[];
  submissionFormats: string[];
}

interface AIFeedback {
  overall_score: number;
  strengths: string[];
  improvements: string[];
  technical_analysis: {
    composition: number;
    color_theory: number;
    typography: number;
    technique: number;
  };
  suggestions: string[];
  instructor_notes: string;
}

const sampleAssignment: Assignment = {
  id: "typography-hierarchy",
  title: "Typography Hierarchy Design",
  description: "Create a poster design demonstrating advanced typography hierarchy principles. Your design should effectively guide the viewer's eye through the information using typographic contrast, scale, and spacing.",
  type: "design",
  dueDate: "2024-02-15",
  maxPoints: 100,
  requirements: [
    "Use at least 3 levels of hierarchy",
    "Demonstrate contrast through size, weight, and color",
    "Include both primary and secondary information",
    "Apply grid system principles",
    "Export in high resolution (300 DPI)"
  ],
  submissionFormats: ["PDF", "PNG", "JPG"]
};

const AssignmentSubmission = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<AIFeedback | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const analyzeSubmission = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock AI feedback
    const mockFeedback: AIFeedback = {
      overall_score: 85,
      strengths: [
        "Excellent use of typographic contrast to establish clear hierarchy",
        "Strong grid alignment creates visual harmony",
        "Effective color palette supports readability",
        "Good spacing and white space utilization"
      ],
      improvements: [
        "Consider increasing the contrast between secondary and tertiary text",
        "The body text could benefit from slightly increased line spacing",
        "Some elements could be aligned more precisely to the grid"
      ],
      technical_analysis: {
        composition: 88,
        color_theory: 82,
        typography: 90,
        technique: 85
      },
      suggestions: [
        "Try using a more pronounced size difference between H1 and H2",
        "Consider using a different font weight for the secondary information",
        "Experiment with subtle color variations to enhance hierarchy"
      ],
      instructor_notes: "Strong foundation in typography principles. Focus on refining the details for professional-level work."
    };
    
    setFeedback(mockFeedback);
    setIsAnalyzing(false);
    setSubmitted(true);
    
    toast({
      title: "AI Analysis Complete",
      description: "Your submission has been analyzed. Review the feedback below.",
    });
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one file to submit.",
        variant: "destructive"
      });
      return;
    }
    
    await analyzeSubmission();
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Assignment Details */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{sampleAssignment.title}</CardTitle>
              <CardDescription>Week 3 Assignment · Due {sampleAssignment.dueDate}</CardDescription>
            </div>
            <Badge variant="outline">{sampleAssignment.maxPoints} points</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{sampleAssignment.description}</p>
          
          <div>
            <h4 className="font-medium mb-2">Requirements:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {sampleAssignment.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Accepted Formats:</h4>
            <div className="flex gap-2">
              {sampleAssignment.submissionFormats.map((format, index) => (
                <Badge key={index} variant="secondary">{format}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submission Form */}
      {!submitted && (
        <Card>
          <CardHeader>
            <CardTitle>Submit Your Work</CardTitle>
            <CardDescription>Upload your assignment files and provide a brief description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload */}
            <div>
              <Label htmlFor="file-upload">Upload Files</Label>
              <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                <div className="text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <div className="text-sm text-muted-foreground mb-2">
                    Drop files here or click to browse
                  </div>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Choose Files
                  </Button>
                </div>
              </div>
              
              {/* Uploaded Files */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 border rounded">
                      <FileImage className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm flex-1">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Describe your design process, challenges faced, or any specific aspects you'd like feedback on..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button 
              onClick={handleSubmit}
              disabled={isAnalyzing || files.length === 0}
              className="w-full"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Submit for AI Feedback
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* AI Feedback Results */}
      {feedback && (
        <div className="space-y-6">
          {/* Overall Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                AI Analysis Complete
              </CardTitle>
              <CardDescription>
                Your submission has been analyzed using AI. Review the feedback below and await instructor review.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(feedback.overall_score)}`}>
                    {feedback.overall_score}%
                  </div>
                  <div className="text-sm text-muted-foreground">Overall Score</div>
                </div>
                <div className="flex-1">
                  <Progress value={feedback.overall_score} className="mb-2" />
                  <Badge variant={getScoreVariant(feedback.overall_score)}>
                    {feedback.overall_score >= 80 ? "Excellent" : 
                     feedback.overall_score >= 60 ? "Good" : "Needs Improvement"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Analysis</CardTitle>
              <CardDescription>Detailed breakdown of design principles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(feedback.technical_analysis).map(([category, score]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="capitalize">{category.replace('_', ' ')}</span>
                      <span className={`font-medium ${getScoreColor(score)}`}>{score}%</span>
                    </div>
                    <Progress value={score} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Areas for Improvement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <AlertCircle className="h-5 w-5" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle>AI Suggestions</CardTitle>
              <CardDescription>Specific recommendations for enhancement</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feedback.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructor Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                Awaiting Instructor Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  AI Initial Assessment: {feedback.instructor_notes}
                </p>
                <p className="text-xs text-muted-foreground">
                  Your instructor will provide detailed feedback within 24-48 hours.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Feedback Report
                </Button>
                <Button variant="outline" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  View Submission
                </Button>
                <Button className="flex-1">
                  Submit Revision
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AssignmentSubmission;