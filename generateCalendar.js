import { createFirstRow } from './createFirstRow.js' 
export function generateCalendar() {
    createFirstRow()
    
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    let date = new Date(year, month - 1, 1);
    let nextMonth = month === 12 ? 1 : month;
    let nextYear = month === 12 ? year + 1 : year;
    let nextDate = new Date(nextYear, nextMonth, 1);

    document.getElementById("calendar-body").innerHTML = "";
    
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        let cell = document.createElement("td");
        if ((i === 0 && j < date.getDay()-1)  || (i === 0 && j < 6 && date.getDay() === 0)) {
          // предыдущий месяц
          let prevMonth = month === 1 ? 12 : month - 1;
          let prevYear = month === 1 ? year - 1 : year;
          let prevMonthDays = new Date(prevYear, prevMonth, 0).getDate();
          let day
          if (date.getDay() === 0){
            day = prevMonthDays - 7 + j + 2;
          } else {
             day = prevMonthDays - date.getDay() + j + 2;}
          let textNode = document.createTextNode(day);
          cell.classList.add("prev-month");
          cell.appendChild(textNode);
        } else if (date.getMonth() === month - 1) {
          // текущий месяц
          let day = date.getDate();
          let textNode = document.createTextNode(day);
        //   if (date.getDay() === 0 || date.getDay() === 6) {
        //     cell.classList.add("weekend");
        //   }
          cell.appendChild(textNode);

          if (day === new Date().getDate() && month === (new Date().getMonth() + 1) && year === new Date().getFullYear()) {
            cell.classList.add("current-day");
          }

          date.setDate(day + 1);
        } else {
            //следующий месяц
          let day = nextDate.getDate()
          let textNode = document.createTextNode(day);
          cell.classList.add("next-month");
          cell.appendChild(textNode);
          nextDate.setDate(day + 1);
        }
        if (j === 5 || j === 6) {
            cell.classList.add("weekend");
          }
        row.appendChild(cell);
      }
      document.getElementById("calendar-body").appendChild(row);
    }
  }