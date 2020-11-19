//import validator from './validator.js';

const botonIngresar=document.getElementById("ingresar")
botonIngresar.addEventListener("click", ingresar);

  function ingresar() {
    document.getElementById("botoningresar").style.display="none";
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display= "block";
    document.getElementById("volver").style.display="block";
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
         
document.getElementById("validar").addEventListener('click', validar)
 
  function validar(){
    console.log ("hola soy validar");
    //guardes el valor del input
    let numeroTarjeta = document.getElementById("numeroTarjeta").value;
    console.log(numeroTarjeta);
    let sum = 0;
    let TarjetaInvertida = numeroTarjeta.split('').reverse().join('');
    console.log(TarjetaInvertida);
    for (let i = 0; i < TarjetaInvertida.length; i++){
     // console.log(TarjetaInvertida[i]);
        if (TarjetaInvertida.length === 16){
          //console.log("tengo 16 digitos");
          let numero = parseInt(TarjetaInvertida.substr(i, 1));
         // console.log(numero);
          if (i % 2 !==0) {
              numero *= 2;
             // console.log(numero) 
            if (numero >9){
              
              numero = 1 + (numero % 10);
              //sum += numero;
              //console.log(numero)

              
            }
        }
          sum = sum + numero
          console.log(sum)

      }
  
  
  
    }  
    //si el resultado del resto es = a cero, devolver o imprimir válida. si no es igual a cero devolver invalida
    if (sum % 10 == 0){
      alert ("Tarjeta Válida")
    }
      else {
       alert ("Tarjeta Inválida")
      }
   }