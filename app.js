// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];
let nombreAñadir;
let listaAmigos = document.getElementById('listaAmigos');
let contador = 0;

function agregarAmigo(){
    nombreAñadir = document.getElementById('amigo').value
    let estaVacio = nombreAñadir.trim() === ''; //Comparamos si la cadena, después de eliminar los espacios, está completamente vacía
    let sonNumeros = /\d/.test(nombreAñadir); //Comprueba si hay algun digito en la cadena
    let esString = typeof nombreAñadir === 'string'; //comprueba si el el valor es una cadena de string
    let excluyeCaracteres = !/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(nombreAñadir); 
    /*
        ! invierte la respuesta
        [a-zA-ZáéíóúÁÉÍÓÚñÑ\s] permite letras (mayúsculas/minúsculas), tildes, la "ñ" y espacios en blanco.
        [^...] significa "cualquier carácter que NO esté en este conjunto".
        .test() verifica si hay AL MENOS UN carácter que NO sea una letra, tilde, ñ o espacio.
    */


    console.warn('que tipo de entrada es:');
    console.log(typeof(nombreAñadir));

    console.warn('esta vacio:')
    console.log(estaVacio);

    console.warn('contiene numeros:')
    console.log(sonNumeros);

    console.warn('contiene caracteres:')
    console.log(excluyeCaracteres);
    
    if (estaVacio === false && sonNumeros === false && esString && excluyeCaracteres) {
        listaAmigoSecreto.push(nombreAñadir);
        document.querySelector('#amigo').value = '';
        console.log(listaAmigoSecreto)
        lista();
    }else {
        alert('El dato insertado no corresponde a un nombre, \npor favor vuelve a intentarlo');
    }

    return;
}

function lista(){
    listaAmigos.innerHTML = "";
    for (contador = 0; contador < listaAmigoSecreto.length; contador++) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = listaAmigoSecreto[contador];
        listaAmigos.appendChild(nuevoElemento);
        console.warn(`contador en ${contador}`);
    }
    return;
}