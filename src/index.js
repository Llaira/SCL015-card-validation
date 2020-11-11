import validator from './validator.js';

//console.log(validator);
// declaración de variables a utilizar 
const primeraPagina = document.getElementById("pagina1");
const segundaPagina = document.getElementById("pagina2");
const terceraPagina = document.getElementById("pagina3");


//Función para que botón ingresar redirija a segunda pagina para ingresar datos
const botonIngresar=document.getElementById("ingresar")
botonIngresar.addEventListener("click", ingresar);

  function ingresar() {
    document.getElementById("botoningresar").style.display="none";
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display= "block";
    document.getElementById("volver").style.display="block";
  }

  const botonValidar=document.getElementById("validar")
  botonValidar.addEventListener("click", validar)

  function validar() {
    let numeroTarjeta= document.getElementById("numeroTarjeta").value
    console.log(numeroTarjeta)
    //posiciones pares multiplicar x 2
    //posiciones impares dejarlas tal cual
    //si la posicion par al multiplicarla me da mas de 10 hay que sumar sus digitos
  }
  
  const botonVolver=document.getElementById("volver")
  botonVolver.addEventListener("click", volver)
  
    function volver() {
      //console.log("hola")
      document.getElementById("volver").style.display="none";
      document.getElementById("pagina1").style.display="block";
      document.getElementById("botoningresar").style.display="block";
      document.getElementById("pagina2").style.display= "none";
    }
  




  //const botonvalidar=document.getElementById("validar")
  //botonvalidar.addEventListener("click", mostrar);  

 // function mostrar(){
//Crear un evento para mostra y ocultar páginas
//botonIngresar.addEventListener("click",mostrar(){
 // document.getElementById("botonvalidar").style.display="none";
  //document.getElementById('pagina1').style.display = "none";
  //document.getElementById("pagina2").style.display= "none";
  //document.getElementById("pagina3").style.display= "block";
  //let nombreUsuario= document.getElementById("nombre").value;
  //let tarjeta= document.getElementById("numeroTarjeta").value;
  //document.getElementById("sobrescribir").innerHTML = "Hola" + nombreUsuario + " Tu tarjeta es " + tarjeta;
//}

//document.getElementById("validator").onclick= function(){
  //document.getElementById("pagina2").style.display="none";
  //document.getElementById("pagina3").style.display="block";
  //let nombreUsuario= document.getElementById("nombre").value;
  //let tarjeta= document.getElementById("numeroTarjeta").value;
  //document.getElementById("sobrescribir").innerHTML = "Hola" + nombreUsuario + " Tu tarjeta es " + tarjeta;
//}


//donde va nombre y tarjeta, debe estar la funcion isvalid 