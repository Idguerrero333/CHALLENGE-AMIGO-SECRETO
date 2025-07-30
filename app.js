// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];
let nombreAñadir = '';

function agregarAmigo(){
   nombreAñadir = document.getElementById('amigo').value    
   listaAmigoSecreto.push(nombreAñadir);//incluye en la ultima posicion del array el numero generado
   document.querySelector('#amigo').value = ''
   console.log(listaAmigoSecreto);
   return;
}
