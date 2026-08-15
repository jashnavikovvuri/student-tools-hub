import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InterviewPrep() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Tell me about yourself.",
      answer:
        "Give a short introduction including your education, technical skills, projects, internships, and career goal.",
    },
    {
      question: "What are your strengths?",
      answer:
        "Mention 2 or 3 strengths such as problem-solving, quick learning, teamwork, communication, or consistency. Give a small example if possible.",
    },
    {
      question: "What is your biggest weakness?",
      answer:
        "Mention a genuine but manageable weakness and explain what you are doing to improve it.",
    },
    {
      question: "Why should we hire you?",
      answer:
        "Explain how your skills, projects, willingness to learn, and ability to contribute make you a good fit for the role.",
    },
    {
      question: "Explain one of your projects.",
      answer:
        "Explain the project problem, your solution, technologies used, your contribution, and the final result.",
    },
    {
      question: "Where do you see yourself in five years?",
      answer:
        "Talk about becoming technically strong, taking more responsibility, contributing to projects, and growing with the organization.",
    },
    {
      question: "Why do you want to join our company?",
      answer:
        "Talk about the company's work, learning opportunities, role, technology, and how your career goals match the organization.",
    },
    {
      question: "Are you comfortable working in a team?",
      answer:
        "Yes. Explain that you enjoy collaborating, sharing ideas, learning from others, and completing tasks together.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentIndex];

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const resetInterview = () => {
    setCurrentIndex(0);
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

      {/* MAIN CARD */}

      <div className="max-w-4xl mx-auto">

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-10">

          {/* HEADER */}

          <div className="flex items-center gap-4 mb-3">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-3xl">
              🎤
            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
                Student Career Tool
              </p>

              <h1 className="text-3xl md:text-4xl font-bold">
                Interview Prep
              </h1>

            </div>

          </div>

          <p className="text-gray-500 mb-8">
            Practice common interview questions and prepare confident answers.
          </p>

          {/* PROGRESS */}

          <div className="flex items-center justify-between mb-3">

            <p className="text-sm text-gray-400">
              Question {currentIndex + 1} of {questions.length}
            </p>

            <p className="text-sm text-orange-400">
              {Math.round(
                ((currentIndex + 1) / questions.length) * 100
              )}
              %
            </p>

          </div>

          <div className="w-full h-2 rounded-full bg-white/[0.05] mb-8">

            <div
              className="h-2 rounded-full bg-orange-500 transition-all duration-300"
              style={{
                width: `${
                  ((currentIndex + 1) / questions.length) * 100
                }%`,
              }}
            />

          </div>

          {/* QUESTION CARD */}

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.03] p-6 md:p-8">

            <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-4">
              Interview Question
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
              {currentQuestion.question}
            </h2>

            <p className="text-sm text-gray-500 mt-5">
              Think about your answer before revealing the sample answer.
            </p>

          </div>

          {/* ANSWER */}

          {showAnswer && (

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">

              <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
                Sample Answer / Tip
              </p>

              <p className="text-gray-300 leading-7">
                {currentQuestion.answer}
              </p>

            </div>

          )}

          {/* SHOW ANSWER */}

          <div className="flex justify-center mt-6">

            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-6 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-all"
            >
              {showAnswer ? "🙈 Hide Answer" : "💡 Show Answer"}
            </button>

          </div>

          {/* NAVIGATION */}

          <div className="flex flex-wrap justify-center gap-3 mt-8">

            <button
              onClick={previousQuestion}
              disabled={currentIndex === 0}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 font-semibold hover:border-orange-500/40 hover:text-orange-400 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            <button
              onClick={nextQuestion}
              disabled={currentIndex === questions.length - 1}
              className="px-6 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>

            <button
              onClick={resetInterview}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 font-semibold hover:border-orange-500/40 hover:text-orange-400 transition"
            >
              ↻ Restart
            </button>

          </div>

          {/* TIP */}

          <div className="mt-8 rounded-2xl border border-orange-500/10 bg-orange-500/[0.03] p-5 text-center">

            <p className="text-sm text-gray-400">
              💡 Tip: Try answering the question yourself before checking the
              sample answer.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default InterviewPrep;