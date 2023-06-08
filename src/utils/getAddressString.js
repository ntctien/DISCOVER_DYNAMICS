const getAddressString = (address, province, district, ward) => {
    return address +
        ", " +
        (ward ? ward.substring(ward.indexOf("_") + 1) : '') +
        ", " +
        (district ? district.substring(district.indexOf("_") + 1) : '') +
        ", " +
        (province ? province?.substring(province?.indexOf("_") + 1) : '')
}

export default getAddressString;