const tabItem = document.querySelectorAll('.tab-item')
const tabPane = document.querySelectorAll('.tab-pane')
const sub = document.querySelector('.line')
        
tabItem.forEach((tab, index)=> {
    tab.onclick = function() {
        sub.style.left = this.offsetLeft + 'px'
        sub.style.width = this.offsetWidth + 'px'
        
        let good = tabPane[index]
        const active = document.querySelector('.tab-item.active')
        const delay = document.querySelector('.tab-pane.active')
        active.classList.remove('active')
        delay.classList.remove('active')
        this.classList.add('active')
        good.classList.add('active')
       
    }
}) 
