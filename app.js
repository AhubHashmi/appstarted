var a1 = "Error! Please enter a valid password.";
alert(a1);

var a = "Welcome to JS Land...\nHappy Coding!\n";
alert(a);

var b = "Welcome to JS Land...";
alert(b);

var c = "Happy Coding!\nPrevent this page from creating additional dialogues\n";
alert(c);

var d = "Hello... I can run JS through my web browser's console";
alert(d);
console.log(d);

var username;

var myName = "Muhammad Ahub Hashmi";

var message = "Hello World";
alert(message);

var e = "Ahub Hashmi";
alert(e);
var f = "22 years old";
alert(f);
var g = "Certified Web & Mobile Application Developer";
alert(g);

var h = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(h);

var email = "ahubhashmi40@gmail.com";
var i = "My email address is ";
alert(i + email);

var book = "A smarter way to learn JavaScript";
var j = "I am trying to learn from the Book ";
alert(j + book);

document.write("<h3 align='center'>Yah! I can write HTML content through JavaScript<h3>");

var age = "22 years old";
var k = "I am ";
alert(k + age);

var track = "You have visited this site 14 times";
alert(track);

document.write("My birth year is 1990<br>Data type of my declared variable is number");

var visitorsName = "John Doe ordered ";
var productTitle = "XYZ Clothing store";
var quantity = "5 T-shirt(s) on ";
document.write(visitorsName + quantity + productTitle);

var a = "numbers";
var b = "$";
var c = "_";
var d = "letter";
var e = "sensitive";
var f = "keywords";
document.write("<h1>Rules for naming JS variables</h1><br>");
document.write("<br>Variable names can only contain, ", a, b, "and", c, ". For example : $my_1stVariable");
document.write("<br>Variable names must begin with a ", d, b, "or", c, ". For example : $name, _name or name");
document.write("<br>Variable names are case ", e);
document.write("<br>Variable names should not be JS ", f);

var l = 3;
var m = 5;
var n = l + m;
document.write("Sum of 3 and 5 is: ", n);
document.write("<br>");

var l = 3;
var m = 5;
var n = l - m;
document.write("Difference of 3 and 5 is: ", n);
document.write("<br>");


var l = 3;
var m = 5;
var n = l * m;
document.write("Product of 3 and 5 is: ", n);
document.write("<br>");


var l = 3;
var m = 5;
var n = l / m;
document.write("Division of 3 and 5 is: ", n);
document.write("<br>");


var l = 3;
var m = 5;
var n = l | m;
document.write("Modulus of 3 and 5 is: ", n);
document.write("<br>");

var o = "Value after variable declaration is: ";
var p = 5;
var t = 6;
var u = 13;
document.write(o, "undefined<br>");
document.write("Initial value: 5 ");
document.write("<br>Value after increment is: ", ++p);
document.write("<br>Value after addition is: ", 7 + t);
document.write("<br>Value after decrement is: ", --u);
document.write("<br>The remainder is: 0 ");

var oneTicket = 600;
var fiveTickets = 5 * oneTicket;
document.write("Total cost to buy 5 tickets to a movie is ", fiveTickets, "PKR");

document.write("Table of 4<br/>");
var q = 4;
for (var i = 1; i <= 10; i++) {
    document.write(q + " x " + i + " = " + q * i + "<br/>");
}

var s = 650;
var v = 3;
var price1 = s * v;
var w = 100;
var x = 7;
var price2 = w * x;
var y = 100;
var z = price1 + price2 + y;
document.write("<h1>Shopping Cart</h1><br/>");
document.write("<br/>Price of item 1 is ", s);
document.write("<br/>Quantity of item 1 is ", v);
document.write("<br/>Price of item 2 is ", w);
document.write("<br/>Quantity of item 2 is ", x);
document.write("<br/>Shipping Charges ", y);
document.write("<br/><br/>Total cost of your order is ", z);

var a = 980;
var b = 804;
var c = b / a * 100;
document.write("<h1>Marks Sheet</h1><br/>");
document.write("<br/>Total marks: ", a);
document.write("<br/>Marks obtained: ", b);
document.write("<br/>Percentage: ", c, "%");

