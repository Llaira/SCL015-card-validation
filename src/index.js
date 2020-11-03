import validator from './validator.js';

//console.log(validator);
// declaración de variables a utilizar 
const primeraPagina = document.getElementById("pagina1");
const segundaPagina = document.getElementById("pagina2");
const terceraPagina = document.getElementById("pagina3");
const cuartaPagina = document.getElementById("pagina4");

//Ocultar segunda página (y tercera y cuarta)

//segundaPagina.style.display = "none";

//Función para que botón ingresar redirija a segunda pagina para ingresar datos
const botonIngresar=document.getElementById("ingresar")
botonIngresar.addEventListener("click", ingresar);

  function ingresar() {
    document.getElementById("botoningresar").style.display="none";
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display= "block";
  }

  const botonvalidar=document.getElementById("validar")
  botonvalidar.addEventListener("click", mostrar);  

  function mostrar(){
//document.getElementById('pagina2').style.display = 'block';
//segundaPagina.style.display = "block";
//Crear un evento para mostra y ocultar páginas
//botonIngresar.addEventListener("click",mostrar(){
  document.getElementById("botonvalidar").style.display="none";
  document.getElementById('pagina1').style.display = "none";
  document.getElementById("pagina2").style.display= "none";
  document.getElementById("pagina3").style.display= "block";
}

 //función botón volver a primera pagina
 
 
  //document.getElementById("volver1").addEventListener("click", ()=>{
  //document.getElementById("pagina1").style.display="none";
  //document.getElementById("pagina3").style.display="block";
  
//});
//const botonvolver=document.getElementById("volver")
//botonvolver.addEventListener("click", mostrar);  

//function mostrar(){
//document.getElementById("botonvolver").style.display="none";
//document.getElementById('pagina1').style.display = "block";
//document.getElementById("pagina2").style.display= "none";
//document.getElementById("pagina3").style.display= "none";
//}
