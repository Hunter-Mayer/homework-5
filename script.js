//Global Variables, set current time
var currentTime = document.getElementById('currentDay')
var time = moment().format('MMMM Do YYYY, h:mm:ss a')
currentTime.innerText = time
var saveBtnEl = $('.saveBtn')
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

//Saves the input on the time row it was saved at
saveBtnEl.on("click", function(){
    var saveText = $(this).siblings('input').val()
    var saveTime = $(this).siblings('input').attr('id')
    localStorage.setItem(saveTime, saveText)
})

//Local storage
$("#" + 9).val(localStorage.getItem(9))
$("#" + 10).val(localStorage.getItem(10))
$("#" + 11).val(localStorage.getItem(11))
$("#" + 12).val(localStorage.getItem(12))
$("#" + 13).val(localStorage.getItem(13))
$("#" + 14).val(localStorage.getItem(14))
$("#" + 15).val(localStorage.getItem(15))
$("#" + 16).val(localStorage.getItem(16))
$("#" + 17).val(localStorage.getItem(17))
