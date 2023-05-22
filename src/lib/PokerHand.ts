import Card from '../lib/Card';

class PokerHand {
  constructor(public cards: Card[]) {}

  getOutcome(): string {
    let numberOfCopiesForEachRank: number[] = [];

    for (let i: number = 0; i < this.cards.length; i++) {
      numberOfCopiesForEachRank.push(1);
      for (let j: number = i + 1; j < this.cards.length; j++) {
        if (this.cards[i].rank === this.cards[j].rank) {
          numberOfCopiesForEachRank[i]++;
        }
      }
    }

    let suitCount: number = 1;

    for (let i: number = 0; i < this.cards.length - 1; i++) {
      if (this.cards[i].suit === this.cards[i + 1].suit) {
        suitCount++;
      }
    }

    let max: number = numberOfCopiesForEachRank[0];

    for (let i: number = 0; i < numberOfCopiesForEachRank.length; i++) {
      if (numberOfCopiesForEachRank[i] > max) {
        max = numberOfCopiesForEachRank[i];
      }
    }

    console.log(numberOfCopiesForEachRank);

    for (let i: number = 0; i < numberOfCopiesForEachRank.length; i++) {
      for (let j: number = i + 1; j < numberOfCopiesForEachRank.length; j++) {
        if (numberOfCopiesForEachRank[i] === numberOfCopiesForEachRank[j] && numberOfCopiesForEachRank[i] === 2) {
          max = 4;
        }
      }
    }

    if (suitCount === numberOfCopiesForEachRank.length) {
      return 'Флэш';
    } else if (max === 4) {
      return 'Две пары';
    } else if (max === 3) {
      return 'Тройка';
    } else if (max === 2) {
      return 'Одна пара';
    } else {
      return 'Ничего';
    }

  }

}

export default PokerHand;