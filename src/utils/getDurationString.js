const getDurationString = (dayDuration, nightDuration) => {
    return `${dayDuration ? dayDuration + " ngày " : ""}${nightDuration ? nightDuration + " đêm" : ""
        }`
}

export default getDurationString;