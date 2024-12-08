let timeDiv = document.getElementById("time");

function updateTime() {
  timeDiv.textContent = new Date().toTimeString();
}

setInterval(updateTime, 1000);
