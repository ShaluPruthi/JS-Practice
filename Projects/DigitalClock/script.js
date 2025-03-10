const clock = document.getElementById('clock')

//setInterval helps to control events
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    //update clock
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)