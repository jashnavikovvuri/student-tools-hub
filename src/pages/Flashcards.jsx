import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Flashcards() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const createFlashcard = () => {
    if (question.trim() === "" || answer.trim() === "") {
      alert("Please enter both question and answer.");
      return;
    }

    setShowAnswer(false);
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

      {/* FLASHCARDS CARD */}

      <div className="max-w-4xl mx-auto">

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-10">

          {/* HEADER */}

          <div className="flex items-center gap-4 mb-3">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-3xl">
              💡
            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
                Student Study Tool
              </p>

              <h1 className="text-3xl md:text-4xl font-bold">
                Flashcards
              </h1>

            </div>

          </div>

          <p className="text-gray-500 mb-8">
            Create simple flashcards and revise your topics faster.
          </p>

          {/* QUESTION */}

          <label className="block text-sm text-gray-300 mb-2">
            Question
          </label>

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none focus:border-orange-500/50 transition"
          />

          {/* ANSWER */}

          <label className="block text-sm text-gray-300 mt-5 mb-2">
            Answer
          </label>

          <textarea
            rows="5"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter the answer..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-white outline-none resize-none focus:border-orange-500/50 transition"
          />

          {/* CREATE BUTTON */}

          <button
            onClick={createFlashcard}
            className="mt-5 px-6 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-all"
          >
            Create Flashcard →
          </button>

          {/* FLASHCARD */}

          {question && answer && (
            <div className="mt-10">

              <p className="text-sm text-gray-500 mb-3">
                Your Flashcard
              </p>

              <div
                className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.03] p-8 text-center cursor-pointer hover:border-orange-500/40 transition"
                onClick={() => setShowAnswer(!showAnswer)}
              >

                {!showAnswer ? (
                  <>
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-4">
                      Question
                    </p>

                    <h2 className="text-xl md:text-2xl font-semibold">
                      {question}
                    </h2>

                    <p className="text-sm text-gray-500 mt-6">
                      Click to reveal answer
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-4">
                      Answer
                    </p>

                    <p className="text-lg text-gray-300">
                      {answer}
                    </p>

                    <p className="text-sm text-gray-500 mt-6">
                      Click to see question
                    </p>
                  </>
                )}

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Flashcards;