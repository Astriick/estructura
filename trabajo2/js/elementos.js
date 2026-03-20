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
    let nombre = document.getElementById('dinero').value;
    let pass = document.getElementById('hola').value;
    let etiqueta_usuario = document.getElementById('m_nombre');
    let etiqueta_pass = document.getElementById('m_contra');
    etiqueta_usuario.textContent = nombre;
    etiqueta_pass.textContent = pass;
}