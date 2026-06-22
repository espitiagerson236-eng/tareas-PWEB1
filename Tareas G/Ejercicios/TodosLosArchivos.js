window.onload = function() {
    lanzarMenu();
};

function lanzarMenu() {
    let menuTexto = "SELECCIONA UN EJERCICIO (1-14):\n\n" +
                    "1. Conversor Millas/Km/Metros\n" +
                    "2. Operaciones número 6 cifras\n" +
                    "3. Validador/Sumador de Tiempo\n" +
                    "4. Ecuación Cuadrática\n" +
                    "5. Contador de Temperaturas\n" +
                    "6. Control de Aeronaves\n" +
                    "7. Calculadora Tarifas/Descuentos\n" +
                    "8. Sumatoria Serie Matemática\n" +
                    "9. Encuesta de Deportes\n" +
                    "10. Sistema Acceso con Clave\n" +
                    "11. Contador de Pares Continuo\n" +
                    "12. Buscador Día de la Semana\n" +
                    "13. Suma de Array Fijo\n" +
                    "14. Clasificador Array Dinámico\n\n" +
                    "Escribe 0 o Cancela para salir.";

    while (true) {
        let seleccion = prompt(menuTexto);
        if (seleccion === null || seleccion == 0) {
            break;
        }
        let opcion = parseInt(seleccion);
        if (opcion >= 1 && opcion <= 14) {
            ejecutarEjercicio(opcion);
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }
    }
}

