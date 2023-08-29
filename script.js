const audio = new Audio("./media/Szedann.mp3")

document.body.appendChild(audio)

document.getElementById("pronounciation").onclick = () => audio.play()


const timeElement = document.getElementById("time")

const updateTime = () => {
    timeElement.innerText = new Date().toLocaleTimeString(navigator.language, { timeZone: "Europe/Warsaw", timeStyle: "short" })
}

updateTime()
setInterval(updateTime, 10000)