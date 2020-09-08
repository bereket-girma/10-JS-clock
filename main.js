function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText =
    hour + " : " + min + " : " + sec + " ";

  let hexTime = "#" + hour + min + sec;
  document.getElementById("hexCode").innerHTML = hexTime;
  document.body.style.backgroundColor = hexTime;

  let t = setInterval(currentTime, 1000);
}

function updateTime(x) {
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
}

currentTime();
