function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const now = new Date();
  utcTimeElement.textContent = now.toUTCString();
}

// Update time immediately and set interval
updateUTCTime();
setInterval(updateUTCTime, 1000);
