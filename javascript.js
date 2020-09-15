
// Date displayed, source: Flame Trap on Stack Overflow

document.querySelector("#currentDay").innerHTML = dateDisplay();

function dateDisplay() {
    let date = new Date(),
        months = ["January", "February", "March", "April", "May", "June", "July ", "August", "September", "October", "November", "December"],
        days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];
    return days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()

}

// let dayPlanner = [

//     {
//         id: "0",
//         hour: "06",
//         time: "06",
//         meridiem: "am",
//         reminder: ""
//     }

// ]