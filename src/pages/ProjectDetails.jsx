import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProjectDetails() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [completedSteps, setCompletedSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(1);

  const projectData = {
    "medical-diagnosis": {
      icon: "🤖",
      title: "AI Medical Diagnosis",
      level: "ADVANCED",
      category: "AI / ML",
      description:
        "Build an AI-powered system that analyzes medical images and predicts possible conditions using machine learning.",
      steps: [
        {
          id: 1,
          title: "Setup Project",
          description:
            "Create the project environment and install required libraries.",
          details: [
            "Create a new project folder",
            "Install Python and required libraries",
            "Setup VS Code environment",
            "Create the basic project structure",
          ],
        },
        {
          id: 2,
          title: "Collect Dataset",
          description:
            "Collect and prepare medical image datasets for training.",
          details: [
            "Download a suitable medical image dataset",
            "Create Training and Testing folders",
            "Organize images according to their classes",
            "Check image quality and remove invalid images",
          ],
        },
        {
          id: 3,
          title: "Train AI Model",
          description:
            "Train a machine learning model to classify medical images.",
          details: [
            "Load the dataset using TensorFlow and Keras",
            "Preprocess and resize the images",
            "Create the CNN model",
            "Train the model",
            "Save the trained model",
          ],
        },
        {
          id: 4,
          title: "Build Web Application",
          description:
            "Connect the trained model with a user-friendly web interface.",
          details: [
            "Create the Flask application",
            "Build the image upload interface",
            "Connect the trained model",
            "Display prediction and confidence",
          ],
        },
        {
          id: 5,
          title: "Test & Deploy",
          description:
            "Test the application and deploy it online.",
          details: [
            "Test different medical images",
            "Fix prediction or UI issues",
            "Prepare requirements.txt",
            "Deploy the application",
          ],
        },
      ],
    },

    "performance-predictor": {
      icon: "📊",
      title: "Student Performance Predictor",
      level: "INTERMEDIATE",
      category: "MACHINE LEARNING",
      description:
        "Build a machine learning system that predicts student academic performance using student-related data.",
      steps: [
        {
          id: 1,
          title: "Setup Project",
          description:
            "Create the Python environment and install required libraries.",
          details: [
            "Create a new project folder",
            "Install Python",
            "Install Pandas, NumPy and Scikit-Learn",
            "Setup VS Code environment",
          ],
        },
        {
          id: 2,
          title: "Collect Dataset",
          description:
            "Collect student academic and performance data.",
          details: [
            "Download a suitable student performance dataset",
            "Load the dataset using Pandas",
            "Check missing values",
            "Understand dataset columns",
          ],
        },
        {
          id: 3,
          title: "Train ML Model",
          description:
            "Train a machine learning model to predict student performance.",
          details: [
            "Clean and preprocess the data",
            "Select important features",
            "Split data into training and testing sets",
            "Train a machine learning model",
            "Evaluate model accuracy",
          ],
        },
        {
          id: 4,
          title: "Build Web Application",
          description:
            "Create a web interface where users can enter student information.",
          details: [
            "Create Flask application",
            "Create student input form",
            "Connect trained ML model",
            "Display prediction result",
          ],
        },
        {
          id: 5,
          title: "Test & Deploy",
          description:
            "Test the prediction system and deploy the application.",
          details: [
            "Test different student inputs",
            "Check prediction results",
            "Fix application issues",
            "Prepare requirements.txt",
            "Deploy the application",
          ],
        },
      ],
    },

    "student-management": {
      icon: "🌐",
      title: "Student Management System",
      level: "INTERMEDIATE",
      category: "WEB DEVELOPMENT",
      description:
        "Build a complete web application to manage student records, details and academic information.",
      steps: [
        {
          id: 1,
          title: "Setup Project",
          description:
            "Create the project environment and basic application structure.",
          details: [
            "Create a new project folder",
            "Setup VS Code",
            "Install required libraries",
            "Create frontend and backend structure",
          ],
        },
        {
          id: 2,
          title: "Create Database",
          description:
            "Create a database to store student information.",
          details: [
            "Create the student database",
            "Create student table",
            "Add required fields",
            "Connect the database with the application",
          ],
        },
        {
          id: 3,
          title: "Build Backend",
          description:
            "Create backend APIs for managing student records.",
          details: [
            "Create backend application",
            "Add student registration",
            "Add update functionality",
            "Add delete functionality",
            "Display student records",
          ],
        },
        {
          id: 4,
          title: "Build Web Interface",
          description:
            "Create a user-friendly interface for managing students.",
          details: [
            "Create student form",
            "Create student list page",
            "Add edit and delete buttons",
            "Connect frontend with backend",
          ],
        },
        {
          id: 5,
          title: "Test & Deploy",
          description:
            "Test the application and deploy it online.",
          details: [
            "Test CRUD operations",
            "Fix UI and backend issues",
            "Prepare deployment files",
            "Deploy the application",
          ],
        },
      ],
    },

    "study-assistant": {
      icon: "🧠",
      title: "AI Study Assistant",
      level: "ADVANCED",
      category: "AI / NLP",
      description:
        "Build an AI-powered study assistant that helps students learn, summarize topics and prepare for exams.",
      steps: [
        {
          id: 1,
          title: "Setup Project",
          description:
            "Create the development environment and install required libraries.",
          details: [
            "Create a new project folder",
            "Setup Python environment",
            "Install required AI and NLP libraries",
            "Setup VS Code project structure",
          ],
        },
        {
          id: 2,
          title: "Prepare Study Data",
          description:
            "Collect and prepare study materials for the AI assistant.",
          details: [
            "Collect study notes and documents",
            "Clean the text data",
            "Prepare topics and questions",
            "Organize study material",
          ],
        },
        {
          id: 3,
          title: "Build AI Assistant",
          description:
            "Create an AI system that understands and responds to student queries.",
          details: [
            "Process student questions",
            "Create text processing pipeline",
            "Connect an AI model",
            "Generate useful responses",
            "Test the assistant",
          ],
        },
        {
          id: 4,
          title: "Build Web Application",
          description:
            "Create a web interface for students to interact with the assistant.",
          details: [
            "Create chat interface",
            "Add question input",
            "Connect AI model",
            "Display AI responses",
          ],
        },
        {
          id: 5,
          title: "Test & Deploy",
          description:
            "Test the AI assistant and deploy it online.",
          details: [
            "Test different questions",
            "Improve AI responses",
            "Fix UI issues",
            "Prepare requirements.txt",
            "Deploy the application",
          ],
        },
      ],
    },
  };

  const project = projectData[projectId] || projectData["medical-diagnosis"];

  const steps = project.steps;

  const markCompleted = (id) => {
    if (!completedSteps.includes(id)) {
      setCompletedSteps((prev) => [...prev, id]);
    }

    if (id < steps.length) {
      setActiveStep(id + 1);
    }
  };

  const progress = completedSteps.length;

  return (
    <div className="min-h-screen bg-[#050505] text-white px-5 py-8 lg:px-12">

      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate("/projects")}
        className="mb-8 text-orange-400 hover:text-orange-300 transition"
      >
        ← Back to Projects
      </button>

      {/* Hero */}
      <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-[#100b0b] to-[#050505] p-8 lg:p-12">

        <div className="flex flex-wrap gap-3 mb-6">

          <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm">
            {project.level}
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
            {project.category}
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
            Portfolio Project
          </span>

        </div>

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-5xl">
            {project.icon}
          </div>

          <div>

            <p className="text-orange-400 mb-2">
              PROJECT
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold">
              {project.title}
            </h1>

            <p className="text-gray-400 mt-4 max-w-3xl text-lg">
              {project.description}
            </p>

          </div>

        </div>

      </div>

      {/* Roadmap */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-7 lg:p-9">

        <p className="text-orange-400 text-sm tracking-[0.25em]">
          DEVELOPMENT PLAN
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Build Roadmap
        </h2>

        <p className="text-gray-500 mt-2">
          Follow these steps to complete your project.
        </p>

        <div className="mt-6 text-gray-400">
          {progress} of {steps.length} completed
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full mt-4 mb-8">

          <div
            className="h-2 bg-orange-500 rounded-full transition-all duration-500"
            style={{
              width: `${(progress / steps.length) * 100}%`,
            }}
          />

        </div>

        {/* Steps */}
        <div className="space-y-4">

          {steps.map((step) => {

            const completed = completedSteps.includes(step.id);
            const active = activeStep === step.id;

            return (
              <div key={step.id}>

                {/* Step Button */}
                <button
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left rounded-2xl border p-5 transition-all ${
                    active
                      ? "border-orange-500/60 bg-orange-500/5"
                      : "border-white/10 bg-white/[0.01] hover:border-orange-500/30"
                  }`}
                >

                  <div className="flex items-center gap-5">

                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold ${
                        completed
                          ? "bg-green-500/10 border border-green-500/30 text-green-400"
                          : active
                          ? "bg-orange-500/10 border border-orange-500/30 text-orange-400"
                          : "bg-white/5 border border-white/10 text-gray-500"
                      }`}
                    >
                      {completed ? "✓" : `0${step.id}`}
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center gap-3 flex-wrap">

                        <h3 className="text-lg font-semibold">
                          {step.title}
                        </h3>

                        {completed && (
                          <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            COMPLETED
                          </span>
                        )}

                      </div>

                      <p className="text-gray-500 mt-1">
                        {step.description}
                      </p>

                    </div>

                    <span className="text-gray-500">
                      {active ? "⌃" : "⌄"}
                    </span>

                  </div>

                </button>

                {/* Step Details */}
                {active && (
                  <div className="ml-5 mr-5 mt-2 rounded-2xl border border-orange-500/20 bg-orange-500/[0.03] p-6">

                    <h4 className="text-orange-400 font-semibold mb-4">
                      What you need to do
                    </h4>

                    <div className="space-y-3">

                      {step.details.map((detail, index) => (
                        <div
                          key={index}
                          className="flex gap-3 text-gray-400"
                        >

                          <span className="text-orange-400">
                            {index + 1}.
                          </span>

                          <span>
                            {detail}
                          </span>

                        </div>
                      ))}

                    </div>

                    {!completed && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          markCompleted(step.id);
                        }}
                        className="mt-6 px-5 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
                      >
                        Mark Step Completed →
                      </button>
                    )}

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

      {/* Start Building */}
      <div className="mt-8 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-transparent p-8">

        <p className="text-orange-400 text-sm tracking-[0.25em]">
          READY?
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div>

            <h2 className="text-3xl font-bold mt-3">
              Start Building Your Project 🚀
            </h2>

            <p className="text-gray-500 mt-2">
              Open your project workspace and start coding.
            </p>

          </div>

          <button
            type="button"
            onClick={() =>
              navigate(`/projects/${projectId}/workspace`)
            }
            className="px-7 py-4 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition whitespace-nowrap cursor-pointer"
          >
            🚀 Start Building
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectDetails;