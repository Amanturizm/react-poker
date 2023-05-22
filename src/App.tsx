import React, { useState } from 'react';
import './App.css';
import './cards.css';
import CardView from "./СardView";
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import PokerHand from "./lib/PokerHand";

const App = () => {
  const [cardDeck, setCardDeck] = useState<CardDeck>(new CardDeck());
  const [cards, setCards] = useState<Card[]>([]);
  const [hand, setHand] = useState<string>('');

  const setCardsState = (): void => {
    if (cardDeck.deck.length !== 0) {
      const newCards: Card[] = cardDeck.getCards(5);
      setHand(new PokerHand(newCards).getOutcome());
      setCards(newCards);
    } else {
      alert('Кончились!');
    }
  };

  if (cards.length === 0) {
    return <button className="App-btn firstBtn" onClick={setCardsState}>Раздать карты</button>;
  }

  return (
    <div className="App">
      <h3>{hand}</h3>
      <div className="playingCards faceImages">
        {
          cards.map((card: Card, index: number) => {
            return <CardView rank={card.rank} suit={card.suit} key={index} />
          })
        }
      </div>
      <button className="App-btn" onClick={setCardsState}>Раздать карты</button>
    </div>
  );
};

export default App;