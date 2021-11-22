let variable1 = 1;
var variable2 = 2;
const variable3 = 3;

console.log(variable2)

//string
let string = 'soy un string, que es una cadena de caracteres';
console.log(string);

//number
let numero = 15;
console.log(numero);

//boolean
let boolean = true;
let booleanfalse = false;
console.log(boolean);
console.log(booleanfalse);

//array
let arreglo = [1, 'hola', true, ['hola', 2]];
console.log(arreglo);

//object
let sanmartin = {
    nombre: 'san martin', 
    lugar: 'Tucuman', 
    edad: '113', 
    divisional: 'B'
}
console.log(sanmartin);

//null
let nada = null;
console.log(nada);

//undefined
let indefinida;
console.log(indefinida)

//operadores
//aritmeticos
let numero1 = 15;
let numero2 = '15';

console.log(numero1+numero2)
console.log(numero1-numero2)
console.log(numero1*numero2)
console.log(numero1/numero2)
console.log(numero1%numero2)

//unitarios
numero1++;
console.log(numero1)
numero1--;
console.log(numero1)
numero1--;
console.log(numero1)
numero1++;

//inversión (negación)
console.log(!boolean);

//condicionales
boolean=true? console.log('si') : console.log('no');

//relacionales
console.log(numero1>numero2);
console.log(numero1<numero2);
console.log(numero1==numero2);
console.log(numero1===numero2);

//logicos
//AND
console.log(numero1==15 && numero2==3);
console.log(numero1==15 && numero2==15);
console.log(numero1===15 && numero2===15);

//OR
console.log(numero1==15 || numero2==3);
console.log(numero1==3 || numero2==3);

//EJERCICIO
//Pedirle 2 valores y mostrar en consola la suma y el producto, si la suma o el producto es mayor a 20, mostrar en consola que es mayor

let a=prompt('ingrese un numero')
let b=prompt('ingrese otro numero')

let suma = a+b;
let producto = a*b;

console.log(suma);
console.log(producto);
suma>20 || producto>20 ? console.log('hay un numero mayor a 20'):console.log('hay un numero mayor a 20')
//no sale el ejercicio porque lo lee como un string ("") es decir como carateres.