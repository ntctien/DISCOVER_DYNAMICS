const removeAccents = (str) => {
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export default removeAccents;