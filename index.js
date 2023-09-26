
import { generateCalendar } from './generateCalendar.js'

let button = document.getElementById("button")
button.addEventListener('click', generateCalendar)
let startMonthNum = new Date().getMonth()+1
let startMonth = document.querySelector(`#month${startMonthNum}`)
startMonth.selected = true;
let startYear = new Date().getFullYear();
document.getElementById("year").value = startYear;
generateCalendar()