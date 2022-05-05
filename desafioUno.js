
let  operacion = prompt('Escribir siguientes simbolos para tarea (  +, -, * O / ): ');
const number1 = Number(prompt('Poner primer numero: '));
const number2 = Number(prompt('Poner segundo numero '));
let resultado;


if (operacion == '+') {
    resultado = number1 + number2;
}
else if (operacion == '-') {
    resultado = number1 - number2;
}
else if (operacion == '*') {
    resultado = number1 * number2;
}
else {
    resultado = number1 / number2;
}
alert(`${number1} ${operacion} ${number2} = ${resultado}`);



/*  SEGUNDO PROGRAMA Verificar si un numero esta  entre 1 y 30.

let  numero = prompt("Por favor ingresa un número entre 1 - 30: ");
if (numero >=1 && numero <=30) {
for (let i = 1; i <= numero; i++) {
alert(i);
 }
}else{
 alert("El número no está en el rango ");
}

*/

/*  TERCER PROGRAMA "NOTA DE CODEX".
    1. Ingresar nombre y apellido del alumno.
    2. Ingresar la nota del alumno
    3. Si la nota es mayor o igual a 6 y el alumno es german marr aprueba.
    4. Si la nota es menor y el alumno no es german marr, no supera el desafio..

let alumno = prompt("debe ingresar el nombre y apellido de alumno");
let nota =  Number(prompt("ingresar nota"));

if(nota >= 6  && alumno === "german marr" )
{
    alert(alumno + " Ha aprobado desafio con una nota de " + nota);
}
else if( alumno !== "german marr" && nota <= 5 )
{       
    alert(" El senor " + alumno + " Con su nota de :  " + nota + " Ha reprobado" );
}
else
{    alert("Debe actualizar la pagina nuevamente" + alumno );
}

*/

/*  CUARTO PROGRAMA ALGORITMO de Programa Horas del dia
    1. Si me llaman entre 0:00 - 6:am estoy durmiendo
    2. Si Me encuentro entre las 6 y 11am  te digo buenos dias.
    3. Si me encuentro entre  las 12pm y 18pm - te digo buenas tardes.
    4. Si estoy entre esa hora digo buenas noches.
    5. Si estoy me encuentro entre esa hora 19pm y 24pm digo buenas noches.
/*
let horaDia = parseInt(prompt("Ingrese hora dia"));

if( horaDia >= 6 && horaDia <= 11 ){
    alert("Hola Buenos días");
}
else if( horaDia >= 12 && horaDia <= 18 ){
    alert( "Buenas tardes");
}
else if( horaDia >= 19 && horaDia <= 24){
    alert("Buenas noches");
}
else if( horaDia >= 0 && horaDia < 6){
    alert("Durmiendo");
}
else{
    alert("Valor incorrecto");
}
*/


