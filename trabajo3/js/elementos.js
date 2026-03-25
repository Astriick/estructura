let menuAdmin = [
    {titulo: "Ver", liga:"https://www.google.com/"},
    {titulo: "Borrar", liga:"https://www.ucol.mx/"},
    {titulo: "Imprimir", liga:"https://www.youtube.com/"},
    {titulo: "Salir", liga:"https://www.facebook.com/"}
];

let links = document.querySelectorAll("ul li a");
console.log(links);

let cambiar_menu = document.querySelector('#cambiar_menu');
cambiar_menu.addEventListener('click', function(event) {
    alert("Modificando ...")
    event.preventDefault();
    links.forEach((link, i) => {
        if (menuAdmin[i]) {
            link.textContent = menuAdmin[i].titulo;
            link.href = menuAdmin[i].liga;
        }
    })
});

function mostrar_datos () {
    alert ('Mostrar datos');
    let nombre = document.getElementById('nombre').value;
    let numCuenta = document.getElementById('numCuenta').value;
    let nomCharla = document.getElementById('nomCharla').value;
    let cupoMaximo = document.getElementById('cupoMaximo').value;
    let etiqueta_usuario = document.getElementById('m_nombre');
    let etiqueta_numCuenta = document.getElementById('m_numCuenta');
    let etiqueta_nomCharla = document.getElementById('m_nomCharla');
    let etiqueta_cupoMaximo = document.getElementById('m_cupoMaximo');
    etiqueta_usuario.textContent = nombre;
    etiqueta_numCuenta.textContent = numCuenta;
    etiqueta_nomCharla.textContent = nomCharla;
    etiqueta_cupoMaximo.textContent = cupoMaximo;
}

function datos() {
    let conferencia = [];
    let nomUsuario = document.getElementById('nombre').value;
    let numCuenta = document.getElementById('numCuenta').value;
    let nomCharla = document.getElementById('nomCharla').value;
    let cupoMaximo = document.getElementById('cupoMaximo').value;
    console.log(nomUsuario, numCuenta, nomCharla,cupoMaximo);
    let datos = {
        nombre: nomUsuario,
        cuenta: numCuenta,
        charla: nomCharla,
        cupos: cupoMaximo
    }
    conferencia.push(datos);

    console.log('recorriendo array');

console.table(conferencia);
const arrayDatos = conferencia.length;
console.log(`El tamaño del array es de: ${arrayDatos}`);
conferencia.forEach((valor, index)=>{
    console.log(index, valor.nombreD, valor.cuentaD, valor.charlaD, valor.cuposD);
});
}