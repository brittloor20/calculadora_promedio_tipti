//START: Calculadora_Promedio

// Información_Usuario

let nombreAlumno = prompt("Ingrese el nombre del alumno:");
let materia = prompt ("Ingrese la materia:");
let nota1 = parseInt (prompt("Ingrese la nota 1 (Escala de 0 a 10):"));
let nota2 = parseInt (prompt("Ingrese la nota 2 (Escala de 0 a 10):"));
let nota3 = parseInt (prompt("Ingrese la nota 3 (Escala de 0 a 10):"));
let promedio = 0;

// Calculo de Promedio - Error

if (isNaN(nota1) || nota1  < 1 || nota1 > 10) {
    alert("Encontramos error en el ingreso de su primera nota. Por favor compruebe que se encuentre en una escala de 0 a 10:")
} else {  
    
    if (isNaN(nota2) || nota2 < 1 || nota2 > 10) {
        alert ("Encontramos error en el ingreso de su segunda nota. Por favor compruebe que se encuentre en una escala de 0 a 10:")
    } else {

        if (isNaN(nota3) || nota3 < 1 || nota3 > 10 ) {
            alert ("Encontramos error en el ingreso de su tercera nota. Por favor compruebe que se encuentre en una escala de 0 a 10:")
        } else {

            // Obtener Resultados de Promedio
            let promedio = (nota1 + nota2 + nota3) / 3;
            if (promedio >=7) {
                alert(`${nombreAlumno}, ¡Felicidades! Has aprobado ${materia} con un promedio de ${promedio}.`);
            } else {
                alert(`${nombreAlumno}, Gracias por tu esfuerzo, nos vemos pronto en clase. El promedio obtenido en ${materia} es de ${promedio}.`)
            }
        }
        
    }
}

//END: Calculadora_Promedio




