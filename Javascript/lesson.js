document.getElementById('change-p').onclick = function () {
 document.getElementById('come').innerHTML = "Hello everyone!"

};

function validationForm() {
 console.log("I am in the validation")
 let x = document.forms["myForm"]["fname"].value;
 if (x == "") {
  alert("Name must be filled out");
  return false
 }
 alert("Name was filled out and would go to post!")
}



let cars = ["Audi", "Honda", "BMW"]
cars[2] = "VW"
cars[3] = "BMW"

let car = cars[0]

console.log(cars)
console.log(cars[3])
console.log(car)

var text = "";
for (let i = 0; i < cars.length; i++) {
 text += cars[i] + "<br/>";
}
console.log(text)
document.getElementById('come').innerHTML = text

whileI = 0;
while (whileI < 10) {
 console.log(whileI)
 whileI++
}

let var1 = 12;
if (var1 == 11){
 console.log ("They are the same!")
}else if (var1 == 12){
 console.log ("They are the same! 11")
}else if (var1 = 13){
 console.log ("They are the same! 13")
}else {
 console.log("They do not match")
}
 
var1 = 3
switch (var1) {
 case 0:
  console.log("The value = 0")
  break;
 
 case 1:
  console.log("The value = 0")
  break;
 
 case 2:
  console.log("The value = 0")
  break;
 
 case 3:
  console.log("The value = 0")
  break;
}                  ykl;''