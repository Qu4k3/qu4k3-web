$(document).ready(function () {
    getSeconds();
});

var curday;
var secTime;
var ticker;
var semanas = ["primera", "segunda", "tercera", "cuarta", "quinta", "sexta", "septima", "octava", "novena"];

var d = new Date();
var semM = d.getMonth();
var semD = d.getDate();


if (semM == 9 && semD >= 8 && semD < 15) {
    document.getElementsByClassName("week")[0].innerHTML = semanas[1];
    document.getElementsByClassName("week")[1].innerHTML = semanas[1];
}
if (semM == 9 && semD >= 15 && semD < 22) {
    document.getElementsByClassName("week")[0].innerHTML = semanas[2];
    document.getElementsByClassName("week")[1].innerHTML = semanas[2];
}
if (semM == 9 && semD >= 22 && semD < 29) {
    document.getElementsByClassName("week")[0].innerHTML = semanas[3];
    document.getElementsByClassName("week")[1].innerHTML = semanas[3];
}
if ((semM == 9 && semD >= 29) || (semM == 10 && semD < 5)) {
    document.getElementsByClassName("week")[0].innerHTML = semanas[4];
    document.getElementsByClassName("week")[1].innerHTML = semanas[4];
}
if (semM == 10 && semD >= 5 && semD < 12) {
    document.getElementsByClassName("week")[0].innerHTML = semanas[5];
    document.getElementsByClassName("week")[1].innerHTML = semanas[5];
}
if (semM == 10 && semD >= 12 && semD < 19) {
    document.getElementsByClassName("week")[0].innerHTML = semanas[6];
    document.getElementsByClassName("week")[1].innerHTML = semanas[6];
}
if (semM == 10 && semD >= 19 && semD < 26) {
    document.getElementsByClassName("week")[0].innerHTML = semanas[7];
    document.getElementsByClassName("week")[1].innerHTML = semanas[7];
}

function getSeconds() {
    var nowDate = new Date();
    var dy = 0; //Sunday through Saturday, 0 to 6
    var countertime = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 24, 0, 0); //20 out of 24 hours = 8pm

    var curtime = nowDate.getTime(); //current time
    var atime = countertime.getTime(); //countdown time
    var diff = parseInt((atime - curtime) / 1000);
    if (diff > 0) { curday = dy - nowDate.getDay() }
    else { curday = dy - nowDate.getDay() - 1 } //after countdown time
    if (curday < 0) { curday += 7; } //already after countdown time, switch to next week
    if (diff <= 0) { diff += (86400 * 7) }
    startTimer(diff);
}

function startTimer(secs) {
    secTime = parseInt(secs);
    ticker = setInterval("tick()", 1000);
    tick(); //initial count display
}

function tick() {
    var secs = secTime;
    if (secs > 0) {
        secTime--;
    }
    else {
        clearInterval(ticker);
        getSeconds(); //start over
    }

    var days = Math.floor(secs / 86400);
    secs %= 86400;
    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;

    //update the time display
    document.getElementsByClassName("days")[0].innerHTML = curday;
    document.getElementsByClassName("hours")[0].innerHTML = ((hours < 10) ? "0" : "") + hours;
    document.getElementsByClassName("minutes")[0].innerHTML = ((mins < 10) ? "0" : "") + mins;
    document.getElementsByClassName("seconds")[0].innerHTML = ((secs < 10) ? "0" : "") + secs;
    document.getElementsByClassName("days")[1].innerHTML = curday;
    document.getElementsByClassName("hours")[1].innerHTML = ((hours < 10) ? "0" : "") + hours;
    document.getElementsByClassName("minutes")[1].innerHTML = ((mins < 10) ? "0" : "") + mins;
    document.getElementsByClassName("seconds")[1].innerHTML = ((secs < 10) ? "0" : "") + secs;
}