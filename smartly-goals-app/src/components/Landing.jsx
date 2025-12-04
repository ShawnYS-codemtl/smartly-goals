import Footer from "./Footer"

export default function Landing(props){
    return (
    <>
    <div className="hero">
        <div className="left-hero">
        <h2>Create Clear, Actionable <span className="primary">SMART</span> Goals — Powered by AI</h2>
        <p> Struggling to stay consistent with your goals? You’re not alone. SmartlyGoals helps you turn vague intentions into structured, achievable SMART goals using intelligent guidance every step of the way.</p>
        </div>
        <div className="right-hero">
        <button onClick={() => props.onClick('goals')}>Get started <i className="fa-solid fa-arrow-right"></i> </button>
        </div>
    </div>
    <div className="breakdown">
        <h2>How It Works</h2>
        <h3> <span>1.</span> Break your goal into simple steps</h3>
        <p>
        Fill in each part of the SMART framework — Specific, Measurable, Achievable, Relevant, and Time-Bound.
        Our clean, guided interface helps you focus on one piece at a time so you never feel overwhelmed.
        </p>
        <h3> <span>2.</span> Let AI evaluate the quality of your goal</h3>
        <p>
        Once you complete a section, it’s automatically sent to our AI for a quick effectiveness check.
        You’ll get instant feedback on clarity, feasibility, and alignment with SMART criteria — along with suggested improvements.
        </p>
        <h3><span>3.</span> Refine and perfect your goal</h3>
        <p>
        Review the AI’s edits, make changes as needed, and re-evaluate until everything feels right.
        This iterative process helps you transform rough ideas into polished, actionable goals.
        </p>
        <h3><span>4.</span> Generate a beautifully formatted SMART Goal</h3>
        <p>When you’re satisfied, your finalized goal is compiled into a clean, professional layout.</p>
        <h3> <span>5.</span> Export as PDF</h3>
        <p>Download your SMART goal as a print-ready PDF — perfect for planners, accountability partners, coaching, work documentation, or personal tracking.</p>
    </div>
    </>)
}