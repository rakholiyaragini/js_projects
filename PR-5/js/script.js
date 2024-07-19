//q-1
const heading = "Quetion-1..";
document.getElementById('heading').innerHTML = " "+ heading;

let array1 = document.getElementById('array1');
let array2 = document.getElementById('array2');
let array3 = document.getElementById('array3');
let array4 = document.getElementById('array4');
let array5 = document.getElementById('array5');
let array6 = document.getElementById('array6');

let myColor = ["Red","Green","white","black"];
let ele = 1;
array1.innerHTML += ("Array :")

myColor.forEach((ele) => 
    array1.innerHTML += ( " " + ele)
)

let color2 = myColor.join("+");
array2.innerHTML = color2;

let color3 = myColor.slice(0 , 3)
array3.innerHTML = color3;

let color4 = myColor.slice(0 , 1)
array4.innerHTML = color4;

let color5 = myColor.slice(1 ,3)
array5.innerHTML = color5;

let color6 = myColor.push("orange")
myColor.forEach((ele) => 
    array6.innerHTML += ( " " + ele)
)


//q-2
const heading2 = "Quetion-2..";
document.getElementById('heading2').innerHTML = " "+ heading2;

const Array = [34, 67, 23, 97, 15];
document.getElementById('array7').innerHTML = "Array =  " + Array;
let sum = 0;

// for loop
for (i = 0; i <= Array.length - 1; i++) {
    sum = sum + Array[i];
}
loop.innerHTML += ("sum using loop : " + sum );

// forEach method
const array8 = [5, 10, 15, 20, 25];
document.getElementById('array9').innerHTML = "Array =  " + array8;

let ele2 = 0;
array8.forEach(element => {
    ele2 += element;
});
foreach.innerHTML += ("sum using forEach method  :" + ele2 );

//q-3
const heading3 = "Quetion-3..";
document.getElementById('heading3').innerHTML = " "+ heading3;

const array10 = [5 , 398, 987, 134 ,34];
document.getElementById('arr').innerHTML = "Array =  " + array10;

MaxMin(array10);

function MaxMin(arr) {
    if (arr.length === 0) {
    }
let maxvalue = arr[0];
let minvalue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxvalue) {
            maxvalue = arr[i];
        }
        if (arr[i] < minvalue) {
            minvalue = arr[i];
        }
    }
max.innerHTML += ("Maximum value is : " + maxvalue );
min.innerHTML += ("Minimum value is : " +  minvalue);
}


//q-4
const heading4 = "Quetion-4..";
document.getElementById('heading4').innerHTML = " "+ heading4;

