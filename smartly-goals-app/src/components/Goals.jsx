import React from "react"
import LetterCard from "./LetterCard"
import { smartInfo } from "../data/smartInfo"


export default function Goals() {
    const [active, setActive] = React.useState(null)

    function displayForm(letter){
        setActive(letter)
        console.log(letter)
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
        />
    })
    
    return <div className="letters-row">
        {smartEls}
        
    </div>
}

