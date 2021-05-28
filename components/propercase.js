exports.toProperCase = (string) => {
    return string.toLowerCase().replace(/(\b\w)/gi, w => w.toUpperCase())
}