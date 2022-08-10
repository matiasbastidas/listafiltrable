const entrada = document.querySelector('#entradaBuscador')
const listaLibros = document.querySelector('#libros')

let libros = []

window.addEventListener('DOMContentLoaded', async () => {
    listaLibros.innerHTML = "<h1>Cargando...</h1>"
    const datos = await cargarLibros()
    libros = datos.data
    renderizarLibros(libros)
})

async function cargarLibros() {
    const respuesta = await fetch('https://fakerapi.it/api/v1/books?_quantity=1000')
    return await respuesta.json()
}

entrada.addEventListener('keyup', e => {
    const nuevosLibros = libros.filter(libro => `${libro.title.toLowerCase()} ${libro.author.toLowerCase()}`
    .includes(entrada.value.toLowerCase()))
    renderizarLibros(nuevosLibros)
})

const crearItemsLibros = libros => libros.map(libros => `<li>${libros.title} - ${libros.author}</li>`).join(' ')

function renderizarLibros(libros) {
    const itemsString = crearItemsLibros(libros)
    listaLibros.innerHTML = itemsString
}