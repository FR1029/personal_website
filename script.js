// Timeline Slider
const slider = document.getElementById("timelineRange");
const output = document.getElementById("sliderOutput");
const events = [
  "Day 1: Orientation, Hostel, Rain.",
  "Semester 1 Mid: More Orientations, More Rain🌧️😅, NSS joins.",
  "Semester 1 End: CS105, MA105, CS101, Again Orientations😇.",
  "Semester 2: CS104, Projects, MS101.",
  "Spring Vacation: Joined NSS Web Team, NSS EnS Team, SoS, SoC, LS.",
];
slider.oninput = () => {
  output.textContent = events[slider.value - 1];
};

// Guestbook Form
const form = document.getElementById("guestForm");
const messagesDiv = document.getElementById("guestMessages");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name && message) {
    const entry = document.createElement("p");
    entry.innerHTML = `<strong>${name}</strong>: ${message}`;
    messagesDiv.appendChild(entry);
    form.reset();
  }
});