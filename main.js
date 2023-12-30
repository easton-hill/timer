let intervalId;
let isCounting = false;

const populateValues = () => {
  if (!localStorage.getItem("intervalValue")) {
    localStorage.setItem("intervalValue", 30);
  }

  const intervalDuration = localStorage.getItem("intervalValue");
  const intervalTimer = document.getElementById("interval-timer");
  document.getElementById("interval").value = intervalDuration;
  intervalTimer.innerText = intervalDuration;

  if (!localStorage.getItem("breakValue")) {
    localStorage.setItem("breakValue", 5);
  }

  const breakDuration = localStorage.getItem("breakValue");
  const breakTimer = document.getElementById("break-timer");
  document.getElementById("break").value = breakDuration;
  breakTimer.innerText = breakDuration;
};

const updateIntervalValue = () => {
  const intervalDuration = parseInt(document.getElementById("interval").value);
  const intervalTimer = document.getElementById("interval-timer");

  if (!isCounting) {
    intervalTimer.innerText = intervalDuration;
  }
  localStorage.setItem("intervalValue", intervalDuration);
};

const updateBreakValue = () => {
  const breakDuration = parseInt(document.getElementById("break").value);
  const breakTimer = document.getElementById("break-timer");

  if (!isCounting) {
    breakTimer.innerText = breakDuration;
  }
  localStorage.setItem("breakValue", breakDuration);
};

const handleClick = () => {
  const startResetButton = document.getElementById("start-or-reset");
  if (!isCounting) {
    startResetButton.innerText = "Reset";
    startResetButton.classList.remove("start");
    startResetButton.classList.add("reset");
    isCounting = true;
    countdown();
  } else {
    startResetButton.innerText = "Start";
    startResetButton.classList.remove("reset");
    startResetButton.classList.add("start");
    clearInterval(intervalId);
    isCounting = false;
    populateValues();
  }
};

const countdown = () => {
  const intervalDuration = parseInt(document.getElementById("interval").value);
  const breakDuration = parseInt(document.getElementById("break").value);
  const intervalTimer = document.getElementById("interval-timer");
  const breakTimer = document.getElementById("break-timer");

  const playSound = document.getElementById("sound").checked;
  const audio = new Audio("ding.mp3");

  let currentType = "break";
  let currentInterval = intervalDuration;
  let currentBreak = breakDuration;

  intervalId = setInterval(() => {
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
