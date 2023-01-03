const input = document.querySelector('.js')
const sub = document.querySelector('.class')
const item = document.querySelectorAll('li')


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            let father = document.createElement('div')
            father.className = 'product'
            father.innerHTML = `
                <ul>
                    <img src="${element.image}">
                    <li>${element.title}/li>
                    <li>${element.price}/li>

                </ul>
            `
            sub.appendChild(father)
        })
    })

input.oninput = function() {
    let pro = document.querySelectorAll('ul')
    pro.forEach(element => {
        let value = input.value.toLowerCase()
        let sec = element.innerText.toLowerCase()
        if(sec.includes(value)) {
            console.log(sec)
            
            element.style.display = 'block'
        } else {
            element.style.display = 'none'

        }
    })
}