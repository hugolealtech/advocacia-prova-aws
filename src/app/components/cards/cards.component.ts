import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

  export class CardsComponent {
    todosCartoes = [
      {
        srcImg: 'srcImg2.jpeg', // Nome do arquivo da imagem
        titulo: 'RIO DA FELICIDADE',
        subtitulo: 'Um lugar de paz e tranquilidade',
        descricao: 'Aqui, o criador sussurra palavras de sabedoria por meio do som das águas',
        srcImg2: 'assets/img/original/time/alice.jpg',
        nomePost: 'Alice',
      },
      // Outros objetos de cartões
    ];
  }
  


