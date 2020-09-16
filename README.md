# workdayscheduler
## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Date Display

Date is displayed by declaring time Element and setting it equal to the moment format for time: 

let timeElement= moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

Then timeElement is appended to the <p> with id 'currentDay'

## Elements created with jQuery 
The following elements were created and appended using jquery.
$("<div>")
$("<section>")
$("<button>)
$("<textarea>)

### for loop 

### local storage