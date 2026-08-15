import { useMemo, useState } from "react";

function CGPACalculator() {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [grade, setGrade] = useState("");
  const [credits, setCredits] = useState("");

  // =========================
  // CURRENT WORKING DATA
  // =========================

  const [semesterSubjects, setSemesterSubjects] = useState({});

  // =========================
  // SAVED RESULT
  // =========================

  const [savedResult, setSavedResult] = useState(() => {
    const saved = localStorage.getItem("savedCGPAResult");

    return saved ? JSON.parse(saved) : null;
  });

  // =========================
  // GRADE POINTS
  // =========================

  const gradePoints = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0,
  };

  // =========================
  // SEMESTERS
  // =========================

  const semesters = [
    "1-1 Sem",
    "1-2 Sem",
    "2-1 Sem",
    "2-2 Sem",
    "3-1 Sem",
    "3-2 Sem",
    "4-1 Sem",
    "4-2 Sem",
  ];

  // =========================
  // ADD SUBJECT
  // =========================

  const addSubject = () => {
    if (
      !selectedSemester ||
      !subjectName.trim() ||
      !grade ||
      !credits
    ) {
      alert(
        "Please fill Semester, Subject, Grade and Credits."
      );
      return;
    }

    const creditValue = Number(credits);

    if (creditValue <= 0) {
      alert("Credits must be greater than 0.");
      return;
    }

    const newSubject = {
      id: Date.now(),
      subjectName: subjectName.trim(),
      grade,
      credits: creditValue,
    };

    const updated = {
      ...semesterSubjects,
      [selectedSemester]: [
        ...(semesterSubjects[selectedSemester] || []),
        newSubject,
      ],
    };

    setSemesterSubjects(updated);

    // Clear input fields
    setSubjectName("");
    setGrade("");
    setCredits("");
  };

  // =========================
  // DELETE SUBJECT
  // =========================

  const deleteSubject = (semesterName, subjectId) => {
    const updated = {
      ...semesterSubjects,
      [semesterName]: (
        semesterSubjects[semesterName] || []
      ).filter(
        (subject) => subject.id !== subjectId
      ),
    };

    setSemesterSubjects(updated);
  };

  // =========================
  // SEMESTER RESULT
  // =========================

  const calculateSemesterResult = (semesterName) => {
    const subjects =
      semesterSubjects[semesterName] || [];

    if (subjects.length === 0) {
      return {
        sgpa: "0.00",
        percentage: "0.00",
        backlogs: 0,
        totalCredits: 0,
      };
    }

    let totalCredits = 0;
    let totalPoints = 0;
    let backlogs = 0;

    subjects.forEach((subject) => {
      const point =
        gradePoints[subject.grade] ?? 0;

      totalCredits += Number(subject.credits);

      totalPoints +=
        point * Number(subject.credits);

      if (subject.grade === "F") {
        backlogs++;
      }
    });

    const sgpa =
      totalCredits > 0
        ? totalPoints / totalCredits
        : 0;

    const percentage =
      (sgpa - 0.75) * 10;

    return {
      sgpa: sgpa.toFixed(2),

      percentage:
        percentage > 0
          ? percentage.toFixed(2)
          : "0.00",

      backlogs,

      totalCredits,
    };
  };

  // =========================
  // OVERALL RESULT
  // =========================

  const overallResult = useMemo(() => {
    let totalCredits = 0;
    let totalPoints = 0;
    let totalBacklogs = 0;

    Object.values(semesterSubjects).forEach(
      (subjects) => {
        subjects.forEach((subject) => {
          const point =
            gradePoints[subject.grade] ?? 0;

          totalCredits += Number(
            subject.credits
          );

          totalPoints +=
            point *
            Number(subject.credits);

          if (subject.grade === "F") {
            totalBacklogs++;
          }
        });
      }
    );

    if (totalCredits === 0) {
      return {
        cgpa: "0.00",
        percentage: "0.00",
        backlogs: 0,
        totalCredits: 0,
      };
    }

    const cgpa =
      totalPoints / totalCredits;

    const percentage =
      (cgpa - 0.75) * 10;

    return {
      cgpa: cgpa.toFixed(2),

      percentage:
        percentage > 0
          ? percentage.toFixed(2)
          : "0.00",

      backlogs: totalBacklogs,

      totalCredits,
    };
  }, [semesterSubjects]);

  // =========================
  // SAVE RESULT
  // =========================

  const saveResult = () => {
    if (
      Object.keys(semesterSubjects).length === 0
    ) {
      alert(
        "Please add at least one subject before saving."
      );
      return;
    }

    const dataToSave = {
      semesterSubjects: semesterSubjects,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "savedCGPAResult",
      JSON.stringify(dataToSave)
    );

    setSavedResult(dataToSave);

    // Clear current working data
    setSemesterSubjects({});
    setSelectedSemester("");
    setSubjectName("");
    setGrade("");
    setCredits("");

    alert(
      "Your CGPA result has been saved successfully!"
    );
  };

  // =========================
  // VIEW SAVED RESULT
  // =========================

  const viewSavedResult = () => {
    if (!savedResult) {
      alert("No saved result found.");
      return;
    }

    setSemesterSubjects(
      savedResult.semesterSubjects
    );

    setSelectedSemester("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // DELETE SAVED RESULT
  // =========================

  const deleteSavedResult = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your saved CGPA result?"
    );

    if (!confirmDelete) {
      return;
    }

    localStorage.removeItem(
      "savedCGPAResult"
    );

    setSavedResult(null);
    setSemesterSubjects({});
    setSelectedSemester("");
    setSubjectName("");
    setGrade("");
    setCredits("");

    alert(
      "Saved CGPA result has been deleted."
    );
  };

  // =========================
  // PRINT
  // =========================

  const handlePrint = () => {
    if (!selectedSemester) {
      alert(
        "Please select a semester first."
      );
      return;
    }

    window.print();
  };

  // =========================
  // SELECTED SEMESTER DATA
  // =========================

  const selectedSubjects =
    selectedSemester
      ? semesterSubjects[selectedSemester] || []
      : [];

  const selectedResult =
    selectedSemester
      ? calculateSemesterResult(
          selectedSemester
        )
      : null;

  // =========================
  // RETURN
  // =========================

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 lg:p-10">

      <div className="max-w-7xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="print-header mb-8">

          <h1 className="text-3xl md:text-4xl font-bold">
            CGPA & Percentage Calculator
          </h1>

          <p className="text-gray-500 mt-2">
            Calculate your semester SGPA,
            overall CGPA and percentage.
          </p>

        </div>


        {/* =========================
            OVERALL PERFORMANCE
        ========================= */}

        <div className="overall-performance border border-orange-500/20 rounded-2xl p-6 bg-orange-500/5 mb-8">

          <div className="mb-6">

            <h2 className="text-2xl font-bold">
              Overall Academic Performance
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Based on all entered semesters
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* OVERALL CGPA */}

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">

              <p className="text-gray-400 text-sm">
                Overall CGPA
              </p>

              <p className="text-4xl font-bold text-orange-400 mt-2">
                {overallResult.cgpa}
              </p>

            </div>


            {/* OVERALL PERCENTAGE */}

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">

              <p className="text-gray-400 text-sm">
                Overall Percentage
              </p>

              <p className="text-4xl font-bold text-orange-400 mt-2">
                {overallResult.percentage}%
              </p>

            </div>


            {/* TOTAL BACKLOGS */}

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">

              <p className="text-gray-400 text-sm">
                Total Backlogs
              </p>

              <p
                className={`text-4xl font-bold mt-2 ${
                  overallResult.backlogs > 0
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {overallResult.backlogs}
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            ADD SUBJECT
        ========================= */}

        <div className="no-print">

          <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">

            <h2 className="text-xl font-bold mb-5">
              Add Semester Subject
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/* SEMESTER */}

              <select
                value={selectedSemester}
                onChange={(e) =>
                  setSelectedSemester(
                    e.target.value
                  )
                }
                className="w-full bg-[#0a0a0a] text-white border border-white/10 rounded-xl p-3"
              >

                <option value="">
                  Select Semester
                </option>

                {semesters.map((sem) => (

                  <option
                    key={sem}
                    value={sem}
                  >
                    {sem.replace(
                      " Sem",
                      ""
                    )}
                  </option>

                ))}

              </select>


              {/* SUBJECT */}

              <input
                type="text"
                placeholder="Subject Name"
                value={subjectName}
                onChange={(e) =>
                  setSubjectName(
                    e.target.value
                  )
                }
                className="w-full bg-[#0a0a0a] text-white border border-white/10 rounded-xl p-3"
              />


              {/* GRADE */}

              <select
                value={grade}
                onChange={(e) =>
                  setGrade(e.target.value)
                }
                className="w-full bg-[#0a0a0a] text-white border border-white/10 rounded-xl p-3"
              >

                <option value="">
                  Select Grade
                </option>

                <option value="S">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>

              </select>


              {/* CREDITS */}

              <input
                type="number"
                step="0.5"
                min="0"
                placeholder="Credits"
                value={credits}
                onChange={(e) =>
                  setCredits(
                    e.target.value
                  )
                }
                className="w-full bg-[#0a0a0a] text-white border border-white/10 rounded-xl p-3"
              />

            </div>


            <button
              type="button"
              onClick={addSubject}
              className="mt-4 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition font-semibold text-black"
            >
              ➕ Add Subject
            </button>

          </div>

        </div>


        {/* =========================
            SAVED RESULT CONTROLS
        ========================= */}

        <div className="mt-8 flex flex-wrap justify-center gap-4 no-print">

          {/* SAVE RESULT */}

          <button
            type="button"
            onClick={saveResult}
            className="px-8 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold text-black"
          >
            💾 Save Result
          </button>


          {/* VIEW SAVED RESULT */}

          {savedResult && (

            <button
              type="button"
              onClick={viewSavedResult}
              className="px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold text-black"
            >
              📂 View Saved Result
            </button>

          )}


          {/* DELETE SAVED RESULT */}

          {savedResult && (

            <button
              type="button"
              onClick={deleteSavedResult}
              className="px-8 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold text-white"
            >
              🗑️ Delete Saved Result
            </button>

          )}

        </div>


        {/* =========================
            SAVED RESULT MESSAGE
        ========================= */}

        {savedResult && (

          <div className="mt-5 text-center no-print">

            <p className="text-sm text-green-400">
              ✓ Your CGPA result is saved on this device.
            </p>

          </div>

        )}


        {/* =========================
            SELECTED SEMESTER RESULT
        ========================= */}

        {selectedSemester && (

          <div className="semester-result mt-8">

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">

              {/* SEMESTER HEADER */}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>

                  <h2 className="text-2xl font-bold">
                    {selectedSemester.replace(
                      " Sem",
                      ""
                    )}{" "}
                    Semester Results
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {selectedSubjects.length}{" "}
                    subject(s)
                  </p>

                </div>


                {/* SEMESTER STATS */}

                <div className="grid grid-cols-3 gap-4 text-center">

                  {/* SGPA */}

                  <div className="bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3">

                    <p className="text-xs text-gray-500">
                      SGPA
                    </p>

                    <p className="text-xl font-bold text-orange-400">
                      {selectedResult.sgpa}
                    </p>

                  </div>


                  {/* PERCENTAGE */}

                  <div className="bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3">

                    <p className="text-xs text-gray-500">
                      Percentage
                    </p>

                    <p className="text-xl font-bold text-orange-400">
                      {selectedResult.percentage}%
                    </p>

                  </div>


                  {/* BACKLOGS */}

                  <div className="bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3">

                    <p className="text-xs text-gray-500">
                      Backlogs
                    </p>

                    <p
                      className={`text-xl font-bold ${
                        selectedResult.backlogs > 0
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {selectedResult.backlogs}
                    </p>

                  </div>

                </div>

              </div>


              {/* =========================
                  SUBJECT TABLE
              ========================= */}

              {selectedSubjects.length > 0 ? (

                <div className="mt-6 overflow-x-auto">

                  <table className="w-full text-sm">

                    <thead>

                      <tr className="border-b border-white/10 text-gray-400">

                        <th className="text-left py-3">
                          Subject
                        </th>

                        <th className="text-center py-3">
                          Grade
                        </th>

                        <th className="text-center py-3">
                          Credits
                        </th>

                        <th className="text-center py-3 no-print">
                          Action
                        </th>

                      </tr>

                    </thead>


                    <tbody>

                      {selectedSubjects.map(
                        (subject) => (

                          <tr
                            key={subject.id}
                            className="border-b border-white/5"
                          >

                            <td className="py-3">
                              {subject.subjectName}
                            </td>

                            <td className="text-center py-3 font-semibold">
                              {subject.grade}
                            </td>

                            <td className="text-center py-3">
                              {subject.credits}
                            </td>

                            <td className="text-center py-3 no-print">

                              <button
                                type="button"
                                onClick={() =>
                                  deleteSubject(
                                    selectedSemester,
                                    subject.id
                                  )
                                }
                                className="text-red-400 hover:text-red-300"
                              >
                                🗑 Delete
                              </button>

                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                </div>

              ) : (

                <p className="mt-6 text-sm text-gray-500 text-center py-8">
                  No subjects added for this semester.
                </p>

              )}

            </div>

          </div>

        )}


        {/* =========================
            PRINT BUTTON
        ========================= */}

        <div className="mt-8 flex justify-center no-print">

          <button
            type="button"
            onClick={handlePrint}
            className="px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition font-semibold text-black"
          >
            🖨️ Print Result
          </button>

        </div>


        {/* =========================
            PRINT FOOTER
        ========================= */}

        <div className="print-only mt-8 text-center">

          <p className="text-sm">
            Student Tools Hub
          </p>

          <p className="text-xs mt-1">
            CGPA & Percentage Calculator
          </p>

        </div>

      </div>


      {/* =========================
          PRINT CSS
      ========================= */}

      <style>
        {`

          .print-only {
            display: none;
          }


          @media print {

            body {
              background: white !important;
              color: black !important;
            }


            body * {
              visibility: hidden;
            }


            /*
              PRINT:
              Header
              Overall Performance
              Selected Semester
            */

            .print-header,
            .print-header *,
            .overall-performance,
            .overall-performance *,
            .semester-result,
            .semester-result *,
            .print-only,
            .print-only * {
              visibility: visible;
            }


            .print-header {
              position: absolute;
              left: 0;
              top: 20px;
              width: 100%;
              color: black !important;
              text-align: center;
            }


            .print-header h1,
            .print-header p {
              color: black !important;
            }


            .overall-performance {
              position: absolute;
              left: 0;
              top: 100px;
              width: 100%;
              background: white !important;
              border: 1px solid #cccccc !important;
              color: black !important;
            }


            .overall-performance h2,
            .overall-performance p {
              color: black !important;
            }


            .overall-performance .text-orange-400,
            .overall-performance .text-green-400,
            .overall-performance .text-red-400 {
              color: black !important;
            }


            .semester-result {
              position: absolute;
              left: 0;
              top: 360px;
              width: 100%;
            }


            .semester-result > div {
              background: white !important;
              border: 1px solid #cccccc !important;
              color: black !important;
            }


            .semester-result h2,
            .semester-result p,
            .semester-result td,
            .semester-result th {
              color: black !important;
            }


            .semester-result .text-orange-400 {
              color: black !important;
            }


            .semester-result .text-green-400 {
              color: black !important;
            }


            .semester-result .text-red-400 {
              color: black !important;
            }


            .no-print {
              display: none !important;
            }


            .print-only {
              display: block;
              position: absolute;
              left: 0;
              bottom: 20px;
              width: 100%;
              color: black !important;
            }


            @page {
              size: A4;
              margin: 15mm;
            }

          }

        `}
      </style>

    </div>
  );
}

export default CGPACalculator;