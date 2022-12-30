let father = document.querySelector('.class')
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let sub = data.products
        sub.forEach(element => {
            let sec = document.createElement('div')
            sec.className = 'product'
            sec.innerHTML = ` 
                <ul>
                    <img src="${element.thumbnail}">
                    <li>${element.title}</li>
                    <li>${element.price}</li>

                </ul>
            `
            father.appendChild(sec)
        })
    })
