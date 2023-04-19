import numberWithDots from "./numberWithDots";

const getPriceText = (min, max) => {
    if (!min && !max) return '';
    if (!min) {
        if (max === 1999999) return 'Dưới 2 triệu';
        return `0 - ${max}`
    }
    if (!max) {
        if (min === 10000001) return 'Trên 10 triệu';
        return `Trên ${min}`
    }
    return `${numberWithDots(min)} - ${numberWithDots(max)}`;
}

export default getPriceText;