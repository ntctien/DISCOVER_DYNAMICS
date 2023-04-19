const hasAccent = (str) => {
    return /[àáâäãåèéêëìíîïòóôöõøùúûüđ]/.test(str);
}

export default hasAccent;