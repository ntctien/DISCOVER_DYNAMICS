const getDividedLines = (str, className) => {
    if (str)
        return str.split("\\n").map((line, i) => (
            <p key={i} className={className}>{line}</p>
        ))

}

export default getDividedLines