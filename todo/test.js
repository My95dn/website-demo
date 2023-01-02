const img = document.querySelector('.img')
const sub = document.querySelector('.sub')
const visit = document.querySelector('.visit')



let array = [
    "../img/anh3.jpg",
    "../img/anh4.jpg",
    "../img/anh2.jpg"
]
let index = 0

function handleElement() {
    index++
    if(index >= array.length) {
        index = 0
    }
    img.src = array[index]
}
visit.onclick = function() {
    handleElement()
}
function preven() {
    index--
    if(index < 0) {
        index = array.length -1
    }
    img.src = array[index]
}
sub.onclick = function() {
    preven()
}
setInterval(handleElement, 3000)