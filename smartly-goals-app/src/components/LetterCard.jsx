import React from "react"
export default function LetterCard(props){
    
    const [inputOpen, setInputOpen] = React.useState(false)
    const [text, setText] = React.useState('')
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
        const {value, name} = event.currentTarget
        setText(value)
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
            <p className="example">"{props.example}"</p>

            {props.active === props.letter && inputOpen && 
            (
            <form action="">
                <textarea 
                    onClick={(e) => e.stopPropagation()} 
                    ref={textareaRef} 
                    name="" 
                    id=""
                    value={text}
                    onChange={handleChange}
                    ></textarea>
            </form>
            )} 

            {!inputOpen && text && (
                <p className="mt-2 text-gray-700">{text}</p>
            )}
        </div>
    
    )
}