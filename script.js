const userName = document.querySelector(`[data-testid="slackUserName"]`);
userName.textContent = "Fvtima"

const image = document.querySelector(`[data-testid="slackDisplayImage"]`);
image.src = "/slack.jpg"
image.alt = "Fvtima"

const track = document.querySelector(`[data-testid="myTrack"]`);
track.textContent = "Frontend Track"

const github = document.querySelector(`[data-testid="githubURL"]`);
github.href = "https://github.com/Fv-tima/Stage-One-task"
github.textContent = "Github Repository"


function getCurrentDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return days[today.getDay()];
}

function updateDay() {
  const day = document.querySelector(`[data-testid="currentDayOfTheWeek"]`);
  day.textContent = `Today is ${getCurrentDay()}`;
}
updateDay();

function updateUTCTime() {
  const time = document.querySelector(`[data-testid="currentUTCTime"]`);
  const currentTime = new Date().toUTCString();
  time.textContent = currentTime;
}
updateUTCTime();
