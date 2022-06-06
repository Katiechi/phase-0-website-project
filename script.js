const textOne = document.querySelector(".one")
const strText = textOne.textContent
const splitText = strText.split("")
textOne.textContent = ""

for(let i=0; i<splitText.length; i++){
    textOne.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0
let timer = setInterval(onTick,50)


function onTick(){
    const span = textOne.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === splitText.length){
        complete()
        return
    }
}

function complete (){
    clearInterval(timer)
    timer = null
}
