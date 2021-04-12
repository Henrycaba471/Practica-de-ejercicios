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
    return console.info(`8. El patron a eliminar es ${patron}`,texto7.replace(new RegExp(patron,'ig'),''));
}
eliminandoPatron('abc1, abc2, abc3, abc4', 'abc');

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio = () => {
    console.info(Math.round(Math.random()*99+501));
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
        return console.info(`El numero ${texto9} es un numero capicúa`);
    }else{
        return console.info(`El numero ${texto9} no es un numero capicúa`);
    }
}
capicua(345);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (texto10 = undefined) => {
    if (texto10 === undefined) {
        return console.warn('No has ingresado ningun valor');
    }
    if (typeof texto10 !== 'number') {
        return console.warn('Solo se permiten numeros');
    }
    if (Math.sign(texto10)=== -1) {
        return console.warn('Solo se permiten numeros positivos');
    }
    let calcFactorial = 1;
    for (let i = texto10; i > 1; i--) {
        calcFactorial *= i;

    }
    return console.info(calcFactorial);
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
    ? console.info(`${texto11} No es un numero Primo`)
    : console.info(`${texto11} Es un numero Primo`);
}
numPrimo(113);
