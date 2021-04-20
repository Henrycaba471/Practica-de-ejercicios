//my pc
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
let texto = "";
const contarCaracteres = (texto) => {
    !texto
        ? console.warn("!No hay texto ingresado")
        : console.info(
            `1. El texto |►${texto}◄| contiene ${texto.length} caracteres`
        );
};
contarCaracteres("Contando caracteres");

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
let texto1 = "",
    longitud = undefined;
const recortarTexto = (texto1, longitud) => {
    if (!texto1) {
        return console.warn("No has ingresado ningun texto");
    }
    if (longitud === undefined || typeof longitud !== "number") {
        return console.warn(
            "No has ingresado el recorte o el valor ingresado no es valido"
        );
    }
    return console.info(
        `2. El texto a recortar es |►${texto1}◄| y el recorte es |►${longitud}◄| Nuevo texto ♦${texto1.slice(
            0,
            longitud
        )}♦`
    );
};
recortarTexto("Recortando el texto", 10);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let texto2 = "",
    separador = undefined;
const stringToArray = (texto2, separador) => {
    if (!texto2) {
        return console.warn("Primer parametro no puede estar vacio");
    }
    if (separador === undefined) {
        return console.warn(
            "No has ingresado el separador o el valor ingresado no es valido"
        );
    }
    return console.info(
        `3. El texto a convertir es |►${texto2}◄| quedaria`,
        texto2.split(separador)
    );
};

stringToArray("Convirtiendo una cadena en arreglo", " ");

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
let texto3 = "",
    repetidor = undefined;