function ejecutarEjercicio(opcion) {
    switch(opcion) {

        case 1: {
            alert("EJERCICIO 1");
            let unidad, cantidad, mi, km, mt;
            unidad = parseInt(prompt('Dijite 1 para millas - 2 para kilometros - 3 para metros'));
            cantidad = prompt('Digite la distancia');
            switch (unidad){
                case 1: 
                    km = cantidad * 1.6093;
                    mt = cantidad * 1609.34;
                    alert(cantidad + ' Millas, equivale a ' + km + 'Kilometros, y a '+ mt + 'metros');
                    break;
                case 2:
                    mi = cantidad * 0.621371;
                    mt = cantidad * 1000;
                    alert(cantidad + ' kilometros, equivalen a ' + mi + 'millas, y a '+ mt + 'metros');
                    break;
                case 3:
                    km = cantidad / 1000;
                    mi = cantidad * 0.000621371;
                    alert(cantidad + ' metros, equivalen a ' + km + 'kilometros, y a '+ mi + 'millas');
                    break;
                default:
                    alert('Valor INCORRECTO');
                    break; 
            }
            break;
        }

        case 2: {
            alert("EJERCICIO 2");
            let d1, d2, d3, d4, d5, d6, num, coc;
            num = prompt('Digite un número de 6 cifras');
            d6 = num % 10;
            coc = Math.trunc(num / 10);
            d5 = coc % 10;
            coc = Math.trunc(coc / 10);
            d4 = coc % 10;
            coc = Math.trunc(coc / 10);
            d3 = coc % 10;
            coc = Math.trunc(coc / 10);
            d2 = coc % 10;
            coc = Math.trunc(coc / 10);
            d1 = coc % 10;
            coc = Math.trunc(coc / 10);

            alert('la suma es: ' + (d3+d4) + '\nLa multiplicacion es: ' + (d1*d6) + '\nLa resta es: ' + (d2-d5));
            break;
        }

        case 3: {
            alert("EJERCICIO 3");
            let hour, minute, second;
            hour = parseInt(prompt("Ingrese horas: "));
            minute = parseInt(prompt("Ingrese minutos: "));
            second = parseInt(prompt("Ingrese segundos: "));

            second++;
            if (second === 60) {
                second = 0;
                minute++;
            }
            if (minute === 60) {
                minute = 0;
                hour++;
            }
            if (hour === 24) {
                hour = 0;
            }

            alert("Nueva hora: " + hour + ":" + minute + ":" + second);
            break;
        }

        case 4: {
            alert("EJERCICIO 4");
            let a = parseFloat(prompt("Ingrese valor de a:"));
            let b = parseFloat(prompt("Ingrese valor de b:"));
            let c = parseFloat(prompt("Ingrese valor de c:"));
            let discriminante = (b * b) - (4 * a * c);

            let res = "Discriminante: " + discriminante + "\n";

            if (discriminante > 0) {
                let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
                let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
                res += "Hay DOS soluciones reales\nx1 = " + x1 + "\nx2 = " + x2;
            } else if (discriminante === 0) {
                let x = (-b) / (2 * a);
                res += "Hay UNA solución real\nx = " + x;
            } else {
                res += "Hay DOS soluciones imaginarias:\n";
                let parteReal = (-b / (2 * a));
                let parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
                res += "x1 = " + parteReal + " + " + parteImaginaria + "i\nx2 = " + parteReal + " - " + parteImaginaria + "i";
            }
            alert(res);
            break;
        }

        case 5: {
            alert("EJERCICIO 5");
            let temp;
            let menores = 0;
            let ceros = 0;
            let mayores = 0;

            while(temp != 99 && temp != -99){
                temp = prompt("Ingrese temperatura");
                if(temp == 99 || temp == -99 || temp === null) {
                    break;
                }
                if(temp < 0){
                    menores = menores + 1;
                }
                if(temp == 0){
                    ceros = ceros + 1;
                }
                if(temp > 0){
                    mayores = mayores + 1;
                }
            }
            alert("Menores que 0: " + menores + "\nIguales a 0: " + ceros + "\nMayores que 0: " + mayores);
            break;
        }

        case 6: {
            alert("EJERCICIO 6");
            let entrada1 = prompt("Escribe el primer digito:");
            let digito1 = parseInt(entrada1);
            if(digito1 % 2 === 0){
                alert("Hay una aeronave en el aire.");
            } else {
                alert("No hay aeronaves en el aire. operacion cancelada.");
                break;
            }

            let entrada2 = prompt("Escribe el segundo digito:");
            let digito2 = parseInt(entrada2);
            let tipoAeronave = "";
            if(digito2 === 1) tipoAeronave = 'Avion Militar';
            else if(digito2 === 2) tipoAeronave = 'Avion civil de carga';
            else if(digito2 === 3) tipoAeronave = 'Avion civil de pasajeros';
            else if(digito2 === 4) tipoAeronave = 'Aeronave sin permiso';
            else if(digito2 === 5) tipoAeronave = 'Aeronave de supertransporte';
            else if(digito2 === 6) tipoAeronave = 'Aeronave enemiga';
            else if(digito2 === 7) tipoAeronave = 'Avion Mixto';
            else if(digito2 === 8) tipoAeronave = 'Helicoptero';
            else if(digito2 === 9) tipoAeronave = 'Globo Aerostatico';
            else if(digito2 === 0) tipoAeronave = 'Dirigible';
            else tipoAeronave = 'Aeronave no registrada';
            alert(tipoAeronave);

            let kilometros = -1;
            while(kilometros < 0){
                let entradaKilometros = prompt('Escribe el tercer digito');
                kilometros = parseInt(entradaKilometros);
            }
            alert('La distancia es: ' + kilometros + ' kilometros ');

            let entrada4 = prompt('Escribe el cuarto digito');
            let digito4 = parseInt(entrada4);
            if(digito4 === 0 || digito4 === 1){
                alert("La direccion es: Norte");
            }else if(digito4 === 2 || digito4 === 3){
                alert("La direccion es: Sur");
            }else if(digito4 === 4 || digito4 === 5){
                alert("La direccion es: Oriente");
            }else if(digito4 === 6 || digito4 === 7){
                alert("La direccion es: Occidente");
            }else if(digito4 === 8 || digito4 === 9){
                alert("La direccion es: Desconocida");
            }else{
                alert("Direccion no valida");
            }
            break;
        }

        case 7: {
            alert("EJERCICIO 7");
            let tipo = prompt("Tipo (A, AA, AAA):");
            let cant = parseInt(prompt("Cantidad:"));
            let frecuente = prompt("Cliente frecuente? (si/no):");
            let dia = prompt("Dia (lunes a domingo):");

            let precio = 0;
            if (tipo == "A") precio = 600;
            if (tipo == "AA") precio = 700;
            if (tipo == "AAA") precio = 750;

            let total = cant * precio;

            if (cant >= 30 && cant <= 45) total = total * 0.9;
            if (cant >= 46 && cant <= 70) total = total * 0.85;
            if (cant >= 71 && cant <= 100) total = total * 0.8;
            if (cant > 100) total = total * 0.75;

            if (frecuente == "si") total = total * 0.975;

            if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
                total = total * 1.05;
            }
            if (dia == "sabado") {
                total = total * 0.95;
            }

            alert("Total a pagar: $" + total);
            break;
        }

        case 8: {
            alert("EJERCICIO 8");
            let x = parseInt(prompt("Ingrese el valor de X:"));
            let n = parseInt(prompt("Ingrese el valor de N (cantidad de terminos):"));
            let suma = 0;
            let i = 1;
            let contador = 1;

            while(contador <= n) {
                let potencia = 1;
                let j = 1;
                while(j <= (2 * i)) {
                    potencia = potencia * x;
                    j = j + 1;
                }
                let termino = potencia / (2 * i);
                suma = suma + termino;
                i = i + 1;
                contador = contador + 1;
            }
            alert("La suma es: " + suma);
            break;
        }

        case 9: {
            alert("EJERCICIO 9");
            let ajedrez = 0;
            let atletismo = 0;
            let futbol = 0;
            let gimnasia = 0;
            let natacion = 0;
            let contador = 1;
            let limite = parseInt(prompt("¿A cuántas personas desea encuestar? (Original: 400)", "3"));

            while(contador <= limite) {
                let deporte = prompt("Persona " + contador + " - Ingrese deporte (Ajedrez, Atletismo, Futbol, Gimnasia, Natacion):");
                if(deporte === null) break;
                if(deporte == "Ajedrez") ajedrez = ajedrez + 1;
                if(deporte == "Atletismo") atletismo = atletismo + 1;
                if(deporte == "Futbol") futbol = futbol + 1;
                if(deporte == "Gimnasia") gimnasia = gimnasia + 1;
                if(deporte == "Natacion") natacion = natacion + 1;
                contador = contador + 1;
            }

            alert("Resultados:\nAjedrez: " + ajedrez + "\nAtletismo: " + atletismo + "\nFutbol: " + futbol + "\nGimnasia: " + gimnasia + "\nNatacion: " + natacion);
            break;
        }

        case 10: {
            alert("EJERCICIO 10");
            let clave = "Cesde123";
            let intentos = 0;
            let acceso = 0;

            while(intentos < 3) {
                let pass = prompt("Ingrese la contraseña:");
                intentos = intentos + 1;
                if(pass == clave) {
                    alert("Acceso concedido");
                    acceso = 1;
                    intentos = 3; 
                }
            }
            if(acceso == 0) {
                alert("Alerta, intruso");
            }
            break;
        }

        case 11: {
            alert("EJERCICIO 11");
            let numero = 0;
            let contadorPares = 0;
            let seguir = 1;

            while(seguir == 1) {
                let entrada = prompt("Ingrese un número (impar para terminar):");
                if(entrada === null) break;
                numero = parseInt(entrada);
                if(numero % 2 == 0) {
                    contadorPares = contadorPares + 1;
                } else {
                    seguir = 0;
                }
            }
            alert("Cantidad de números pares ingresados: " + contadorPares);
            break;
        }

        case 12: {
            alert("EJERCICIO 12");
            let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
            let numero = parseInt(prompt("Ingrese un número entre 1 y 7:"));

            if(numero >= 1 && numero <= 7) {
                let indice = numero - 1;
                alert("El día es: " + dias[indice]);
            } else {
                alert("Número no válido. Debe ser entre 1 y 7.");
            }
            break;
        }

        case 13: {
            alert("EJERCICIO 13");
            let numeros = [5, 10, 15, 20, 25, 30];
            let suma = 0;
            let i = 0;

            while(i < numeros.length) {
                suma = suma + numeros[i];
                i = i + 1;
            }
            alert("La suma de los números del array es: " + suma);
            break;
        }

        case 14: {
            alert("EJERCICIO 14");
            let numeros = [];
            let seguir = true;

            while(seguir == true) {
                let entrada = prompt("Ingrese un número (0 o texto para terminar):");
                if(entrada == 0 || entrada === null) {
                    seguir = false;
                } else {
                    let numero = parseInt(entrada);
                    if(isNaN(numero)) {
                        seguir = false;
                    } else {
                        numeros[numeros.length] = numero;
                    }
                }
            }

            let res = "Array completo: " + numeros + "\n";
            let pares = 0;
            let impares = 0;
            let i = 0;

            while(i < numeros.length) {
                if(numeros[i] % 2 == 0) {
                    pares = pares + 1;
                } else {
                    impares = impares + 1;
                }
                i = i + 1;
            }

            res += "Cantidad de números pares: " + pares + "\nCantidad de números impares: " + impares;
            alert(res);
            break;
        }
    }
}