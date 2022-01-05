// obtener valores de entrada
let entradaFiltro = document.getElementById('entradaFiltro');
// evento listener, comenza a ejecutar la funcion filtrarNombres
entradaFiltro.addEventListener('keyup', filtrarNombres);

function filtrarNombres(){
// obtener valor de entrada 
let valorFiltro = document.getElementById('entradaFiltro').value.toUpperCase();

// obtener nombres de la lista
let ul = document.getElementById('nombres');
// obtener los items de la lista
let li = ul.querySelectorAll('li.collection-item');

// recorrer los items de la lista
for(let i = 0;i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    // si coincide el nombre con el valor de entrada
    if(a.innerHTML.toUpperCase().indexOf(valorFiltro) > -1){
        li[i].style.display = '';
    } else {
        li[i].style.display = 'none';
        }
}
}