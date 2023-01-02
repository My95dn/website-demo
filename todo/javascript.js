const input = document.querySelector('.js')
const resutl = document.querySelector('.class')
const item = document.querySelectorAll('li')

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            let sub = document.createElement('div')
            sub.className = 'product'
            sub.innerHTML = `
                <ul>
                    <img src="${element.image}">
                    <li>${element.title}</li>
                    <li>${element.price}</li>

                </ul>
            `
            resutl.appendChild(sub)
        })
    })

input.oninput = function() {
    let thub = document.querySelectorAll('.product')
    thub.forEach(element => {
        let value = input.value.toLowerCase()
        let sec = element.innerText.toLowerCase()
        if(sec.includes(value)) {
            element.style.display = 'block'

        } else {
            element.style.display = 'none'

        }
    })
}
