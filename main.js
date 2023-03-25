const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const mark1 = document.getElementById("mark1");
const mark2 = document.getElementById("mark2");
const mark3 = document.getElementById("mark3");
const message = document.getElementById("result");


function validateTxt() {

    if (mark1.value >= 0 && mark1.value <= 100 && mark2.value  >= 0 && mark2.value  <= 100 && mark3.value  >= 0 && mark3.value  <= 100) {
        message.innerHTML = "Marks validated!";
    } else {
        message.innerHTML = "Enter correct values!";
    }

}


function printResult() {
    let num1 = parseInt(mark1.value);
    let num2 = parseInt(mark2.value);
    let num3= parseInt(mark3.value);

    let average = (num1 + num2 + num3)/3; 

    
    if (average >= 90 && average <= 100) {
        message.innerHTML = "Hello, " + firstname.value  +" "+ lastname.value  + " your marks are awesome";
    } else if (average >= 80 && average < 90) {
        message.innerHTML = "Hello, " + firstname.value  +" "+ lastname.value  + " your marks are very good";
    } else if (average >= 85 && average < 80) {
        message.innerHTML = "Hello, " + firstname.value  +" "+ lastname.value  + " your marks are OK";
    } else if(average <=50 && average >= 0){
        message.innerHTML = "Hello, " + firstname.value  +" "+ lastname.value  + " you failed";

    } else {
        
        message.innerHTML = "Hello, " + firstname.value  +" "+ lastname.value  + ". Please enter correct values";
    }
}