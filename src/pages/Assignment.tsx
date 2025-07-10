import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AssignmentSubmission from "@/components/AssignmentSubmission";
import { ArrowLeft } from "lucide-react";

const Assignment = () => {
  const { courseId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to={`/courses/${courseId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AssignmentSubmission />
      </div>
    </div>
  );
};

export default Assignment;