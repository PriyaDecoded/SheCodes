let currentTime = new Date();
let m = currentTime.getMinutes();
if (m < 10) {
  m = `0${m}`;
}
let h = currentTime.getHours();
if (h < 10) {
  h = `0${h}`;
}
let d = currentTime.getDay();
let s = currentTime.getSeconds();
let today = currentTime.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#currentDate");
dateElement.innerHTML = `${days[today]} ${h}:${m}`;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