const sentence = 'My Name is Ragini..';
document.getElementById('sentence').innerHTML = "sentence = "+ sentence;
const index = 6;
document.getElementById('val').innerHTML = "Index is = "+ index;
indexofsen.innerHTML +=(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index,)}`)

//q-5
const heading5 = "Quetion-5..";
document.getElementById('heading5').innerHTML = " "+ heading5;

const array = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById('arr2').innerHTML = "Array :  " + array;


function Nagative(arr) {
    return arr.filter(function(num) {
        return num >= 0;
    });
}
const positive = Nagative(array);
document.getElementById('pos').innerHTML = "Positive Numbers = "+ positive;

//q-6
const heading6 = "Quetion-6..";
document.getElementById('heading6').innerHTML = " "+ heading6;

const array11 = [2, 5, 6, 3, 8, 9];
document.getElementById('arr3').innerHTML = "Array :  " + array11;

const map = array11.map((r) => r * r);
document.getElementById('mapMethod').innerHTML = "Square Of All Elements : "+ map;

//q-7
const heading7 = "Quetion-7..";
document.getElementById('heading7').innerHTML = " "+ heading7;

const Array1 =  [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
document.getElementById('arr4').innerHTML = "Array :  " + Array1;

Array1.sort((a, b) => a - b);
document.getElementById('sort1').innerHTML = "ascending order : " + Array1;

Array1.sort((a, b) => b - a);
document.getElementById('sort2').innerHTML = "descending order : " + Array1;

//2
const Array2 = ["Red", "Green", "White", "Black"];
document.getElementById('arr5').innerHTML = "Array 2 :  " + Array2;

Array2.sort((a, b) => a.localeCompare(b));
document.getElementById('sort3').innerHTML = "ascending order : " + Array2;

Array2.sort((a, b) => b.localeCompare(a));
document.getElementById('sort4').innerHTML = "ascending order : " + Array2;

//q-8
const heading8 = "Quetion-8..";
document.getElementById('heading8').innerHTML = " "+ heading8;

const array12 = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById('arr6').innerHTML = "Array 2 :  " + array12;

const filterword = array12.filter(array12 => array12.length >= 8);
document.getElementById('filword').innerHTML = "Filtered word : " + filterword;

//q-9
const heading9 = "Quetion-9..";
document.getElementById('heading9').innerHTML = " "+ heading9;

//example-1
const string1 = "airplane";
document.getElementById('str1').innerHTML = "Q-1 : "+ string1;

const r = string1[2];  // r = index 2
document.getElementById('airplane').innerHTML = "Output 1 =  "+ r;

//example-2
const string2 = "oxoxoxox";
document.getElementById('str2').innerHTML = "Q-2 : "+ string2;

let ans = '';
for (let i = 0; i < string2.length; i++) {
    if (i % 2 === 0) {
        ans += string2[i].toLowerCase(); 
    } else {
        ans += string2[i].toUpperCase(); 
    }
}
document.getElementById('number').innerHTML = "Output 2 =  "+ ans;

//example-3
const string3 = "A New Java Book";
document.getElementById('str3').innerHTML = "Q-3 : "+ string3;

const lowercase = string3.toLowerCase();
document.getElementById('book').innerHTML = "Output 3 =  "+ lowercase;

const uppercase = string3.toUpperCase();
document.getElementById('book2').innerHTML = "Output 3 =  "+ uppercase;


//q-10
const heading10 = "Quetion-10..";
document.getElementById('heading10').innerHTML = " "+ heading10;

const array13 = [10, 20, 30, 40, 50, 60];
document.getElementById('arr7').innerHTML = "Array =  "+ array13;

array13.reverse();
document.getElementById('reversearr').innerHTML = "Reverse Array =  "+ array13;

//q-11
const heading11 = "Quetion-11..";
document.getElementById('heading11').innerHTML = " "+ heading11;

const array14 = ['rose' , 'sunflower' ,'Marigold' , 'Jasmin' , 'lily'];
document.getElementById('arr8').innerHTML = "Array =  "+ array14;

document.getElementById('value1').innerHTML = "daisy is found or not ? :  "+ array14.includes('daisy');
document.getElementById('value2').innerHTML = "dog is found or not ? :  "+ array14.includes('dog');
document.getElementById('value3').innerHTML = "sunflower is found or not ? :  "+ array14.includes('sunflower');
document.getElementById('value4').innerHTML = "Jasmin is found or not ? :  "+ array14.includes('Jasmin');


//q-12
const heading12 = "Quetion-12..";
document.getElementById('heading12').innerHTML = " "+ heading12;

function lengthofname(name) {
    document.getElementById('name').innerHTML = "Name =  "+ name;
    
    let char = name.length;
    document.getElementById('char').innerHTML = "Total Character Of Name =  "+ char;
}

let myName = "Ragini Rakholiya";
lengthofname(myName);


//q-13
const heading13 = "Quetion-13..";
document.getElementById('heading13').innerHTML = " "+ heading13;

const string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
document.getElementById('sentence2').innerHTML = "Sentence =  "+ string;

document.getElementById('replacesen').innerHTML = "Replace Sentence = "+ string.replaceAll("dog", 'cat');


//q-14
const heading14 = "Quetion-14..";
document.getElementById('heading14').innerHTML = " "+ heading14;

const sentence2 = "Hire the top 1% freelance developers";
document.getElementById('sentence3').innerHTML = "string =  "+ sentence2;

const ans2 = sentence2.split(" ");
const array15 = ans2.slice(0, 4);
document.getElementById('sentence4').innerHTML = "String To Array : "+ array15;


//q-15
const heading15 = "Quetion-15..";
document.getElementById('heading15').innerHTML = " "+ heading15;

const array16 = ['5', 32, 'Daniel'];
document.getElementById('arr10').innerHTML = "Array =  "+ array16;

const string4 = array16.join(',');
document.getElementById('sentence5').innerHTML = "Array to string =  "+ string4;

