//ALGORITMO CON CONDICIONAL
//Carrito de comprass

const TALLARINES = 500;
const SORRENTINOS = 850;
const RAVIOLONES = 750;

function calcularPrecio(cantidad, producto) {
    let calculoPrecio = cantidad * producto;
    return calculoPrecio;
}

let kilos, total;

//Comienzo algoritmo con ciclo + algoritmo con condicional 

for (let i = 0; i < 10; i++) {

    let opcion = prompt("SELECCIONE UN PRODUCTO\n1-Tallarines\n2-Sorrentinos\n3-Raviolones");

    if (opcion == "1") {
        kilos = parseFloat(prompt("Ingrese cantidad deseada\n1-1kg\n2-2kg\n3-3kg"))

        if (kilos > 3) {
            alert("Para compras mayores acercarse a la sucursal");
        } else {
            let total = calcularPrecio(kilos, TALLARINES)
            alert("El total es de $ " + total)
        }

    } else if (opcion == "2") {
        kilos = parseFloat(prompt("Ingrese cantidad deseada\n1-1kg\n2-2kg\n3-3kg"))

        if (kilos > 3) {
            alert("Para compras mayores acercarse a la sucursal");
        } else {
            total = calcularPrecio(kilos, SORRENTINOS)
            alert("El total es de $ " + total)
        }

    } else if (opcion == "3") {
        kilos = parseFloat(prompt("Ingrese cantidad deseada\n1-1kg\n2-2kg\n3-3kg"))

        if (kilos > 3) {
            alert("Para compras mayores acercarse a la sucursal");
        } else {
            total = calcularPrecio(kilos, RAVIOLONES)
            alert("El total es de $ " + total)
        }

    } else {
        alert("Para otros productos acercarse a la sucursal");
    }

    //ALGORITMO CON CICLO
    // Turno para retirar pedido

    let ingresarturno = parseFloat(prompt("Ingresar turno de retiro\n1-Manana\n2-Tarde"));
    while (ingresarturno > 2 || ingresarturno < 1) {
        ingresarturno = parseFloat(prompt("Valor incorrecto\n\nIngresar turno de retiro\n1-Manana\n2-Tarde"));
    }
    let pedido = i + 1;
    let turno;
    ingresarturno == 1 ? turno = "mañana" : turno = "tarde";
    alert("Turno N° " + pedido + " Retira por la " + turno);
}
alert("No hay mas turnos disponibles");

