export default function LetterCard(props){

    const styles = {
        backgroundColor: props.color
    } 

    return <div className="letter-container" style={styles}>
            <h1 className="primary letter">{props.letter}</h1>
            <i className={`fa-solid letter-icon ${props.icon}`}></i>
            <h2>{props.adjective}</h2>
            <p className="desc">{props.desc}</p>
            <p className="example">"{props.example}"</p>
        </div>
}