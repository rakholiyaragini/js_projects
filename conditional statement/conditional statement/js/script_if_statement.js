
//if statement

let b = 97;

if( b > 90 && b <= 100){ // 93 > 90 true 89 < 100 false

    console.log("your grade is A+");

}else if( b > 80 && b <= 90){

    console.log("your grade is A");

}else if( b > 70 && b <= 80){

    console.log("your grade is B+");

}else if( b > 60 && b <= 70){

    console.log("your grade is B");

}else if( b >= 50 && b <= 60){

    console.log("your grade is C");

}else if( b < 50 && b >= 0){

    console.log("your are fail..");
}else{
     
    console.log("invalid choice..!!");
}
