let ampm = document.getElementById('ampm')
function displayDateAndTime(){
    let time = new Date()
    let date = time.toDateString()
    document.getElementById('date').innerHTML = date
    let hrs = time.getHours()
    let mins = addZero(time.getMinutes())
    let secs = addZero(time.getSeconds())
    if(hrs>=12){
        hrs = hrs-12
        ampm.innerHTML = "PM"
    }
    else{
        ampm.innerHTML = "AM"
    }
    document.getElementById('hours').innerHTML = addZero(hrs)
    document.getElementById('minutes').innerHTML = mins
    document.getElementById('seconds').innerHTML = secs
}
function addZero(num){
    if(num<10){
        num = "0"+num
    }
    return num
}
setInterval(displayDateAndTime,1000)