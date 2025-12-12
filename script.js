var state = "home";

const calender = [2, 5, 8, 10, 12, 15, 18, 20, 22, 25, 27]; // temp data

document.getElementById("calender").innerHTML += generateCalender();

function navigate(to) {
    document.getElementById("nav-menu").querySelector("#" + state).classList.remove("active");
    document.getElementById("nav-menu").querySelector("#" + to).classList.add("active");
    document.querySelector("section#" + state).classList.remove("active");
    document.querySelector("section#" + to).classList.add("active");
    state = to;
}

function generateCalender() {
    let html = "";
    for (let i = 0; i < 28; i++) {
        if (calender.includes(i + 1)) {
            html += `<div class="square filled"></div>`;
            continue;
        }
        html += `<div class="square"></div>`;
    }
    return html;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

navigate("statistics");