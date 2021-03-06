# Workday Scheduler
<p align="center">
<i class="fas fa-globe-americas"></i>

  <h3 align="center"><strong>Daily Planner App - Workday Scheduler</strong></h3>

  <p align="center">
    Check your the current temperature anywhere and save your results. 
    <br />
    <br />
    <a href="https://github.com/solaguirre/workdayscheduler/"><strong>View Demo »</strong></a>
    <br />
    <br />
   
  </p>
</p>

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## About The Project

The purpose of this assignment is to create a worday scheduler that stores input data into local storage, and the changes are saved when the page is refreshed. The idea is to facilitate your daily planning allowing you to view your tasks and appointments for the day. 

## Created With

* HTML
* JavaScript
* jQuery
* CSS

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

## Date:

[![Screen-Shot-2020-10-07-at-9-01-09-PM.png](https://i.postimg.cc/B6NdKXkg/Screen-Shot-2020-10-07-at-9-01-09-PM.png)](https://postimg.cc/dkkHMtqk)

## Colors correspond to future, current and past events

[![Screen-Shot-2020-10-07-at-9-01-09-PM.png](https://i.postimg.cc/B6NdKXkg/Screen-Shot-2020-10-07-at-9-01-09-PM.png)](https://postimg.cc/dkkHMtqk)


## Contact Me
### Marisol Aguirre

* [Junior Full Stack Developer - UA Coding Bootcamp](#updated-portfolio)
* [GitHub Profile: solaguirre](https://github.com/solaguirre)
* [E-mail:soulaguirre@gmail.com](soulaguirre@gmail.com)
* [Daily Planner Project link](https://solaguirre.github.io/workdayscheduler/)