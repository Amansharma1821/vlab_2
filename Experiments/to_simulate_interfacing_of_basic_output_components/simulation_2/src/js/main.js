let image_tracker = "off";
function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/7sOn.gif";
    image_tracker = "On";
  } else {
    image.src = "./src/images/7sOff.png";
    image_tracker = "off";
  }
}
