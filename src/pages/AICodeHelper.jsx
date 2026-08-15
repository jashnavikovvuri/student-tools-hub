import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AICodeHelper() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [action, setAction] = useState("");

  const explainCode = () => {
    if (!code.trim()) {
      setResult("⚠️ Please paste your code first.");
      return;
    }

    setAction("Explain Code");

    setResult(
      `💡 Code Explanation

Your code has been received successfully.

The AI Code Helper can help you understand:
• What the code does
• How the logic works
• Important functions and variables
• The overall flow of the program

Your code:

${code}`
    );
  };

  const findError = () => {
    if (!code.trim()) {
      setResult("⚠️ Please paste your code first.");
      return;
    }

    setAction("Find Error");

    setResult(
      `🐛 Error Check

Your code has been received successfully.

Things to check:
• Syntax errors
• Missing brackets
• Incorrect variable names
• Function errors
• Logic mistakes

Code submitted:

${code}`
    );
  };

  const improveCode = () => {
    if (!code.trim()) {
      setResult("⚠️ Please paste your code first.");
      return;
    }

    setAction("Improve Code");

    setResult(
      `✨ Code Improvement

Your code has been received successfully.

Possible improvements:
• Make the code cleaner
• Improve variable names
• Remove unnecessary code
• Improve readability
• Make the logic more efficient

Code submitted:

${code}`
    );
  };

  const clearAll = () => {
    setCode("");
    setResult("");
    setAction("");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-10">

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate("/home")}
        className="mb-8 text-gray-400 hover:text-orange-400 transition"
      >
        ← Back to Dashboard
      </button>


      {/* MAIN CARD */}

      <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-10">


        {/* HEADER */}

        <div className="flex items-center gap-4 mb-3">

          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-3xl">
            💻
          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              Student AI Tool
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              AI Code Helper
            </h1>

          </div>

        </div>


        <p className="text-gray-500 mb-8">
          Understand, debug and improve your code with AI assistance.
        </p>


        {/* CODE INPUT */}

        <label className="block text-sm text-gray-300 mb-2">
          Paste Your Code
        </label>

        <textarea
          rows="14"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30
            p-5
            text-white
            font-mono
            text-sm
            outline-none
            resize-none
            focus:border-orange-500/50
            transition
          "
        />


        {/* BUTTONS */}

        <div className="flex flex-wrap gap-3 mt-5">

          <button
            onClick={explainCode}
            className="
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
            💡 Explain Code
          </button>


          <button
            onClick={findError}
            className="
              px-6 py-3
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              text-gray-300
              font-semibold
              hover:border-orange-500/40
              hover:text-orange-400
              transition
            "
          >
            🐛 Find Error
          </button>


          <button
            onClick={improveCode}
            className="
              px-6 py-3
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              text-gray-300
              font-semibold
              hover:border-orange-500/40
              hover:text-orange-400
              transition
            "
          >
            ✨ Improve Code
          </button>


          <button
            onClick={clearAll}
            className="
              px-6 py-3
              rounded-xl
              border border-red-500/20
              bg-red-500/[0.03]
              text-gray-400
              font-semibold
              hover:text-red-400
              transition
            "
          >
            🗑️ Clear
          </button>

        </div>


        {/* RESULT */}

        {result && (

          <div className="mt-8 rounded-2xl border border-orange-500/10 bg-orange-500/[0.03] p-6">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-xl font-semibold text-orange-400">
                {action}
              </h2>

            </div>

            <pre className="whitespace-pre-wrap text-sm leading-7 text-gray-300 font-sans">
              {result}
            </pre>

          </div>

        )}


        {/* TIP */}

        <div className="mt-8 rounded-2xl border border-orange-500/10 bg-orange-500/[0.03] p-5 text-center">

          <p className="text-sm text-gray-400">
            💡 Tip: Paste your code and choose an action to analyze it.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AICodeHelper;