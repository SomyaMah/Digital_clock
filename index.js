const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getUTCDay()];
document.getElementById("day").innerHTML = day;

var date = new Date();
var current_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
document.getElementById("date").innerHTML = current_date;

// var time=date.getHours()+":"+date.getMinutes()+":"+
// date.getSeconds();
// document.getElementById("time").innerHTML=time;

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" +
        date.getSeconds();
    document.getElementById("time").innerHTML = time;
greet="";
    let hour=date.getHours();
    if(hour<12)
    {
        greet="Good Morning";
        document.getElementById("greet").innerHTML=greet;
    }
    if(hour>12 && hour<16)
    {
        greet="Good Afternoon";
        document.getElementById("greet").innerHTML=greet;
    }
    if(hour>16)
    {
        greet="Good Evening";
        document.getElementById("greet").innerHTML=greet;
    }
}
