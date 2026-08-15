import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProjectWorkspace() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [activeSection, setActiveSection] = useState("setup");

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 lg:p-10">

      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate(`/projects/${projectId}`)}
        className="text-orange-400 hover:text-orange-300 mb-8 transition"
      >
        ← Back to Project
      </button>

      {/* Header */}
      <div className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-8 lg:p-10">

        <p className="text-orange-400 text-sm tracking-[0.2em]">
          PROJECT WORKSPACE
        </p>

        <h1 className="text-4xl font-bold mt-3">
          🚀 AI Medical Diagnosis
        </h1>

        <p className="text-gray-400 mt-4">
          Follow the project sections step by step and understand how
          the complete AI medical diagnosis system is built.
        </p>

        {/* SECTION BUTTONS */}
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-5">

          {/* SETUP */}
          <button
            type="button"
            onClick={() => setActiveSection("setup")}
            className={`text-left p-6 rounded-2xl border transition cursor-pointer ${
              activeSection === "setup"
                ? "border-orange-500/60 bg-orange-500/10"
                : "border-white/10 bg-white/5 hover:border-orange-500/50"
            }`}
          >
            <div className="text-3xl">⚙️</div>

            <h2 className="text-xl font-semibold mt-4">
              Setup
            </h2>

            <p className="text-gray-500 mt-2">
              Create the project structure and install required libraries.
            </p>

            <span className="inline-block mt-4 text-orange-400">
              Open Setup →
            </span>
          </button>

          {/* AI MODEL */}
          <button
            type="button"
            onClick={() => setActiveSection("aimodel")}
            className={`text-left p-6 rounded-2xl border transition cursor-pointer ${
              activeSection === "aimodel"
                ? "border-orange-500/60 bg-orange-500/10"
                : "border-white/10 bg-white/5 hover:border-orange-500/50"
            }`}
          >
            <div className="text-3xl">🧠</div>

            <h2 className="text-xl font-semibold mt-4">
              AI Model
            </h2>

            <p className="text-gray-500 mt-2">
              Train a model to classify medical images.
            </p>

            <span className="inline-block mt-4 text-orange-400">
              Open AI Model →
            </span>
          </button>

          {/* WEB APP */}
          <button
            type="button"
            onClick={() => setActiveSection("webapp")}
            className={`text-left p-6 rounded-2xl border transition cursor-pointer ${
              activeSection === "webapp"
                ? "border-orange-500/60 bg-orange-500/10"
                : "border-white/10 bg-white/5 hover:border-orange-500/50"
            }`}
          >
            <div className="text-3xl">🌐</div>

            <h2 className="text-xl font-semibold mt-4">
              Web App
            </h2>

            <p className="text-gray-500 mt-2">
              Connect the trained model with a Flask web application.
            </p>

            <span className="inline-block mt-4 text-orange-400">
              Open Web App →
            </span>
          </button>

          {/* TEST & DEPLOY */}
          <button
            type="button"
            onClick={() => setActiveSection("testdeploy")}
            className={`text-left p-6 rounded-2xl border transition cursor-pointer ${
              activeSection === "testdeploy"
                ? "border-orange-500/60 bg-orange-500/10"
                : "border-white/10 bg-white/5 hover:border-orange-500/50"
            }`}
          >
            <div className="text-3xl">🧪</div>

            <h2 className="text-xl font-semibold mt-4">
              Test & Deploy
            </h2>

            <p className="text-gray-500 mt-2">
              Test the project and deploy the application online.
            </p>

            <span className="inline-block mt-4 text-orange-400">
              Open Test & Deploy →
            </span>
          </button>

        </div>

        {/* ================= SETUP SECTION ================= */}

        {activeSection === "setup" && (
          <div className="mt-8 rounded-2xl border border-orange-500/30 bg-black/30 p-6 lg:p-8">

            <p className="text-orange-400 text-sm tracking-[0.2em]">
              STEP 1
            </p>

            <h2 className="text-3xl font-bold mt-3">
              ⚙️ Project Setup
            </h2>

            <p className="text-gray-400 mt-4">
              Set up the development environment and create the basic
              project structure.
            </p>

            <div className="mt-7 space-y-4">

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold">
                  📁 Create Project Folder
                </h3>

                <p className="text-gray-500 mt-2">
                  Create a separate folder for the AI Medical Diagnosis
                  project.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold">
                  🐍 Install Python Libraries
                </h3>

                <p className="text-gray-500 mt-2">
                  Install Python, TensorFlow, Keras, Flask, NumPy and
                  other required libraries.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold">
                  💻 Setup VS Code
                </h3>

                <p className="text-gray-500 mt-2">
                  Open the project folder in VS Code and create the
                  required files and folders.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ================= AI MODEL SECTION ================= */}

        {activeSection === "aimodel" && (
          <div className="mt-8 rounded-2xl border border-orange-500/30 bg-black/30 p-6 lg:p-8">

            <p className="text-orange-400 text-sm tracking-[0.2em]">
              STEP 2
            </p>

            <h2 className="text-3xl font-bold mt-3">
              🧠 AI Model
            </h2>

            <p className="text-gray-400 mt-4">
              Train a deep learning model using medical image data and
              use it to predict different categories.
            </p>

            <div className="mt-7 grid md:grid-cols-2 gap-5">

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  📂 Dataset
                </h3>

                <p className="text-gray-500 mt-2">
                  Prepare the medical image dataset and organize the
                  images into training and testing folders.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  🖼️ Preprocessing
                </h3>

                <p className="text-gray-500 mt-2">
                  Resize and normalize images before giving them to the
                  model.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  🧠 CNN Model
                </h3>

                <p className="text-gray-500 mt-2">
                  Build and train a convolutional neural network for
                  medical image classification.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  💾 Save Model
                </h3>

                <p className="text-gray-500 mt-2">
                  Save the trained model so that it can later be used
                  by the Flask application.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ================= WEB APP SECTION ================= */}

        {activeSection === "webapp" && (
          <div className="mt-8 rounded-2xl border border-orange-500/30 bg-black/30 p-6 lg:p-8">

            <p className="text-orange-400 text-sm tracking-[0.2em]">
              STEP 3
            </p>

            <h2 className="text-3xl font-bold mt-3">
              🌐 Web Application
            </h2>

            <p className="text-gray-400 mt-4">
              Connect the trained AI model with a Flask web application
              where users can upload medical images.
            </p>

            <div className="mt-7 grid md:grid-cols-2 gap-5">

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  📤 Upload Image
                </h3>

                <p className="text-gray-500 mt-2">
                  Users can upload a medical image through the web
                  interface.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  🔍 Prediction
                </h3>

                <p className="text-gray-500 mt-2">
                  The trained model processes the uploaded image and
                  predicts its category.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  📊 Confidence
                </h3>

                <p className="text-gray-500 mt-2">
                  The application displays the prediction together with
                  the model confidence.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold">
                  🚀 Flask
                </h3>

                <p className="text-gray-500 mt-2">
                  Flask connects the frontend interface with the trained
                  AI model.
                </p>
              </div>

            </div>

            {/* Workflow */}

            <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">

              <h3 className="text-xl font-semibold">
                🔄 Application Workflow
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  Upload Image
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  Preprocess
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  AI Model
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-green-500/10 text-green-400">
                  Result
                </span>

              </div>

            </div>

          </div>
        )}

        {/* ================= TEST & DEPLOY SECTION ================= */}

        {activeSection === "testdeploy" && (
          <div className="mt-8 rounded-2xl border border-orange-500/30 bg-black/30 p-6 lg:p-8">

            <p className="text-orange-400 text-sm tracking-[0.2em]">
              STEP 4
            </p>

            <h2 className="text-3xl font-bold mt-3">
              🧪 Test & Deploy
            </h2>

            <p className="text-gray-400 mt-4">
              Test the complete application, fix issues and deploy the
              project online.
            </p>

            <div className="mt-7 grid md:grid-cols-2 gap-5">

              {/* Testing */}

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                <h3 className="text-xl font-semibold">
                  🧪 Testing
                </h3>

                <p className="text-gray-500 mt-2">
                  Test the application with different medical images and
                  check the predictions.
                </p>

              </div>

              {/* Fix Issues */}

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                <h3 className="text-xl font-semibold">
                  🔧 Fix Issues
                </h3>

                <p className="text-gray-500 mt-2">
                  Identify prediction, image processing and web
                  application issues and improve the project.
                </p>

              </div>

              {/* Requirements */}

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                <h3 className="text-xl font-semibold">
                  📦 Requirements
                </h3>

                <p className="text-gray-500 mt-2">
                  Prepare the required Python libraries and create
                  requirements.txt for deployment.
                </p>

              </div>

              {/* Deployment */}

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                <h3 className="text-xl font-semibold">
                  🚀 Deployment
                </h3>

                <p className="text-gray-500 mt-2">
                  Deploy the Flask application online and generate a
                  live URL for demonstration.
                </p>

              </div>

            </div>

            {/* Final Workflow */}

            <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">

              <h3 className="text-xl font-semibold">
                🔄 Final Project Workflow
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  Train Model
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  Connect Flask
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  Test Images
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  Fix Issues
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400">
                  Deploy
                </span>

                <span className="text-gray-500">→</span>

                <span className="px-4 py-2 rounded-lg bg-green-500/10 text-green-400">
                  Live Project
                </span>

              </div>

            </div>

          </div>
        )}

        {/* Project ID */}

        <p className="text-gray-600 mt-10">
          Project ID: {projectId}
        </p>

      </div>

    </div>
  );
}

export default ProjectWorkspace;