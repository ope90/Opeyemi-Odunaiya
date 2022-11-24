let height = document.getElementById("height");
let weight = document.getElementById("weight");

function calculateBmi() {
 let h = document.getElementById('h').value;
 let w = document.getElementById('w').value;
 let bmi = w / (h / 100 * h / 100);
 let bmio = (bmi.toFixed(0));


 document.getElementById("result").innerHTML = bmio;
 
 bmiText(bmio)
}

function bmiText(Bmi) {
  
 if (Bmi < 18) {

  document.getElementById('message').innerHTML =
   'You are underweight';
  
 } else if (Bmi >= 18.5 && Bmi <= 24.9) {

  document.getElementById("message").innerHTML =
   'You are healthy';
  
 } else {
   document.getElementById("message").innerHTML =
     'You are overweight';

 }

}