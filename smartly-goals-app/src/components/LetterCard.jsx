import React from "react"

export default function LetterCard(props){
    
    const [inputOpen, setInputOpen] = React.useState(false)
    const [text, setText] = React.useState('')
    const [aiFeedback, setAiFeedback] = React.useState('')
    const textareaRef = React.useRef(null);

    const styles = {
        backgroundColor: props.color
    } 

    React.useEffect(() => {
    if (inputOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
    }, [inputOpen]);

    function toggleInput(){
        setInputOpen(prev => !prev)
    }

    function handleChange(event){
        setText(event.target.value)
        props.setValue(event.target.value)
    }

    async function handleVerify(e) {
        e.stopPropagation()
        e.preventDefault()

        const result = await props.verifySection(props.letter);
        setAiFeedback(result);
    }

    return (
        <div 
            className="letter-container" 
            style={styles} 
            onClick={() => {
            toggleInput()
            props.displayForm(props.letter)
            }}
        >
            <h1 className="primary letter">{props.letter}</h1>
            <i className={`fa-solid letter-icon ${props.icon}`}></i>
            <h2>{props.adjective}</h2>
            <p className="desc">{props.desc}</p>
            {(!text || text === "" ) && <p className="example">Example: "{props.example}"</p>}

            {props.active === props.letter && inputOpen && 
            (
            <form onClick={(e) => e.stopPropagation()} onSubmit={handleVerify}>
                <textarea 
                    onClick={(e) => e.stopPropagation()} 
                    ref={textareaRef} 
                    name="goal" 
                    id="goal"
                    placeholder="Write your goal here."
                    value={props.value}
                    onChange={handleChange}
                    required
                    ></textarea>
                <button type="submit"> Verify</button>
            </form>
            )} 

            {!inputOpen && text && (
                <div className="input-goal-container">
                    <strong>My Goal:</strong>
                    <p className="input-goal">{text}</p>
                </div>
            )}

            {aiFeedback && (
                <div className="ai-feedback">
                    <strong>AI Suggestion:</strong>
                    <p>{aiFeedback}</p>
                </div>
            )}
        </div>
    
    )
}