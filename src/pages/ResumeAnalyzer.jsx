import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// PDF.js worker configuration
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeAnalyzer() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  // =========================================================
  // EXTRACT TEXT FROM PDF
  // =========================================================

  const extractPDFText = async (pdfFile) => {
    if (!pdfFile) {
      throw new Error("No PDF file selected.");
    }

    console.log("Starting PDF extraction...");
    console.log("File:", pdfFile.name);
    console.log("Size:", pdfFile.size);

    const arrayBuffer = await pdfFile.arrayBuffer();

    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(arrayBuffer),
    });

    const pdf = await loadingTask.promise;

    console.log("PDF loaded successfully.");
    console.log("Number of pages:", pdf.numPages);

    let fullText = "";

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      console.log(`Reading page ${pageNumber}...`);

      const page = await pdf.getPage(pageNumber);

      const textContent = await page.getTextContent();

      const pageText = textContent.items
        .map((item) => item.str || "")
        .join(" ");

      fullText += pageText + "\n";
    }

    console.log("Extracted text length:", fullText.length);
    console.log("Extracted text:", fullText);

    if (!fullText.trim()) {
      throw new Error(
        "No selectable text found in this PDF. Please upload a text-based PDF."
      );
    }

    return fullText;
  };

  // =========================================================
  // ANALYZE RESUME
  // =========================================================

  const handleAnalyze = async () => {
    if (!file) {
      setResult({
        score: null,
        message: "Please upload your resume first.",
        suggestions: [],
        strengths: [],
        missing: [],
        detectedSkills: [],
      });

      return;
    }

    try {
      setAnalyzing(true);
      setResult(null);

      // -------------------------------------------------------
      // STEP 1: EXTRACT ACTUAL PDF TEXT
      // -------------------------------------------------------

      const text = await extractPDFText(file);

      const resumeText = text
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();

      console.log("Resume text ready for analysis.");

      // =======================================================
      // STEP 2: SECTION DETECTION
      // =======================================================

      const sections = {
        contact:
          /email|e-mail|phone|mobile|contact|linkedin|github/.test(
            resumeText
          ),

        education:
          /education|b\.?tech|bachelor|degree|university|college|academic/.test(
            resumeText
          ),

        skills:
          /skills|technical skills|technical knowledge|technologies|skills & technologies/.test(
            resumeText
          ),

        projects:
          /projects|project experience|academic projects|personal projects/.test(
            resumeText
          ),

        experience:
          /experience|internship|internships|work experience|professional experience/.test(
            resumeText
          ),

        certifications:
          /certification|certifications|certificate|courses|training/.test(
            resumeText
          ),

        summary:
          /summary|profile|objective|career objective|about me|professional summary/.test(
            resumeText
          ),

        achievements:
          /achievement|achievements|awards|accomplishments|hackathon/.test(
            resumeText
          ),
      };

      console.log("Sections:", sections);

      // =======================================================
      // STEP 3: TECHNICAL SKILLS
      // =======================================================

      const technicalSkills = [
        "python",
        "java",
        "c++",
        "c programming",
        "javascript",
        "typescript",
        "html",
        "css",
        "react",
        "react.js",
        "node.js",
        "express",
        "flask",
        "django",
        "machine learning",
        "deep learning",
        "artificial intelligence",
        "data science",
        "data analytics",
        "pandas",
        "numpy",
        "scikit-learn",
        "tensorflow",
        "keras",
        "pytorch",
        "sql",
        "mysql",
        "postgresql",
        "mongodb",
        "firebase",
        "git",
        "github",
        "power bi",
        "tableau",
        "matplotlib",
        "seaborn",
        "nlp",
        "natural language processing",
        "excel",
      ];

      const detectedSkills = technicalSkills.filter((skill) =>
        resumeText.includes(skill)
      );

      console.log("Detected skills:", detectedSkills);

      // =======================================================
      // STEP 4: PROJECT ANALYSIS
      // =======================================================

      const projectActionWords = [
        "developed",
        "built",
        "created",
        "implemented",
        "designed",
        "develop",
        "build",
        "create",
        "implement",
        "design",
        "using",
        "used",
        "technologies",
        "features",
        "integrated",
        "deployed",
        "tested",
      ];

      const projectKeywordCount = projectActionWords.filter((word) =>
        resumeText.includes(word)
      ).length;

      const projectTechnologyCount = [
        "python",
        "javascript",
        "react",
        "flask",
        "tensorflow",
        "machine learning",
        "pandas",
        "numpy",
        "sql",
        "mongodb",
        "firebase",
        "html",
        "css",
      ].filter((technology) => resumeText.includes(technology)).length;

      // =======================================================
      // STEP 5: ACHIEVEMENTS / NUMBERS
      // =======================================================

      const numberPatterns = [
        /\b\d+%/i,
        /\b\d+\+/i,
        /\b\d+\s*(users|students|projects|records|datasets|data)/i,
        /\b\d+\s*(months|years|days)/i,
      ];

      const hasNumbers = numberPatterns.some((pattern) =>
        pattern.test(text)
      );

      // =======================================================
      // STEP 6: CONTACT QUALITY
      // =======================================================

      const hasEmail =
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(text);

      const hasPhone =
        /(\+91[\s-]?)?[6-9]\d{9}/.test(text.replace(/\s/g, ""));

      const hasLinkedIn = /linkedin/i.test(resumeText);
      const hasGitHub = /github/i.test(resumeText);

      // =======================================================
      // STEP 7: SCORE
      // =======================================================

      let score = 0;

      // Contact
      if (hasEmail) score += 5;
      if (hasPhone) score += 5;
      if (hasLinkedIn) score += 3;
      if (hasGitHub) score += 3;

      // Education
      if (sections.education) score += 12;

      // Skills
      if (sections.skills) score += 8;

      if (detectedSkills.length >= 10) {
        score += 10;
      } else if (detectedSkills.length >= 7) {
        score += 8;
      } else if (detectedSkills.length >= 4) {
        score += 5;
      } else if (detectedSkills.length >= 2) {
        score += 3;
      }

      // Projects
      if (sections.projects) score += 10;

      if (projectKeywordCount >= 8) {
        score += 7;
      } else if (projectKeywordCount >= 5) {
        score += 5;
      } else if (projectKeywordCount >= 2) {
        score += 3;
      }

      if (projectTechnologyCount >= 5) {
        score += 5;
      } else if (projectTechnologyCount >= 3) {
        score += 3;
      }

      // Experience
      if (sections.experience) score += 8;

      // Certifications
      if (sections.certifications) score += 5;

      // Summary
      if (sections.summary) score += 5;

      // Achievements
      if (sections.achievements) score += 4;

      // Numbers / measurable results
      if (hasNumbers) score += 5;

      score = Math.min(Math.round(score), 100);

      console.log("Final score:", score);

      // =======================================================
      // STEP 8: STRENGTHS
      // =======================================================

      const strengths = [];

      if (hasEmail) {
        strengths.push("Professional email address is present.");
      }

      if (hasPhone) {
        strengths.push("Phone/contact information is present.");
      }

      if (hasLinkedIn) {
        strengths.push("LinkedIn profile is included.");
      }

      if (hasGitHub) {
        strengths.push("GitHub profile is included.");
      }

      if (sections.education) {
        strengths.push("Education information is included.");
      }

      if (sections.skills) {
        strengths.push(
          `Technical skills section detected with ${detectedSkills.length} relevant skills.`
        );
      }

      if (detectedSkills.length > 0) {
        strengths.push(
          `Detected skills include: ${detectedSkills
            .slice(0, 10)
            .join(", ")}.`
        );
      }

      if (sections.projects) {
        strengths.push("Projects section is present.");
      }

      if (projectTechnologyCount >= 3) {
        strengths.push(
          "Projects contain multiple technical technologies."
        );
      }

      if (sections.experience) {
        strengths.push(
          "Internship or professional experience information is present."
        );
      }

      if (sections.certifications) {
        strengths.push("Certifications or training information is present.");
      }

      if (sections.summary) {
        strengths.push("Professional summary/objective is included.");
      }

      if (hasNumbers) {
        strengths.push(
          "Resume contains measurable information such as numbers or percentages."
        );
      }

      // =======================================================
      // STEP 9: MISSING / WEAK AREAS
      // =======================================================

      const missing = [];

      if (!hasEmail) {
        missing.push("Professional email");
      }

      if (!hasPhone) {
        missing.push("Phone number");
      }

      if (!hasLinkedIn) {
        missing.push("LinkedIn profile");
      }

      if (!hasGitHub) {
        missing.push("GitHub profile");
      }

      if (!sections.summary) {
        missing.push("Professional Summary / Career Objective");
      }

      if (!sections.education) {
        missing.push("Education");
      }

      if (!sections.skills) {
        missing.push("Technical Skills");
      }

      if (!sections.projects) {
        missing.push("Projects");
      }

      if (!sections.experience) {
        missing.push("Internship / Experience");
      }

      if (!sections.certifications) {
        missing.push("Certifications / Courses");
      }

      if (!sections.achievements) {
        missing.push("Achievements / Hackathons");
      }

      if (!hasNumbers) {
        missing.push("Measurable achievements");
      }

      // =======================================================
      // STEP 10: PERSONALIZED FEEDBACK
      // =======================================================

      const suggestions = [];

      if (!hasEmail) {
        suggestions.push(
          "Add a professional email address so recruiters can contact you easily."
        );
      }

      if (!hasPhone) {
        suggestions.push(
          "Add your phone number near the top of the resume."
        );
      }

      if (!hasLinkedIn) {
        suggestions.push(
          "Add your LinkedIn profile URL to improve your professional presence."
        );
      }

      if (!hasGitHub) {
        suggestions.push(
          "Add your GitHub profile if you have relevant projects or coding work."
        );
      }

      if (!sections.summary) {
        suggestions.push(
          "Add a short 2–3 line professional summary focused on your skills, projects and career goal."
        );
      }

      if (!sections.skills) {
        suggestions.push(
          "Create a clearly organized Technical Skills section."
        );
      }

      if (detectedSkills.length < 5) {
        suggestions.push(
          "Mention relevant technical skills that you actually know instead of keeping the skills section too short."
        );
      }

      if (!sections.projects) {
        suggestions.push(
          "Add 2–4 strong projects with your contribution, technologies and important features."
        );
      }

      if (sections.projects && projectKeywordCount < 4) {
        suggestions.push(
          "Improve project descriptions by explaining what you built, how you built it and what technologies you used."
        );
      }

      if (sections.projects && projectTechnologyCount < 3) {
        suggestions.push(
          "Mention the technologies/frameworks used in each project."
        );
      }

      if (!sections.experience) {
        suggestions.push(
          "Add internships, training programs or relevant practical experience if available."
        );
      }

      if (!sections.certifications) {
        suggestions.push(
          "Add relevant certifications, courses or training programs."
        );
      }

      if (!sections.achievements) {
        suggestions.push(
          "Add achievements, hackathons, coding competitions or other notable accomplishments if you have them."
        );
      }

      if (!hasNumbers) {
        suggestions.push(
          "Make your resume more measurable by adding percentages, dataset sizes, users, accuracy, performance improvements or project counts where truthful."
        );
      }

      // =======================================================
      // STEP 11: SCORE MESSAGE
      // =======================================================

      let message = "";

      if (score >= 85) {
        message =
          "Excellent resume foundation! Your resume contains strong sections, technical information and useful career details.";
      } else if (score >= 70) {
        message =
          "Good resume foundation. A few targeted improvements can make it stronger for placements and recruiter screening.";
      } else if (score >= 50) {
        message =
          "Your resume has useful information, but several areas can be improved to make it more placement-ready.";
      } else {
        message =
          "Your resume needs several important improvements before using it for placement or job applications.";
      }

      // =======================================================
      // FINAL RESULT
      // =======================================================

      setResult({
        score,
        message,
        suggestions,
        strengths,
        missing,
        sections,
        detectedSkills,
      });

    } catch (error) {
      console.error("================================");
      console.error("RESUME ANALYSIS ERROR");
      console.error(error);
      console.error("================================");

      let errorMessage =
        "Unable to analyze this PDF.";

      if (
        error?.message?.toLowerCase().includes("selectable text") ||
        error?.message?.toLowerCase().includes("no selectable")
      ) {
        errorMessage =
          "This PDF does not contain selectable text. Please upload a normal text-based PDF.";
      } else if (
        error?.message?.toLowerCase().includes("worker")
      ) {
        errorMessage =
          "PDF reader worker failed to load. Please restart the Vite server and try again.";
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setResult({
        score: null,
        message: errorMessage,
        suggestions: [],
        strengths: [],
        missing: [],
        detectedSkills: [],
      });

    } finally {
      setAnalyzing(false);
    }
  };

  // =========================================================
  // FILE SELECT
  // =========================================================

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (
      selectedFile.type !== "application/pdf" &&
      !selectedFile.name.toLowerCase().endsWith(".pdf")
    ) {
      alert("Please upload a PDF resume.");
      return;
    }

    setFile(selectedFile);
    setResult(null);
  };

  // =========================================================
  // RESET
  // =========================================================

  const resetAnalyzer = () => {
    setFile(null);
    setResult(null);
    setAnalyzing(false);
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-10">

      {/* BACK BUTTON */}

      <button
        type="button"
        onClick={() => navigate("/home")}
        className="mb-8 text-gray-400 hover:text-orange-400 transition"
      >
        ← Back to Dashboard
      </button>

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-10">

          <div className="text-5xl mb-4">
            📄
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-2">
            Student Career Tool
          </p>

          <h1 className="text-3xl md:text-5xl font-bold">
            Resume Analyzer
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Upload your resume and get an automatic analysis based on
            your actual resume content, sections, skills, projects,
            experience and achievements.
          </p>

        </div>

        {/* MAIN CARD */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-10">

          {/* UPLOAD */}

          <label className="block text-sm text-gray-300 mb-2">
            Upload Your Resume
          </label>

          <div
            className="
              rounded-2xl
              border border-dashed border-white/15
              bg-black/20
              p-8
              text-center
              hover:border-orange-500/40
              transition
            "
          >

            <div className="text-4xl mb-3">
              📄
            </div>

            <p className="text-gray-400 mb-4">
              Upload your PDF resume
            </p>

            <input
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="
                block
                w-full
                text-sm
                text-gray-400
                file:mr-4
                file:py-2
                file:px-4
                file:rounded-xl
                file:border-0
                file:bg-orange-500
                file:text-black
                file:font-semibold
                hover:file:bg-orange-400
                cursor-pointer
              "
            />

          </div>

          {/* SELECTED FILE */}

          {file && (
            <div
              className="
                mt-4
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                p-4
                flex items-center
                justify-between
                gap-4
              "
            >

              <div className="flex items-center gap-3">

                <span className="text-xl">
                  📎
                </span>

                <div>

                  <p className="text-sm text-white break-all">
                    {file.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>

                </div>

              </div>

              <span className="text-green-400 text-sm whitespace-nowrap">
                Ready ✓
              </span>

            </div>
          )}

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row gap-3 mt-5">

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={analyzing}
              className="
                flex-1
                px-6 py-3
                rounded-xl
                bg-orange-500
                text-black
                font-semibold
                hover:bg-orange-400
                transition-all
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {analyzing
                ? "🤖 Analyzing Resume..."
                : "Analyze Resume →"}
            </button>

            <button
              type="button"
              onClick={resetAnalyzer}
              className="
                px-6 py-3
                rounded-xl
                border border-white/10
                text-gray-400
                hover:text-white
                hover:bg-white/5
                transition
              "
            >
              Reset
            </button>

          </div>

          {/* RESULT */}

          {result && (
            <div className="mt-8">

              {/* ERROR */}

              {result.score === null ? (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-6">

                  <h2 className="text-xl font-semibold text-red-400">
                    ⚠️ Analysis Failed
                  </h2>

                  <p className="text-gray-400 mt-3">
                    {result.message}
                  </p>

                </div>
              ) : (
                <>

                  {/* SCORE */}

                  <div
                    className="
                      rounded-2xl
                      border border-orange-500/20
                      bg-orange-500/[0.04]
                      p-6
                      mb-5
                    "
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          Resume Score
                        </p>

                        <p className="text-5xl font-bold text-orange-400 mt-2">
                          {result.score}
                          <span className="text-xl text-gray-500">
                            /100
                          </span>
                        </p>

                      </div>

                      <div className="text-5xl">
                        {result.score >= 85
                          ? "🏆"
                          : result.score >= 70
                          ? "✨"
                          : result.score >= 50
                          ? "👍"
                          : "🔧"}
                      </div>

                    </div>

                    <p className="text-gray-300 mt-4">
                      {result.message}
                    </p>

                  </div>

                  {/* STRENGTHS */}

                  {result.strengths?.length > 0 && (
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/[0.03] p-6 mb-5">

                      <h2 className="text-xl font-semibold text-green-400 mb-4">
                        ✅ Resume Strengths
                      </h2>

                      <div className="space-y-3">

                        {result.strengths.map((item, index) => (
                          <div
                            key={index}
                            className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-gray-300"
                          >
                            ✓ {item}
                          </div>
                        ))}

                      </div>

                    </div>
                  )}

                  {/* DETECTED SKILLS */}

                  {result.detectedSkills?.length > 0 && (
                    <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] p-6 mb-5">

                      <h2 className="text-xl font-semibold text-blue-400 mb-4">
                        🛠 Detected Skills
                      </h2>

                      <div className="flex flex-wrap gap-2">

                        {result.detectedSkills.map((skill) => (
                          <span
                            key={skill}
                            className="
                              px-3 py-2
                              rounded-full
                              bg-blue-500/10
                              border border-blue-500/20
                              text-blue-300
                              text-sm
                            "
                          >
                            {skill}
                          </span>
                        ))}

                      </div>

                    </div>
                  )}

                  {/* MISSING / IMPROVE */}

                  {result.missing?.length > 0 && (
                    <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-6 mb-5">

                      <h2 className="text-xl font-semibold text-yellow-400 mb-4">
                        ⚠️ Missing / Improve These
                      </h2>

                      <div className="space-y-3">

                        {result.missing.map((item, index) => (
                          <div
                            key={index}
                            className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-gray-300"
                          >
                            {index + 1}. {item}
                          </div>
                        ))}

                      </div>

                    </div>
                  )}

                  {/* PERSONALIZED FEEDBACK */}

                  {result.suggestions?.length > 0 && (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">

                      <div className="flex items-center gap-3 mb-5">

                        <span className="text-2xl">
                          💡
                        </span>

                        <h2 className="text-xl font-semibold text-orange-400">
                          Personalized Feedback
                        </h2>

                      </div>

                      <div className="space-y-3">

                        {result.suggestions.map(
                          (suggestion, index) => (
                            <div
                              key={index}
                              className="
                                flex
                                gap-3
                                rounded-xl
                                border border-white/5
                                bg-white/[0.02]
                                p-4
                              "
                            >

                              <span className="text-orange-400">
                                {index + 1}.
                              </span>

                              <p className="text-gray-300 text-sm">
                                {suggestion}
                              </p>

                            </div>
                          )
                        )}

                      </div>

                    </div>
                  )}

                </>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ResumeAnalyzer;