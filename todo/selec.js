const btn = document.querySelector('.but')
const btns = document.querySelector('.buts')
const input = document.querySelector('.js')


btn.onclick = function() {
   input.value++

}
btns.onclick = function() {
   input.value--
   if(input.value < 0) {
      input.value = 0
   }

}
input.oninput = function() {
   if(isNaN(input.value)) {
      input.value = 0
   }
}
