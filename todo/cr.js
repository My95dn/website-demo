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
    if(confirm('Mãi Yêu Cậu')) {
        father.style.display = 'block'
        
        sub.style.display = 'none'
       
        

        section.style.display = 'none'
        
        

    }
}