let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;

let image_tracker = "dis";

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "dis") {
    image.src = "./src/images/led/led_off.png";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "off";
  } else if (image_tracker == "off") {
    image.src = "./src/images/led/led_dis.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor =
      "#009C4E";
    image_tracker = "dis";
  }
}

function changeImage() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/led/led_on.png";
    image_tracker = "red";
  } else if (image_tracker == "red" || image_tracker == "green") {
    image.src = "./src/images/led/led_off.png";
    image_tracker = "off";
  }
}

function changeLedColor() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "red") {
    image.src = "./src/images/led/led_green.png";
    image_tracker = "green";
  } else if (image_tracker == "green") {
    image.src = "./src/images/led/led_on.png";
    image_tracker = "red";
  }
}

// if (image_tracker == "dis") {
//   document.getElementById("pushbuttonPower").addEventListener("click", () => {
//     if (int !== null) {
//       clearInterval(int);
//     }
//     int = setInterval(displayTimer, 10);
//   });
// }

// document.getElementById("pushbuttonPower").addEventListener("click", () => {
//   clearInterval(int);
//   [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//   document.getElementById("simTimer").innerHTML = "00 : 00 : 00 : 000 ";
// });
