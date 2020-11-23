//import validator from './validator.js';

const botonIngresar=document.getElementById("ingresar")
botonIngresar.addEventListener("click", ingresar);
//otorga un evento click a ingresar

  function ingresar() {
    document.getElementById("botoningresar").style.display="none";
    document.getElementById("paginaInicio").style.display="none";
    document.getElementById("paginaFormulario").style.display= "block";
    document.getElementById("volver").style.display="block";
    //escondo y muestro pagina
  }

  
  
  const botonVolver=document.getElementById("volver")
  botonVolver.addEventListener("click", volver)

  function volver() {
      //console.log("hola")
      document.getElementById("volver").style.display="none";
      document.getElementById("paginaInicio").style.display="block";
      document.getElementById("botoningresar").style.display="block";
      document.getElementById("paginaFormulario").style.display= "none";
  }
         
document.getElementById("validar").addEventListener('click', validar)
 
  function validar(){
    //se crea la funcion 
    console.log ("hola soy validar");
    let numeroTarjeta = document.getElementById("numeroTarjeta").value;
    if (numeroTarjeta.length !== 16){
      alert ("Número ingresado no es válido")
    }
    else {
        //console.log(numeroTarjeta);
     let sum = 0;
      //variable sumar
     let TarjetaInvertida = numeroTarjeta.split('').reverse().join(''); //join devuelve en cadena la matriz
      //invierto el numero de tarjeta
      //console.log(TarjetaInvertida);
      for (let i = 0; i < TarjetaInvertida.length; i++){
      //ciclo for para recorrer el numero de tarjeta invertido
      //le doy inicio con el let i y el final no debe ser mayor a tarjeta invertida
      // console.log(TarjetaInvertida[i]);
        if (TarjetaInvertida.length === 16){
          //el numero de tarjeta invertida debe ser igual a 16
          //console.log("tengo 16 digitos");
          let numero = parseInt(TarjetaInvertida.substr(i, 1));
          //entrega una cadena de numero enteros desde el incio i y otorga el valor de 1
          //numero es la nueva variable para la cadena
          // console.log(numero);
          if (i % 2 !==0) {
            //el resto debe ser distinto a cero
            //comienza la cuenta desde el inicio
              numero *= 2;
              //multiplico x 2 
             // console.log(numero) 
            if (numero >9){
              //el numero debe ser mayor a 9 
              numero = 1 + (numero % 10);
              //si el numero debe ser distinto a 10 se debe sumar 
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
   }

   
   /*  const maskify = (numeroTarjeta) => {
       console.log("maskify")
      let imprimir = "";
          if (numeroTarjeta.length <= 4) {
             imprimir = numeroTarjeta;
          }
           else {
              //padEnd() rellena la cadena actual con una cadena dada + substring() extrae caracteres desde indiceA hasta indiceB sin incluirlo.
            imprimir = "".padEnd(numeroTarjeta.length - 4, "#") + numeroTarjeta.substring(numeroTarjeta.length - 4, numeroTarjeta.length)
            }
             return imprimir
    }*/