// current date and time
var a = new Date();
console.log(a);

//current month
var a = new Date();
var b = a.getMonth();
monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
b = monthNames[b];
alert(b);

//day
var a = new Date();
var b = a.getDay();
dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//var c = dayNames.splice(0, 3);
b = dayNames[b];
alert("Today is " + b);

//funday or working day?
var a = new Date();
var b = a.getDay();
dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
b = dayNames[b];
if (b == "Saturday" || b == "Sunday") {
    alert("Its Fun day");
} else {
    alert("Its Working day");
}

//1st 15 days or last days of the month
var a = new Date();
var b = a.getDate();
if (b < 16) {
    alert("First fifteen days of the month");
} else if (b > 16) {
    alert("Last days of the month");
}

//determining milliseconds and minutes
var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff / (1000 * 60 * 60);
var accurateMin = diffMin;


document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin);

//am or pm
var b = a.getTime();
console.log(b);
var min = a.getMinutes();
var hour = a.getHours();
var prepend = hour >= 12 ? "PM" : "AM";
if (hour >= 12 && hour <= 17) {
    console.log("Its PM");
} else if (hour >= 17 && hour <= 20) {
    console.log("Its PM");
} else if (hour >= 20 || hour <= 6) {
    console.log("Its PM");
} else {
    console.log("Its AM");
}

console.log("Current Time: " + hour + ":" + min + ":" + prepend);

//last day and month of 2020
//var a = new Date();
laterDate = new Date(2020, 11, 31, 00, 00, 00, 3);
document.write("Later date: " + laterDate);

//1sT Ramadan till now
var a = new Date("2022-07-13");
var b = new Date("2015-06-18");
var c = Math.floor((a - b) / (1000 * 60 * 60 * 24));
document.write(c + " days have passed since 1sr Ramadan, 2015");

//seconds
var a = new Date(0);
var b = new Date();
var dif = Math.floor((b.getTime() - a.getTime()) / 1000);
document.write(dif + " seconds had passed since beginning of 1970");

//date object an hour ahead
var a = new Date();
console.log(a);
var b = a.getDate() + 1;
console.log(b);

//birth year
var a = new Date();
var d = a.getFullYear();
var b = prompt("Enter your Age");
var e = d - b;
document.write("Your age is " + b);
document.write("<br/>Your birth year is " + e);

//K-E Bill
cname = "<b>ABC Customer</b>";
month = "<b>February</b>";
units = 410;
cperunit = 16;
netAmount = units * cperunit;
surcharge = 350;
grossAmount = netAmount + surcharge;
document.write("<h2>K-Electric Bill</h2>");
document.write("<br/>Customer Name: " + cname);
document.write("<br/>Month: " + month);
document.write("<br/>Number of units: " + units);
document.write("<br/>Charges per units: " + cperunit + "<br/>");
document.write("<br/>Net Amount Payable (within Due Date): " + netAmount);
document.write("<br/>Late payment surcharge: " + surcharge);
document.write("<br/>Gross Amount Payable (after Due Date): " + grossAmount);

//date reset 100 yrs back
var a = new Date();
console.log(a);
var b = a.getDate() - 100;
console.log(b);