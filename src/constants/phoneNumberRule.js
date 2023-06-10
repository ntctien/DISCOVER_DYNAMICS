const phoneNumberRule = {
    validator: (_, value) => {
        if (!value || value.length === 10 || value.length === 11 ) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
    message: "Số điện thoại không hợp lệ",
}

export default phoneNumberRule;