const repetirTexto = (texto3, repetidor) => {
    if (!texto3) {
        return console.warn("No has ingresado ningun texto");
    }
    if (repetidor === undefined || typeof repetidor !== "number") {
        return console.warn(
            "No has ingresado las veces a repetir o el valor ingresado no es valido"
        );
    }
    console.info(
        `4. El texto a repetir es |►${texto3}◄| las veces a repetir son |►${repetidor}◄|`
    );
    for (let i = 1; i <= repetidor; i++) {
        console.info(texto3, i);
    }
};
repetirTexto("texto a repetir", 7);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirTexto = (texto4 = "") => {
    if (!texto4) {
        return console.warn("No has ingresado ningun texto");
    }
    if (typeof texto4 !== "string") {
        return console.warn("Por el momento solo estamos invirtiendo texto");
    }
    return console.info("5.", texto4.split("").reverse().join(""));
};
invertirTexto("invirteindo texto");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const buscarPalabra = (texto5 = "", palBuscada = "") => {
    if (!texto5) {
        return console.warn("No has ingresado ningun texto");
    }
    if (!palBuscada) {
        return console.warn("No has ingresado la palabra que deseas buscar");
    }
    if (typeof palBuscada !== "string") {
        return console.warn("Por ahora solo se permite texto");
    }
    let i = 0,
        contador = 0;

    while (i !== -1) {
        i = texto5.indexOf(palBuscada, i);
        if (i !== -1) {
            i++, contador++;
        }
    }
    return console.info(
        `6. La palabra |►${palBuscada}◄| se repite ${contador} veces en el texto`
    );
};
buscarPalabra(
    "Lorem ipsum, dolor sid amet consectetur adipi sid cing sid. Iure error sed voluptas soluta unde id atque maiores accusamus cum sid ctio. Exercitationem quod optio iusto eligendi. Consectetur similique non totam saepe",
    "sid"
);

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (texto6 = "") => {
    if (!texto6) {
        return console.warn("No has ingresado ninguna palabra");
    }
    if (typeof texto6 !== "string") {
        return console.warn(
            "Los numeros que se leen igual al derecho que al reves no se les denomina palindromos"
        );
    }
    texto6 = texto6.toUpperCase();
    let comparar = texto6.split("").reverse().join("");
    if (texto6 !== comparar) {
        return console.info(`7. La palabra ${texto6} no es Palindroma`);
    }
    if (texto6 === comparar) {
        return console.info(`7. La palabra ${texto6} es palindroma`);
    }
};
palindromo('salas');

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
const eliminandoPatron = (texto7 = '', patron = '') => {
    if (!texto7) {
        return console.warn('No has ingresado ningun texto');
    }
    if (!patron) {
        return console.warn('No has ingresado el praton a eliminar');
    }
    return console.info(`8. El patron a eliminar es ${patron},`,texto7.replace(new RegExp(patron,'ig'),''));
}
eliminandoPatron('abc1, abc2, abc3, abc4', 'abc');

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio = () => {
    console.info('9. Número aleatorio del 500 al 601',Math.round(Math.random()*99+501));
}
numeroAleatorio()

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (texto9 = undefined) => {
    if (texto9 === undefined) {
        return console.warn('No has ingresado ningun numero');
    }
    if (typeof texto9 !== 'number') {
        return console.warn('Solo se admiten numeros');
    }

    texto9 = texto9.toString();
    let compararNum = texto9.split('').reverse().join('');

    if (texto9 === compararNum) {
        return console.info(`10. El numero ${texto9} es un numero capicúa`);
    }else{
        return console.info(`10. El numero ${texto9} no es un numero capicúa`);
    }
}
capicua(345);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (texto10 = undefined) => {
    if (texto10 === undefined) {
        return console.warn('No has ingresado ningun valor');
    }
    if (typeof texto10 !== 'number') {
        return console.warn('Solo se permiten números');
    }
    if (Math.sign(texto10)=== -1) {
        return console.warn('Solo se permiten números positivos');
    }
    let calcFactorial = 1;
    for (let i = texto10; i > 1; i--) {
        calcFactorial *= i;

    }
    return console.info('11.',`El factorial de ${texto10} es`,calcFactorial);
}
factorial(9);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numPrimo = (texto11 = undefined) => {
    if (texto11 === undefined) {
        return console.warn('No has ingresado ningun valor');
    }
    if (typeof texto11 !== 'number') {
        return console.warn('Solo se permiten numeros');
    }
    if (Math.sign(texto11)=== -1) {
        return console.warn('Solo se permiten numeros positivos');
    }

    let divisible = false;
    for (let i = 2; i < texto11; i++) {
        if ((texto11 % i) === 0) {
            divisible = true
            break
        }
    }
    return (divisible)
    ? console.info(`12. ${texto11} No es un número Primo`)
    : console.info(`12. ${texto11} Es un número Primo`);
}
numPrimo(113);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numParImpar = (texto12 = undefined) => {
    if (texto12 === undefined) {
        return console.warn('Debes ingresar al menos un número');
    }
    if (typeof texto12 !== 'number') {
        console.warn('Caracter invalido');
    }
    if ((texto12 % 2) === 0) {
        return console.info(`13. ${texto12} Es un número Par`);
    }else{
        return console.info(`13. ${texto12} Es un número Impar`);
    }
}
numParImpar(48);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (gradosInsert = undefined, unidad = undefined) => {
    if (gradosInsert === undefined) {
        return console.warn('No has insertado ningun valor');
    }
    if (unidad === undefined) {
        return console.warn('No has insertado la unidad de conversión');
    }
    if (unidad.length !== 1 || !(/C|F/).test(unidad)) {
        return console.warn('Tipo de unidad invalida');
    }
    if (unidad === 'C') {
        return console.info(`14. ${gradosInsert}°C = ${((Math.round(gradosInsert *9/5) + 32))}°F`);
    }
    if (unidad === 'F') {
        return console.info(`14. ${gradosInsert}°F = ${Math.round((gradosInsert - 32) * (5/9))}°C`);
    }
}
convertirGrados(346,'F');

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binarioDecimalViceversa = (texto14 = undefined, base = undefined) => {
    if (texto14 === undefined) {
        return console.warn('No has ingresado ningun valor');
    }
    if (typeof texto14 !== 'number') {
        return console.warn('Solo se permiten numeros');
    }
    if (base === undefined) {
        return console.warn('Debes insertar una base');
    }
    if (typeof base !== 'number') {
        return console.warn('Tipo de base invalido');
    }
    if (base === 2) {
        return console.info(`15. ${texto14} base ${base} = ${parseInt(texto14,base)} base 10`);
    }else if (base === 10) {
        return console.info(`15. ${texto14} base ${base} = ${(texto14.toString(2))} base 2`)
    }

}
binarioDecimalViceversa(55,10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const aplicarDescuento = (texto15 = undefined, descuento = 0) => {
    if (texto15 === undefined) {
        return console.warn('No  has ingresado ningun texto');
    }
    if (typeof texto15 !== 'number') {
        return console.warn('El valor debe ser ingresado en número');
    }
    if (Math.sign(texto15) === -1) {
        return console.warn('El valor no puedes ser negativo');
    }
    if (typeof descuento !== 'number') {
        return  console.warn('El descuento debe ser ingresado en numero');
    }
    if (Math.sign(descuento) === -1) {
        return console.warn('No se puede aplicar ese descuento, estas insertando un descuento en negativo');
    }
    return console.info(`16. Valor de venta $${texto15} menos ${descuento}% de descuneto seria: $${texto15 - ((texto15*descuento)/100)}`)
}
aplicarDescuento(1400, 17);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularAnio = (fecha = undefined) => {
    if (fecha === undefined) {
        return console.warn('Debes ingresar una fecha');
    }
    if (!(fecha instanceof Date)) {
        return console.warn('El valor ingresado no es una fecha');
    }

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
    ? console.info(`17. Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
    ? console.info(`17. Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
    : console.info(`17. Estamos en el año actual ${fecha.getFullYear()}`);
}
calcularAnio(new Date(1992,07,20));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const vocalesYConsonantes = (texto16 = '') => {
    if (!texto16) {
        return console.warn('No has ingresado ningun texto');
    }
    if (typeof texto16 !== 'string') {
        return console.warn('Debes ingresar un texto, no se admiten numeros');
    }
    let vocales = 0,
        consonantes = 0;

    for (let letra of texto16) {
        if (/[AEIOUÁÉÍÓÚaeiouáéíóú]/.test(letra)) {
            vocales++;
        }
        if (/[BCDFGHJKLMNÑPQRSTVWXYZabcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
    }
    return console.info('18. ',{
        texto16,
        vocales,
        consonantes
    })
}
vocalesYConsonantes('estamos contanto consonantes y vocales');

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (texto17 = '') => {
    if (!texto17) {
        return console.warn('No has ingresado ningun nombre');
    }
    if (typeof texto17 !== 'string') {
        return console.warn('El valor ingresado no es valido, debes ingresar un nombre correcto');
    }

    let expREg = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(texto17);
    return (expREg)
    ? console.info('19. Nombre ingresado correctamente')
    : console.info('19. Has ingresado un nombre incorrecto');
}
validarNombre('Henry');

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (texto18 = '') => {
    if (!texto18) {
        return console.warn('Debes ingresar un correo valido');
    }
    if (typeof texto18 !== 'string') {
        return console.warn('El valor ingresado no es valido, debes ingresar un email correcto');
    }
    let expRegu = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(texto18);

    return (expRegu)
    ? console.info('20. Email ingresado correctamente')
    : console.info('20. Correo invalido')
}
validarEmail('Jonmircha@gmail.com');

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const devolverCuadrados = (array = undefined) => {
    if (array === undefined) {
        return console.warn('No ingresaste el arreglo de numeros');
    }
    if (!(array instanceof Array)) {
        return console.warn('El valor ingresado no es un arreglo');
    }
    if (array.length === 0) {
        return console.warn('Has ingresado un arreglo vacio');
    }
    for (let num of array) {
        if (typeof num !== 'number') {
            return console.error(`El arreglo solo puede llevar numeros, ${num} no es un numero`);
        }
    }
    const newArray = array.map(el => el*el);

    return console.info(`21. Arreglo insertado [${array}], \nArreglo elevado al cuadrado [${newArray}]`);

}
devolverCuadrados([2,5,1]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const arrayMayorMenor = (mayorMenor = undefined) => {
    if (mayorMenor === undefined) {
        return console.warn('No ingresaste el arreglo de numeros');
    }
    if (!(mayorMenor instanceof Array)) {
        return console.warn('El valor ingresado no es un arreglo');
    }
    if (mayorMenor.length === 0) {
        return console.warn('Has ingresado un arreglo vacio');
    }
    for (let org of mayorMenor) {
        if (typeof org !== 'number') {
            return console.error(`El valor ${org} no es un numero`);
        }
    }
    return console.info(`22. Del arreglo [${mayorMenor}],\nValor mayor ${Math.max(...mayorMenor)}\nValor menor ${Math.min(...mayorMenor)}`);
}
arrayMayorMenor([7,9,-90,40,1]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const sepParImpar = (paresImpares = undefined) => {
    if (paresImpares === undefined) {
        return console.warn('No ingresaste el arreglo de numeros');
    }
    if (!(paresImpares instanceof Array)) {
        return console.warn('El valor ingresado no es un arreglo');
    }
    if (paresImpares.length === 0) {
        return console.warn('Has ingresado un arreglo vacio');
    }
    for (let numer of paresImpares) {
        if (typeof numer !== 'number') {
            return console.error(`El valor '${numer}' en [${paresImpares}] no es un numero`);
        }
    }
    return console.info('23. ',{
        pares: paresImpares.filter(numer => numer % 2 === 0),
        impares: paresImpares.filter(numer => numer % 2 === 1)
    })
}
sepParImpar([6,7,8,1,5,2,3,4,9]);






























