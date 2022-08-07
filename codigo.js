//Creo la clase de objeto
class Comida {
    constructor(nombre, referencia, categoria, precio) {
        this.nombre = nombre;
        this.referencia = referencia;
        this.categoria = categoria;
        this.precio = precio;
    }
}

//Categorizo arrays
const platos=[
    {
        nombre:"Ensalad Mixta",
        referencia:"refA001",
        categoria: "Entrantes",
        precio: 6.90
    },
    {
        nombre:"Ensalada César",
        referencia:"refA002",
        categoria: "Entrantes",
        precio: 9.90
    },
    {
        nombre:"Saquitos bolettus",
        referencia:"refA003",
        categoria: "Entrantes",
        precio: 16.90
    }

];


//Añado productos por push

platos.push(new Comida("Macarrones", "refB001", "Principal", 18));
platos.push(new Comida("Arroz con bogavante",  "refB002", "Principal", 28));
platos.push(new Comida("Solomillo ibérico",  "refB003", "Principal",25));
platos.push(new Comida("Tarta de fresa", "refC001", "Postres", 3));



console.log(platos);

for(const plato of platos){
    console.log("Categoría: "+ plato.categoria);
}

//Funcion que ordena los productos por orden alfabético
function ordenAlfabetico (a,b) {
    return (a.nombre > b.nombre);
}

console.table(platos.sort(ordenAlfabetico));



//Funcion que ordena los productos por precio de mayor a menor
function precioDescendente (a, b) {
    return (b.precio - a.precio);
}

console.table(platos.sort(precioDescendente));
