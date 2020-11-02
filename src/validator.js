const validator = {
  // ...
};

export default validator;
/*function luhn($number)

{

$odd = true;

$sum = 0;



foreach ( array_reverse(str_split($number)) as $num)
{

  $sum += array_sum( str_split(($odd = !$odd) ? $num*2 : $num) );

}



return (($sum % 10 == 0) andand ($sum != 0));

}
*/