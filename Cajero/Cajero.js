
//// //Proceso
// const SaldoDisponible=SaldoCuenta - MontoRetirar
// if (SaldoDisponible<0) {
//    //Salida
//     console.log("Su saldo no es suficiente para retirar "+MontoRetirar)
// } else {
//     //Salida
//     console.log("Monto Disponible "+SaldoDisponible)
// }


// //Entrada de variables version 1
// let MontoRetirar
// let SaldoCuenta=20000;
// let Nombre="Cristian"
// Nombre=prompt("Cual es su Usuario?")
// alert("Su saldo es "+SaldoCuenta)
// MontoRetirar=parseInt(prompt("Ingrese el Monto a Retirar"))

// if (MontoRetirar>SaldoCuenta) {
//     alert("Su saldo "+ SaldoCuenta + " No es Suficiente Para Retirar " + MontoRetirar)
// } else {

//     SaldoCuenta=SaldoCuenta-MontoRetirar
//     alert("Se retiraron "+MontoRetirar)
//     alert("Su saldo de Cuenta es: "+SaldoCuenta)

//     //otra forma
//     alert(`Se retiraron ${MontoRetirar}`)
//     alert(`Su saldo de Cuenta es: ${SaldoCuenta}`)

// }

//Entrada de variables version 2
// let MontoRetirar
// let SaldoCuenta=20000;
// let Nombre="Cristian"
// Nombre=prompt("Cual es su Usuario?")
// alert(`Su saldo ${Nombre} es ${SaldoCuenta}`)
// MontoRetirar=parseInt(prompt("Ingrese el Monto a Retirar"))

// if (isNaN(MontoRetirar)&& MontoRetirar<SaldoCuenta) {
//     SaldoCuenta=SaldoCuenta-MontoRetirar
//     alert(`Se retiraron ${MontoRetirar}`)
//     alert(`Su saldo de Cuenta es: ${SaldoCuenta}`)
// } 
// else {
//     if (isNaN(MontoRetirar)=false) {
//         alert("El Número no es Válido")
//     }
//     else{
//         alert("Su saldo "+ SaldoCuenta + " No es Suficiente Para Retirar " + MontoRetirar)
//         }
//     }


    //version 3
    let SaldoDisponible=100000
    let Monto
    let Esposible
    function SolicitarMontoRetiro(Monto,Esposible) {
        Monto=parseInt(prompt("Ingrese un Monto de Retiro"))
        if (isNaN(Monto)) {
            Esposible=true
        }
        else{
            Esposible=false
            alert("No es un Número Válido")
        }
    
    }

    function ControlarSaldo(Monto,SaldoDisponible,Esposible) {
        if (Monto<SaldoDisponible) {
            Esposible=true
        }
        else{
            Esposible=false
            alert(`El Monto ${Monto} Supera el Saldo Disponible de ${SaldoDisponible}`)

        }
    }

    function Valido(Monto,SaldoDisponible,Esposible) {
        if (Esposible) {
            SaldoDisponible=SaldoDisponible-Monto
            alert(`Se retiraron ${Monto}`)
            alert(`Su saldo de Cuenta es: ${SaldoDisponible}`)
        }
    }

    SolicitarMontoRetiro(Monto,Esposible)
    ControlarSaldo(Monto,SaldoDisponible,Esposible)
    Valido(Monto,SaldoDisponible,Esposible)
