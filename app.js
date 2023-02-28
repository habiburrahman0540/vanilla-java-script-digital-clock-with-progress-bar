const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")
const progressBar = document.querySelector("#progress")

const showCountTime = ()=>{
    const date = new Date();
    const countHour = date.getHours()
    const countMinute = date.getMinutes();
    const countSecond = date.getSeconds();
    hour.innerText = countHour
    minute.innerText = countMinute
    second.innerText = countSecond
    progressBar.style.width = (countSecond / 60) * 100 + '%'
}
setInterval(showCountTime,1000)