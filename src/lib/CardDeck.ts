import Card from './Card';

class CardDeck {
  private readonly ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  private readonly suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];
  public deck: Card[] = [];

  constructor() {
    this.suits.forEach((suit: string) => {
      this.ranks.forEach((rank: string) => {
        const card = new Card(rank, suit);
        this.deck.push(card);
      })
    })
  }

  private _getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min - 1) + min);
  }

  getCard(): Card {
    const randomCard: number = this._getRandomNumber(0, this.deck.length);
    const card = this.deck[randomCard]
    this.deck.splice(randomCard, 1);
    return card;
  }

  getCards(howMany: number = 5): Card[] {
    const cards: Card[] = [];
    if (this.deck.length >= howMany) {
      for (let i: number = 0; i < howMany; i++) {
        cards.push(this.getCard());
      }
    } else {
      const deckLength: number = this.deck.length;
      for (let i: number = 0; i < deckLength; i++) {
        cards.push(this.getCard());
      }
    }
    return cards;
  }
}

export default CardDeck;