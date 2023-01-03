const sub = document.querySelector('.sub-nav')
const sec = document.querySelector('.navigation')
const father = document.querySelector('.selec')
const section = document.querySelector('.sub-header')



sub.onmouseover = function() {
    sub.style.position = 'absolute'
    sub.style.left = Math.floor(Math.random() * 60  ) + '%'
    sub.style.top = Math.floor(Math.random() * 60 ) + '%'

}
sec.onclick = function() {

        father.style.display = 'block'
        
        sub.style.opacity = '0'
        sub.style.transition = 'all 1s'
        

        section.style.opacity = '0'
        section.style.transition = 'all 1s'

        
        

    
}