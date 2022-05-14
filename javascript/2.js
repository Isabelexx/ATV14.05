hoje=new Date();
xDia=hoje.getDay ();
diaSemana=new Array(7);
pratoDia=new Array(7);
precoPrato=new Array(7);

diaSemana[0]="Domingo";
diaSemana[1]="Segunda-feira";
diaSemana[2]="Terça-feira";
diaSemana[3]="Quarta-feira";
diaSemana[4]="Quinta-feira";
diaSemana[5]="Sexta-feira";
diaSemana[6]="Sábado";
document.write("<p><b>" + "Hoje é: " + diaSemana[xDia]);

pratoDia[0]="Strogonoff";
pratoDia[1]="Feijoada";
pratoDia[2]="Churrasco";
pratoDia[3]="Macarrão";
pratoDia[4]="Escondidinho de Carne";
pratoDia[5]="Frango Assado";
pratoDia[6]="Lasanha";
document.write("<p><b>" + "Prato do dia: " + pratoDia[xDia]);

precoPrato[0]="R$ 28,99";
precoPrato[1]="R$ 35,50";
precoPrato[2]="R$ 46,99";
precoPrato[3]="R$ 25,99";
precoPrato[4]="R$ 30,00";
precoPrato[5]="R$ 32,00";
precoPrato[6]="R$ 40,00";
document.write("<p><b>" + "Preço do Prato: " + precoPrato[xDia]);