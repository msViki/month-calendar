export function createFirstRow() {
let tHead = document.getElementById("firstRow")
    tHead.innerHTML = ""
    let weekdays = ['Mon', "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
    weekdays.forEach((day, index) => {
        let thD = document.createElement('th')
        thD.innerHTML = day;
        tHead.append(thD)
        if (index === 5 || index === 6) {
            thD.classList.add("weekend");
          }
    });
}