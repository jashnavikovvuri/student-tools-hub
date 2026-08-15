import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ResumeAnalyzer() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!file) {
      setResult({
        score: null,
        message: "Please upload your resume first.",
        suggestions: [],
      });
      return;
    }

    setResult({
      score: 78,
      message: "Your resume has a good foundation!",
      suggestions: [
        "Add more measurable achievements to your projects.",
        "Keep your technical skills clearly organized.",
        "Add relevant keywords for the job you are targeting.",
        "Make sure your projects include your role and technologies used.",
      ],
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-10">

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate("/home")}
        className="
          mb-8
          text-gray-400
          hover:text-orange-400
          transition
        "
      >
        ← Back to Dashboard
      </button>


      {/* RESUME ANALYZER CARD */}

      <div
        className="
          max-w-4xl
          mx-auto
          rounded-3xl
          border border-white/10
          bg-white/[0.025]
          p-6 md:p-10
        "
      >

        {/* HEADER */}

        <div className="flex items-center gap-4 mb-3">

          <div
            className="
              w-14 h-14
              flex items-center justify-center
              rounded-2xl
              bg-orange-500/10
              border border-orange-500/20
              text-3xl
            "
          >
            📄
          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              Student Career Tool
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              Resume Analyzer
            </h1>

          </div>

        </div>


        <p className="text-gray-500 mb-8">
          Upload your resume and get useful suggestions to improve it.
        </p>


        {/* UPLOAD */}

        <label className="block text-sm text-gray-300 mb-2">
          Upload Your Resume
        </label>


        <div
          className="
            rounded-2xl
            border border-dashed border-white/15
            bg-black/20
            p-8
            text-center
            hover:border-orange-500/40
            transition
          "
        >

          <div className="text-4xl mb-3">
            📄
          </div>

          <p className="text-gray-400 mb-4">
            Upload your PDF resume
          </p>


          <input
            type="file"
            accept=".pdf"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setResult(null);
            }}
            className="
              block
              w-full
              text-sm
              text-gray-400
              file:mr-4
              file:py-2
              file:px-4
              file:rounded-xl
              file:border-0
              file:bg-orange-500
              file:text-black
              file:font-semibold
              hover:file:bg-orange-400
              cursor-pointer
            "
          />

        </div>


        {/* SELECTED FILE */}

        {file && (
          <div
            className="
              mt-4
              rounded-xl
              border border-white/10
              bg-white/[0.02]
              p-4
              flex items-center justify-between
              gap-4
            "
          >

            <div className="flex items-center gap-3">

              <span className="text-xl">
                📎
              </span>

              <div>

                <p className="text-sm text-white">
                  {file.name}
                </p>

                <p className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>

              </div>

            </div>

            <span className="text-green-400 text-sm">
              Ready ✓
            </span>

          </div>
        )}


        {/* ANALYZE BUTTON */}

        <button
          onClick={handleAnalyze}
          className="
            mt-5
            px-6 py-3
            rounded-xl
            bg-orange-500
            text-black
            font-semibold
            hover:bg-orange-400
            hover:-translate-y-0.5
            transition-all
          "
        >
          Analyze Resume →
        </button>


        {/* RESULT */}

        {result && (
          <div className="mt-8">

            {result.score !== null && (
              <div
                className="
                  rounded-2xl
                  border border-orange-500/20
                  bg-orange-500/[0.04]
                  p-6
                  mb-5
                "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Resume Score
                    </p>

                    <p className="text-5xl font-bold text-orange-400 mt-2">
                      {result.score}
                      <span className="text-xl text-gray-500">
                        /100
                      </span>
                    </p>

                  </div>

                  <div className="text-5xl">
                    ✨
                  </div>

                </div>


                <p className="text-gray-300 mt-4">
                  {result.message}
                </p>

              </div>
            )}


            {/* SUGGESTIONS */}

            {result.suggestions.length > 0 && (
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  p-6
                "
              >

                <div className="flex items-center gap-3 mb-5">

                  <span className="text-2xl">
                    💡
                  </span>

                  <h2 className="text-xl font-semibold text-orange-400">
                    Suggestions
                  </h2>

                </div>


                <div className="space-y-3">

                  {result.suggestions.map((suggestion, index) => (

                    <div
                      key={index}
                      className="
                        flex
                        gap-3
                        rounded-xl
                        border border-white/5
                        bg-white/[0.02]
                        p-4
                      "
                    >

                      <span className="text-orange-400">
                        {index + 1}.
                      </span>

                      <p className="text-gray-300 text-sm">
                        {suggestion}
                      </p>

                    </div>

                  ))}

                </div>

              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default ResumeAnalyzer;