import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsData = [
  "Python",
  "pandas",
  "NumPy",
  "Data Cleaning",
  "Exploratory Data Analysis (EDA)",
  "Data Visualisation",
  "Matplotlib",
  "Seaborn",
  "scikit-learn",
  "Feature Engineering (basic)",
  "Classification & Regression",
  "Model Evaluation",
  "API Data Handling (JSON)",
  "SQL (basic)",
];

const labelsTools = [
  "React.js (basic)",
  "Streamlit (basic)",
  "Jupyter Notebook",
  "LIME (introductory)",
  "Explainable AI (basic)",
  "Git/GitHub",
];

function Expertise() {
  return (
    <div id="expertise">
      <div className="items-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" style={{ alignSelf: "flex-start" }} />
            <h3>Data Analytics & Machine Learning (Student Portfolio)</h3>
            <p>
              I apply Python and SQL to clean datasets, perform exploratory data analysis (EDA),
              and build basic machine learning models through my diploma coursework and portfolio
              projects. I focus on producing clear insights, evaluating models using appropriate
              metrics, and communicating results using visualisations and introductory XAI methods.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
              {labelsData.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" style={{ alignSelf: "flex-start" }} />
            <h3>Project Presentation & Data Apps (Basic)</h3>
            <p>
              For selected projects, I present data outputs through lightweight web or dashboard
              interfaces to make results easier to view and share. I have used React.js and
              Streamlit at a basic level for data presentation, and I am comfortable working with
              APIs and JSON when projects require live or structured data.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {labelsTools.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
