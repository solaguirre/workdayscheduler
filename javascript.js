
// Date: 
// THEN the current day is displayed at the top of the calendar
let container = (".container");
let timeArray = ["9:00 a.m", "10:00 a.m", "11:00 a.m", "12:00 p.m", "1:00 p.m", "2:00 p.m", "3:00 p.m", "4:00 p.m", "5:00 p.m",
];
let timeDisplay = $("#currentDay")

let timeElement = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
timeDisplay.append(timeElement);

// console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// THEN I am presented with timeblocks for standard business hours


