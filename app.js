const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")
const progressBar = document.querySelector("#progress")

const showCountTime = ()=>{
    const date = new Date();
    const countHour = date.getHours()
    const countMinute = date.getMinutes();
    const countSecond = date.getSeconds();
    hour.innerText = countHour < 10 ? "0"+countHour : countHour
    minute.innerText = countMinute < 10 ? "0"+countMinute : countMinute
    second.innerText = countSecond < 10 ? "0"+countSecond : countSecond
    progressBar.style.width = (countSecond / 60) * 100 + '%'
}
setInterval(showCountTime,1000)