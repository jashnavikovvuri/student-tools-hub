import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AINotes() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    if (!notes.trim()) {
      setSummary("Please enter your notes first.");
      return;
    }

    const sentences = notes
      .split(/[.!?]+/)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0);

    const shortSummary = sentences.slice(0, 3).join(". ");

    setSummary(shortSummary + ".");
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


      {/* AI NOTES CARD */}

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
            📝
          </div>


          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              Student AI Tool
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              AI Notes
            </h1>

          </div>

        </div>


        <p className="text-gray-500 mb-8">
          Turn your long study notes into simple, easy-to-understand summaries.
        </p>


        {/* NOTES INPUT */}

        <label className="block text-sm text-gray-300 mb-2">
          Your Notes
        </label>


        <textarea
          rows="12"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Paste your study notes here..."
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30
            p-5
            text-white
            outline-none
            resize-none
            focus:border-orange-500/50
            transition
          "
        />


        {/* ACTION BUTTON */}

        <button
          onClick={handleSummarize}
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
          Summarize Notes →
        </button>


        {/* SUMMARY RESULT */}

        {summary && (
          <div
            className="
              mt-8
              rounded-2xl
              border border-orange-500/20
              bg-orange-500/[0.04]
              p-6
            "
          >

            <div className="flex items-center gap-3 mb-3">

              <span className="text-2xl">
                ✨
              </span>

              <h2 className="text-xl font-semibold text-orange-400">
                Your Summary
              </h2>

            </div>


            <p className="text-gray-300 leading-relaxed">
              {summary}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default AINotes;