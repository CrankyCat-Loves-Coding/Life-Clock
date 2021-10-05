const deg = 6;
const hrhand = document.querySelector('#hr');
const mnHand = document.querySelector('#mn');
const scHand= document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

});

function ShowTime () {
    var strgreeting = "";
    var currenttime = new Date();
    var hh = currenttime.getHours();
    var mm = currenttime.getMinutes();
    var ss = currenttime.getSeconds();

    strclock = hh + ":" + mm + ":" + ss + "";

    if (hh >= 0 && hh < 11) {
        strgreeting = "Good Morning, Sleepyhead!";
    }
    if (hh >= 11 && hh < 17) {
        strgreeting = "Good Afternoon, My love!";
    }
    if (hh >= 17 && hh < 24) {
        strgreeting = "Good Evening, Hope you had a nice day!";
    }

    window.setTimeout("ShowTime()",1000);
    document.getElementById("clock").innerHTML = "+strclock+";
    document.getElementById("greeting").innerText = "+strgreeting+";
}

window.onload = ShowTime;

