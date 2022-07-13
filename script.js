// Inicio del programa

alert("Bienvenido a Todo Movil")

// Variables constantes de calculo de intereses por x cantidad de meses

let precioFinal = function (precio, cuota) {
    return precio / cuota
  };

// Variables sin asignar

let nombre, marca, monto, cuota, recalcular

// Se agrega un ciclo do/while para que el usuario pueda ingresar su nombre completo, correo, monto a calcular
do {

do {
    nombre = prompt("Ingrese su nombre:").toLowerCase()
}while(!isNaN(nombre || nombre.length <0))

do {
    correo = prompt("Ingrese su correo:").toLowerCase()
}while(!isNaN(correo || correo.length <0))

alert("Las marcas disponibles son: SAMSUNG, APPLE, LG, MOTOROLA, HUAWEI, XIAOMI")

do {
    marca = prompt("Ingrese la marca que prefiera").toUpperCase()
}while(!isNaN(marca || marca.length <0))

switch(marca) {

    case "SAMSUNG":
        precio = 45000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "APPLE":
        precio = 90000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "LG":
        precio = 75000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "MOTOROLA":
        precio = 38000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "HUAWEI":
        precio = 23000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "XIAOMI":
        precio = 32000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    
}
// Se procede a preguntar al usuario si desea realizar una nueva consulta

recotizar = prompt("¿Desea realizar una nueva consulta?").toLowerCase()

}while(recotizar!="no")

// Se agregan arrays de modelos de productos de la marca samsung, apple y lg (faltan actualizar mas productos) 


//Se crea un objeto (agregado de su valor en dolares)
class Producto {
    constructor(marca, modelo, precioDeLista){
        this.marca = marca.toUpperCase();
        this.modelo = modelo;
        this.precioDeLista = precioDeLista;
    }  
    enDolares() {
        this.precioDeLista = this.precioDeLista / 250;
    }
}

const productos = [];


productos.push(new Producto ("Samsung", "GalaxyS22", 150000));
productos.push(new Producto ("Apple", "Iphone 13", 250000));
productos.push(new Producto ("LG", "Velvet 5G", 38900));

for (const dolares of productos) dolares.enDolares()
console.log(productos)




