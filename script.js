// Inicio del programa

alert("Bienvenido a Todo Movil")

// Variables constantes de calculo de intereses por x cantidad de meses

let precioFinal = function (precio, cuota)  {
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
    constructor(marca, modelo, memoriaGb, precioDeLista){
        this.marca = marca.toUpperCase()
        this.modelo = modelo
        this.memoria = memoriaGb
        this.precioDeLista = precioDeLista
    }  
    enDolares() {
        this.precioDeLista = this.precioDeLista / 250
    }
}

const productos = []
let ingresarProductos = function(mar, mod, alm, pre) {
    productos.push(new Producto (mar, mod, alm, pre)) 
}

ingresarProductos("Samsung", "GalaxyS22", 128, 150000)
ingresarProductos("Samsung", "GalaxyS21", 256, 140000)
ingresarProductos("Samsung", "GalaxyS20", 512, 130000)
ingresarProductos("Apple", "Iphone 13", 256, 250000)
ingresarProductos("Apple", "Iphone 12", 128, 240000)
ingresarProductos("Apple", "Iphone 11", 512, 260000)
ingresarProductos("LG", "Velvet 5G", 512, 120000)
ingresarProductos("LG", "Oled Z2", 128, 130000)
ingresarProductos("LG", "Oled A2", 512, 150000)
ingresarProductos("Huawei", "P50", 256, 100000)
ingresarProductos("Huawei", "P40", 128, 90000)
ingresarProductos("Huawei", "P30", 512, 80000)
ingresarProductos("Motorola", "G Stylus", 512, 170000)
ingresarProductos("Motorola", "Edge 30 PRO", 256, 160000)
ingresarProductos("Motorola", "Edge 20 PRO", 128, 150000)

for (const dolares of productos) dolares.enDolares()
console.log(productos)

// Se desea consultar precio final con impuestos incluidos

for


