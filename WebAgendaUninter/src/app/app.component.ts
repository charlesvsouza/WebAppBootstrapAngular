
/*Importantando com a formatação do angular*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*Exporta passando o conteudo para o *ngfor dentro de app.componente.html*/
export class AppComponent {
  title = 'WebAgendaUninter';
data: Array<any>;constructor(){

/* A chamada do *ngfor let informação of data pega em app.componente a informação 
independente da ordem que se encontro mas as boas práticas sugerem ordenar contudo sempre
obedece a ordem em app.component.html na clase content*/
this.data = [
  {Nome:'Charles Vasconcelos de Souza',Telefone:'21-979330093', ru: '1751230', Curso:'ADS', MediaFinal:'9.4', SFinal:'Aprovado', DataNasc:'04/11/1970', Estado:'RJ',Unidade:'Recreio'},
  {Nome:'Anderson Vieira Pessoa',Telefone:'22-897828222', ru: '2389780', Curso:'ENGENHARIA',MediaFinal:'8.9',SFinal:'Aprovado', DataNasc:'13/08/84',Estado:'SP',Unidade:'Alphavile'},
  {Nome:'Martha Andrade Moreira',Telefone:'21-974657834', ru: '1892345', Curso:'BIOLOGIA',MediaFinal:'7.8',SFinal:'Aprovado', DataNasc:'23/04/1999',Estado:'BH',Unidade:'Jequie'},
  {Nome:'Fabiano Claudio Jose',Telefone:'21-98645672', ru: '3261902', Curso:'MATEMATICA',MediaFinal:'6.6',SFinal:'Prova Final', DataNasc:'08/11/2008',Estado:'MA',Unidade:'Belo monte'},
  {Nome:'Claudio Eustáquio',Telefone:'87-994807189', ru: '1372319', Curso:'MECANICA',MediaFinal:'4.3',SFinal:'Reprovado', DataNasc:'21/03/2005',Estado:'SC',Unidade:'Penha'},
  {Nome:'Mauro Murard',Telefone:'45-78923451',ru: '7832459', Curso:'FILOSOFIA',MediaFinal:'6.8',SFinal:'Prova Final', DataNasc:'03/02/1998',Estado:'RJ',Unidade:'Leblon'},
  {Nome:'Claudio Castro e silva',Telefone:'31-78652345', ru: '1901289',Curso:'GEOGRAFIA',MediaFinal:'7.3',SFinal:'Aprovado', DataNasc:'17/05/1975',Estado:'ES',Unidade:'Farol'}

];

}
}
