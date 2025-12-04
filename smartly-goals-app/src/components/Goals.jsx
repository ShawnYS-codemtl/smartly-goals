import LetterCard from "./LetterCard"
import { smartInfo } from "../data/smartInfo"


export default function Goals() {
    const smartEls = smartInfo.map((category) => {
        return <LetterCard 
            letter={category.letter}
            adjective={category.adjective}
            icon={category.icon}
            desc={category.desc}
            example={category.example}
            color={category.color}
        />
    })
    
    return <div className="letters-row">
        {smartEls}
        
    </div>
}

