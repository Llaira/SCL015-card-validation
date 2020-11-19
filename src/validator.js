//import { TestScheduler } from "jest";

/*const isValid = (Tarjeta) => {
  let sum = 0;
  let TarjetaInvertida = Tarjeta.split('').reverse().join('')
  for (let i = 0; i < TarjetaIvertida.lenght; i++) {
    //for recorre los numero y cuenta con un largo máximo. en En este caso el largo debe ser el del numero de tarjeta.
       let numero = parseInt(TarjetaInvertida.substr(i, 1));
        //se convierte el string en un numero y vuelve los caracteres
       if (i % 2 !==0) {
         //i divido el resto, debe ser distinto a cero
         numero *= 2;
         //el numero se multiplica x 2
         if (numero >9){
             numero = 1 + (numero % 10);
         }
       }
       sum += numero;
  }
  return (sum % 10) == 0;
}

const validator = {isValid}
export default validator;*/
    /*const numeroTarjeta= document.getElementById("numeroTarjeta").value = isValid(Tarjeta) === true;
      if (numeroTarjeta.lenght === 16 && validator.isValid(numeroTarjeta) === true) {
          document.getElementById("validar").innerHTML = '<a href="#">Tu Tarjeta es válida' 
      } else{
           document.getElementById("validar").innerHTML = '<a href="#">Tu Tarjeta es invalida, intenta con otra tarjeta'
         }/*



          //recorrar ese valor
    //invertir numero tarjeta
    //indentificar posiciones pares
    //multiplicar pocisiones pares
    //comprobar si es valida o no

