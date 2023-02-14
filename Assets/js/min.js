// Variables
    // var x = 10;
    // var y = 20;
    // var z = x + y;
    // document.getElementById("First").innerHTML=z;
    // document.write(z);
    // console.log(z);
    // // window.alert(z);
    // // window.print(z);
    // document.getElementsByClassName("main")[0].innerHTML=z;
    // document.getElementsByTagName("h1")[0].innerHTML=z;
    // document.getElementsByTagName("p")[0].innerHTML=z;

    // document.querySelector("#Second").innerHTML=z;
    // document.querySelector(".Content").innerHTML=z;

    // var x = document.querySelectorAll("#hello");
    // document.getElementById("demo").innerHTML = x[0].innerHTML+x[1].innerHTML;
// Variables

// Arithemetic Operators
var s = 5;
var t = 10;
var u = s+t;
var v = s-t;

document.write(u);
document.write(v);
document.write("<br>"+u);
// Arithemetic Operators

// Assignment Operators
 var x=10;
 var y=5;
x+=y;
document.write("<br>"+x);

// Assignment Operators

// Comparison Operators
var x = 10;
var y = 30;
document.write("<br>"+(x>y));
document.write("<br>"+(x<y));
document.write("<br>"+(x==y));
document.write("<br>"+(x===y));
// Comparison Operators

// LOgical 
var x=5;
var y=10;
var z=5;
document.write("<br>"+(x>y && y>z));
document.write("<br>"+(x>y || y>z));
document.write("<br>"+(y!=z));
// LOgical 


// Increment
var x = 5;
var y = 10;
x++;
x+=y;
y--;
document.write("<br>"+x);
document.write("<br>"+y);
// Increment

// Conditional Statement
 x = 50;
 y = 40;
 z = 100;
if(x>y && x>z){
    document.write("<br>x is greater");
}
else if(y>z && y>x){
    document.write("<br>y is greater");
}
else{
    document.write("<br>z is greater");
}
// Conditional Statement

// Nested
x=10;
y=12;
z=13;
if(x<y){
    if(y>z){
        document.write("<br> y is greater");
    }
    else{
        document.write("<br> z is greater");
    }
    
    }
    else{
        document.write("<br> x is greater");
    }
// Nested

// switch statement
document.write("<br>"+Date());
// switch statement

// constructor
switch(new Date().getDay()){
    case 0:
    day="Sunday";
    break;

    case 1:
    day="Monday";
    break;

    case 2:
    day="Tuesday";
    break;

    case 3:
    day="Wednesday";
    break;

    case 4:
    day="Thursday";
    break;

    case 5:
    day="Friday";
    break;

    case 6:
    day="Saturday";
    break;
}
document.write("<br>"+ day);

// constructor
switch(new Date().getDay()){
    case 0:
    day="Sunday";
    break;

    case 1:
    day="Monday";
    break;

    case 2:
    day="Tuesday";
    break;

    case 3:
    day="Wednesday";
    break;

    case 4:
    day="Thursday";
    break;

    case 5:
    day="Friday";
    break;

    case 6:
    day="Saturday";
    break;
}
document.write("<br>"+ day);
document.write("<br>"+ (new Date().getDay()));
document.write("<br>"+ (new Date().getMonth()));
//  Day

// While Loop
var i=0;
while(i<10){
    i++;
    document.write("<br>" + i);
}
//While Loop

// do while Loop
var i = 0;
do{
    i++;
    document.write("<br>" + i);
}
while(i<10);
// do while Loop


// For Loop
for(i=0; i<10; i++){
    document.write("<br>" + i);
}
// For Loop