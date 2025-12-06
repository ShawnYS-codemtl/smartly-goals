import React from "react"
import LetterCard from "./LetterCard"
import { smartInfo } from "../data/smartInfo"


export default function Goals() {
    const [active, setActive] = React.useState(null)
    const [goalSections, setGoalSections] = React.useState({
        S:"",
        M:"",
        A:"",
        R:"",
        T:"",
    })

    function displayForm(letter){
        setActive(letter)
        console.log(letter)
    }

    async function verifySection(currentSection) {
        const messages = [
        { role: "system", content: `
            You are an expert SMART goal evaluator.
            Evaluate one section of a SMART goal at a time, 
            using the other sections as context if they exist.
            Other sections are only for context.
            Provide corrections and suggestions ONLY if needed.
            Keep the feedback short, constructive, and clear.
            Return ONLY a 1-sentence critique, an improved version and a 1-sentence justification.
            Return your response ONLY as a JSON object with this structure:
            {
            "critique":"string",
            "improved": "string",
            "justification": "string"
            }

            SMART criteria:

            - S (Specific): Define exactly what you want to accomplish. Be clear about the outcome, who’s involved, and what needs to happen.
            - M (Measurable): Explain how you’ll track progress and know when the goal is achieved. Include numbers, checkpoints, or clear indicators.
            - A (Achievable): Describe how the goal is realistic based on your resources, skills, time, and current situation. Show why this goal is possible and outline what steps or capabilities make it attainable.
            - R (Relevant): Clarify why this goal matters to you. Connect it to your values, priorities, or long-term objectives. This section should answer: Why is this worth pursuing right now?
            - T (Time-bound): Set a deadline or timeframe that creates urgency and structure. Specify when you will complete the goal and any key milestones along the way.

            Focus your feedback on the section marked as [TARGET]. Other sections are only for context.
            `
        }]

        Object.entries(goalSections).forEach(([letter, text]) => {
            if (text && letter !== currentSection) {
            messages.push({ role: "user", content: `Section ${letter}: "${text}"` });
            }
        })

        messages.push({
            role: "user",
            content: `Section ${currentSection}: [TARGET]: "${goalSections[currentSection]}"`
        })

        const res = await fetch("/api/verifySmart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({messages}),
        });

        const data = await res.json()
        return data
    }

    const smartEls = smartInfo.map((category) => {
        return <LetterCard 
            key={category.letter}
            letter={category.letter}
            adjective={category.adjective}
            icon={category.icon}
            desc={category.desc}
            example={category.example}
            color={category.color}
            displayForm={displayForm}
            active={active}
            value={goalSections[category.letter]}
            setValue={(newText) => setGoalSections(prev => ({...prev, [category.letter]: newText}))}
            verifySection={verifySection}
        />
    })
    
    return <div className="letters-row">
        {smartEls}
        
    </div>
}

