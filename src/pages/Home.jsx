import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Home() { 
  const navigate = useNavigate();

// CGPA States
const [marks, setMarks] = useState("");
const [cgpa, setCgpa] = useState("");
const [menuOpen, setMenuOpen] = useState(false);
// Attendance States
const [attended, setAttended] = useState("");
const [totalClasses, setTotalClasses] = useState("");
const [attendance, setAttendance] = useState("");
// Todo States
const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);
  // Search State
  const [search, setSearch] = useState("");
  const [currentCgpa, setCurrentCgpa] = useState("");
const [targetCgpa, setTargetCgpa] = useState("");
const [remainingSems, setRemainingSems] = useState("");
const [goalResult, setGoalResult] = useState("");
// Semester CGPA Tracker
const [semester, setSemester] = useState("");
const [semesterCgpa, setSemesterCgpa] = useState("");
const [semesterList, setSemesterList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
useEffect(() => {
  if (!auth.currentUser) {
    navigate("/");
  }
}, [navigate]); 
const handleLogout = async () => {
  await signOut(auth);
  navigate("/");
};
  // CGPA Function
  const calculateCGPA = () => {
    const nums = marks
      .split(",")
      .map((m) => Number(m.trim()));

    if (nums.length === 0 || nums.some(isNaN)) {
      setCgpa("Invalid Input");
      return;
    }

    const avg =
      nums.reduce((a, b) => a + b, 0) / nums.length;

    setCgpa((avg / 10).toFixed(2));
  };

  // Attendance Function
  // Add Semester
// Add Semester
const addSemester = () => {
  if (!semester || !semesterCgpa) {
    alert("Please fill all fields");
    return;
  }

  setSemesterList([
    ...semesterList,
    {
      semester,
      cgpa: semesterCgpa,
    },
  ]);

  setSemester("");
  setSemesterCgpa("");
};

// CGPA Goal Predictor
const calculateGoal = () => {
  if (!currentCgpa || !targetCgpa || !remainingSems) {
    setGoalResult("Please fill all fields.");
    return;
  }

  const current = Number(currentCgpa);
  const target = Number(targetCgpa);
  const sems = Number(remainingSems);

  if (target <= current) {
    setGoalResult("🎉 Your current CGPA already meets your target.");
    return;
  }

  const requiredSGPA = (
    ((target * (8 + sems)) - current * 8) / sems
  ).toFixed(2);

  setGoalResult(
    `You need an average SGPA of ${requiredSGPA} in the remaining ${sems} semester(s).`
  );
};

const calculateAttendance = () => {
  if (!attended || !totalClasses) {
    setAttendance("Invalid Input");
    return;
  }

  const percent =
    (Number(attended) / Number(totalClasses)) * 100;

  setAttendance(percent.toFixed(2));
};
// Todo Add
const addTask = () => {
  if (task.trim() === "") return;

  setTasks([...tasks, task]);
  setTask("");
};

  // Todo Delete
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  // Scroll Function
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  };

  // Tools Data
  const tools = [
    {
      title: "CGPA Calculator",
      desc: "Calculate your CGPA easily",
      action: () => scrollToSection("cgpa"),
    },
    {
      title: "Attendance Calculator",
      desc: "Track attendance percentage",
      action: () => scrollToSection("attendance"),
    },
    {
      title: "To-Do List",
      desc: "Manage daily tasks",
      action: () => scrollToSection("todo"),
    },
    {
  title: "CGPA Goal Predictor",
  desc: "Predict the SGPA needed to reach your target CGPA",
  action: () => scrollToSection("goal"),
},
{
  title: "Semester CGPA Tracker",
  desc: "Track semester-wise CGPA",
  action: () => scrollToSection("semester"),
},
{
  title: "Resume Templates",
  desc: "Download resume formats",
  action: () =>
    window.open(
      "https://www.canva.com/resumes/templates/",
      "_blank"
    ),
},
];

// Search Filter
const filteredTools = tools.filter((tool) =>
  tool.title
    .toLowerCase()
    .includes(search.toLowerCase())
);
  
  return (
    <div
  className={`min-h-screen ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-100 text-black"
  }`}
>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex items-center sticky top-0">

  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-3xl"
  >
    ☰
  </button>

  <h1 className="text-2xl font-bold ml-5">
    Student Tools Hub
  </h1>

</nav>
{menuOpen && (
  <div className="fixed left-0 top-0 w-64 h-screen bg-gray-900 text-white p-6 shadow-lg z-50">

    <button
      onClick={() => setMenuOpen(false)}
      className="text-2xl mb-8"
    >
      ✖
    </button>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="block w-full text-left py-3 hover:text-blue-400"
    >
      🏠 Home
    </button>

    <button
      onClick={() => scrollToSection("tools")}
      className="block w-full text-left py-3 hover:text-blue-400"
    >
      🛠 Tools
    </button>

    <button
      onClick={() => navigate("/profile")}
      className="block w-full text-left py-3 hover:text-blue-400"
    >
      👤 Profile
    </button>

    <button
      onClick={() => scrollToSection("footer")}
      className="block w-full text-left py-3 hover:text-blue-400"
    >
      ℹ About
    </button>

    <button
      onClick={() => setDarkMode(!darkMode)}
      className="block w-full text-left py-3 hover:text-blue-400"
    >
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>

    <button
      onClick={handleLogout}
      className="block w-full text-left py-3 text-red-400 hover:text-red-300"
    >
      🚪 Logout
    </button>

  </div>
)}

      {/* Hero */}
      <div className="text-center py-16 bg-white shadow">
        <h2 className="text-5xl font-bold text-blue-600">
          All-in-One Student Tools
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Free tools for every student 🚀
        </p>

        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="mt-6 p-3 border rounded-lg w-80"
        />
      </div>

      {/* Tool Cards */}
      <div
        id="tools"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-10"
      >
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-600">
              {tool.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {tool.desc}
            </p>

            <button
              onClick={tool.action}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Use Tool
            </button>
          </div>
        ))}
      </div>

      {/* CGPA */}
      <div
        id="cgpa"
        className={`max-w-xl mx-auto p-8 rounded-2xl shadow mb-10 ${
  darkMode ? "bg-gray-800 text-white" : "bg-white"
}`}
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          CGPA Calculator
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Enter marks separated by commas
        </p>

        <input
          type="text"
          placeholder="90,85,88,76"
          value={marks}
          onChange={(e) =>
            setMarks(e.target.value)
          }
          className="w-full mt-6 p-3 border rounded-lg"
        />

        <button
          onClick={calculateCGPA}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Calculate CGPA
        </button>

        {cgpa && (
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold">
              Your CGPA: {cgpa}
            </h3>
          </div>
        )}
      </div>
     
