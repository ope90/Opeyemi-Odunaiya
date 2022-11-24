let height = document.getElementById("height");
let weight = document.getElementById("weight");

function calculateBMI() {
 var h = document.getElementById('h').value;
 var w = document.getElementById('w').value;
 var bmi = w / (h / 100 * h / 100);
  


 console.log(h, w)
 document.getElementById("result").innerHTML = bmi

}
