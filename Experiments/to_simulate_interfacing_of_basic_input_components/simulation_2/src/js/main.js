let image_tracker = "off";

function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/pled2.png";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "on";
  } else {
    image.src = "./src/images/pled1.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor =
      "#009C4E";
    image_tracker = "off";
  }
}

function changeImage() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "on") {
    image.src = "./src/images/pled3.png";
    image_tracker = "3";
  } else if (image_tracker == "3") {
    image.src = "./src/images/pled4.png";
    image_tracker = "4";
  } else if (image_tracker == "4") {
    image.src = "./src/images/pled5.png";
    image_tracker = "5";
  } else if (image_tracker == "5") {
    image.src = "./src/images/pled6.png";
    image_tracker = "6";
  } else if (image_tracker == "6") {
    image.src = "./src/images/pled7.png";
    image_tracker = "7";
  } else if (image_tracker == "off") {
    image.src = "./src/images/pled1.png";
  } else {
    image.src = "./src/images/pled8.png";
  }
}
