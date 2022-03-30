let nota1 = 6;
let nota2 = 9;
let nota3 = 9;
let nota4 = 7;

let media = ((nota1 + nota2 + nota3 + nota4) /4);
    document.write("a media do aluno é: " + media, "<br>");

if ((media >= 7.5) && (media <= 9.0)){
    document.write("aluno ta aprovado ")
}else if ((media > 6.0) && (media < 7.5)){
    document.write("aluno ta de recuperação: </br>" );
}else{
    document.write("aluno ta reprovado");
}