var US$ = 10;
var PKR$ = US$ * 104.80;
var SaudiRiyals = 25;
var PKRs = SaudiRiyals * 28;
var PKR = PKR$ + PKRs;
document.write("<h1>Currency in PKR</h1><br/>");
document.write("<br/>Total Currency in PKR: ", PKR);

var a = 5;
var b = a + 5;
var c = b * 10;
var d = c / 2;
document.write("<h2>Calculations in a single expression ( +, *, /)</h2><br/>");
document.write("Calculation: ", d);

var a = 2022;
var b = 2000;
var c = a - b;
document.write("<h1>Age Calculator</h1><br/>");
document.write("<br/>Current Year: ", a);
document.write("<br/>Birth Year: ", b);
document.write("<br/>Your Age is: ", c);

var a = 20;
var b = 2 * 3.142 * a;
var c = a * a * 3.142;
document.write("<h1>The Geometrizer</h1><br/>");
document.write("<br/>Radius of a circle: ", a);
document.write("<br/>The circumference is: ", b);
document.write("<br/>The area is: ", c);

var a = "kitKat";
var b = 22;
var c = 100;
var d = 5;
var e = c - b;
var f = e * d;
document.write("<h1>The Lifetime Supply Calculator</h1><br/>");
document.write("<br/>Favourite Snack: ", a);
document.write("<br/>Current age: ", b);
document.write("<br/>Estimated Maximum Age: ", c);
document.write("<br/>Amount of snacks per day: ", d);
document.write("<br/>You will need ", f, " kitKats to last you until the ripe old age of ", c);

var a = "My ";
var b = "name ";
var c = "Ahub.";
document.write("<h2>3 variables in 1 statement</h2><br/>");
document.write(a + b + "is " + c);

var a = 10;
document.write("<h3>Result:</h3>\n");
document.write("The value of a is: 10<br/><hr>");
document.write("<br/>The value of ++a is: ", ++a);
document.write("<br/>Now the value of a is: 11<br/>");
document.write("<br/>The value of a++ is: ", a++);
document.write("<br/>Now the value of a is: 12<br/>");
document.write("<br/>The value of --a is: ", --a);
document.write("<br/>Now the value of a is: 11<br/>");
document.write("<br/>Now the value of a-- is: ", a--);
document.write("<br/>Now the value of a is: 10<br/>");

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is 2 ");
document.write("<br/>b is 1 ");
document.write("<br/>result is ", result);

var a = 25;
var b = (a * 9 / 5) + 32;
var c = 70;
var d = (c - 32) * 5 / 9;
document.write("<h2>The Temperature Converter</h2><br/>");
document.write(a, "°C is ", b, "°F");
document.write("<br/>");
document.write(c, "°F is ", d, "°C");

var name = prompt("What is your name?");
alert("GREETINGS " + name + "!");

document.write("Multiplication Table<br/>");
var q = prompt();
for (var i = 1; i <= 10; i++) {
    document.write(q + " x " + i + " = " + q * i + "<br/>");
}

var a = prompt("Enter City name");
var cities = "karachi";
if (a === cities) {
    alert("Welcome to city of lights!");
} else {
    alert("Not Welcome");
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var T = prompt("Enter Temperature");
var t1 = 10;
var t2 = 20;
var t3 = 30;
var t4 = 40;
for (var i = 0; i <= 3; i++) {
    if (T <= 10) {
        document.write("OMG! Todays weather is so Cool.");
        break;
    }
    if (T <= 20) {
        document.write("Todays Weather is cool.");
        break;

    }
    if (T <= 30) {
        document.write("The Weather today is Normal.");
        break;

    }
    if (T >= 40) {
        document.write("It is too hot outside.");
        break;

    }
}

num1 = parseInt(prompt("Enter the First Number :"));
oper = prompt("Enter the Operator");
num2 = parseInt(prompt("Enter the Second Number :"));

if (oper == "+") {
    alert("The Sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
} else if (oper == "-") {
    alert("The Difference of " + num1 + " and " + num2 + " is " + (num1 - num2));
} else if (oper == "*") {
    alert("The Product of " + num1 + " and " + num2 + " is " + (num1 * num2));
} else if (oper == "/") {
    alert("The Division of " + num1 + " and " + num2 + " is " + (num1 / num2));
} else if (oper == "%") {
    alert("The Percentage of " + num1 + " and " + num2 + " is " + (num1 / num2 * 100));
} else {
    alert("Invalid Input!!");
}