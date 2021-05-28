exports.getSeason = (month) => {
    let season = null
    if(month === 'January') season = 'Winter'
    if(month === 'February') season = 'Winter'
    if(month === 'March') season = 'Spring'
    if(month === 'April') season = 'Spring'
    if(month === 'May') season = 'Spring'
    if(month === 'June') season = 'Summer'
    if(month === 'July') season = 'Summer'
    if(month === 'August') season = 'Summer'
    if(month === 'September') season = 'Fall'
    if(month === 'October') season = 'Fall'
    if(month === 'November') season = 'Fall'
    if(month === 'December') season = 'Winter'

    return season
}