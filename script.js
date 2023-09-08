const audio = new Audio("./media/Szedann.mp3")

document.body.appendChild(audio)

document.getElementById("pronunciation").onclick = () => audio.play()

const timeElement = document.getElementById("time")

const updateTime = () => {
    const now = new Date()
    const timeZone = "Europe/Warsaw"
    timeElement.innerText = now.toLocaleTimeString(navigator.language, { timeZone, timeStyle: "short" })
    const dayText = "I'm probably awake! ☀️"
    const nightText = "I'm probably sleeping. 🛏️"
    const hour = (now.getUTCHours() - now.getTimezoneOffset() / 60) % 24
    const isDay = (hour >= 8 && hour < 23)
    const element = document.getElementById("timeActivity")
    element.innerText = isDay
        ? dayText
        : nightText
    element.className = isDay ? "day" : "night"
}

updateTime()
setInterval(updateTime, 10000)

let jsOnElement
while (jsOnElement = document.querySelector(".js-on")) {
    jsOnElement.classList.remove("js-on")
}