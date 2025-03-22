/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from "react";
import Confetti from 'react-confetti';
import lotm0 from "../public/assets/lotm0.jpg";
import lotm1 from "../public/assets/lotm1.jpg";
import lotm10 from "../public/assets/lotm10.jpg";
import lotm11 from "../public/assets/lotm11.jpg";
import lotm2 from "../public/assets/lotm2.jpg";
import lotm3 from "../public/assets/lotm3.jpg";
import lotm4 from "../public/assets/lotm4.jpg";
import lotm5 from "../public/assets/lotm5.jpg";
import lotm6 from "../public/assets/lotm6.jpg";
import lotm7 from "../public/assets/lotm7.jpg";
import lotm8 from "../public/assets/lotm8.jpg";
import lotm9 from "../public/assets/lotm9.jpg";
import Card from "./components/Card";


import op0 from "../public/assets/op0.jpg";
import op1 from "../public/assets/op1.jpg";
import op10 from "../public/assets/op10.jpg";
import op11 from "../public/assets/op11.jpg";
import op2 from "../public/assets/op2.jpg";
import op3 from "../public/assets/op3.jpg";
import op4 from "../public/assets/op4.jpg";
import op5 from "../public/assets/op5.jpg";
import op6 from "../public/assets/op6.jpg";
import op7 from "../public/assets/op7.jpg";
import op8 from "../public/assets/op8.jpg";
import op9 from "../public/assets/op9.jpg";

interface CardType {
  src: unknown;
  matched: boolean;
  id: number;
}

const cardSet1 = [
  {'src': {lotm0},matched:false},
  {'src': {lotm1},matched:false},
  {'src': {lotm2},matched:false},
  {'src': {lotm3}, matched:false},
  {'src': {lotm4}, matched:false},
  {'src': {lotm5}, matched:false},
  {'src': {lotm6}, matched:false},
  {'src': {lotm7}, matched:false},
  {'src': {lotm8}, matched:false},
  {'src': {lotm9}, matched:false},
  {'src': {lotm10}, matched:false},
  {'src': {lotm11}, matched:false},
]
const cardSet2 = [
  {'src': {op0},matched:false},
  {'src': {op1},matched:false},
  {'src': {op2},matched:false},
  {'src': {op3}, matched:false},
  {'src': {op4}, matched:false},
  {'src': {op5}, matched:false},
  {'src': {op6}, matched:false},
  {'src': {op7}, matched:false},
  {'src': {op8}, matched:false},
  {'src': {op9}, matched:false},
  {'src': {op10}, matched:false},
  {'src': {op11}, matched:false},
]
function Game() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [time, setTime] = useState(300);
  const [set, setSet] = useState('lotm');
  const [isWin, setIsWin] = useState<boolean>(false); // New State for Win Condition
  const [back, setBack] = useState('lotm');

  // Shuffle cards and start new game
  const shuffleCards = () => {
    if(set==='lotm'){
    const shuffledCards = [...cardSet1, ...cardSet1]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);

  }
  else if(set==='One piece'){
    const shuffledCards = [...cardSet2, ...cardSet2]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);

  }
    setChoiceOne(null);
    setChoiceTwo(null);
    setTime(300);
    setTurns(0);
    setIsWin(false); // Reset win condition
  };

  const handleChoice = (card: CardType) => {
    if (card === choiceOne || card === choiceTwo || card.matched) {
      return;
    }
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
  }  
  const handleSetChange = () => {
    if (set==='lotm') {
     setSet('One piece')
     setBack('1piece')
  }  else {
    setSet('lotm')
    setBack('lotm')
  }
  }  

  // Handle matching logic
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
      }
      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // Start new game on mount
  useEffect(() => {
    shuffleCards();
  }, [set]);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0 ) {
          clearInterval(timer);
          return 0;
        }
        if (isWin) {
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isWin]);

   // Check win condition
   useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setIsWin(true);
    }
  }, [cards]);
  
  useEffect(() => {
    if (isWin) {
      setTime(time); // Stop timer
    }
  }, [isWin,time]);

  return (
    <div className={`${set==='lotm'? 'bg-[url(../public/assets/lotmbgg.jpg)]' : 'bg-[url(../public/assets/opbg.jpg)]'}  bg-cover text-white text-center place-items-center p-5 h-screen overflow-auto`}>
      {isWin && <Confetti />}  {/* 🎉 Winning Effect */}
      <div className="mx-40">
        <p className="font-bold text-4xl">Magic Match</p>
        {isWin && <p className="text-green-400 text-2xl mt-2">🎯 Congratulations! You Won! 🎯</p>}

        <div className="flex justify-evenly items-center p-5">
          <button onClick={shuffleCards} className="border-2 border-gray-300 px-8 p-2">
            {isWin ? "Play Again" : "New Game"}
          </button>
          <button onClick={handleSetChange} className="border-2 border-gray-300 px-8 p-2">
            {set}
          </button>
          <p className="text-xl">Turns: {turns}</p>
          <p className="text-xl">
            Time left: {`${Math.floor(time / 60)}`.padStart(2, "0")}:
            {`${time % 60}`.padStart(2, "0")}
          </p>
        </div>

        <div className="flex flex-wrap p-8 gap-4 *:w-28 *:h-48 justify-center select-none bg-gray-300/40 rounded-2xl">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
              back={back}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;



