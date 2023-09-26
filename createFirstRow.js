export function createFirstRow() {
let tHead = document.getElementById("firstRow")
    tHead.innerHTML = ""
    let weekdays = ['Mon', "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
    weekdays.forEach(day => {
        let thD = document.createElement('th')
        thD.innerHTML = day;
        tHead.append(thD)
    });
}