console.log('Ejercicio 1')
///////////
// Descomposición
// Reconocimiento de patrones

// Hacer una función que tome la fecha de nacimiento y calcule la edad
// PSEUDOCODIGO
// hacer la funcion
function calculateAge(dateBirthText){
    console.log('calculateAge')
    let dateBirth = new Date(dateBirthText)
    // recibir o obtener la fecha actual
    let currentDate = new Date()
    console.log(currentDate)
    
    // restar la fecha actual menos la fecha d enacimeinto
    let age = (currentDate - dateBirth)/(1000 * 60 *60 * 24 * 365) // 34545345345 es la cantidad e milsisengudo que
    console.log(age)
    // retornar un resultado
}

// definir variable fecha de nacimiento
// let dateBirth = new Date('1994-06-10')
// console.log(dateBirth)
calculateAge('1994-06-10')

// let dateBirth2 = new Date('1991-03-22')
// console.log(dateBirth2)
calculateAge('1991-03-22')