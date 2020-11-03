const validator = {
  invalid:(tarjeta)=>{ 
    //funcion para validar (valida o invalida)
    let largoTarjeta= 0;
    //definimos el largo de la tarjeta 
    let marcaPosicion= 0;
    //cuenta desde el inicio considerando el cero
    let numeroTarjeta= parseInt (tarjeta);
    //parseint para pasar de string a numeros enteros
    while (numeroTarjeta !=0) {
    //while realiza un ciclo 
    //mientras el numero de tarjeta sea distinto a cero funciona lo del interior
      let divisionTarjeta= numeroTarjeta%10;
    //el numeroTarjeta se divide x 10
      if (marcaPosicion%2!=0) {
      //le damos una condición que si es par debe ser distinto a cero
        let multiplicaTarjeta= divisionTarjeta*2;
      //me toma la posicion par y multiplica x 2
        if (multiplicaTarjeta >9) {
        //condición si multiplicaTarjeta es mayor a 9 se ejecuta la variable
          let multiplicaString= multiplicaTarjeta.toString 
          //es para sacar los 2 digitos y los separe
          multiplicaTarjeta= parseInt(multiplicaString.charArt(0)+multiplicaString.charArt(1))
          //separa los dos numeros que fueron multiplicados en la posicion 2 
        }
        largoTarjeta += multiplicaTarjeta 
        //multiplicaTarjeta es el resultado de la linea 22
        // al agregar el += se agrega una posicion y a esa posicion 
      }
      else{
        largoTarjeta += divisionTarjeta
        //si no se cumple la posicion par se agrega a otra posicion
      }
      numeroTarjeta= parseInt(numeroTarjeta/10);
      //el numeroTarjeta se divido por 10 
      //debo cerrar todas las variables con ;  !!!
      marcaPosicion ++ ;
      //le agregamos una posicion 
    }
    if (largoTarjeta%10 ==0) {
      return "Tarjeta Valida"
    }
    else {
      return "Tarjeta Invalida"
    }
  }

};

export default validator;
