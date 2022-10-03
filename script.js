//Global Variables, set current time
var currentTime = document.getElementById('currentDay')
var time = moment().format('MMMM Do YYYY, h:mm:ss a')
currentTime.innerText = time
var saveBtnEl = document.querySelectorAll('saveBtn')
