const countdown = () => {
  const intervalDuration = parseInt(document.getElementById("interval").value);
  const breakDuration = parseInt(document.getElementById("break").value);
  const intervalTimer = document.getElementById("interval-timer");
  const breakTimer = document.getElementById("break-timer");

  let currentType = "interval";
  let currentInterval = intervalDuration;
  let currentBreak = breakDuration;

  const now = new Date(Date.now());
  console.log(now.getSeconds());

  setInterval(() => {
    if (currentType === "interval") {
      currentInterval--;
      intervalTimer.innerText = currentInterval;

      if (currentInterval === 0) {
        currentInterval = intervalDuration + 1;
        const now = new Date(Date.now());
        console.log(now.getSeconds());
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
