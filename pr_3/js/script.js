//q-14
let heading = "Q-14";
document.getElementById('heading').innerHTML = " "+ heading;


let pattern = ' ';
let num = 1;

for (let i=1; i<=5; i++){

  for (let j=1; j<=i; j++){

    p.innerHTML += num + " ";
    num++;
  }
document.getElementById('p').innerHTML += "<br>";
}
//q-13
let heading2 = "Q-13";
document.getElementById('heading2').innerHTML = " "+ heading2;

let pattern2 = document.getElementById("pattern2");

for (let i=5; i>=1; i--){
     
    for (let j=5; j>=i; j--){
       
    pattern2.innerHTML += j + " ";
    }
    pattern2.innerHTML += "<br>";
}

//q-9
let heading3 = "Q-9";
document.getElementById('heading3').innerHTML = " "+ heading3;

let con = 0;
let no = 0;

do{
    con += no;
    no++;
}while(no <= 30);

document.getElementById('totalofnum').innerHTML = "total between 0 to 30 is : " + con;


//q-2
let heading4 = "Q-2";
document.getElementById('heading4').innerHTML = " "+ heading4;

let choice = 6; 
let r=1;
let fact=1;

while(r<=choice)
{
  fact=fact*r 
  r++
}
document.getElementById('factorial').innerHTML = " factorial number : " + fact;

//q-12
let heading5 = "Q-12";
document.getElementById('heading5').innerHTML = " "+ heading5;

let sum = 0;

for (let i=1; i<=10; i++) {   

    sum += i * i; 
}
  document.getElementById("sumofnum").innerHTML = "sum of 1+4+9+16+....+100 = " + sum;

//q-11
let heading6 = "Q-11";
document.getElementById('heading6').innerHTML = " "+ heading6;

let line = "";

for (i = 1; i <= 10; i++) {

    line += i;

    if (i < 10) {

      line += "-";
    }
}
document.getElementById("line").innerHTML = line;

//q-1
let heading7 = "Q-1";
document.getElementById('heading7').innerHTML = " "+ heading7;

let multi = document.getElementById('multitable');
let o=1

while(o<=10){

    multi.innerHTML += (`8 * ${o} = ${8 * o} </br>`);
    o++ ;
}


//q-3

let heading8 = "Q-3";
document.getElementById('heading8').innerHTML = " "+ heading8;

let sum2 = 0 ;
let number = 153;
let temp;
let num2 ;

temp = number;
while (temp > 0) {

    num2 = temp % 10;
    sum2 += num2 * num2 * num2;
   
    temp = parseInt(temp / 10); 
}

if (sum2 == number) {
    document.getElementById("armstrong").innerHTML = number +' is Armstrong number.';
}
else {
    document.getElementById("armstrong").innerHTML = number +' is not Armstrong number.';
}


//q-5
let heading9 = "Q-5";
document.getElementById('heading9').innerHTML = " "+ heading9;

var i = 1; j = 1 ; k = '';

while(i <= 100)
{
    k = i + j;
    i = j;
    j = k;

    document.getElementById("Fibonacci").innerHTML = i + "<br/>";
}

//q-6
let heading10 = "Q-6";
document.getElementById('heading10').innerHTML = " "+ heading10;

let n = 2;
let m = 1;
let num3 = 0;

while(m <= n){

  if(n % m == 0){

      num3++;
  }
  m++;

}
if(num3 == 2){
      document.getElementById("Prime").innerHTML = n + " is a prime number";
}
  else{
      document.getElementById("Prime").innerHTML = n + " is not a prime number";
}

//q-7
let heading11 = "Q-7";
document.getElementById('heading11').innerHTML = " "+ heading11;

let n2 = 1729;
let temp2 = n2;
let rev = 0;
let sumOfDigits = 0;


while (temp2 > 0) {
    sumOfDigits = sumOfDigits + temp2 % 10;
    temp2 = temp2 
    temp2 = (temp2 / 10) | 0; 
}

temp2 = sumOfDigits; 

while (temp2 > 0) {
    rev = rev * 10 + temp2 % 10;
    temp2 = temp2 
    temp2 = (temp2 / 10) | 0; 
}

if (rev * sumOfDigits === n2) {
    document.getElementById("Magic").innerHTML = n2 + " is a Magic Number.";
} else {
    document.getElementById("Magic").innerHTML = n2 + " is not a Magic Number.";
}

//q-8
let heading12 = "Q-8";
document.getElementById('heading12').innerHTML = " "+ heading12;

let givenNumber = 100;

for (let currentNumber = 1; currentNumber <= givenNumber; currentNumber++) {
    let numDigits = 0;
    let tempNumber = currentNumber;
    let temp = currentNumber;
    let sum = 0;

    while (tempNumber > 0) {
        tempNumber = (tempNumber - (tempNumber % 10)) / 10;
        numDigits++;
    }

    while (temp > 0) {
        let digit = temp % 10;
        let product = 1;

        for (let i = 0; i < numDigits; i++) {
            product *= digit;
        }

        sum += product;
        temp = (temp - digit) / 10;
    }

    if (sum == currentNumber) {
      document.getElementById('Disarium').innerHTML = " "+ currentNumber;
    }
}



//q-10
let heading13 = "Q-10";
document.getElementById('heading13').innerHTML = " "+ heading13;


let number2 = 1;

do {
    if (number2 % 3 === 0 && number2 % 5 === 0) {
      document.getElementById('FizzBuzz').innerHTML = " FizzBuzz";
    } else if (number2 % 3 === 0) {
      document.getElementById('FizzBuzz').innerHTML = "Fizz ";
    } else if (number2 % 5 === 0) {
      document.getElementById('FizzBuzz').innerHTML = " Buzz";
    } else {
      document.getElementById('FizzBuzz').innerHTML = " "+ number2;
    }

    number2++;
} while (number2 <= 100);
