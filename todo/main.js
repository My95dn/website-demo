const btn = document.querySelector('button')
const input = document.querySelector('#father')
const resutl = document.querySelector('.return')



renderElement(local())
btn.onclick = function() {
    let value = input.value
    let ob = {
        name: value
    }
    let array = local()
    let face = this.getAttribute('id')
    if(face === 0 || face) {
        array[face] = ob
        this.removeAttribute('id')
    } else {

        array.push(ob)
    }
    localStorage.setItem('array', JSON.stringify(array))
    renderElement(array)
}
function renderElement(data) {
    let ul = `<ul>`
    data.forEach((element, index) => {
        ul += `
            <li>${element.name}
            <span onclick="dalete(${index})">xóa</span>
            <span onclick="edit(${index})">sửa</span>

            </li>
        `
    })
    ul += `</ul>`
    resutl.innerHTML = ul
}
function dalete(id) {
    let sub = local()
    sub.splice(id, 1)
    localStorage.setItem('array', JSON.stringify(sub))
    renderElement(sub)
}
function edit(id) {
    let fa = local()
    input.value = fa[id].name
    btn.setAttribute('id', id)
}
function local() {
    return localStorage.getItem('array') ? JSON.parse(localStorage.getItem('array')) : []
}