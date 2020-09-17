# workdayscheduler

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


The purpose of this assignment is to create a worday scheduler that stores input data into local storage, and the changes are saved when the page is refreshed. 

## Acceptance Criteria

The following are the acceptance criteria for this assignment. 

* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with timeblocks for standard business hours
* WHEN I view the timeblocks for that day
* THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* WHEN I click into a timeblock
* THEN I can enter an event
* WHEN I click the save button for that timeblock
* THEN the text for that event is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist


## Date Display

Date is displayed by declaring time Element and setting it equal to the moment format for time: 

```let timeElement= moment().format("dddd, MMMM Do YYYY, h:mm:ss a");```

Then timeElement is appended to the ```<p>``` with id ```'currentDay'```

The Display is as follows:
[![Screen-Shot-2020-09-16-at-9-31-37-PM.png](https://i.postimg.cc/LsQmqy4y/Screen-Shot-2020-09-16-at-9-31-37-PM.png)](https://postimg.cc/Y4F5ZzWg)

## Elements created with `jQuery` 
The following elements were created and appended using jquery.

First elements were created using ```jQuery $("<element>")```

Creating an Element
* ```let div = $("<div>");```
* ```let img = $("<img src='...'>");```

Div for rows ```$("<div>")```
Save Button ```$("<button>)```
Scheduler input ```$("<textarea>)```

The code for the ```<div>``` element was placed in a forloop so there would be one for each string in the ```timeArray.```

Used ```attr()``` and ```addClass()``` to add attributes to created elements and to add class to them. The class or attribute helps to give selectors for ```jQuery```.


## Scheduler looks like this 

[![Screen-Shot-2020-09-16-at-9-34-23-PM.png](https://i.postimg.cc/05phFWgL/Screen-Shot-2020-09-16-at-9-34-23-PM.png)](https://postimg.cc/XXY2ygY8)