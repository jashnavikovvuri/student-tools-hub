import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AIProjectBot() {
  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================

  const [stream, setStream] = useState("");
  const [level, setLevel] = useState("");
  const [technology, setTechnology] = useState("");
  const [projectType, setProjectType] = useState("");
  const [idea, setIdea] = useState("");

  const [results, setResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);

  // =========================
  // GENERATE PROJECT IDEAS
  // =========================

  const generateProject = () => {
    if (!stream || !level || !technology || !projectType) {
      alert("Please select all required options.");
      return;
    }

    setLoading(true);
    setResults([]);
    setVisibleCount(5);

    setTimeout(() => {
      let suggestions = [];

      // =====================================================
      // AI & DATA SCIENCE
      // =====================================================

      if (stream === "AI & Data Science") {
        if (technology === "Machine Learning") {
          suggestions = [
            {
              title: "Student Placement Prediction System",
              description:
                "Build a machine learning system that predicts a student's placement possibility based on academic performance, skills, internships and other factors.",
              features: [
                "Student profile",
                "Skill analysis",
                "Placement prediction",
                "Performance charts",
                "Prediction report",
              ],
              technologies:
                "Python, Pandas, NumPy, Scikit-learn, Flask",
            },
            {
              title: "Smart Resume Screening System",
              description:
                "Create an intelligent system that analyzes resumes and measures how well they match a selected job role.",
              features: [
                "Resume upload",
                "Resume data extraction",
                "Skill matching",
                "Job compatibility score",
                "Improvement suggestions",
              ],
              technologies:
                "Python, Machine Learning, NLP, Flask",
            },
            {
              title: "Student Dropout Risk Predictor",
              description:
                "Develop a machine learning system that identifies students who may be at academic risk using attendance, marks and learning activity.",
              features: [
                "Student data analysis",
                "Risk prediction",
                "Attendance analysis",
                "Performance monitoring",
                "Risk report",
              ],
              technologies:
                "Python, Pandas, Scikit-learn, Flask",
            },
            {
              title: "AI Career Recommendation System",
              description:
                "Create a machine learning system that recommends suitable career paths based on student skills, interests and academic performance.",
              features: [
                "Student profile",
                "Skill analysis",
                "Career matching",
                "Recommendation engine",
                "Career report",
              ],
              technologies:
                "Python, Pandas, Scikit-learn, Flask",
            },
            {
              title: "Student Performance Predictor",
              description:
                "Predict student academic performance using attendance, study hours, previous marks and learning activity.",
              features: [
                "Student data collection",
                "Data preprocessing",
                "Performance prediction",
                "Visualization",
                "Performance report",
              ],
              technologies:
                "Python, Pandas, NumPy, Scikit-learn, Flask",
            },
            {
              title: "Loan Eligibility Prediction System",
              description:
                "Build a machine learning application that predicts loan eligibility based on applicant financial and personal information.",
              features: [
                "Applicant registration",
                "Data preprocessing",
                "Eligibility prediction",
                "Prediction probability",
                "Result report",
              ],
              technologies:
                "Python, Pandas, Scikit-learn, Flask",
            },
            {
              title: "Employee Attrition Prediction System",
              description:
                "Develop an ML system that predicts whether an employee is likely to leave an organization.",
              features: [
                "Employee data",
                "Data preprocessing",
                "Attrition prediction",
                "Risk analysis",
                "Visualization",
              ],
              technologies:
                "Python, Pandas, Scikit-learn, Flask",
            },
            {
              title: "Disease Risk Prediction System",
              description:
                "Create a machine learning application that estimates disease risk based on selected health-related input parameters.",
              features: [
                "User information",
                "Input validation",
                "Risk prediction",
                "Prediction confidence",
                "Result report",
              ],
              technologies:
                "Python, Pandas, Scikit-learn, Flask",
            },
          ];
        } else if (technology === "Python") {
          suggestions = [
            {
              title: "AI Student Productivity Assistant",
              description:
                "Create a Python-based intelligent assistant that helps students manage tasks, study schedules and learning activities.",
              features: [
                "Task management",
                "Study recommendations",
                "Daily productivity tracking",
                "Study reminders",
                "Progress dashboard",
              ],
              technologies:
                "Python, Flask, SQLite, HTML, CSS, JavaScript",
            },
            {
              title: "Student Attendance Analyzer",
              description:
                "Build a Python application that analyzes attendance records and provides useful academic insights.",
              features: [
                "Attendance entry",
                "Attendance percentage",
                "Low attendance alerts",
                "Monthly reports",
                "Data visualization",
              ],
              technologies:
                "Python, Pandas, Matplotlib, SQLite",
            },
            {
              title: "Student Expense Tracker",
              description:
                "Create a smart expense tracking application designed specifically for college students.",
              features: [
                "Expense tracking",
                "Category management",
                "Monthly analysis",
                "Expense charts",
                "Budget alerts",
              ],
              technologies:
                "Python, Flask, SQLite, HTML, CSS",
            },
            {
              title: "Student Study Planner",
              description:
                "Develop a Python-based study planning application that helps students organize subjects, tasks and study sessions.",
              features: [
                "Subject management",
                "Study schedule",
                "Task tracking",
                "Progress monitoring",
                "Daily plan",
              ],
              technologies:
                "Python, Flask, SQLite",
            },
            {
              title: "Personal Finance Manager",
              description:
                "Build a Python application that helps users track income, expenses and monthly budgets.",
              features: [
                "Income tracking",
                "Expense tracking",
                "Categories",
                "Monthly reports",
                "Budget management",
              ],
              technologies:
                "Python, Flask, SQLite, Pandas",
            },
            {
              title: "College Helpdesk System",
              description:
                "Create a web-based college helpdesk where students can submit and track their queries.",
              features: [
                "Student login",
                "Query submission",
                "Query tracking",
                "Admin dashboard",
                "Status updates",
              ],
              technologies:
                "Python, Flask, SQLite, HTML, CSS",
            },
            {
              title: "Student Feedback Analysis System",
              description:
                "Build a Python application that collects and analyzes student feedback.",
              features: [
                "Feedback collection",
                "Data processing",
                "Rating analysis",
                "Charts",
                "Feedback reports",
              ],
              technologies:
                "Python, Pandas, Matplotlib, Flask",
            },
            {
              title: "Smart File Organizer",
              description:
                "Create a Python utility that automatically organizes files into folders based on file types.",
              features: [
                "File detection",
                "Automatic sorting",
                "Folder creation",
                "Duplicate handling",
                "File management",
              ],
              technologies:
                "Python, OS Module, Tkinter",
            },
          ];
        } else if (technology === "Data Science") {
          suggestions = [
            {
              title: "Student Learning Analytics System",
              description:
                "Analyze study patterns and academic activity to understand how students learn and improve their performance.",
              features: [
                "Study activity tracking",
                "Learning pattern analysis",
                "Performance visualization",
                "Academic insights",
                "Reports",
              ],
              technologies:
                "Python, Pandas, NumPy, Matplotlib, Flask",
            },
            {
              title: "College Placement Analytics Dashboard",
              description:
                "Build a data analytics dashboard that provides insights into student placement performance and hiring trends.",
              features: [
                "Placement data analysis",
                "Company statistics",
                "Student performance analysis",
                "Interactive charts",
                "Placement reports",
              ],
              technologies:
                "Python, Pandas, Matplotlib, Plotly, Flask",
            },
            {
              title: "Student Performance Analytics",
              description:
                "Analyze academic records to identify student performance trends.",
              features: [
                "Marks analysis",
                "Attendance analysis",
                "Performance trends",
                "Charts",
                "Reports",
              ],
              technologies:
                "Python, Pandas, NumPy, Matplotlib",
            },
            {
              title: "College Attendance Analytics",
              description:
                "Analyze attendance data and identify students who may need academic attention.",
              features: [
                "Attendance analysis",
                "Student comparison",
                "Low attendance detection",
                "Charts",
                "Reports",
              ],
              technologies:
                "Python, Pandas, Matplotlib, Plotly",
            },
            {
              title: "Student Result Dashboard",
              description:
                "Create an interactive dashboard for analyzing examination results.",
              features: [
                "Result upload",
                "Subject analysis",
                "Student comparison",
                "Performance charts",
                "Reports",
              ],
              technologies:
                "Python, Pandas, Plotly, Flask",
            },
            {
              title: "Job Market Analytics Dashboard",
              description:
                "Analyze job postings to identify hiring trends, skills and popular technologies.",
              features: [
                "Job data collection",
                "Skill analysis",
                "Company analysis",
                "Trend visualization",
                "Reports",
              ],
              technologies:
                "Python, Pandas, Matplotlib, Plotly",
            },
            {
              title: "Social Media Sentiment Dashboard",
              description:
                "Analyze social media text data and visualize positive, negative and neutral sentiment trends.",
              features: [
                "Data collection",
                "Text preprocessing",
                "Sentiment analysis",
                "Charts",
                "Trend reports",
              ],
              technologies:
                "Python, Pandas, NLP, Matplotlib",
            },
            {
              title: "College Survey Analytics System",
              description:
                "Analyze college survey data and generate useful insights using interactive visualizations.",
              features: [
                "Survey collection",
                "Data cleaning",
                "Statistical analysis",
                "Interactive charts",
                "Reports",
              ],
              technologies:
                "Python, Pandas, NumPy, Plotly",
            },
          ];
        } else {
          suggestions = [
            {
              title: "Smart Student Analytics Dashboard",
              description:
                "Build an intelligent dashboard that analyzes student academic data and provides useful insights.",
              features: [
                "Student data analysis",
                "Interactive dashboard",
                "Performance charts",
                "Progress tracking",
                "Academic insights",
              ],
              technologies:
                "Python, Pandas, Data Visualization, Flask",
            },
            {
              title: "AI-Based Career Recommendation System",
              description:
                "Create a system that recommends suitable career paths based on a student's skills, interests and academic background.",
              features: [
                "Student profile",
                "Skill analysis",
                "Career matching",
                "Recommendation system",
                "Career report",
              ],
              technologies:
                "Python, Machine Learning, Pandas, Flask",
            },
            {
              title: "AI Study Assistant",
              description:
                "Build an intelligent study assistant that helps students organize learning activities and discover useful study resources.",
              features: [
                "Study recommendations",
                "Task management",
                "Learning resources",
                "Progress tracking",
                "Student dashboard",
              ],
              technologies:
                "Python, AI, Flask, SQLite",
            },
            {
              title: "Smart Resume Analyzer",
              description:
                "Create an intelligent application that analyzes resumes and provides improvement suggestions.",
              features: [
                "Resume upload",
                "Resume analysis",
                "Skill extraction",
                "Job matching",
                "Suggestions",
              ],
              technologies:
                "Python, NLP, Machine Learning, Flask",
            },
            {
              title: "AI Interview Preparation Assistant",
              description:
                "Develop an intelligent platform that helps students prepare for technical and HR interviews.",
              features: [
                "Question generation",
                "Topic selection",
                "Practice sessions",
                "Performance tracking",
                "Interview reports",
              ],
              technologies:
                "Python, AI, NLP, Flask",
            },
            {
              title: "Smart Student Recommendation System",
              description:
                "Build a recommendation system that suggests courses, skills and learning resources based on student interests.",
              features: [
                "Student profile",
                "Interest analysis",
                "Course recommendations",
                "Skill suggestions",
                "Personalized dashboard",
              ],
              technologies:
                "Python, Machine Learning, Pandas, Flask",
            },
            {
              title: "AI College FAQ Assistant",
              description:
                "Create an AI assistant that answers common college-related questions.",
              features: [
                "Question answering",
                "FAQ management",
                "Search",
                "Chat interface",
                "Admin dashboard",
              ],
              technologies:
                "Python, NLP, Flask, SQLite",
            },
            {
              title: "Smart Academic Risk Analyzer",
              description:
                "Develop a system that analyzes academic information and identifies students who may need additional support.",
              features: [
                "Academic analysis",
                "Risk identification",
                "Attendance analysis",
                "Performance tracking",
                "Reports",
              ],
              technologies:
                "Python, Machine Learning, Pandas, Flask",
            },
          ];
        }
      }

      // =====================================================
      // CSE
      // =====================================================

      else if (stream === "CSE") {
        if (
          technology === "Web Development" ||
          technology === "React"
        ) {
          suggestions = [
            {
              title: "College Event Management Platform",
              description:
                "Build a platform where students can discover, register and manage college events.",
              features: [
                "Event creation",
                "Student registration",
                "Event search",
                "Notifications",
                "Admin dashboard",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Student Study Resource Portal",
              description:
                "Create a web platform where students can access notes, study materials and useful academic resources.",
              features: [
                "Resource upload",
                "Subject categories",
                "Search",
                "Student dashboard",
                "Download resources",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Online Coding Practice Platform",
              description:
                "Create a platform where students can practice programming problems and track their progress.",
              features: [
                "Coding questions",
                "Difficulty levels",
                "Progress tracking",
                "Question categories",
                "Leaderboard",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Smart Student Management System",
              description:
                "Create a complete web application for managing student records, attendance and marks.",
              features: [
                "Student registration",
                "Attendance management",
                "Marks management",
                "Search",
                "Dashboard",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "College Placement Portal",
              description:
                "Build a platform for students to track placement drives, applications and interview schedules.",
              features: [
                "Job listings",
                "Student profiles",
                "Application tracking",
                "Interview schedule",
                "Admin dashboard",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Student Task Management System",
              description:
                "Develop a productivity application where students can manage assignments and daily tasks.",
              features: [
                "Task creation",
                "Due dates",
                "Priority levels",
                "Progress tracking",
                "Reminders",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "College Complaint Management System",
              description:
                "Create a web platform where students can submit complaints and track their resolution status.",
              features: [
                "Complaint submission",
                "Status tracking",
                "Admin panel",
                "Notifications",
                "Reports",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Student Club Management Platform",
              description:
                "Build a platform for managing college clubs, members and activities.",
              features: [
                "Club registration",
                "Member management",
                "Event management",
                "Announcements",
                "Dashboard",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
          ];
        } else {
          suggestions = [
            {
              title: "AI-Powered College Assistant",
              description:
                "Build a web-based assistant that helps students find academic information and useful college resources.",
              features: [
                "Student queries",
                "College information",
                "Resource search",
                "FAQ",
                "Interactive interface",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Smart Campus Helpdesk",
              description:
                "Develop a digital helpdesk where students can submit queries and find solutions for common campus problems.",
              features: [
                "Student queries",
                "Issue tracking",
                "FAQ system",
                "Admin dashboard",
                "Notifications",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Online Examination System",
              description:
                "Build an online platform for conducting quizzes and examinations.",
              features: [
                "Question bank",
                "Online test",
                "Timer",
                "Automatic evaluation",
                "Result generation",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "AI Resume Builder",
              description:
                "Create a web application that helps students build professional resumes.",
              features: [
                "Resume templates",
                "Profile information",
                "Skill section",
                "PDF generation",
                "Resume preview",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Student Portfolio Builder",
              description:
                "Build a platform where students can create and publish their professional portfolios.",
              features: [
                "Profile creation",
                "Project section",
                "Skills",
                "Certificates",
                "Portfolio preview",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Smart Library Management System",
              description:
                "Create a digital library management system for students and administrators.",
              features: [
                "Book management",
                "Search",
                "Borrow records",
                "Return tracking",
                "Admin dashboard",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Campus Navigation System",
              description:
                "Develop a web application that helps students find important locations inside a campus.",
              features: [
                "Campus map",
                "Location search",
                "Building information",
                "Navigation",
                "Important places",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
            {
              title: "Student Feedback Platform",
              description:
                "Build a platform for collecting and analyzing student feedback.",
              features: [
                "Feedback forms",
                "Ratings",
                "Data analysis",
                "Charts",
                "Admin dashboard",
              ],
              technologies:
                "React, JavaScript, Firebase",
            },
          ];
        }
      }

      // =====================================================
      // ECE
      // =====================================================

      else if (stream === "ECE") {
        suggestions = [
          {
            title: "IoT Environmental Monitoring System",
            description:
              "Monitor temperature, humidity and environmental conditions using sensors and display the data digitally.",
            features: [
              "Temperature monitoring",
              "Humidity monitoring",
              "Sensor data",
              "Real-time dashboard",
              "Alerts",
            ],
            technologies:
              "Arduino, IoT, Sensors",
          },
          {
            title: "Smart IoT Student Safety System",
            description:
              "Develop an IoT-based system that monitors student safety and sends alerts when unusual activity is detected.",
            features: [
              "Sensor monitoring",
              "Real-time alerts",
              "Data collection",
              "Safety dashboard",
              "Notification system",
            ],
            technologies:
              "Arduino, IoT, Sensors, Python",
          },
          {
            title: "Smart Home Automation System",
            description:
              "Build an IoT-based home automation system that allows users to monitor and control appliances.",
            features: [
              "Device control",
              "Sensor monitoring",
              "Remote access",
              "Automation",
              "Status dashboard",
            ],
            technologies:
              "Arduino, IoT, Sensors, Python",
          },
          {
            title: "Smart Traffic Signal Controller",
            description:
              "Build an intelligent traffic signal system that adjusts signal timing based on traffic conditions.",
            features: [
              "Traffic detection",
              "Signal control",
              "Vehicle monitoring",
              "Automatic timing",
              "Traffic reports",
            ],
            technologies:
              "Arduino, Sensors, Embedded C",
          },
          {
            title: "Smart Parking System",
            description:
              "Develop an IoT-based parking system that detects available parking spaces.",
            features: [
              "Parking detection",
              "Slot availability",
              "Sensor monitoring",
              "Display system",
              "Alerts",
            ],
            technologies:
              "Arduino, IoT, Sensors",
          },
          {
            title: "Smart Agriculture Monitoring System",
            description:
              "Create an IoT system that monitors soil and environmental conditions for agriculture.",
            features: [
              "Soil moisture",
              "Temperature monitoring",
              "Automatic irrigation",
              "Sensor dashboard",
              "Alerts",
            ],
            technologies:
              "Arduino, IoT, Sensors, Python",
          },
          {
            title: "IoT Air Quality Monitoring System",
            description:
              "Build a system that monitors air quality and displays environmental conditions in real time.",
            features: [
              "Air quality detection",
              "Sensor monitoring",
              "Real-time data",
              "Dashboard",
              "Alerts",
            ],
            technologies:
              "Arduino, IoT, Sensors",
          },
          {
            title: "Smart Water Level Monitoring System",
            description:
              "Develop an IoT system that monitors water tank levels and provides alerts.",
            features: [
              "Water level detection",
              "Sensor monitoring",
              "Automatic alerts",
              "Dashboard",
              "Tank status",
            ],
            technologies:
              "Arduino, IoT, Sensors, Python",
          },
        ];
      }

      // =====================================================
      // EEE
      // =====================================================

      else if (stream === "EEE") {
        suggestions = [
          {
            title: "Smart Energy Monitoring System",
            description:
              "Create a system that monitors electricity usage and provides insights for reducing energy consumption.",
            features: [
              "Energy monitoring",
              "Usage analysis",
              "Daily reports",
              "Energy alerts",
              "Consumption dashboard",
            ],
            technologies:
              "IoT, Sensors, Python, Data Visualization",
          },
          {
            title: "Solar Power Monitoring System",
            description:
              "Build a system that monitors solar panel energy production and provides performance insights.",
            features: [
              "Power monitoring",
              "Energy tracking",
              "Daily reports",
              "Performance analysis",
              "Dashboard",
            ],
            technologies:
              "IoT, Sensors, Python",
          },
          {
            title: "Smart Electricity Consumption Predictor",
            description:
              "Develop a system that analyzes electricity usage and predicts future consumption.",
            features: [
              "Usage data collection",
              "Data analysis",
              "Consumption prediction",
              "Charts",
              "Energy reports",
            ],
            technologies:
              "Python, Machine Learning, IoT",
          },
          {
            title: "Smart Grid Monitoring System",
            description:
              "Develop a monitoring platform for analyzing electrical grid conditions.",
            features: [
              "Grid monitoring",
              "Power analysis",
              "Data collection",
              "Fault alerts",
              "Dashboard",
            ],
            technologies:
              "IoT, Sensors, Python",
          },
          {
            title: "Automatic Street Light System",
            description:
              "Build an automatic lighting system that controls street lights based on environmental conditions.",
            features: [
              "Light detection",
              "Automatic switching",
              "Energy saving",
              "Sensor monitoring",
              "Status display",
            ],
            technologies:
              "Arduino, Sensors, Embedded C",
          },
          {
            title: "Power Consumption Analytics System",
            description:
              "Analyze electricity usage patterns and identify opportunities for energy savings.",
            features: [
              "Energy data",
              "Usage analysis",
              "Charts",
              "Reports",
              "Energy insights",
            ],
            technologies:
              "Python, Pandas, Matplotlib",
          },
          {
            title: "Battery Health Monitoring System",
            description:
              "Create a system that monitors battery performance and estimates battery health.",
            features: [
              "Voltage monitoring",
              "Battery status",
              "Health estimation",
              "Alerts",
              "Reports",
            ],
            technologies:
              "Arduino, Sensors, Python",
          },
          {
            title: "Smart Solar Energy Predictor",
            description:
              "Build a system that predicts solar energy generation using historical energy and environmental data.",
            features: [
              "Historical data",
              "Energy prediction",
              "Weather factors",
              "Visualization",
              "Reports",
            ],
            technologies:
              "Python, Machine Learning, Pandas",
          },
        ];
      }

      // =====================================================
      // MECHANICAL
      // =====================================================

      else if (stream === "Mechanical") {
        suggestions = [
          {
            title: "Predictive Maintenance System",
            description:
              "Build a system that predicts possible machine failures using machine sensor data.",
            features: [
              "Machine monitoring",
              "Sensor data analysis",
              "Failure prediction",
              "Maintenance alerts",
              "Reports",
            ],
            technologies:
              "Python, Machine Learning, Sensors",
          },
          {
            title: "Smart Machine Monitoring System",
            description:
              "Create a monitoring system that tracks machine operating conditions and identifies abnormal behavior.",
            features: [
              "Machine monitoring",
              "Sensor readings",
              "Abnormality detection",
              "Alerts",
              "Dashboard",
            ],
            technologies:
              "Python, IoT, Sensors",
          },
          {
            title: "Industrial Equipment Health Predictor",
            description:
              "Use machine data to estimate equipment health and identify possible maintenance requirements.",
            features: [
              "Equipment data",
              "Health analysis",
              "Failure prediction",
              "Maintenance reports",
              "Visualization",
            ],
            technologies:
              "Python, Machine Learning, Pandas",
          },
          {
            title: "Smart Vehicle Monitoring System",
            description:
              "Develop a system that monitors vehicle parameters and identifies abnormal conditions.",
            features: [
              "Vehicle monitoring",
              "Sensor data",
              "Condition analysis",
              "Alerts",
              "Reports",
            ],
            technologies:
              "Python, IoT, Sensors",
          },
          {
            title: "Machine Fault Detection System",
            description:
              "Build a system that detects possible mechanical faults using machine operating data.",
            features: [
              "Sensor data",
              "Fault detection",
              "Data analysis",
              "Alerts",
              "Reports",
            ],
            technologies:
              "Python, Machine Learning, Sensors",
          },
          {
            title: "Smart Workshop Management System",
            description:
              "Create a digital system for managing machines, maintenance activities and workshop records.",
            features: [
              "Machine records",
              "Maintenance schedule",
              "Parts management",
              "Reports",
              "Dashboard",
            ],
            technologies:
              "React, JavaScript, Firebase",
          },
          {
            title: "Industrial Safety Monitoring System",
            description:
              "Develop a system that monitors industrial conditions and provides safety alerts.",
            features: [
              "Condition monitoring",
              "Safety alerts",
              "Sensor data",
              "Incident records",
              "Dashboard",
            ],
            technologies:
              "IoT, Sensors, Python",
          },
          {
            title: "Machine Performance Analyzer",
            description:
              "Analyze machine performance data and identify efficiency and performance trends.",
            features: [
              "Performance tracking",
              "Data analysis",
              "Efficiency calculation",
              "Charts",
              "Reports",
            ],
            technologies:
              "Python, Pandas, Matplotlib",
          },
        ];
      }

      // =====================================================
      // CIVIL
      // =====================================================

      else if (stream === "Civil") {
        suggestions = [
          {
            title: "Smart Construction Monitoring System",
            description:
              "Develop a digital system for monitoring construction activities, materials and project progress.",
            features: [
              "Project tracking",
              "Material management",
              "Progress monitoring",
              "Reports",
              "Dashboard",
            ],
            technologies:
              "React, JavaScript, Firebase",
          },
          {
            title: "Construction Material Management System",
            description:
              "Build a system for tracking construction materials, quantities and usage.",
            features: [
              "Material entry",
              "Stock tracking",
              "Usage records",
              "Low-stock alerts",
              "Reports",
            ],
            technologies:
              "React, JavaScript, Firebase",
          },
          {
            title: "Smart Building Cost Estimator",
            description:
              "Create an application that estimates construction costs based on project requirements and material quantities.",
            features: [
              "Project details",
              "Material calculation",
              "Cost estimation",
              "Reports",
              "Budget tracking",
            ],
            technologies:
              "React, JavaScript, Firebase",
          },
          {
            title: "Construction Project Management System",
            description:
              "Build a platform for tracking construction tasks, deadlines, resources and project progress.",
            features: [
              "Project creation",
              "Task management",
              "Progress tracking",
              "Resource management",
              "Reports",
            ],
            technologies:
              "React, JavaScript, Firebase",
          },
          {
            title: "Smart Road Condition Monitoring System",
            description:
              "Develop a system for recording and monitoring road conditions and maintenance requirements.",
            features: [
              "Road records",
              "Condition tracking",
              "Issue reporting",
              "Location tracking",
              "Reports",
            ],
            technologies:
              "React, JavaScript, Firebase",
          },
          {
            title: "Building Material Cost Calculator",
            description:
              "Create a calculator that estimates construction material requirements and approximate costs.",
            features: [
              "Material selection",
              "Quantity calculation",
              "Cost estimation",
              "Budget tracking",
              "Reports",
            ],
            technologies:
              "JavaScript, React, Firebase",
          },
          {
            title: "Smart Water Management System",
            description:
              "Develop a system for monitoring water usage and identifying water consumption patterns.",
            features: [
              "Water monitoring",
              "Usage analysis",
              "Consumption tracking",
              "Alerts",
              "Dashboard",
            ],
            technologies:
              "IoT, Python, Sensors",
          },
          {
            title: "Construction Safety Monitoring System",
            description:
              "Build a digital platform for tracking construction site safety conditions and incidents.",
            features: [
              "Safety records",
              "Incident reporting",
              "Worker records",
              "Safety alerts",
              "Reports",
            ],
            technologies:
              "React, JavaScript, Firebase",
          },
        ];
      }

      // =====================================================
      // STUDENT'S OWN IDEA
      // =====================================================

      if (idea.trim()) {
        suggestions = suggestions.map((project) => ({
          ...project,
          description:
            project.description +
            ` Your idea "${idea.trim()}" can be incorporated as an additional feature or customized according to your requirements.`,
        }));
      }

      // =====================================================
      // ADD COMMON INFORMATION
      // =====================================================

      suggestions = suggestions.map((project) => ({
        ...project,
        difficulty: level,
        projectType: projectType,
      }));

      setResults(suggestions);
      setLoading(false);
    }, 1000);
  };

  // =========================
  // SHOW MORE PROJECTS
  // =========================

  const showMoreProjects = () => {
    setVisibleCount((previousCount) => previousCount + 3);
  };

  // =========================
  // RESET
  // =========================

  const resetBot = () => {
    setStream("");
    setLevel("");
    setTechnology("");
    setProjectType("");
    setIdea("");
    setResults([]);
    setVisibleCount(5);
    setLoading(false);
  };

  // =========================
  // UI
  // =========================

  return (
    <div className="min-h-screen bg-[#050505] text-white p-5 sm:p-8 lg:p-10">

      {/* BACK BUTTON */}

      <button
        type="button"
        onClick={() => navigate("/projects")}
        className="mb-8 text-orange-400 hover:text-orange-300 transition"
      >
        ← Back to Projects
      </button>

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-10">

          <div className="text-5xl mb-4">
            🤖
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            AI Project Bot
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Find personalized project ideas based on your stream,
            skills, interests and project requirements.
          </p>

        </div>

        {/* FORM */}

        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8">

          <h2 className="text-2xl font-bold mb-2">
            Tell me about your project
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Select your preferences and let the AI Project Bot
            suggest relevant project ideas.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            {/* STREAM */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Stream
              </label>

              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Stream</option>
                <option>AI & Data Science</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>Mechanical</option>
                <option>Civil</option>
              </select>
            </div>

            {/* LEVEL */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Project Level
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* TECHNOLOGY */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Preferred Technology
              </label>

              <select
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Technology</option>
                <option>Python</option>
                <option>Machine Learning</option>
                <option>Web Development</option>
                <option>React</option>
                <option>Data Science</option>
                <option>IoT</option>
              </select>
            </div>

            {/* PROJECT TYPE */}

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Project Type
              </label>

              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500/50"
              >
                <option value="">Select Project Type</option>
                <option>Mini Project</option>
                <option>College Project</option>
                <option>Final Year Project</option>
                <option>Resume Project</option>
                <option>Hackathon Project</option>
              </select>
            </div>

          </div>

          {/* OWN IDEA */}

          <div className="mt-5">

            <label className="block text-sm text-gray-400 mb-2">
              Do you already have an idea?{" "}
              <span className="text-gray-600">
                (Optional)
              </span>
            </label>

            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Example: I want to build something that helps college students with attendance..."
              rows="4"
              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-orange-500/50"
            />

          </div>

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row gap-3 mt-6">

            <button
              type="button"
              onClick={generateProject}
              disabled={loading}
              className="flex-1 bg-orange-500 text-black font-semibold py-3 rounded-xl hover:bg-orange-400 transition disabled:opacity-50"
            >
              {loading
                ? "🤖 Generating..."
                : "✨ Generate AI Projects"}
            </button>

            <button
              type="button"
              onClick={resetBot}
              className="px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              Reset
            </button>

          </div>

        </div>

        {/* =====================================================
            PROJECT SUGGESTIONS
        ===================================================== */}

        {results.length > 0 && (

          <div className="mt-8">

            {/* RESULT HEADER */}

            <div className="mb-6">

              <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
                AI Project Suggestions
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                Projects you can build 🚀
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Here are some project ideas based on your selected
                stream, technology, level and requirements.
              </p>

            </div>

            {/* PROJECT LIST */}

            <div className="space-y-5">

              {results
                .slice(0, visibleCount)
                .map((project, index) => (

                  <div
                    key={`${project.title}-${index}`}
                    className="bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-purple-500/10 border border-orange-500/20 rounded-3xl p-6 sm:p-8"
                  >

                    {/* PROJECT HEADER */}

                    <div className="flex items-start gap-4">

                      <div className="text-4xl">
                        💡
                      </div>

                      <div className="flex-1">

                        <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                          Project Suggestion {index + 1}
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                          {project.title}
                        </h2>

                      </div>

                    </div>

                    {/* DESCRIPTION */}

                    <div className="mt-6">

                      <h3 className="font-semibold text-lg">
                        📌 Project Idea
                      </h3>

                      <p className="text-gray-400 mt-2 leading-relaxed">
                        {project.description}
                      </p>

                    </div>

                    {/* FEATURES */}

                    <div className="mt-6">

                      <h3 className="font-semibold text-lg">
                        🚀 Key Features
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-3 mt-3">

                        {project.features.map(
                          (feature, featureIndex) => (

                            <div
                              key={featureIndex}
                              className="bg-black/20 border border-white/5 rounded-xl px-4 py-3 text-gray-300"
                            >
                              ✓ {feature}
                            </div>

                          )
                        )}

                      </div>

                    </div>

                    {/* TECHNOLOGIES */}

                    <div className="mt-6">

                      <h3 className="font-semibold text-lg">
                        🛠 Technologies
                      </h3>

                      <p className="text-orange-400 mt-2">
                        {project.technologies}
                      </p>

                    </div>

                    {/* TAGS */}

                    <div className="mt-6 flex flex-wrap gap-2">

                      <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">
                        Level: {project.difficulty}
                      </span>

                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
                        {project.projectType}
                      </span>

                    </div>

                  </div>

                ))}

            </div>

            {/* MORE PROJECTS BUTTON */}

            {visibleCount < results.length && (

              <div className="flex justify-center mt-8">

                <button
                  type="button"
                  onClick={showMoreProjects}
                  className="px-8 py-3 rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 font-semibold hover:bg-orange-500/20 hover:border-orange-500/50 transition"
                >
                  ✨ More Projects
                </button>

              </div>

            )}

            {/* ALL PROJECTS SHOWN */}

            {visibleCount >= results.length && results.length > 5 && (

              <div className="text-center mt-8">

                <p className="text-gray-500 text-sm">
                  🎉 You have explored all {results.length} project ideas.
                </p>

              </div>

            )}

            {/* NEXT STEP */}

            <div className="mt-8 p-5 rounded-2xl bg-black/20 border border-white/5">

              <h3 className="font-semibold">
                💬 What's next?
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Choose the project idea that matches your interests
                and requirements. You can then customize the features
                and build it as your own project.
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default AIProjectBot;