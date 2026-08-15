import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AIQuiz() {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);

  const handleGenerateQuiz = () => {
    if (!topic.trim()) {
      setQuiz([
        {
          question: "Please enter a topic first.",
          options: [],
          answer: "",
        },
      ]);
      return;
    }

    const generatedQuiz = [
      {
        question: `What is an important concept related to ${topic}?`,
        options: [
          `Understanding the fundamentals of ${topic}`,
          "Ignoring the basic concepts",
          "Avoiding practical examples",
          "Not studying the topic",
        ],
        answer: `Understanding the fundamentals of ${topic}`,
      },
      {
        question: `Why is ${topic} useful for students?`,
        options: [
          `It helps students understand ${topic} better`,
          "It has no practical use",
          "It prevents learning",
          "It is only useful for entertainment",
        ],
        answer: `It helps students understand ${topic} better`,
      },
      {
        question: `What should you do when learning ${topic}?`,
        options: [
          "Practice and understand the concepts",
          "Memorize everything without understanding",
          "Skip the fundamentals",
          "Avoid examples",
        ],
        answer: "Practice and understand the concepts",
      },
    ];

    setQuiz(generatedQuiz);
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


      {/* AI QUIZ CARD */}

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
            🧠
          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              Student AI Tool
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              AI Quiz
            </h1>

          </div>

        </div>


        <p className="text-gray-500 mb-8">
          Enter a topic and generate practice questions for your preparation.
        </p>


        {/* TOPIC INPUT */}

        <label className="block text-sm text-gray-300 mb-2">
          Enter Your Topic
        </label>

        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Example: Python, Machine Learning, DBMS..."
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30
            p-4
            text-white
            outline-none
            focus:border-orange-500/50
            transition
          "
        />


        {/* GENERATE BUTTON */}

        <button
          onClick={handleGenerateQuiz}
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
          Generate Quiz →
        </button>


        {/* QUIZ QUESTIONS */}

        {quiz.length > 0 && (
          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-3 mb-4">

              <span className="text-2xl">
                ✨
              </span>

              <h2 className="text-xl font-semibold text-orange-400">
                Your Quiz
              </h2>

            </div>


            {quiz.map((item, index) => (

              <div
                key={index}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  p-5
                "
              >

                <h3 className="font-semibold mb-4">
                  {index + 1}. {item.question}
                </h3>


                <div className="space-y-2">

                  {item.options.map((option, optionIndex) => (

                    <button
                      key={optionIndex}
                      onClick={() => {
                        if (option === item.answer) {
                          alert("Correct! 🎉");
                        } else {
                          alert("Try again! 😊");
                        }
                      }}
                      className="
                        w-full
                        text-left
                        rounded-xl
                        border border-white/10
                        bg-white/[0.02]
                        p-3
                        text-gray-300

                        hover:border-orange-500/40
                        hover:bg-orange-500/[0.05]

                        transition
                      "
                    >
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </button>

                  ))}

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default AIQuiz;