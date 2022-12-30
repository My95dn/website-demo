const input = document.querySelector('.js')
const resutl = document.querySelector('.class')
const item = document.querySelectorAll('li')


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            let sec = document.createElement('div')
            sec.className = 'product'
            sec.innerHTML = ` 
                <ul>

                    <img src="${element.image}">
                    <li>${element.title}</li>
                    <li>${element.price}</li>
                    
                </ul>

            `
            resutl.appendChild(sec)
        })
    })


input.oninput = function() {
    let pro = document.querySelectorAll('.product')
    pro.forEach(element => {
        let value = input.value.toLowerCase()
        let sub = element.innerText.toLowerCase()
        if(sub.includes(value)) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'

        }
    })
}