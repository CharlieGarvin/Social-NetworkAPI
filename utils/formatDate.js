const dayjs = require('dayjs')

module.exports = (timestamp) => {
const formattedDate = dayjs(timestamp).format('MMMM D, YYYY h:mm A')    
    console.log(formattedDate);
    return formattedDate
}