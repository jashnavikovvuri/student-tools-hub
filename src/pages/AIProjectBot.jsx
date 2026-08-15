import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AIProjectBot() {
  const navigate = useNavigate();

  const [stream, setStream] = useState("");
  const [level, setLevel] = useState("");
  const [technology, setTechnology] = useState("");
  const [projectType, setProjectType] = useState("");
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateProject = () => {
    if (!stream || !level || !technology || !projectType) {
      alert("Please select all required options.");
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      let project;

      // AI & Data Science
      if (stream === "AI & Data Science") {
        if (technology === "Machine Learning") {
          project = {
            title: "AI Student Performance Predictor",
            description:
              "Build a machine learning system that predicts student academic performance using attendance, study hours, previous marks and other academic factors.",
            features: [
              "Student data collection",
              "Data preprocessing",
              "Performance prediction",
              "Result visualization",
              "Student performance report",
            ],
            technologies:
              "Python, Pandas, NumPy, Scikit-learn, Flask",
            difficulty: level,
          };
        } else if (technology === "Python") {
          project = {
            title: "AI Student Productivity Assistant",
            description:
              "Create a Python-based intelligent assistant that helps students manage tasks, study schedules and learning activities.",
            features: [
              "Task management",
              "Study recommendations",
              "Daily productivity tracking",
              "Study reminders",
              "Progress dashboard",
            ],
            technologies:
              "Python, Flask, SQLite, HTML, CSS, JavaScript",
            difficulty: level,
          };
        } else {
          project = {
            title: "Smart Student Analytics Dashboard",
            description:
              "Build an intelligent dashboard that analyzes student academic data and provides useful insights.",
            features: [
              "Student data analysis",
              "Interactive dashboard",
              "Performance charts",
              "Progress tracking",
              "Academic insights",
            ],
            technologies:
              "Python, Pandas, Data Visualization, Flask",
            difficulty: level,
          };
        }
      }

      // CSE
      else if (stream === "CSE") {
        if (technology === "Web Development") {
          project = {
            title: "Smart Student Management System",
            description:
              "Create a complete web application for managing student records, attendance, marks and academic information.",
            features: [
              "Student registration",
              "Attendance management",
              "Marks management",
              "Search students",
              "Dashboard",
            ],
            technologies:
              "React, JavaScript, HTML, CSS, Firebase",
            difficulty: level,
          };
        } else {
          project = {
            title: "AI-Powered College Assistant",
            description:
              "Build a web-based assistant that helps students find academic information and useful college resources.",
            features: [
              "Student queries",
              "College information",
              "Resource search",
              "Frequently asked questions",
              "Interactive interface",
            ],
            technologies:
              "React, JavaScript, Firebase",
            difficulty: level,
          };
        }
      }

      // ECE
      else if (stream === "ECE") {
        project = {
          title: "Smart IoT Student Safety System",
          description:
            "Develop an IoT-based system that monitors student safety and sends alerts when unusual activity is detected.",
          features: [
            "Sensor monitoring",
            "Real-time alerts",
            "Data collection",
            "Safety dashboard",
            "Notification system",
          ],
          technologies:
            "Arduino, IoT, Sensors, Python",
          difficulty: level,
        };
      }

      // EEE
      else if (stream === "EEE") {
        project = {
          title: "Smart Energy Monitoring System",
          description:
            "Create a system that monitors electricity usage and provides insights for reducing energy consumption.",
          features: [
            "Energy monitoring",
            "Usage analysis",
            "Daily reports",
            "Energy alerts",
            "Consumption dashboard",
          ],
          technologies:
            "IoT, Sensors, Python, Data Visualization",
          difficulty: level,
        };
      }

      // Mechanical
      else if (stream === "Mechanical") {
        project = {
          title: "Predictive Maintenance System",
          description:
            "Build a system that predicts possible machine failures using machine sensor data.",
          features: [
            "Machine monitoring",
            "Sensor data analysis",
            "Failure prediction",
            "Maintenance alerts",
            "Reports",
          ],
          technologies:
            "Python, Machine Learning, Sensors",
          difficulty: level,
        };
      }

      // Civil
      else {
        project = {
          title: "Smart Construction Monitoring System",
          description:
            "Develop a digital system for monitoring construction activities, materials and project progress.",
          features: [
            "Project tracking",
            "Material management",
            "Progress monitoring",
            "Reports",
            "Dashboard",
          ],
          technologies:
            "React, JavaScript, Firebase",
          difficulty: level,
        };
      }

      // Add student's own idea to the result
      if (idea.trim()) {
        project = {
          ...project,
          description:
            project.description +
            ` Your idea "${idea.trim()}" can also be incorporated into this project.`,
        };
      }

      setResult(project);
      setLoading(false);
    }, 1000);
  };

  const resetBot = () => {
    setStream("");
    setLevel("");
    setTechnology("");
    setProjectType("");
    setIdea("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-5 sm:p-8 lg:p-10">

      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate("/projects")}
        className="mb-8 text-orange-400 hover:text-orange-300 transition"
      >
        ← Back to Projects
      </button>

      {/* Header */}
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <div className="text-5xl mb-4">
            🤖
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            AI Project Bot
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Find personalized project ideas based on your stream,
            skills, interests and project requirements.
          </p>

        </div>

        {/* Form */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8">

          <h2 className="text-2xl font-bold mb-2">
            Tell me about your project
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Select your preferences and let the AI Project Bot
            suggest a suitable project.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Stream */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Stream
              </label>

              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Stream</option>
                <option>AI & Data Science</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>Mechanical</option>
                <option>Civil</option>
              </select>
            </div>

            {/* Level */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Project Level
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Technology */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Preferred Technology
              </label>

              <select
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Technology</option>
                <option>Python</option>
                <option>Machine Learning</option>
                <option>Web Development</option>
                <option>React</option>
                <option>Data Science</option>
                <option>IoT</option>
              </select>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Project Type
              </label>

              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Project Type</option>
                <option>Mini Project</option>
                <option>College Project</option>
                <option>Final Year Project</option>
                <option>Resume Project</option>
                <option>Hackathon Project</option>
              </select>
            </div>

          </div>

          {/* Own Idea */}
          <div className="mt-5">

            <label className="block text-sm text-gray-400 mb-2">
              Do you already have an idea?{" "}
              <span className="text-gray-600">
                (Optional)
              </span>
            </label>

            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Example: I want to build something that helps college students with attendance..."
              rows="4"
              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-orange-500/50"
            />

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">

            <button
              type="button"
              onClick={generateProject}
              disabled={loading}
              className="flex-1 bg-orange-500 text-black font-semibold py-3 rounded-xl hover:bg-orange-400 transition disabled:opacity-50"
            >
              {loading
                ? "🤖 Generating..."
                : "✨ Generate Project Idea"}
            </button>

            <button
              type="button"
              onClick={resetBot}
              className="px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              Reset
            </button>

          </div>

        </div>

        {/* Result */}
        {result && (
          <div className="mt-8 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-purple-500/10 border border-orange-500/20 rounded-3xl p-6 sm:p-8">

            <div className="flex items-start gap-4">

              <div className="text-4xl">
                💡
              </div>

              <div className="flex-1">

                <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
                  Recommended Project
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  {result.title}
                </h2>

              </div>

            </div>

            {/* Description */}
            <div className="mt-6">

              <h3 className="font-semibold text-lg">
                📌 Project Idea
              </h3>

              <p className="text-gray-400 mt-2 leading-relaxed">
                {result.description}
              </p>

            </div>

            {/* Features */}
            <div className="mt-6">

              <h3 className="font-semibold text-lg">
                🚀 Key Features
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 mt-3">

                {result.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-black/20 border border-white/5 rounded-xl px-4 py-3 text-gray-300"
                  >
                    ✓ {feature}
                  </div>
                ))}

              </div>

            </div>

            {/* Technologies */}
            <div className="mt-6">

              <h3 className="font-semibold text-lg">
                🛠 Technologies
              </h3>

              <p className="text-orange-400 mt-2">
                {result.technologies}
              </p>

            </div>

            {/* Difficulty */}
            <div className="mt-6">

              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">
                Level: {result.difficulty}
              </span>

              <span className="inline-block ml-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
                {projectType}
              </span>

            </div>

            {/* Next Step */}
            <div className="mt-8 p-5 rounded-2xl bg-black/20 border border-white/5">

              <h3 className="font-semibold">
                💬 What's next?
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                You can use this idea as your starting point and
                customize the features according to your requirements.
              </p>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default AIProjectBot;