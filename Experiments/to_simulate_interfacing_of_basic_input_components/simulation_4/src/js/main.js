let image_tracker = "dis";

function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "dis") {
    image.src = "./src/images/sliderOnRight.png";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "green";
  } else {
    image.src = "./src/images/sliderOff.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor =
      "#009C4E";
    image_tracker = "dis";
  }
}

function changeImage() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "green") {
    image.src = "./src/images/sliderOnLeft.png";
    image_tracker = "red";
  } else if (image_tracker == "red") {
    image.src = "./src/images/sliderOnRight.png";
    image_tracker = "green";
  }
}
