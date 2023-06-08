import dayjs from "dayjs";

const timeStampToString = (timeStamp) => {
    return dayjs(timeStamp.toDate()).format("DD/MM/YYYY")
}

export default timeStampToString;