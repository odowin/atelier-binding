import { Component } from '@angular/core';

interface Card {
  title: string;
  age: number;
  imageUrl: string;
  citation: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card: Card = {
    title: 'Titre par défaut',
    age: 25,
    imageUrl: 'https://via.placeholder.com/150', // Remplace par l'URL de ton image
    citation: ''
  };

  updateCitation(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.card.citation = inputElement.value;
  }

  // onButtonClick(): void {
  //   alert(`Citation: ${this.card.citation}`);
  // }
}
