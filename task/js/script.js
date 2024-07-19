let number = -98;


if (number > 0) {
    console.log("Number is positive");
}
else if (number < 0) {
    console.log("Number is negative");
}
else {
    console.log("Entered Number is 0");
};


//even-odd//
let choice = 10;

if (choice % 2 == 0) {
    console.log("Number is even");
}
else{
    console.log("Number is odd");
};


//leap year or not//
let year = 2022;

if (year % 100 == 0 ? year % 400 == 0 : year % 4 == 0){
    console.log("Entered year is leap year..!");
       
}else{
    console.log("Entered year is not leap year..!");
}
       
//day count of month//

let month = 6;
let day = document.getElementById("day")

switch(month){

    case 1: 
    case 3: 
    case 5:      
    case 7: 
    case 8: 
    case 10: 
    case 12:   
        day.innerHTML = "This month have 31 days..";
        break;

    case 2:
        day.innerHTML = "This month have 28/29 days..";
        break;
    
    case 4:  
    case 6: 
    case 9: 
    case 11:     
        day.innerHTML = "This month have 30 days..";
        break;

    default :
    day.innerHTML = "Please Enter Valid Month..";
}

//discount//

let no = 40;
let discount = document.getElementById("discount")

if (no >= 100) {

    discount.innerHTML = "discount 20%";

} else if (no >= 50) {

     discount.innerHTML = "discount 10%";

} else {

    discount.innerHTML = "discount 0%";

}

//time of day//

let time = 7;
let timeofday = document.getElementById("timeofday")


if (time >= 5 && time < 12) {

    timeofday.innerHTML = "Good Morning..!";

} else if (time >= 12 && time < 18) {

    timeofday.innerHTML = "Good Afternoon..!";

} else {

    timeofday.innerHTML = "Good Evening..!";
}