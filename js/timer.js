var countDownDate = new Date("Nov 30, 2021 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);

    if(seconds < 10)
        seconds = '0' + seconds;
    
    if(minutes < 10)
        minutes = '0' + minutes;
    
    if(hours < 10)
        hours = '0' + hours;
    
    if(days < 10)
        days = '0' + days;


    document.getElementById("main_timer").innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementsByClassName("main_timer").innerHTML = "DONE";
    }
},1000);