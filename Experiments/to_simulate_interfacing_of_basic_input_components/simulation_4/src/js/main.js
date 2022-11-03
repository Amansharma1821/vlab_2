function changepage() {
  var x = document.getElementById("pagechanger").value;
  if (x == 1) document.getElementById("sm1").click();
  else if (x == 2) document.getElementById("sm2").click();
  else if (x == 3) document.getElementById("sm3").click();
  else if (x == 4) document.getElementById("sm4").click();
  else document.getElementById("sm5").click();
}

let image_tracker = "off";
function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/sliderOnLeft.png";
    image_tracker = "On";
  } else {
    image.src = "./src/images/sliderOff.png";
    image_tracker = "off";
  }
}

let image_tracker2 = "off";
function changeImageLeft() {
  let image = document.getElementById("ifimg");
  if (image_tracker2 == "off") {
    image.src = "./src/images/sliderOnLeft.png";
    image_tracker2 = "on";
  } else {
    image.src = "./src/images/sliderOnRight.png";
    image_tracker2 = "off";
  }
}
