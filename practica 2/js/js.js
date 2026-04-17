document.getElementById('Formulario').addEventListener('button', function (event) {
    event.preventDefault();

    const Id = document.getElementById('id').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const departamento = document.getElementById('autoSizingSelect').value.trim();

    if (!Id || !descripcion || !departamento) {
        alert('Todos los campos son obligatorios');
        return;
    }

    const producto = {
        id: Id, 
        descripcion: descripcion,
        departamento: departamento
    };

    let panelistas = JSON.parse(localStorage.getItem('panelistas')) || [];
    panelistas.push(producto);
    localStorage.setItem('panelistas', JSON.stringify(panelistas));

    alert('Registro realizado con éxito');
    document.getElementById('Formulario').reset();


    mostrarPanel(); 
});

function mostrarPanel() {
    let panelistas = JSON.parse(localStorage.getItem('panelistas')) || [];
    let tabla = document.getElementById('tablaPanelistas');
    
    tabla.innerHTML = ""; 

    panelistas.forEach(p => {

        let fila = `
            <tr>
                <td>${p.id}</td> 
                <td>${p.descripcion}</td>
                <td>${p.departamento}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}


mostrarPanel();