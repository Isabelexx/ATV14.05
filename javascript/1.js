//alert("Seja Bem Vindo!!!");
//document.write("Bem vindo ao Javascript");
//prompt("digite seu nome");
//resp=confirm("Será que vai chover?");
//alert("Um retorno de carro\bem no meio desta lina");
//alert("\"Isto não saiu como deveria!\"disse ela");
//alert("esta linha tem tabulação\taqui");

var a,b;
a=5;
b="5 Kg de açucar";
document.write("O valor da variável A é:" +a);
document.write("<p>" + "O valor da variável B é:" +b+ "</p>");
document.write("<p>" + "O valor da variável A dividido por 2 é:"+a/2+"</p>");
document.write("<p>" + "O valor da variável B dividido por 2 é:"+b/2+"</p>");

var a, intero, flutuante;
a="45.78 Kg de açucar";
inteiro=parseInt(a);
flutuante=parseFloat(a);
document.write("O valor da variável A é:"+a);
document.write("<p>" + "O valor numérico inteiro da variável é:"+inteiro+"</p>");
document.write("<p>" + "O valor da variável A dividido por 2 é:" +inteiro/2+"</p>");
document.write("<p>" + "O valor da variável decimal da variável é:" +flutuante+"<p/>");

var a,b,c;
a="Olá pessoal!, ";
b="sejam bem vindos ao JavaScript";
c=a+b;
alert(c);

var a,b;
a=50;
b=2;
document.write("50/2 é:" +a/b);
var a,b;
a=100;
b=5;
document.write("<p>" + "100*25 é:" +a*b+ "</p>"); 
var a,b;
a=25;
b=2;
document.write("<p>" + "25*2 é:" +a*b+ "</p>");
var a,b,c;
a=50;
b=50;
c=a-b;
document.write("<p>" + "50-50 é:" +c+ "</p>");
var a,b;
a=50;
b=2;
document.write("<p>" + "50/2 é:" +a/b+ "</p>");

hoje=new Date();
xDia=hoje.getDay ();
diaSemana=new Array(7);
diaSemana[0]="Domingo";
diaSemana[1]="Segunda-feira";
diaSemana[2]="Terça-feira";
diaSemana[3]="Quarta-feira";
diaSemana[4]="Quinta-feira";
diaSemana[5]="Sexta-feira";
diaSemana[6]="Sábado";
document.write("o número da semana é:"+""+(xDia+1));
document.write("<p><b>" + "hoje é:" + diaSemana[xDia] + "</p></b>");

for(i=1;i<5;i++){
    document.write("Esta é a linha",i,"<br>");
}

valor=new Array(3,2,4,1,5);
i=0;
total=0;
while(total<10){
    total +=valor[i];i++;
}
document.write("<p>" + "Total="+total + "</p>");