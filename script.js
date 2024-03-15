let buttonSize = 100;
let buttonReduce = 100;
function resize() {
    buttonSize += 20;
    document.getElementById('resizeButton').style.width = buttonSize + 'px';
    document.getElementById('resizeButton').style.height = (buttonSize / 2) + 'px'; // keeping aspect ratio
  buttonReduce -= 5;
  document.getElementById('no').style.width = buttonReduce + 'px';
  document.getElementById('no').style.background = "white" ;
  document.getElementById('no').style.height = (buttonReduce / 2) + 'px'; // keeping aspect ratio
  document.getElementById("dis").style.display="block";
  document.getElementById("greet").style.display="none";
  document.getElementById("resizeButton").style.background = "rgba(219, 206, 206, 0.692)" ;
}
function greet(){
    document.getElementById("greet").style.display="block";
    document.getElementById("resizeButton").style.background = "white" ;
    document.getElementById('no').style.background = "rgba(219, 206, 206, 0.692)" ;
}