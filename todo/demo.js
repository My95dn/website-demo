const like = document.querySelector('.demo')
const sub = document.querySelector('.test')
like.onclick = function() {
    localStorage.getItem('sex', JSON.parse(sex))
   let sex = sub.style.color = 'blue'
   localStorage.getItem('sex', JSON.stringify(sex))
}