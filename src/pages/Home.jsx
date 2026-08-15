import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../assets/jashnavi-profile.jpeg";

function Home() {
  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("studentTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [studyOpen, setStudyOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  // =========================
  // AUTH CHECK
  // =========================

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  }, [navigate]);

  // =========================
  // SCROLL
  // =========================

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  // =========================
  // TODO FUNCTIONS
  // =========================

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    localStorage.setItem(
      "studentTasks",
      JSON.stringify(updatedTasks)
    );

    setTask("");
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "studentTasks",
      JSON.stringify(updatedTasks)
    );
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (item) => item.id !== id
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "studentTasks",
      JSON.stringify(updatedTasks)
    );
  };

  // =========================
  // TOOLS
  // =========================

  const tools = [
    {
      icon: "🧮",
      title: "CGPA Calculator",
      desc: "Calculate your CGPA",
      action: () => navigate("/cgpa-calculator"),
    },
    {
      icon: "📝",
      title: "AI Notes",
      desc: "Summarize your study notes",
      action: () => navigate("/ai-notes"),
    },
    {
      icon: "🧠",
      title: "AI Quiz",
      desc: "Generate practice questions",
      action: () => navigate("/ai-quiz"),
    },
    {
      icon: "📄",
      title: "Resume Analyzer",
      desc: "Improve your resume",
      action: () => navigate("/resume-analyzer"),
    },
    {
      icon: "📚",
      title: "Study Planner",
      desc: "Plan your study schedule",
      action: () => navigate("/study-planner"),
    },
    {
      icon: "⏱️",
      title: "Pomodoro",
      desc: "Focus with study sessions",
      action: () => navigate("/pomodoro"),
    },
    {
      icon: "💡",
      title: "Flashcards",
      desc: "Revise faster",
      action: () => navigate("/flashcards"),
    },
    {
      icon: "💻",
      title: "AI Code Helper",
      desc: "Understand code easily",
      action: () => navigate("/ai-code-helper"),
    },
    {
      icon: "🎤",
      title: "Interview Prep",
      desc: "Prepare for interviews",
      action: () => navigate("/interview-prep"),
    },
  ];

  const filteredTools = tools.filter((tool) => {
  const searchText = search.trim().toLowerCase();

  if (searchText === "") {
    return true;
  }

  return (
    tool.title.toLowerCase().includes(searchText) ||
    tool.desc.toLowerCase().includes(searchText)
  );
});
  // =========================
  // USER
  // =========================

  const userName = "Jashnavi";

  // =========================
  // RETURN
  // =========================

  return (
    <div
      className="
        min-h-screen
        bg-[#050505]
        text-white
        relative
        overflow-x-hidden
      "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.025) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,0.025) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "40px 40px",
      }}
    >

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-64
          bg-[#090909]
          border-r
          border-white/10
          transition-transform
          duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-6 h-full relative">

          {/* LOGO */}

          <div className="flex items-center gap-3 mb-10">

            <div className="text-3xl">
              🎓
            </div>

            <div>
              <h1 className="font-bold text-lg tracking-wide">
                STUDENT
              </h1>

              <h1 className="font-bold text-lg tracking-wide text-orange-400">
                TOOLS HUB
              </h1>
            </div>

          </div>

          {/* NAVIGATION */}

          <nav className="space-y-2">

            {/* DASHBOARD */}

            <button
              type="button"
              onClick={() => scrollToSection("top")}
              className="
                w-full
                text-left
                px-4
                py-3
                rounded-xl
                bg-orange-500/10
                text-orange-400
                border
                border-orange-500/20
              "
            >
              🏠 Dashboard
            </button>

            {/* STUDY */}

            <div>

              <button
                type="button"
                onClick={() => setStudyOpen(!studyOpen)}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-white/5
                  transition
                  flex
                  items-center
                  justify-between
                "
              >
                <span>📚 Study</span>

                <span className="text-gray-500">
                  {studyOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {studyOpen && (
                <div className="ml-4 mt-1 space-y-1">

                  <button
                    type="button"
                    onClick={() => navigate("/ai-notes")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    📝 AI Notes
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/ai-quiz")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🧠 AI Quiz
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/study-planner")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    📅 Study Planner
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/flashcards")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🗂️ Flashcards
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/pomodoro")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    ⏱️ Pomodoro
                  </button>

                </div>
              )}

            </div>

            {/* AI TOOLS */}

            <div>

              <button
                type="button"
                onClick={() => setAiToolsOpen(!aiToolsOpen)}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-white/5
                  transition
                  flex
                  items-center
                  justify-between
                "
              >
                <span>🧠 AI Tools</span>

                <span className="text-gray-500">
                  {aiToolsOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {aiToolsOpen && (
                <div className="ml-4 mt-1 space-y-1">

                  <button
                    type="button"
                    onClick={() => navigate("/ai-notes")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    📝 AI Notes
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/ai-quiz")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🧠 AI Quiz
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/ai-code-helper")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    💻 AI Code Helper
                  </button>

                </div>
              )}

            </div>

            {/* CAREER */}

            <div>

              <button
                type="button"
                onClick={() => setCareerOpen(!careerOpen)}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-white/5
                  transition
                  flex
                  items-center
                  justify-between
                "
              >
                <span>💼 Career</span>

                <span className="text-gray-500">
                  {careerOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {careerOpen && (
                <div className="ml-4 mt-1 space-y-1">

                  <button
                    type="button"
                    onClick={() => navigate("/resume-analyzer")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    📄 Resume Analyzer
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/interview-prep")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🎤 Interview Prep
                  </button>

                </div>
              )}

            </div>

            {/* PLACEMENT */}

            <div>

              <button
                type="button"
                onClick={() =>
                  setPlacementOpen(!placementOpen)
                }
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-white/5
                  transition
                  flex
                  items-center
                  justify-between
                "
              >
                <span>🎯 Placement</span>

                <span className="text-gray-500">
                  {placementOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {placementOpen && (
                <div className="ml-4 mt-1 space-y-1">

                  <button
                    type="button"
                    onClick={() => navigate("/interview-prep")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🎤 Interview Prep
                  </button>

                </div>
              )}

            </div>

            {/* PROJECTS */}

            <div>

              <button
                type="button"
                onClick={() =>
                  setProjectsOpen(!projectsOpen)
                }
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-white/5
                  transition
                  flex
                  items-center
                  justify-between
                "
              >
                <span>💻 Projects</span>

                <span className="text-gray-500">
                  {projectsOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {projectsOpen && (
                <div className="ml-4 mt-1 space-y-1">

                  <button
                    type="button"
                    onClick={() => navigate("/projects")}
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🚀 My Projects
                  </button>

                </div>
              )}

            </div>

            {/* TOOLS */}

            <div>

              <button
                type="button"
                onClick={() =>
                  setToolsOpen(!toolsOpen)
                }
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-white/5
                  transition
                  flex
                  items-center
                  justify-between
                "
              >
                <span>🛠 Tools</span>

                <span className="text-gray-500">
                  {toolsOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {toolsOpen && (
                <div className="ml-4 mt-1 space-y-1">

                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection("tools")
                    }
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🛠 All Tools
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/cgpa-calculator")
                    }
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    🧮 CGPA Calculator
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/pomodoro")
                    }
                    className="
                      w-full
                      text-left
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-gray-400
                      hover:text-orange-400
                      hover:bg-white/5
                    "
                  >
                    ⏱️ Pomodoro
                  </button>

                </div>
              )}

            </div>

          </nav>

        </div>
      </aside>

      {/* =========================
          MOBILE OVERLAY
      ========================= */}

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="
            fixed
            inset-0
            bg-black/70
            z-40
            lg:hidden
          "
        />
      )}

      {/* =========================
          MAIN
      ========================= */}

      <main
        id="top"
        className="lg:ml-64 min-h-screen"
      >

        {/* =========================
            TOP BAR
        ========================= */}

        <header
          className="
            sticky
            top-0
            z-30
            bg-[#050505]/90
            backdrop-blur-xl
            border-b
            border-white/10
            px-4
            sm:px-5
            lg:px-10
            py-4
          "
        >

          <div className="flex items-center justify-between gap-3">

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="
                lg:hidden
                text-2xl
                shrink-0
              "
            >
              ☰
            </button>

            {/* SEARCH */}

            <div className="relative flex-1 max-w-xl">

              <span
                className="
                  absolute
                  left-4
                  top-3
                  text-gray-400
                "
              >
                🔍
              </span>

              <input
                type="text"
                placeholder="Search tools..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                onKeyDown={(e) => {
  if (e.key === "Enter") {
    const searchText = search.trim().toLowerCase();

    if (searchText === "") return;

    const index = tools.findIndex(
      (tool) =>
        tool.title.toLowerCase().includes(searchText) ||
        tool.desc.toLowerCase().includes(searchText)
    );

    if (index !== -1) {
      document
        .getElementById("tools")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  }
}}
                className="
                  w-full
                  bg-white/[0.03]
                  border
                  border-white/10
                  rounded-xl
                  py-3
                  pl-11
                  pr-4
                  outline-none
                  focus:border-orange-500/50
                  transition
                "
              />

            </div>

            {/* PROFILE */}

            <div className="flex items-center gap-2 sm:gap-3">

              <div className="hidden sm:block text-right">

                <p className="text-sm font-semibold">
                  {userName}
                </p>

                <p className="text-xs text-gray-500">
                  AI & DS Student
                </p>

              </div>

              {/* SMALL PROFILE IMAGE - KEEP */}

             <div
  className="
    w-16
    h-16
    sm:w-16
    sm:h-16
    rounded-full
    overflow-hidden
    border-2
    border-orange-500/40
    shrink-0
  "
>
                <img
                  src={profilePhoto}
                  alt="Jashnavi Kovvuri"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

            </div>

          </div>

        </header>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="p-4 sm:p-5 lg:p-10">

          {/* =========================
              HERO SECTION
          ========================= */}

          <section className="mb-10 lg:mb-12">

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-orange-500/20
                bg-gradient-to-br
                from-orange-500/10
                via-white/[0.02]
                to-purple-500/10
                p-6
                sm:p-8
                md:p-10
                lg:p-12
              "
            >

              {/* BACKGROUND GLOW */}

              <div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-72
                  h-72
                  bg-orange-500/10
                  rounded-full
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-24
                  -left-24
                  w-72
                  h-72
                  bg-purple-500/10
                  rounded-full
                  blur-3xl
                "
              />

              {/* HERO CONTENT ONLY */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                "
              >

                {/* LEFT CONTENT */}

                <div
                  className="
                    flex-1
                    text-center
                    lg:text-left
                  "
                >

                  <p
                    className="
                      text-orange-400
                      text-sm
                      font-semibold
                      tracking-widest
                      uppercase
                      mb-3
                    "
                  >
                    Student Tools Hub
                  </p>

                  <h1 
  className="
    text-3xl
    sm:text-4xl
    lg:text-5xl
    font-bold
    leading-tight
  "
>
  Study Smarter.
  <br />
  <span className="text-orange-400">
    Build Better.
  </span>
</h1>

                  <p 
  className="
    text-lg
    sm:text-xl
    text-gray-300
    mt-4
  "
>
  All-in-one tools for students to Learn, Build & Grow.
</p>
                  <p
                    className="
                      text-gray-400
                      max-w-2xl
                      mt-5
                      leading-relaxed
                      mx-auto
                      lg:mx-0
                    "
                  >
                    A student-focused workspace for studying,
                    coding, projects, career preparation and
                    placement success — all in one place.
                  </p>

                  <p
                    className="
                      text-gray-600
                      text-sm
                      mt-6
                    "
                  >
                    Learn • Build • Practice • Grow
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* =========================
              QUICK STATS
          ========================= */}

          <section
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-5
              mb-10
            "
          >

            <div
              className="
                bg-white/[0.03]
                border
                border-white/10
                rounded-2xl
                p-5
                sm:p-6
              "
            >

              <p className="text-gray-500 text-sm">
                Total Tasks
              </p>

              <p className="text-3xl font-bold mt-2">
                {tasks.length}
              </p>

            </div>

            <div
              className="
                bg-white/[0.03]
                border
                border-white/10
                rounded-2xl
                p-5
                sm:p-6
              "
            >

              <p className="text-gray-500 text-sm">
                Completed
              </p>

              <p
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-green-400
                "
              >
                {
                  tasks.filter(
                    (item) => item.completed
                  ).length
                }
              </p>

            </div>

            <div
              className="
                bg-white/[0.03]
                border
                border-white/10
                rounded-2xl
                p-5
                sm:p-6
              "
            >

              <p className="text-gray-500 text-sm">
                Available Tools
              </p>

              <p
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-orange-400
                "
              >
                {tools.length}
              </p>

            </div>

          </section>

          {/* =========================
              QUICK ACCESS
          ========================= */}

          <section
            id="tools"
            className="mb-12 scroll-mt-24"
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-5
              "
            >

              <div>

                <h2 className="text-2xl font-bold">
                  Quick Access
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Your most useful student tools
                </p>

              </div>

            </div>

            {filteredTools.length === 0 ? (

              <div
                className="
                  border
                  border-white/10
                  rounded-2xl
                  p-10
                  text-center
                  text-gray-500
                "
              >
                No tools found.
              </div>

            ) : (

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  gap-4
                  sm:gap-5
                "
              >

                {filteredTools.map((tool) => (

                  <button
                    type="button"
                    key={tool.title}
                    onClick={tool.action}
                    className="
                      text-left
                      bg-white/[0.03]
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                      sm:p-6
                      hover:border-orange-500/40
                      hover:bg-orange-500/[0.04]
                      transition
                      group
                    "
                  >

                    <div
                      className="
                        text-3xl
                        mb-4
                        group-hover:scale-110
                        transition
                      "
                    >
                      {tool.icon}
                    </div>

                    <h3 className="font-semibold text-lg">
                      {tool.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      {tool.desc}
                    </p>

                    <div
                      className="
                        mt-5
                        text-orange-400
                        text-sm
                      "
                    >
                      Open tool →
                    </div>

                  </button>

                ))}

              </div>

            )}

          </section>

          {/* =========================
              TODO
          ========================= */}

          <section className="mb-12">

            <div
              className="
                bg-white/[0.03]
                border
                border-white/10
                rounded-2xl
                p-4
                sm:p-6
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-5
                "
              >

                <div>

                  <h2 className="text-xl font-bold">
                    My Tasks
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Keep track of your work
                  </p>

                </div>

                <span className="text-orange-400">
                  {tasks.length}
                </span>

              </div>

              {/* ADD TASK */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-2
                  mb-5
                "
              >

                <input
                  type="text"
                  value={task}
                  onChange={(e) =>
                    setTask(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addTask();
                    }
                  }}
                  placeholder="Add a task..."
                  className="
                    flex-1
                    bg-white/[0.03]
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-orange-500/50
                  "
                />

                <button
                  type="button"
                  onClick={addTask}
                  className="
                    px-5
                    py-3
                    rounded-xl
                    bg-orange-500
                    text-black
                    font-semibold
                    hover:bg-orange-400
                    transition
                  "
                >
                  Add
                </button>

              </div>

              {/* TASK LIST */}

              <div
                className="
                  space-y-2
                  max-h-80
                  overflow-y-auto
                "
              >

                {tasks.length === 0 ? (

                  <div
                    className="
                      text-center
                      py-8
                      text-gray-600
                    "
                  >
                    No tasks yet.
                  </div>

                ) : (

                  tasks.map((item) => (

                    <div
                      key={item.id}
                      className="
                        flex
                        items-center
                        gap-3
                        bg-black/20
                        border
                        border-white/5
                        rounded-xl
                        px-4
                        py-3
                      "
                    >

                      <button
                        type="button"
                        onClick={() =>
                          toggleTask(item.id)
                        }
                        className={`
                          w-6
                          h-6
                          rounded-full
                          border
                          flex
                          items-center
                          justify-center
                          shrink-0
                          ${
                            item.completed
                              ? "bg-green-500 border-green-500"
                              : "border-white/20"
                          }
                        `}
                      >
                        {item.completed && "✓"}
                      </button>

                      <span
                        className={`
                          flex-1
                          text-sm
                          ${
                            item.completed
                              ? "line-through text-gray-600"
                              : "text-gray-300"
                          }
                        `}
                      >
                        {item.text}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          deleteTask(item.id)
                        }
                        className="
                          text-gray-600
                          hover:text-red-400
                          transition
                        "
                      >
                        🗑️
                      </button>

                    </div>

                  ))

                )}

              </div>

            </div>

          </section>

          {/* =========================
              BOTTOM BANNER
          ========================= */}

          <section
            className="
              rounded-2xl
              border
              border-orange-500/20
              bg-gradient-to-r
              from-orange-500/10
              to-purple-500/10
              p-6
              lg:p-8
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-5
              "
            >

              <div>

                <p className="text-orange-400 text-sm mb-2">
                  Student Tools Hub
                </p>

                <h2 className="text-2xl font-bold mb-2">
                  Everything you need in one place.
                </h2>

                <p className="text-gray-500">
                  Study smarter. Build projects. Prepare
                  for placements.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  scrollToSection("tools")
                }
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-orange-500
                  text-black
                  font-semibold
                  hover:bg-orange-400
                  transition
                  whitespace-nowrap
                "
              >
                Explore Tools →
              </button>

            </div>

          </section>

          {/* =========================
              FOOTER
          ========================= */}

          <footer
            className="
              text-center
              py-10
              text-gray-600
              text-sm
            "
          >

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
              "
            >

              {/* FOOTER PROFILE IMAGE - KEEP */}

              <img
                src={profilePhoto}
                alt="Jashnavi Kovvuri"
                className="
                 w-16
                 h-16
                 sm:w-16
                 sm:h-16  

                  rounded-full
                  object-cover
                  border-2
                  border-orange-500/40
                  mb-3
                "
              />

              <p className="text-gray-400">

                Developed by{" "}

                <span
                  className="
                    text-orange-400
                    font-semibold
                  "
                >
                  Jashnavi Kovvuri
                </span>

              </p>

              <p
                className="
                  text-xs
                  mt-2
                  text-gray-600
                "
              >
                AI & Data Science Student
              </p>

              <p
                className="
                  text-xs
                  mt-2
                  text-gray-600
                "
              >
                © {new Date().getFullYear()} Student Tools Hub.
              </p>

            </div>

          </footer>

        </div>

      </main>

    </div>
  );
}

export default Home;