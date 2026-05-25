import { useState } from "react";

function App() {
  // CGPA States
  const [marks, setMarks] = useState("");
  const [cgpa, setCgpa] = useState("");

  // Attendance States
  const [attended, setAttended] = useState("");
  const [totalClasses, setTotalClasses] = useState("");
  const [attendance, setAttendance] = useState("");

  // Todo States
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

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
  const calculateAttendance = () => {
    if (!attended || !totalClasses) {
      setAttendance("Invalid Input");
      return;
    }

    const percent =
      (Number(attended) / Number(totalClasses)) * 100;

    setAttendance(percent.toFixed(2));
  };

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  const tools = [
    {
      title: "CGPA Calculator",
      desc: "Calculate your CGPA easily",
    },
    {
      title: "Attendance Calculator",
      desc: "Track attendance percentage",
    },
    {
      title: "To-Do List",
      desc: "Manage daily tasks",
    },
    {
      title: "Resume Templates",
      desc: "Download resume formats",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Student Tools Hub
        </h1>

        <div className="space-x-4">
          <button className="hover:text-gray-200">
            Home
          </button>

          <button className="hover:text-gray-200">
            Tools
          </button>

          <button className="hover:text-gray-200">
            About
          </button>
        </div>
      </nav>

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
          className="mt-6 p-3 border rounded-lg w-80"
        />
      </div>

      {/* Tool Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {tools.map((tool, index) => (
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

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Use Tool
            </button>
          </div>
        ))}
      </div>

      {/* CGPA Calculator */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow mb-10">
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
          onChange={(e) => setMarks(e.target.value)}
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

      {/* Attendance Calculator */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow mb-10">
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
          onChange={(e) => setAttended(e.target.value)}
          className="w-full mt-6 p-3 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Total Classes"
          value={totalClasses}
          onChange={(e) => setTotalClasses(e.target.value)}
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

      {/* Todo List */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow mb-20">
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
            onChange={(e) => setTask(e.target.value)}
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
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-6">
        <h2 className="text-2xl font-bold">
          Student Tools Hub
        </h2>

        <p className="mt-2">
          Free tools for every student 🚀
        </p>

        <p className="mt-4 text-sm">
          © 2026 Student Tools Hub. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;