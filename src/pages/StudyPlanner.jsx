import { useNavigate } from "react-router-dom";
import { useState } from "react";

function StudyPlanner() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [plan, setPlan] = useState([]);

  const addSubject = () => {
    if (!subject.trim() || !hours) {
      return;
    }

    setSubjects([
      ...subjects,
      {
        name: subject,
        hours: Number(hours),
      },
    ]);

    setSubject("");
    setHours("");
  };

  const generatePlan = () => {
    if (subjects.length === 0) {
      return;
    }

    const generatedPlan = subjects.map((item, index) => ({
      time: `${9 + index}:00 AM`,
      subject: item.name,
      duration: `${item.hours} hour${item.hours > 1 ? "s" : ""}`,
    }));

    setPlan(generatedPlan);
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


      {/* STUDY PLANNER CARD */}

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
            📚
          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              Student Productivity Tool
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              Study Planner
            </h1>

          </div>

        </div>


        <p className="text-gray-500 mb-8">
          Add your subjects and create a simple study schedule.
        </p>


        {/* ADD SUBJECT */}

        <div className="grid md:grid-cols-[1fr_160px_auto] gap-3">

          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject name"
            className="
              w-full
              rounded-xl
              border border-white/10
              bg-black/30
              p-4
              text-white
              outline-none
              focus:border-orange-500/50
              transition
            "
          />


          <input
            type="number"
            min="1"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="Hours"
            className="
              w-full
              rounded-xl
              border border-white/10
              bg-black/30
              p-4
              text-white
              outline-none
              focus:border-orange-500/50
              transition
            "
          />


          <button
            onClick={addSubject}
            className="
              px-5
              py-3
              rounded-xl
              border border-orange-500/30
              bg-orange-500/10
              text-orange-400
              font-semibold
              hover:bg-orange-500/20
              transition
            "
          >
            + Add
          </button>

        </div>


        {/* SUBJECT LIST */}

        {subjects.length > 0 && (
          <div className="mt-6">

            <h2 className="text-sm text-gray-400 mb-3">
              Your Subjects
            </h2>

            <div className="space-y-2">

              {subjects.map((item, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    p-4
                  "
                >

                  <div className="flex items-center gap-3">

                    <span className="text-orange-400">
                      {index + 1}.
                    </span>

                    <span>
                      {item.name}
                    </span>

                  </div>

                  <span className="text-sm text-gray-500">
                    {item.hours} hour{item.hours > 1 ? "s" : ""}
                  </span>

                </div>

              ))}

            </div>

          </div>
        )}


        {/* GENERATE BUTTON */}

        <button
          onClick={generatePlan}
          disabled={subjects.length === 0}
          className="
            mt-6
            px-6
            py-3
            rounded-xl
            bg-orange-500
            text-black
            font-semibold
            hover:bg-orange-400
            hover:-translate-y-0.5
            transition-all
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
        >
          Generate Study Plan →
        </button>


        {/* STUDY PLAN */}

        {plan.length > 0 && (
          <div className="mt-10">

            <div className="flex items-center gap-3 mb-5">

              <span className="text-2xl">
                ✨
              </span>

              <h2 className="text-xl font-semibold text-orange-400">
                Your Study Plan
              </h2>

            </div>


            <div className="space-y-3">

              {plan.map((item, index) => (

                <div
                  key={index}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.02]
                    p-5
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-3
                  "
                >

                  <div>

                    <p className="text-orange-400 text-sm font-medium">
                      {item.time}
                    </p>

                    <h3 className="text-lg font-semibold mt-1">
                      {item.subject}
                    </h3>

                  </div>

                  <span className="text-gray-400 text-sm">
                    ⏱ {item.duration}
                  </span>

                </div>

              ))}

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default StudyPlanner;