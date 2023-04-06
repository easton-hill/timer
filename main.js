const countdown = () => {
  const intervalDuration = parseInt(document.getElementById("interval").value);
  const breakDuration = parseInt(document.getElementById("break").value);
  const intervalTimer = document.getElementById("interval-timer");
  const breakTimer = document.getElementById("break-timer");

  const playSound = document.getElementById("sound").checked;
  const audio = new Audio("ding.mp3");

  let currentType = "interval";
  let currentInterval = intervalDuration;
  let currentBreak = breakDuration;

  setInterval(() => {
    if (currentType === "interval") {
      currentInterval--;
      intervalTimer.innerText = currentInterval;

      if (currentInterval === 0) {
        if (playSound) {
          audio.play();
        }

        currentInterval = intervalDuration + 1;
        currentType = "break";
      }
    } else if (currentType === "break") {
      currentBreak--;
      breakTimer.innerText = currentBreak;

      if (currentBreak === 0) {
        currentBreak = breakDuration + 1;
        currentType = "interval";
      }
    }
  }, 1000);
};

const updateDisplay = () => {
  const intervalDuration = parseInt(document.getElementById("interval").value);
  const breakDuration = parseInt(document.getElementById("break").value);
  const intervalTimer = document.getElementById("interval-timer");
  const breakTimer = document.getElementById("break-timer");

  intervalTimer.innerText = intervalDuration;
  breakTimer.innerText = breakDuration;
};
