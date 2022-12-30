const img = document.querySelector('.img')
const sub = document.querySelector('.sub')
const visit = document.querySelector('.visit')




let array = [
    "../img/anh3.jpg",
    "../img/anh4.jpg",
    "../img/anh2.jpg"
]
let value = 0
function handlElement() {
    value++
    if(value >= array.length) {
        value = 0
    }
    img.src = array[value]
}
visit.onclick = function() {
    handlElement()
}
function preelement() {
    value--
    if(value < 0) {
        value = array.length -1
    }
    img.src = array[value]
}
sub.onclick = function( ) {
    preelement()
}
setInterval(handlElement, 3000)