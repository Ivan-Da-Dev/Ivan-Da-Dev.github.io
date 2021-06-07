exports.toProperCase = (string) => {
    let newStr = []

    for(const str of string.split(" ")){
        newStr.push(`${str.substring(0,1).toUpperCase()}${str.slice(1)}`)
    }

    return newStr.join(" ")
}