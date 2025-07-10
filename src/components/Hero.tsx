import { ArrowRight, BookOpen, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5 bg-[length:60px_60px] bg-[radial-gradient(circle_at_center,white_2px,transparent_2px)]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Learning</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Personalized
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Skill Journey
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Move beyond static courses. Get dynamic, AI-curated learning paths tailored to your existing skills, goals, and learning pace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/courses">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="xl" className="border border-white/30 text-white hover:bg-white/10 hover:text-white">
              <BookOpen className="w-5 h-5" />
              View Demo
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Goal-Driven</h3>
              <p className="text-white/70">AI analyzes your goals to create the perfect learning path</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Adaptive</h3>
              <p className="text-white/70">Learns your pace and adjusts recommendations in real-time</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dynamic</h3>
              <p className="text-white/70">Courses, lessons, and exercises tailored just for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}