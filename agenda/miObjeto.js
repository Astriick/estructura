const productos = [  {
id: 1, nombre: "Laptop", precio: 12000 },
  {
id: 2, 
nombre: "Mouse", 
precio: 300 },
  {
id: 3, 
nombre: "Teclado", 
precio: 800 }
];
console.log("Voy a recorrer el array");

console.table(productos, ["nombre"]);
const longArray = productos.length;
console.log(`el tamaño del array es de: ${longArray}`);  
productos.forEach((valor, index)=>{
    console.log(index, valor.nombre, valor.precio);
});

let mensajeEstado = document.querySelector(`#mensajeEstado`);
console.log(mensajeEstado.textContent);
mensajeEstado.textContent = `Recorri ${longArray} elementos`;