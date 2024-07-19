//concat method
const heading = "Concat Method..";
document.getElementById('heading').innerHTML = " "+ heading;

const Array = [1,2,3,4,5];
document.getElementById('arr1').innerHTML = "Array 1 :  "+ Array;

const Array2 = [6,7,8,9,10];
document.getElementById('arr2').innerHTML = "Array 2 : "+ Array2;

const ARR = Array.concat(Array2);
document.getElementById("concat").innerHTML = " Concat = " + ARR;

//foreach method
const array1 = ["Apple" , "orange" ,"Strawberry" , "Mango"];
console.log(array1);

array1.forEach((element) => console.log(element));

//join method
const heading2 = "Join Method..";
document.getElementById('heading2').innerHTML = " "+ heading2;

const array2 = ['A','B','C','D','E','F','G','H','I','J'];
document.getElementById('arr').innerHTML = "Array : "+ array2;

const ele = array2.join((' - '));
const ele2 = array2.join((' * '));
const ele3 = array2.join(('+ '));

document.getElementById("join").innerHTML ="Method 1 : " + ele;
document.getElementById("join2").innerHTML ="Method 2 : "+ ele2;
document.getElementById("join3").innerHTML ="Method 3 : "+ ele3;

//map method
const heading3 = "Map Method..";
document.getElementById('heading3').innerHTML = " "+ heading3;

const arr = [2 , 4 , 6 , 8 , 10 ,12 , 14];
document.getElementById('ar1').innerHTML = "Array  :  "+ arr;

const map1 = arr.map((r) => r * 4);

document.getElementById("map").innerHTML = " Map = " + map1;

//indexof method
const heading4 = "indexOf Method..";
document.getElementById('heading4').innerHTML = " "+ heading4;

const array3 = ['cat' , 'dog' ,'elephant' , 'lion' , 'monkey' , 'leopard'];
document.getElementById('AR1').innerHTML = "Array : "+ array3;

const ele4 = array3.indexOf(('elephant'));
const ele5 = array3.indexOf(('monkey'));
const ele6 = array3.indexOf(('leopard'));

document.getElementById("index").innerHTML ="index of elephant : " + ele4;
document.getElementById("index2").innerHTML ="index of monkey : "+ ele5;
document.getElementById("index3").innerHTML ="index of leopard : "+ ele6;

//include method
const heading5 = "Includes Method..";
document.getElementById('heading5').innerHTML = " "+ heading5;

const array4 = ['rose' , 'sunflower' ,'Marigold' , 'Jasmin' , 'lily' , 'lotus'];
document.getElementById('A1').innerHTML = "Array : "+ array4;

const ele7 = array4.includes(('daisy'));
const ele8 = array4.includes(('rose'));
const ele9 = array4.includes(('sunflower'));

document.getElementById("include").innerHTML ="daisy : " + ele7;
document.getElementById("include2").innerHTML ="rose : "+ ele8;
document.getElementById("include3").innerHTML ="sunflower : "+ ele9;

//push method
const heading6 = "Push Method..";
document.getElementById('heading6').innerHTML = " "+ heading6;

const array5 = [100 ,200, 300, 400, 500, 600,];
document.getElementById('arr5').innerHTML = "Array : "+ array5;

array5.push(700 , 800, 900);
document.getElementById("pusharray").innerHTML ="Ans : " + array5;

//pop method
const heading7 = "Pop Method..";
document.getElementById('heading7').innerHTML = " "+ heading7;

const array6 = ['rose' , 'sunflower' ,'Marigold' , 'Jasmin' , 'lily' , 'lotus'];
document.getElementById('arr6').innerHTML = "Array : "+ array6;

array6.pop();
document.getElementById("poparray").innerHTML ="Ans : " + array6;

//shift method
const heading8 = "Shift Method..";
document.getElementById('heading8').innerHTML = " "+ heading8;

const array7 = ['cat' , 'dog' ,'elephant' , 'lion' , 'monkey' , 'leopard'];
document.getElementById('arr7').innerHTML = "Array : "+ array7;

array7.shift();
document.getElementById("shiftarray").innerHTML ="Ans : " + array7;

//unshift method
const heading9 = "UnShift Method..";
document.getElementById('heading9').innerHTML = " "+ heading9;

const array8 = [20, 30, 40, 50, 60];
document.getElementById('arr8').innerHTML = "Array : "+ array8;

array8.unshift(10);
document.getElementById("unshiftarray").innerHTML ="Ans : " + array8;

//Slice method
const heading10 = "Slice Method..";
document.getElementById('heading10').innerHTML = " "+ heading10;

const array9 = [10, 20, 30, 40, 50, 60, 70];
document.getElementById('arr9').innerHTML = "Array : "+ array9;

const ele10 = array9.slice((3));
document.getElementById("slicearray").innerHTML ="Ans : " + ele10;
const ele11 = array9.slice((1 , 5));
document.getElementById("slicearray2").innerHTML ="Ans : " + ele11;

//splice method
const heading11 = "Splice Method..";
document.getElementById('heading11').innerHTML = " "+ heading11;

const array10 = [10, 30, 40, 60,];
document.getElementById('arr10').innerHTML = "Array : "+ array10;

array10.splice(1 , 0,  "20");
document.getElementById("splicearray").innerHTML ="Ans : " + array10;
array10.splice(4 , 1,  "50");
document.getElementById("splicearray2").innerHTML ="Ans : " + array10;

//reverse method
const heading12 = "Reverse Method..";
document.getElementById('heading12').innerHTML = " "+ heading12;

const array11 = [10, 20, 30, 40, 50, 60, 70];
document.getElementById('arr11').innerHTML = "Array : "+ array11;

array11.reverse();
document.getElementById("reversearray").innerHTML ="Reverse Array : " + array11;