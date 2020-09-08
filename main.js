function currentTime() {
  let date = new Date(); /* creating object of Date class */
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour =
    hour == 0
      ? 12
      : hour > 12
      ? hour - 12
      : hour; /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText =
    hour + " : " + min + " : " + sec + " ";

  let hexTime = "#" + hour + min + sec;
  document.getElementById("hexCode").innerHTML = hexTime;
  document.body.style.backgroundColor = hexTime;

  let t = setInterval(currentTime, 1000); /* setting timer */
}

function updateTime(x) {
  /* appending 0 before time elements if less than 10 */
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
}

currentTime();
