/*
Leia o código de um determinado produto e mostre sua classificação. Utilize a seguinte tabela como referência:  
  Codigo:            Classificação:
     1              alimento
  2, 3 ou 4         bebidas 
  5 ou 6            Vestuário 
     7              Higiene Pessoal 
  8 até 15          Limpeza
  others codes      código inválido
*/

let code = 1;

if(code == 1){
  console.log("Alimento");
  
}else if(code >= 2 && code <= 4){
  console.log("bebidas");
  
}else if(code == 5 || code == 6){
  console.log("Vestuário");
  
}else if(code == 7){
  console.log("Higiene Pessoal");
  
}else if(code >= 8 && code <= 15){
  console.log("Limpeza");
  
}else{
  console.log("código inválido");
  
}
