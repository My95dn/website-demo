var input = document.querySelector('#father'); 
var summit = document.getElementsByTagName("button")[0]; 
var lis = document.getElementsByTagName("ul")[0];
var subtext = document.getElementsByTagName("li")[0];
summit.onclick = function() {
   if(!input) {
      alert('vui lòng nhập thông tin')
      return false
   }
   var value = input.value
   var array = []
   array.push({
      name: value
   })
   input.value = ''
   handlElement(array)

}
function handlElement(array = []) {
   var sub = '<ul>'
   array.forEach((e)=> {
      sub += `<li>${e.name}</li>`
   }) 
   sub += '</ul>'
   document.querySelector('.return').innerHTML = sub

 
   
}
