import { useNavigate } from "react-router-dom";

function MedicalDiagnosis() {
  const navigate = useNavigate();

  const roadmap = [
    {
      number: "01",
      title: "Setup Project",
      description: "Create the project environment and install required libraries.",
      status: "completed",
    },
    {
      number: "02",
      title: "Collect Dataset",
      description: "Collect and prepare medical image datasets for training.",
      status: "current",
    },
    {
      number: "03",
      title: "Train AI Model",
      description: "Train a machine learning model to classify medical images.",
      status: "locked",
    },
    {
      number: "04",
      title: "Build Web Application",
      description: "Connect the trained model with a user-friendly web interface.",
      status: "locked",
    },
    {
      number: "05",
      title: "Test & Deploy",
      description: "Test the application and deploy it online.",
      status: "locked",
    },
  ];

  const technologies = [
    "Python",
    "TensorFlow",
    "Keras",
    "Machine Learning",
    "Flask",
    "HTML / CSS",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden">

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          fixed
          -top-40
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-500/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          bottom-0
          left-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-purple-600/10
          blur-[140px]
        "
      />

      {/* Header */}
      <header
        className="
          sticky
          top-0
          z-30
          bg-[#050505]/90
          backdrop-blur-xl
          border-b
          border-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4">

          <div className="flex items-center justify-between">

            <button
              onClick={() => navigate("/projects")}
              className="
                text-orange-400
                hover:text-orange-300
                transition
              "
            >
              ← Back to Projects
            </button>

            <div className="hidden sm:flex items-center gap-3">

              <span className="text-sm text-gray-500">
                Project Progress
              </span>

              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="
                    h-full
                    w-[20%]
                    bg-gradient-to-r
                    from-orange-500
                    to-yellow-400
                    rounded-full
                  "
                />
              </div>

              <span className="text-orange-400 text-sm font-semibold">
                20%
              </span>

            </div>

          </div>

        </div>
      </header>

      {/* Main */}
      <main className="relative max-w-7xl mx-auto px-5 lg:px-10 py-10">

        {/* Hero */}
        <section
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-orange-500/20
            bg-gradient-to-br
            from-orange-500/10
            via-white/[0.02]
            to-purple-900/10
            p-7
            lg:p-10
            mb-8
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              w-72
              h-72
              rounded-full
              bg-orange-500/10
              blur-3xl
            "
          />

          <div className="relative">

            <div className="flex flex-wrap gap-3 mb-5">

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-orange-500/10
                  border
                  border-orange-500/20
                  text-orange-400
                  text-xs
                  font-semibold
                "
              >
                ADVANCED
              </span>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-gray-400
                  text-xs
                "
              >
                AI / ML
              </span>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-gray-400
                  text-xs
                "
              >
                Portfolio Project
              </span>

            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6">

              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-5xl
                "
              >
                🤖
              </div>

              <div>

                <p className="text-sm text-orange-400 mb-2">
                  AI PROJECT
                </p>

                <h1 className="text-3xl lg:text-5xl font-bold">
                  AI Medical Diagnosis
                </h1>

                <p className="text-gray-400 mt-4 max-w-2xl text-base lg:text-lg">
                  Build an AI-powered system that analyzes medical
                  images and predicts possible conditions using
                  machine learning.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Overview + Tech */}
        <section className="grid lg:grid-cols-3 gap-5 mb-8">

          {/* Objective */}
          <div
            className="
              lg:col-span-2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
            "
          >

            <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-3">
              Project Overview
            </p>

            <h2 className="text-2xl font-bold">
              What You'll Build
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Create a complete AI medical diagnosis application
              where users can upload a medical image and receive
              an AI-generated prediction. The project combines
              machine learning, image processing and web
              development into one portfolio-ready application.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">

              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <div className="text-2xl mb-2">🎯</div>
                <p className="font-semibold">AI Prediction</p>
                <p className="text-xs text-gray-500 mt-1">
                  Analyze medical images
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <div className="text-2xl mb-2">🧠</div>
                <p className="font-semibold">ML Model</p>
                <p className="text-xs text-gray-500 mt-1">
                  Train an image classifier
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <div className="text-2xl mb-2">🌐</div>
                <p className="font-semibold">Web App</p>
                <p className="text-xs text-gray-500 mt-1">
                  Deploy a working interface
                </p>
              </div>

            </div>

          </div>

          {/* Tech Stack */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
            "
          >

            <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-3">
              Technology
            </p>

            <h2 className="text-2xl font-bold mb-5">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-2
                    rounded-lg
                    bg-white/5
                    border
                    border-white/10
                    text-sm
                    text-gray-300
                    hover:border-orange-500/40
                    hover:text-orange-400
                    transition
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* Roadmap */}
        <section
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-6
            lg:p-8
            mb-8
          "
        >

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-2">
                Development Plan
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold">
                Build Roadmap
              </h2>

              <p className="text-gray-500 mt-2">
                Follow these steps to complete your project.
              </p>

            </div>

            <span className="text-sm text-gray-500">
              1 of 5 completed
            </span>

          </div>

          <div className="space-y-4">

            {roadmap.map((step) => (

              <div
                key={step.number}
                className={`
                  group
                  flex
                  items-start
                  gap-4
                  p-4
                  rounded-xl
                  border
                  transition-all
                  ${
                    step.status === "current"
                      ? "border-orange-500/40 bg-orange-500/[0.05]"
                      : "border-white/10 bg-white/[0.015]"
                  }
                `}
              >

                {/* Number */}
                <div
                  className={`
                    flex-shrink-0
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    font-bold
                    ${
                      step.status === "completed"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : step.status === "current"
                        ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                        : "bg-white/5 text-gray-500 border border-white/10"
                    }
                  `}
                >
                  {step.status === "completed"
                    ? "✓"
                    : step.number}
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3">

                    <h3 className="font-semibold">
                      {step.title}
                    </h3>

                    {step.status === "current" && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        CURRENT
                      </span>
                    )}

                    {step.status === "completed" && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        COMPLETED
                      </span>
                    )}

                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Start Building */}
        <section
          className="
            rounded-2xl
            border
            border-orange-500/20
            bg-gradient-to-r
            from-orange-500/[0.08]
            to-purple-500/[0.05]
            p-6
            lg:p-8
            flex
            flex-col
            md:flex-row
            md:items-center
            justify-between
            gap-6
          "
        >

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-2">
              Ready?
            </p>

            <h2 className="text-2xl font-bold">
              Start Building Your Project 🚀
            </h2>

            <p className="text-gray-500 mt-2">
              Begin with the project setup and build step by step.
            </p>

          </div>

          <button
            onClick={() => {
              alert("Project setup started! 🚀");
            }}
            className="
              px-6
              py-3
              rounded-xl
              bg-orange-500
              text-black
              font-semibold
              hover:bg-orange-400
              hover:-translate-y-1
              transition-all
              whitespace-nowrap
            "
          >
            🚀 Start Building
          </button>

        </section>

        {/* Footer */}
        <footer className="text-center py-10">

          <p className="text-xs text-gray-600">
            Student Tools Hub • Project Workspace
          </p>

        </footer>

      </main>

    </div>
  );
}

export default MedicalDiagnosis;