window.onload = function() {
    let container = document.createElement("div");
    container.style.maxWidth = "800px";
    container.style.margin = "auto";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.padding = "20px";

    let titulo = document.createElement("h1");
    titulo.innerText = "Menú de Ejercicios JavaScript";
    titulo.style.color = "#2c3e50";
    titulo.style.textAlign = "center";
    container.appendChild(titulo);

    let menuGrid = document.createElement("div");
    menuGrid.style.display = "grid";
    menuGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(140px, 1fr))";
    menuGrid.style.gap = "10px";
    menuGrid.style.marginBottom = "20px";

    for (let i = 1; i <= 14; i++) {
        let btn = document.createElement("button");
        btn.innerText = "Ejercicio " + i;
        btn.style.padding = "12px";
        btn.style.backgroundColor = "#3498db";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.fontWeight = "bold";
        btn.style.cursor = "pointer";
        btn.onclick = function() { ejecutarEjercicio(i); };
        menuGrid.appendChild(btn);
    }
    container.appendChild(menuGrid);

    let pantalla = document.createElement("div");
    pantalla.id = "resultado";
    pantalla.innerText = "Selecciona un ejercicio de la lista de arriba.";
    pantalla.style.marginTop = "20px";
    pantalla.style.padding = "20px";
    pantalla.style.background = "#fff";
    pantalla.style.borderLeft = "5px solid #2ecc71";
    pantalla.style.borderRadius = "3px";
    pantalla.style.minHeight = "80px";
    pantalla.style.boxShadow = "0 0 10px rgba(0,0,0,0.05)";
    pantalla.style.whiteSpace = "pre-line";
    container.appendChild(pantalla);

    document.body.style.backgroundColor = "#f4f4f9";
    document.body.appendChild(container);
};

