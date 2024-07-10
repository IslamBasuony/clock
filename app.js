const hour = document.querySelector(".hour")
const minte = document.querySelector(".minte")
const second = document.querySelector(".second")

function clock() {
    const time = new Date()
    let hours =time.getHours() / 12
    let mints = time.getMinutes() / 60
    let seconds = (time.getSeconds() / 60)
    timer(hour , hours)
    timer(minte , mints)
    timer( second , seconds )
    const digetal = `${hours *12} : ${mints*60} : ${(seconds*60)+1}`
    document.querySelector(".digetal").innerHTML=digetal;

}

function timer(ele , rotate) {
    ele.style.setProperty('--rotation' , rotate * 360)
}

setInterval(clock , 1000)


