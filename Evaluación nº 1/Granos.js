let MaizRecibido =3000
let ValorValido=false
let silo1 = parseInt(prompt("Escriba el Stock del Silo 1"))
let silo2 = parseInt(prompt("Escriba el Stock del Silo 2"))
let silo3 = parseInt(prompt("Escriba el Stock del Silo 3"))
let EstadodelMaiz

function ControlarEstado(ValorValido) {
    EstadodelMaiz=prompt("Describa con un Número, el Estado del Maiz"+"\n"+"1 - Bueno"+"\n"+"2 - con Cuerpos Extraños"+"\n"+"3 - Con Humedad")
    EstadodelMaiz=parseInt(EstadodelMaiz)

    if (isNaN(EstadodelMaiz)) {
        alert("Número no Válido")
        ValorValido=False
    
    } else {
        if (EstadodelMaiz>3) {
            alert("Número no Contemplado")
            ValorValido=False
        }
    }
}

function ControlarStock(EstadodelMaiz) {
    switch (EstadodelMaiz) {
        case 1:
            alert("El Stock del Silo 1 es: "+silo1+"\n"+" y se Agregarán "+MaizRecibido)
            silo1=silo1+MaizRecibido
            alert("El Stock Nuevo del Silo 1 es: "+silo1)
            break;
        case 2:
            alert("El Stock del Silo 2 es: "+silo2+"\n"+" y se Agregarán "+MaizRecibido)
            silo2=silo2+MaizRecibido
            alert("El Stock Nuevo del Silo 2 es: "+silo2)
        break;
        case 3:
            alert("El Stock del Silo 3 es: "+silo3+"\n"+" y se Agregarán "+MaizRecibido)
            silo3=silo3+MaizRecibido
            alert("El Stock Nuevo del Silo 3 es: "+silo3)
        break;

    }
    let stocktotal=parseInt(silo1+silo2+silo3)

    alert("El Stock del Maiz en Buen Estado es: "+silo1+"\n"+"El Stock del Maiz con Cuerpos Extraños es: "+silo2+"\n"+"El Stock de Maiz Húmedo es: "+silo3+"\n"+"El Stock Total es: "+stocktotal)
}

ControlarEstado(ValorValido)
ControlarStock(EstadodelMaiz)



