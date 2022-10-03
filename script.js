//Global Variables, set current time
var currentTime = document.getElementById('currentDay')
var time = moment().format('MMMM Do YYYY, h:mm:ss a')
currentTime.innerText = time
var saveBtnEl = document.querySelectorAll('saveBtn')
var text = $(".text-area")

//Sets colors of time block for present, future, past times
text.each(function(){
    var rows=$(this).attr('id')
    var currentTime = moment().hour()
        if (rows < currentTime){
            $(this).addClass("past")
        } else if (rows > currentTime){
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
})
    

