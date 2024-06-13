(function(){
    'use strict';
    const p = document.createElement("p")
    document.querySelector(".action").appendChild(p)

function updateClock(){
    const today = new Date()
    let hour = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    console.log(hour, minutes, seconds)
    if(hour < 10 && minutes <10){
        p.textContent = `0${hour} 0${minutes} `
        } else if(hour <10){
            p.textContent = `0${hour} ${minutes} `
        } else if(minutes <10){
            p.textContent = `${hour} 0${minutes} `
        }else{
            p.textContent = `${hour} ${minutes} `
        }
    // p.textContent = `${hour} ${minutes} `
    
}
setInterval(updateClock,1000)
})()