import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      icon: "🤖",
      title: "AI Medical Diagnosis",
      desc: "Build an AI project that detects diseases from medical images.",
      level: "Advanced",
      path: "/projects/medical-diagnosis",
    },
    {
      icon: "📊",
      title: "Student Performance Predictor",
      desc: "Predict student performance using Machine Learning.",
      level: "Intermediate",
      path: "/projects/performance-predictor",
    },
    {
      icon: "🌐",
      title: "Student Management System",
      desc: "Create a complete student management web application.",
      level: "Intermediate",
      path: "/projects/student-management",
    },
    {
      icon: "🧠",
      title: "AI Study Assistant",
      desc: "Build an AI assistant that helps students study smarter.",
      level: "Advanced",
      path: "/projects/study-assistant",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 lg:p-10">

      {/* Back Button */}
      <button
        onClick={() => navigate("/home")}
        className="mb-8 text-orange-400 hover:text-orange-300"
      >
        ← Back to Dashboard
      </button>

      {/* Heading */}
      <h1 className="text-4xl font-bold">
        Build Your Next Project 🚀
      </h1>

      <p className="text-gray-500 mt-3 mb-10">
        Choose a project and start building your portfolio.
      </p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.02]
              p-6
              hover:border-orange-500/40
              hover:-translate-y-1
              transition-all
            "
          >

            {/* Icon */}
            <div className="text-4xl mb-5">
              {project.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-orange-400">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-3">
              {project.desc}
            </p>

            {/* Level */}
            <p className="text-xs text-gray-400 mt-4">
              Level: {project.level}
            </p>

            {/* Start Project */}
            <button
              onClick={() => navigate(project.path)}
              className="
                mt-5
                px-4 py-2
                rounded-lg
                bg-orange-500
                text-black
                font-semibold
                hover:bg-orange-400
                transition
              "
            >
              Start Project →
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Projects;