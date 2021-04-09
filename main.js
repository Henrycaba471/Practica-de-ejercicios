//my pc 
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
let texto = '';
const contarCaracteres = (texto) => {
    (!texto)
        ? console.warn('!No hay texto ingresado')
        : console.info(`El texto |►${texto}◄| contiene ${texto.length} caracteres`);
}
contarCaracteres('Contando caracteres');

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
let texto1 = '',
    longitud = undefined;
const recortarTexto = (texto1, longitud) => {
    if (!texto1) {
        return console.warn('No has ingresado ningun texto');
    }
    if (longitud === undefined || typeof longitud !== 'number') {
        return console.warn('No has ingresado el recorte o el valor ingresado no es valido');
    }
    return console.info(`El texto a recortar es |►${texto1}◄| y el recorte es |►${longitud}◄| Nuevo texto ♦${texto1.slice(0, longitud)}♦`);
}
recortarTexto('Recortando el texto', 10);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let texto2 = '',
    separador = undefined;
const stringToArray = (texto2, separador) => {
    if (!texto2) {
        return console.warn('Primer parametro no puede estar vacio');
    }
    if (separador === undefined) {
        return console.warn('No has ingresado el separador o el valor ingresado no es valido');
    }
    return console.info(`El texto a convertir es |►${texto2}◄| quedaria`, texto2.split(separador));
}

stringToArray('Convirtiendo una cadena en arreglo', ' ');

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
let texto3 = '',
    repetidor = undefined;
const repetirTexto = (texto3,repetidor) => {
    if (!texto3) {
        return console.warn('No has ingresado ningun texto');
    }
    if (repetidor === undefined || typeof repetidor !== 'number') {
        return console.warn('No has ingresado las veces a repetir o el valor ingresado no es valido');
    }
    console.info(`El texto a repetir es |►${texto3}◄| las veces a repetir son |►${repetidor}◄|`);
    for (let i = 1; i <= repetidor; i++) {
        console.info(texto3, i);
    }
}
repetirTexto('texto a repetir', 7);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirTexto = (texto4 = '') => {

    if (!texto4) {
        return console.warn('No has ingresado ningun texto');
    }
    if (typeof texto4 !== 'string') {
        return console.warn('Por el momento solo estamos invirtiendo texto');
    }
    return console.info(texto4.split('').reverse().join(''));

}
invertirTexto('invirteindo texto');

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
