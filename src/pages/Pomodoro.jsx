import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Pomodoro() {
  const navigate = useNavigate();

  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Focus");

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          setIsRunning(false);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);

    if (mode === "Focus") {
      setTime(25 * 60);
    } else {
      setTime(5 * 60);
    }
  };

  const changeMode = (selectedMode) => {
    setIsRunning(false);
    setMode(selectedMode);

    if (selectedMode === "Focus") {
      setTime(25 * 60);
    } else {
      setTime(5 * 60);
    }
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

      {/* POMODORO CARD */}

      <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-10">

        {/* HEADER */}

        <div className="flex items-center gap-4 mb-3">

          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-3xl">
            ⏱️
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              Student Productivity Tool
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              Pomodoro
            </h1>
          </div>

        </div>

        <p className="text-gray-500 mb-8">
          Focus on your studies with simple timed sessions.
        </p>

        {/* MODE BUTTONS */}

        <div className="flex justify-center gap-3 mb-8">

          <button
            onClick={() => changeMode("Focus")}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
              mode === "Focus"
                ? "bg-orange-500 text-black"
                : "bg-white/[0.05] text-gray-400 border border-white/10"
            }`}
          >
            Focus
          </button>

          <button
            onClick={() => changeMode("Break")}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
              mode === "Break"
                ? "bg-orange-500 text-black"
                : "bg-white/[0.05] text-gray-400 border border-white/10"
            }`}
          >
            Short Break
          </button>

        </div>

        {/* TIMER */}

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            {mode}
          </p>

          <div className="text-7xl md:text-8xl font-bold tracking-tight text-orange-400">
            {formatTime()}
          </div>

        </div>

        {/* CONTROLS */}

        <div className="flex justify-center gap-3 mt-8">

          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-7 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-all"
            >
              ▶ Start
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="px-7 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-all"
            >
              ⏸ Pause
            </button>
          )}

          <button
            onClick={resetTimer}
            className="px-7 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 font-semibold hover:border-orange-500/40 hover:text-orange-400 transition"
          >
            ↻ Reset
          </button>

        </div>

        {/* TIP */}

        <div className="mt-8 rounded-2xl border border-orange-500/10 bg-orange-500/[0.03] p-5 text-center">

          <p className="text-sm text-gray-400">
            💡 Tip: Stay focused during the session and avoid distractions.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Pomodoro;