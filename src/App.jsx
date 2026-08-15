import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AINotes from "./pages/AINotes";
import AIQuiz from "./pages/AIQuiz";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import StudyPlanner from "./pages/StudyPlanner";
import Pomodoro from "./pages/Pomodoro";
import Flashcards from "./pages/Flashcards";
import AICodeHelper from "./pages/AICodeHelper";
import InterviewPrep from "./pages/InterviewPrep";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectWorkspace from "./pages/ProjectWorkspace";
import CGPACalculator from "./pages/CGPACalculator";

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="text-4xl font-bold text-orange-500 mb-4">
          JK
        </div>

        <div className="text-xs tracking-[0.35em] text-gray-500">
          INITIALIZING SYSTEM...
        </div>

        <div className="mt-4 w-20 h-1 bg-orange-500 animate-pulse rounded-full"></div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            HOME / DASHBOARD
        ========================= */}

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* =========================
            PROFILE
        ========================= */}

        <Route path="/profile" element={<Profile />} />

        {/* =========================
            AI TOOLS
        ========================= */}

        <Route path="/ai-notes" element={<AINotes />} />

        <Route path="/ai-quiz" element={<AIQuiz />} />

        <Route
          path="/resume-analyzer"
          element={<ResumeAnalyzer />}
        />

        <Route
          path="/study-planner"
          element={<StudyPlanner />}
        />

        <Route
          path="/pomodoro"
          element={<Pomodoro />}
        />

        <Route
          path="/flashcards"
          element={<Flashcards />}
        />

        <Route
          path="/ai-code-helper"
          element={<AICodeHelper />}
        />

        <Route
          path="/interview-prep"
          element={<InterviewPrep />}
        />

        {/* =========================
            PROJECTS
        ========================= */}

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />

        <Route
          path="/projects/:projectId/workspace"
          element={<ProjectWorkspace />}
        />

        {/* =========================
            CGPA CALCULATOR
        ========================= */}

        <Route
          path="/cgpa-calculator"
          element={<CGPACalculator />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;