var dailyhours = ["8", "9", "10", "11", "12", "13", "14", "15" ,"16"]
var hourEL = document.querySelectorAll(".hour");
var rowEl = document.querySelector(".row");
var eventEl = document.querySelectorAll("textarea");
var colHour = document.querySelector(".col");
var dateEl = document.querySelector("#currentDay");
var btnEL = document.querySelectorAll(".saveBtn");

//Setup date to display on the page
var date = new Date();
date = moment().format('LL');

//Setup time for daily event

var currentTime = moment().format("H");

 
//Function to get the current date
function getTodayDate() {
    dateEl.textContent = date;
}
getTodayDate();
 
//Function to display the hours and set difference color attribute to the textare dynamically 
function outputHours() {
    for (var j = 0; j< hourEL.length; j++) {
        if (j < dailyhours.length) {
            var hourDisplay= parseInt(dailyhours[j]);
            var amPM =" AM";
            if(hourDisplay>=12){
                if(hourDisplay>12){
                    hourDisplay=hourDisplay-12;
                     
                }
                
                amPM=" PM";
            }
            
            hourEL[j].textContent = hourDisplay + amPM;
            
            if (parseInt(dailyhours[j])>parseInt(currentTime)) {
                
                eventEl[j].setAttribute("class", "future")
                
            } else if (dailyhours[j] === currentTime) {
                eventEl[j].setAttribute("class", "present")
                 
            }else
                eventEl[j].setAttribute("class", "past")
        
        }

    }
    
}
//Call outputHours function
outputHours()
 

//Function to save each even to the local storage. 

function saveEvent() {
   if(eventEl[0].value!=="") {
    localStorage.setItem("9 AM", eventEl[0].value);
   }
   if(eventEl[1].value!=="") {
    localStorage.setItem("10 AM", eventEl[1].value);
   }
   if(eventEl[2].value!=="") {   
    localStorage.setItem("11 AM", eventEl[2].value);
   }
   if(eventEl[3].value!=="") {
    localStorage.setItem("12 PM", eventEl[3].value);
   }
   if(eventEl[4].value!=="") {
    localStorage.setItem("1 PM", eventEl[4].value);
   }
   if(eventEl[5].value!=="") {
    localStorage.setItem("2 PM", eventEl[5].value);
   }
   if(eventEl[6].value!=="") {
    localStorage.setItem("3 PM", eventEl[6].value);
   }
   if(eventEl[7].value!=="") {
    localStorage.setItem("4 PM", eventEl[7].value);
   }
   if(eventEl[8].value!=="") {
    localStorage.setItem("5 PM", eventEl[8].value);
   }
     
} 
 

/**function to render the last saved entry in the local storage into the textarea */

function renderLastItem() {
    
    lastEvent = localStorage.getItem("9 AM");
    eventEl[0].value=lastEvent
    lastEvent = localStorage.getItem("10 AM");
    eventEl[1].value =lastEvent;
    lastEvent = localStorage.getItem("11 AM");
    eventEl[2].value =lastEvent;
    lastEvent = localStorage.getItem("12 PM");
    eventEl[3].value =lastEvent;
    lastEvent = localStorage.getItem("1 PM");
    eventEl[4].value =lastEvent;
    lastEvent = localStorage.getItem("2 PM");
    eventEl[5].value =lastEvent; 
    lastEvent = localStorage.getItem("3 PM");
    eventEl[6].value =lastEvent;
    lastEvent = localStorage.getItem("4 PM");
    eventEl[7].value =lastEvent;
    lastEvent = localStorage.getItem("5 PM");
    eventEl[8].value =lastEvent;

    } 

//call function to render item on the page after refresh
renderLastItem();

var btnEL = document.querySelectorAll(".saveBtn");
// Add an EventListner to save the events into local storage on click
btnEL.forEach(function (event) {
    event.addEventListener("click", saveEvent)
     
});