function ejecutarEjercicio(opcion) {
    let pantalla = document.getElementById("resultado");
    pantalla.innerHTML = ""; 

    function mostrar(texto) {
        pantalla.innerHTML += texto + "<br>";
    }

    switch(opcion) {

        case 1: {
            mostrar("<h2>EJERCICIO 1</h2>");
            let unidad, cantidad, mi, km, mt;
            unidad = parseInt(prompt('Dijite 1 para millas - 2 para kilometros - 3 para metros'));
            cantidad = prompt('Digite la distancia');
            switch (unidad){
                case 1: 
                    km = cantidad * 1.6093;
                    mt = cantidad * 1609.34;
                    mostrar(cantidad + ' Millas, equivale a ' + km + 'Kilometros, y a '+ mt + 'metros');
                    break;
                case 2:
                    mi = cantidad * 0.621371;
                    mt = cantidad * 1000;
                    mostrar(cantidad + ' kilometros, equivalen a ' + mi + 'millas, y a '+ mt + 'metros');
                    break;
                case 3:
                    km = cantidad / 1000;
                    mi = cantidad * 0.000621371;
                    mostrar(cantidad + ' metros, equivalen a ' + km + 'kilometros, y a '+ mi + 'millas');
                    break;
                default:
                    mostrar('Valor INCORRECTO');
                    break; 
            }
            break;
        }

        case 2: {
            mostrar("<h2>EJERCICIO 2</h2>");
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

            mostrar('la suma es: ' + (d3+d4));
            mostrar('La multiplicacion es: ' + (d1*d6));
            mostrar('La resta es: ' + (d2-d5));
            break;
        }

        case 3: {
            mostrar("<h2>EJERCICIO 3</h2>");
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

            mostrar("Nueva hora: " + hour + ":" + minute + ":" + second);
            break;
        }

        case 4: {
            mostrar("<h2>EJERCICIO 4</h2>");
            let a = parseFloat(prompt("Ingrese valor de a:"));
            let b = parseFloat(prompt("Ingrese valor de b:"));
            let c = parseFloat(prompt("Ingrese valor de c:"));
            let discriminante = (b * b) - (4 * a * c);

            mostrar("Discriminante: " + discriminante);

            if (discriminante > 0) {
                let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
                let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
                mostrar("Hay DOS soluciones reales");
                mostrar("x1 = " + x1);
                mostrar("x2 = " + x2);
            } else if (discriminante === 0) {
                let x = (-b) / (2 * a);
                mostrar(" Hay UNA solución real");
                mostrar(" x = " + x);
            } else {
                mostrar(" Hay DOS soluciones imaginarias: ");
                let parteReal = (-b / (2 * a));
                let parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
                mostrar("   x1  = " + parteReal + " + " + parteImaginaria + "i  ");
                mostrar("   x2  = " + parteReal + " - " + parteImaginaria + "i  ");
            }
            break;
        }

        case 5: {
            mostrar("<h2>EJERCICIO 5</h2>");
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
            mostrar("Menores que 0: " + menores);
            mostrar("Iguales a 0: " + ceros);
            mostrar("Mayores que 0: " + mayores);
            break;
        }

        case 6: {
            mostrar("<h2>EJERCICIO 6</h2>");
            let entrada1 = prompt("Escribe el primer digito:");
            let digito1 = parseInt(entrada1);
            if(digito1 % 2 === 0){
                mostrar("Hay una aeronave en el aire.");
            } else {
                mostrar("No hay aeronaves en el aire. operacion cancelada.");
                break;
            }

            let entrada2 = prompt("Escribe el segundo digito:");
            let digito2 = parseInt(entrada2);
            if(digito2 === 1){
                mostrar('Avion Militar');
            }else if(digito2 === 2){
                mostrar('Avion civil de carga');
            }else if(digito2 === 3){
                mostrar('Avion civil de pasajeros');
            }else if(digito2 === 4){
                mostrar('Aeronave sin permiso');
            }else if(digito2 === 5){
                mostrar('Aeronave de supertransporte');
            }else if(digito2 === 6){
                mostrar('Aeronave enemiga');
            }else if(digito2 === 7){
                mostrar('Avion Mixto');
            }else if(digito2 === 8){
                mostrar('Helicoptero');
            }else if(digito2 === 9){
                mostrar('Globo Aerostatico');
            }else if(digito2 === 0){
                mostrar('Dirigible');
            }else{
                mostrar('Aeronave no registrada');
            }

            let kilometros = -1;
            while(kilometros < 0){
                let entradaKilometros = prompt('Escribe el tercer digito');
                kilometros = parseInt(entradaKilometros);
            }
            mostrar('La distancia es: ' + kilometros + ' kilometros ');

            let entrada4 = prompt('Escribe el cuarto digito');
            let digito4 = parseInt(entrada4);
            if(digito4 === 0 || digito4 === 1){
                mostrar("La direccion es: Norte");
            }else if(digito4 === 2 || digito4 === 3){
                mostrar("La direccion es: Sur");
            }else if(digito4 === 4 || digito4 === 5){
                mostrar("La direccion es: Oriente");
            }else if(digito4 === 6 || digito4 === 7){
                mostrar("La direccion es: Occidente");
            }else if(digito4 === 8 || digito4 === 9){
                mostrar("La direccion es: Desconocida");
            }else{
                mostrar("Direccion no valida");
            }
            break;
        }

        case 7: {
            mostrar("<h2>EJERCICIO 7</h2>");
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

            mostrar("Total a pagar: $" + total);
            break;
        }

        case 8: {
            mostrar("<h2>EJERCICIO 8</h2>");
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
            mostrar("La suma es: " + suma);
            break;
        }

        case 9: {
            mostrar("<h2>EJERCICIO 9</h2>");
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

            mostrar("Resultados:");
            mostrar("Ajedrez: " + ajedrez);
            mostrar("Atletismo: " + atletismo);
            mostrar("Futbol: " + futbol);
            mostrar("Gimnasia: " + gimnasia);
            mostrar("Natacion: " + natacion);
            break;
        }

        case 10: {
            mostrar("<h2>EJERCICIO 10</h2>");
            let clave = "Cesde123";
            let intentos = 0;
            let acceso = 0;

            while(intentos < 3) {
                let pass = prompt("Ingrese la contraseña:");
                intentos = intentos + 1;
                if(pass == clave) {
                    mostrar("Acceso concedido");
                    acceso = 1;
                    intentos = 3; 
                }
            }
            if(acceso == 0) {
                mostrar("Alerta, intruso");
            }
            break;
        }

        case 11: {
            mostrar("<h2>EJERCICIO 11</h2>");
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
            mostrar("Cantidad de números pares ingresados: " + contadorPares);
            break;
        }

        case 12: {
            mostrar("<h2>EJERCICIO 12</h2>");
            let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
            let numero = parseInt(prompt("Ingrese un número entre 1 y 7:"));

            if(numero >= 1 && numero <= 7) {
                let indice = numero - 1;
                mostrar("El día es: " + dias[indice]);
            } else {
                mostrar("Número no válido. Debe ser entre 1 y 7.");
            }
            break;
        }

        case 13: {
            mostrar("<h2>EJERCICIO 13</h2>");
            let numeros = [5, 10, 15, 20, 25, 30];
            let suma = 0;
            let i = 0;

            while(i < numeros.length) {
                suma = suma + numeros[i];
                i = i + 1;
            }
            mostrar("La suma de los números del array es: " + suma);
            break;
        }

        case 14: {
            mostrar("<h2>EJERCICIO 14</h2>");
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

            mostrar("Array completo: " + numeros);
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

            mostrar("Cantidad de números pares: " + pares);
            mostrar("Cantidad de números impares: " + impares);
            break;
        }
    }
}