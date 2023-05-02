const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

var i = 0;
var txt = 'its just a basic website';
var speed = 50; 

function type() {
  if (i < txt.length) {
    document.getElementById("write").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}