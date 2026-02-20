document.write('Una agenda');

let seguir = true;
let datos = [];

while(seguir) {
    let opcion = parseInt(prompt('Escoge una de las opciones: \n 1.- agregar \n 2.- listar \n 3.- actualizar \n 4.- eliminar \n 5.- salir'));
    switch(opcion) {
        case 1:
            alert('Escogiste agregar');
            let nombre = prompt('Ingresa tu nombre');
            let apellidos = prompt('Ingresa tus apellidos');
            let facultad = prompt('Ingresa tu facultad');
            let telefono = parseInt(prompt('Ingresa tu teléfono'));
            let edad = parseInt(prompt('Ingresa tu edad'));
            let contacto = {
                id: datos.length + 1,
                nombre: nombre,
                apellidos: apellidos,
                facultad: facultad,
                telefono: telefono,
                edad: edad
            };
            datos.push(contacto);
            alert('Contacto agregado correctamente');
            console.table(datos);
            break;
        case 2:
            alert('escogiste listar');
            if(datos.length === 0){
                alert('No hay contactos registrados');
            } else {
                console.table(datos);
            }
            break;
        case 3:
            alert('Escogiste actualizar');
            if(datos.length === 0){
                alert('No hay contactos para actualizar');
                break;
            }
            let indiceActualizar = parseInt(prompt('Ingresa el índice del contacto a actualizar (empieza desde 0)'));
            if(indiceActualizar >= 0 && indiceActualizar < datos.length){
                datos[indiceActualizar].nombre = prompt('Nuevo nombre');
                datos[indiceActualizar].apellidos = prompt('Nuevos apellidos');
                datos[indiceActualizar].facultad = prompt('Nueva facultad');
                datos[indiceActualizar].telefono = parseInt(prompt('Nuevo teléfono'));
                datos[indiceActualizar].edad = parseInt(prompt('Nueva edad'));

                alert('Contacto actualizado correctamente');
                console.table(datos);
            } else {
                alert('Índice inválido');
            }
            break;
        case 4:
            alert('Escogiste eliminar');
            if(datos.length === 0){
                alert('No hay contactos para eliminar');
                break;
            }
            let indiceEliminar = parseInt(prompt('Ingresa el índice del contacto a eliminar (empieza desde 0)'));
            if(indiceEliminar >= 0 && indiceEliminar < datos.length){
                datos.splice(indiceEliminar, 1);
                alert('Contacto eliminado correctamente');
                console.table(datos);
            } else {
                alert('Índice inválido');
            }
            break;
        case 5:
            alert('Escogiste salir');
            seguir = false;
            break;
        default:
            alert('No recibí una opción válida');
            break;
    }
}