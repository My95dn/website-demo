const input = document.querySelector('#father')
const btn = document.querySelector('button')
const result = document.querySelector('.return')




btn.onclick = function() {
    let value = input.value
    let ob = {
        name: value
    }
    let array = local()
    let sem = this.getAttribute('id')
    if(sem === 0 || sem) {
        array[sem] = ob
        this.removeAttribute('id')
    } else {
        array.push(ob)

    }
    localStorage.setItem('array', JSON.stringify(array))
    renderElement(array)
}
function renderElement(data) {
    let ul = `<ul>`
    data.some((element, index) => {
        ul += `
            <li>${element.name}
            <span onclick="dalete(${index})">xóa</span>
            <span onclick="edit(${index})">sửa</span>

            </li>
        `
    })
    ul += `</ul>`
    result.innerHTML = ul
}
function dalete(id) {
    let song = local()
    song.splice(id, 1)
    localStorage.setItem('array', JSON.stringify(song))
    renderElement(song)

}
function edit(id) {
    let sub = local()
    input.value = sub[id].name
    btn.setAttribute('id', id)
}
function local() {
    return localStorage.getItem('array') ? JSON.parse(localStorage.getItem('array')) : []
}