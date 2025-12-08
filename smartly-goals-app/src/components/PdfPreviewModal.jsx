import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../styles/pdfPreview.css";

const SMART_DESCRIPTIONS = {
  S: "Define exactly what you want to accomplish and what needs to happen.",
  M: "Explain how you’ll track progress using clear numbers or indicators.",
  A: "Show why the goal is realistic based on your skills, resources, and situation.",
  R: "Clarify why this goal matters and how it connects to your priorities.",
  T: "Set a clear deadline or timeframe to create structure and urgency.",
};

const SMART_ICONS = {
  S: "fa-bullseye",
  M: "fa-chart-column",
  A: "fa-medal",
  R: "fa-circle-nodes",
  T: "fa-clock",
};

export default function PdfPreview({ goalData, onClose }) {
  const pdfRef = React.useRef(null);

  if (!goalData) return null;

  const handleDownload = async () => {
    const element = pdfRef.current;

    // Capture the element using html2canvas
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    // Create a jsPDF instance
    const pdf = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculate height to maintain aspect ratio
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, "PNG", 0, position, pageWidth, pdfHeight);
    heightLeft -= pageHeight;

    // Add more pages if content is taller than one page
    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pageWidth, pdfHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("SmartGoal.pdf");
  };

  return (
    <div className="pdf-overlay">
      <div className="pdf-container" ref={pdfRef}>
        <h2 className="pdf-title">SMART Goal Summary</h2>

        <div className="pdf-rows">
          {["S", "M", "A", "R", "T"].map((letter) => (
            <div className={`pdf-row pdf-${letter}`} key={letter}>
              {/* Letter */}
              <div className="pdf-letter primary">{letter}</div>

              {/* Icon */}
              <div className="pdf-icon">
                <i className={`fa-solid ${SMART_ICONS[letter]}`}></i>
              </div>

              {/* Description + Goal */}
              <div className="pdf-content">
                <div className="pdf-description">{SMART_DESCRIPTIONS[letter]}</div>
                <div className="pdf-goal">{goalData[letter]}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pdf-buttons">
          <button className="pdf-btn pdf-close" onClick={onClose}>
            Close
          </button>

          <button className="pdf-btn pdf-export" onClick={handleDownload}>
            Export as PDF
          </button>
        </div>
      </div>
    </div>
  );
}