{/* CGPA Goal Predictor */}
<div
  id="goal"
  className={`max-w-xl mx-auto p-8 rounded-2xl shadow mb-10 ${
    darkMode ? "bg-gray-800 text-white" : "bg-white"
  }`}
>
  <h2 className="text-3xl font-bold text-center text-blue-600">
    CGPA Goal Predictor
  </h2>

  <input
    type="number"
    step="0.01"
    placeholder="Current CGPA"
    value={currentCgpa}
    onChange={(e) => setCurrentCgpa(e.target.value)}
    className="w-full mt-6 p-3 border rounded-lg"
  />

  <input
    type="number"
    step="0.01"
    placeholder="Target CGPA"
    value={targetCgpa}
    onChange={(e) => setTargetCgpa(e.target.value)}
    className="w-full mt-4 p-3 border rounded-lg"
  />

  <input
    type="number"
    placeholder="Remaining Semesters"
    value={remainingSems}
    onChange={(e) => setRemainingSems(e.target.value)}
    className="w-full mt-4 p-3 border rounded-lg"
  />

  <button
    onClick={calculateGoal}
    className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
  >
    Predict Required SGPA
  </button>

  {goalResult && (
    <div className="mt-6 text-center">
      <h3 className="text-xl font-bold text-green-700">
        {goalResult}
      </h3>
    </div>
  )}
</div>
      {/* Attendance */}
      <div
        id="attendance"
        className={`max-w-xl mx-auto p-8 rounded-2xl shadow mb-10 ${
  darkMode ? "bg-gray-800 text-white" : "bg-white"
}`}
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Attendance Calculator
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Calculate attendance percentage
        </p>

        <input
          type="number"
          placeholder="Classes Attended"
          value={attended}
          onChange={(e) =>
            setAttended(e.target.value)
          }
          className="w-full mt-6 p-3 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Total Classes"
          value={totalClasses}
          onChange={(e) =>
            setTotalClasses(e.target.value)
          }
          className="w-full mt-4 p-3 border rounded-lg"
        />

        <button
          onClick={calculateAttendance}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Calculate Attendance
        </button>

        {attendance && (
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold">
              Attendance: {attendance}%
            </h3>
          </div>
        )}
      </div>
      {/* Semester CGPA Tracker */}
<div
  id="semester"
  className={`max-w-xl mx-auto p-8 rounded-2xl shadow mb-10 ${
    darkMode ? "bg-gray-800 text-white" : "bg-white"
  }`}
>
  <h2 className="text-3xl font-bold text-center text-blue-600">
    Semester CGPA Tracker
  </h2>

  <input
    type="text"
    placeholder="Semester (Example: Sem 1)"
    value={semester}
    onChange={(e) => setSemester(e.target.value)}
    className="w-full mt-6 p-3 border rounded-lg text-black"
  />

  <input
    type="number"
    step="0.01"
    placeholder="CGPA"
    value={semesterCgpa}
    onChange={(e) => setSemesterCgpa(e.target.value)}
    className="w-full mt-4 p-3 border rounded-lg text-black"
  />

  <button
    onClick={addSemester}
    className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
  >
    Add Semester
  </button>

  <div className="mt-6">
    {semesterList.map((item, index) => (
      <div
        key={index}
        className="flex justify-between items-center bg-gray-200 text-black p-3 rounded-lg mb-2"
      >
        <span>{item.semester}</span>
        <span>{item.cgpa}</span>
      </div>
    ))}
  </div>
</div>
      {/* Todo */}
      <div
        id="todo"
        className={`max-w-xl mx-auto p-8 rounded-2xl shadow mb-20 ${
  darkMode ? "bg-gray-800 text-white" : "bg-white"
}`}
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          To-Do List
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Manage your daily tasks
        </p>

        <div className="flex gap-4 mt-6">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            className="flex-1 p-3 border rounded-lg"
          />

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <div className="mt-6">
          {tasks.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-3"
            >
              <p>{t}</p>

              <button
                onClick={() =>
                  deleteTask(index)
                }
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-blue-600 text-white text-center p-6"
      >
        <h2 className="text-2xl font-bold">
          Student Tools Hub
        </h2>

        <p className="mt-2">
          Free tools for every student 🚀
        </p>

        <p className="mt-4 text-sm">
          © 2026 Student Tools Hub. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-gray-200">
  Developed with ❤️ by <strong>Jashnavi Kovvuri</strong>
</p>
      </footer>
    </div>
  );
}

export default Home;