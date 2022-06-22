import timediff from "timediff"

//finds the 'time ago' with the timediff package
export const findTime = (str) => {

    //timediff returns an object with year, month, week, day, hour, and ms from input time
    let now = new Date()
    let td = timediff(str, now, 'YMWDHm')
    let keys = Object.keys(td)
    let values = Object.values(td)
    
    //if the reply was just submitted, all timediff values will come back as 0
    //ie "there's been 0 time passed since this comment was submitted"
    //falls back to a return of "Just now"
    let newCommentCheck = values.filter((v) => v !== 0)

    if (newCommentCheck.length === 0) {
        return 'Just now'
    }

    let index = 0

    //checked which of the above units of time were non-zero first as they come in order
    //returned this to an index to determine which is first
    keys.forEach((k,i) => {
        if (index > 0) { return }
        
        if (td[k] > 0) {
            index = i
            return 
        }
    })

    //index is then used to get key and value pairs (ie { months: 1 } or 1 month ago)
    let key = `${keys[index]}`
    let value = values[index]

    //if the actual value of time ago is 1, change the word to singular
    //ie months to month or weeks to week
    if (value === 1) { key = key.slice(0, -1) }
    
    return `${value} ${key} ago`
}