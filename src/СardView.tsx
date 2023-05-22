import React from 'react';

interface ICardView {
  rank: string;
  suit: string;
}

const CardView = (props: ICardView) => (
  <span className={`card rank-${props.rank.toLowerCase()} ${props.suit}`}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{
        props.suit === 'diams' ? '♦' :
          props.suit === 'hearts' ? '♥' :
            props.suit === 'clubs' ? '♣' :
              '♠'
      }</span>
  </span>
)

export default CardView;