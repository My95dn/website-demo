var input = document.querySelector('#father'); 
var summit = document.getElementsByTagName("button")[0]; 
var lis = document.getElementsByTagName("ul")[0];
var subtext = document.getElementsByTagName("li")[0];
var know = document.querySelector('.return')
var up = document.querySelector('delate')

RenderElement(localstorage())
summit.onclick = function() {
   if(!input.value) {
      alert('vui lòng nhập thông tin')
      return false
      
   }
   
   
   var array = localstorage()
   let buttons = this.getAttribute('id')
   let tank = {name: input.value}
   if(buttons === 0 || buttons) {
     
      array[buttons] = tank
      this.removeAttribute('id')
      
   } else {
      array.push(tank)
   }

   
   
   
      
   
   input.value = ''
   localStorage.setItem('array', JSON.stringify(array))
   
   RenderElement(array)
   

}

function delate(id) {
   if(confirm('bạn có thât sự muốn xóa')) {
      var delate = localstorage()
      delate.splice(id, 1)
      localStorage.setItem('array', JSON.stringify(delate))
      RenderElement(delate)
      
   }
   
}
function update(id) {
   let good = localstorage()
   if(good.length > 0) {
      input.value = good[id].name
      summit.setAttribute('id', id)
     
   }
}
function RenderElement(element) {
   var sub = '<ul>'
   element.forEach((e, index)=> {
      sub += `<li>${e.name}
      <span class="delate" onclick ="delate(${index})">xóa</span>
      <span class="upload" onclick ="update(${index})">sửa</span>
      </li>
               
               
      `  
   }) 
   sub += '</ul>'
   know.style.color = 'aqua'
   know.style.backgroundColor = '#333'
   know.style.margin = '30px'
    
   know.innerHTML = sub

 
   
}
function localstorage() {
   return localStorage.getItem('array') ? JSON.parse(localStorage.getItem('array')) : []
}


