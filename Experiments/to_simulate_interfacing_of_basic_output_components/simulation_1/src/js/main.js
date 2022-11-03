let image_tracker = "off";
function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/RGB_On.gif";
    image_tracker = "On";
  } else {
    image.src = "./src/images/RGB_Off.png";
    image_tracker = "off";
  }
}
