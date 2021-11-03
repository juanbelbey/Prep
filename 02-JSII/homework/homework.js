// No cambies los nombres de las funciones.

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length - 1])
}

function incrementarPorUno(array) {
  // "array" debe ser una arreglo de números enteros
  // Aumenta cada número por 1 y devuelve el array
  // Tu código:
nuevo = [];
for(var i=0; i<array.length; i++){
  nuevo [i] = array[i] + 1;
} return nuevo
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento);
return array
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
frase= palabras[0];
for(var i=1; i<palabras.length; i++){
  frase = frase + ' ' + palabras[i];
} return frase
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
for(var i=0; i<array.length; i++){
  if(array[i]===elemento){
    return true;
  }
}return false
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser un array de enteros
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var suma = 0;
for(var i=0; i<resultadosTest.length; i++){
  suma = suma + resultadosTest[i];
} var promedio = suma/resultadosTest.length;
return promedio
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser un array de enteros
  // Devuelve el número más grande
  // Tu código:
var max = Math.max(...numeros);
return max
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length===0){
    return 0};
  var multi = 1 * arguments[0]
    for(var i=1;i<arguments.length;i++){
    multi = multi * arguments[i]
  }return multi
 }

function cuentoElementos(arreglo){
  // Realiza una función que retorne la cantidad de los elementos del arreglo que sean mayores a 18.
  // Tu código:
var elementos = 0;
for(var i=0; i<arreglo.length;i++){
  if(arreglo[i]>18){
    elementos = elementos + 1;
  }
}return elementos
}

function todosIguales(arreglo) {
  // Escriba la función todosIguales, si todos los elementos de un arreglo son iguales
  // retornar true, caso contrario retornar false.
  // Tu código:
  var igual= arreglo[0]
  for(var i=1; i<arreglo.length; i++){
    if(arreglo[i]==igual){
      igual = arreglo[i]
    } else {return false}
  }return true
} 

function mesesDelAño(array) {
  // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var meses= [];
for(var i=0; i<array.length; i++){
  if(array[i]=='Enero' || array[i]=='Marzo' || array[i]=='Noviembre'){
    meses.push(array[i])
  }
  }if(meses.length!==3){
    return 'No se encontraron los meses pedidos'}
    else{ return meses}
}

function breakStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array. 
  // Devolver el array
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  // devolver: "Se interrumpió la ejecución"
  // Pista: usá el statement 'break'
  // Tu código:
var nuevo= [];
var suma = numero;
for(var i=0; i<10; i++){
  suma = suma + 2;
  if(suma===i)
  break;
  nuevo.push(suma);
  }
  if(i<10){return 'Se interrumpió la ejecución'}
  return nuevo
}

// Objetos
// var Juancho = {
// nombre: 'Juancho',
// apellido: 'Belbey'

//Para acceder, dot notation:
// Juancho.apellido
//Juancho[apellido] corchetes se usan cuando no sabemos que propiedad vamos a invocar
// Para agregar datos tmb se puede:
// Juancho[hobbies]= 'Tenis' o Juancho.hobbies= 'Tenis'
// consolo.table[]
//no se puede usar punto cuando no sé el nombre de la propiedad que voy a invocar, cuando es un metodo


function continueStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array.    
  // Devolver el array
  // Cuando el número de iteraciones alcance el valor 5, no se agrega ese número al array
  // y se continua con la siguiente iteración
  // Pista: usá el statement 'continue'
  // Tu código:
  var array=[];
  var suma = numero;
  for( var i=0; i<10;i++){
  suma = suma + 2;
  if(i==5)
      continue;
    array.push(suma);
    
    }return array
  }


function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
var objeto = {
  nombre: nombre,
  edad: edad,
  meow: function funcion(){
    return 'Meow!'
  }
}; return objeto
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property]= null;
  return objeto
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]()
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
var multi =objetoMisterioso['numeroMisterioso']*5;
return multi
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var objeto= {
  nombre: nombre,
  email: email,
  password: password,
}; return objeto
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
if (usuario.email== undefined){
  return false}
  else {return true}
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
return !!objeto[propiedad]
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
usuario.password= nuevaPassword
;return usuario
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
usuario.amigos.push(nuevoAmigo);
return usuario
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
suma = 0;
for(var i=0; i<usuario.posts.length;i++){
  suma= suma + usuario.posts[i].likes
}
return suma
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverUltimoElemento,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  dePalabrasAFrase,
  arrayContiene,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  todosIguales,
  mesesDelAño,
  breakStatement,
  continueStatement,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  actualizarPassword,
  agregarAmigo,
  sumarLikesDeUsuario
};
