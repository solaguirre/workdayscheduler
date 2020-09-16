
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


// for loop for timeArray

for (let i = 0; i < timeArray.length; i++) {

    let time = timeArray[i];

    let timeSlot = $('<div>').addClass('row text-align-center');
    let hourElement = $("<div>").addClass("time-block col text-center");
    hourElement.text(time);
    timeSlot.append(hourElement);

    let inputElement = $("<div>").addClass("col-lg-6 col text-center");
    let inputArea = $("<textarea>");
    $(this).attr('cols', "50")
    inputArea.attr('id', time);
    inputElement.append(inputArea);
    timeSlot.append(inputElement);

    // WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
    let textInput = localStorage.getItem(time);
    inputArea.val(textInput);

    let saveElement = $("<div>").addClass('col-lg-3 col text-center align-items-center');
    let saveBtn = $('<button>').addClass('saveBtn');
    saveBtn.attr("date-time", time);
    saveBtn.text('save');
    saveElement.append(saveBtn);
    timeSlot.append(saveElement);
    $(".container").append(timeSlot);

    // localStorage
    $(".saveBtn").on("click", function () {
        localStorage.setItem(time, inputArea.val());
    }
    )
};
