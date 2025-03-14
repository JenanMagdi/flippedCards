/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// /* eslint-disable @typescript-eslint/no-unused-expressions */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import Card from "./components/Card";
// const cardSet = [
//     {'src': "/src/assets/0.jpg",matched:false},
//     {'src': "/src/assets/1.jpg",matched:false},
//     {'src': "/src/assets/2.jpg",matched:false},
//     {'src': "/src/assets/3.jpg", matched:false},
//     {'src': "/src/assets/4.jpg", matched:false},
//     {'src': "/src/assets/5.jpg", matched:false},
//     {'src': "/src/assets/6.jpg", matched:false},
//     {'src': "/src/assets/7.jpg", matched:false},
//     {'src': "/src/assets/8.jpg", matched:false},
//     {'src': "/src/assets/9.jpg", matched:false},
//   ]
// function App() {
//   const [cards, setCards]:any = useState([]); // Defined state type explicitly
//   const [turns,setTurns] = useState(0)
//   const [choiceOne,setChoiceOne] = useState<any>(null)
//   const [choiceTwo,setChoiceTwo] = useState<any>(null)
//   const [disabled,setDisabled] = useState<any>(false)
//   const [time, setTime] = useState(180);
  
//   const shuffleCards = () => {
//     const shuffleCards = [...cardSet, ...cardSet ]
//     .sort(()=>Math.random() - 0.5)
//     .map((card)=>({...card, id:Math.random()}))

//     setChoiceOne(null)
//     setChoiceTwo(null)
//     setTime(180)
//     setCards(shuffleCards)
//     setTurns(0)
//   }
//   console.log(turns);

  // const handleChoice = (card:any) =>{
  //   choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    
  // }  
//   useEffect(()=>{
//     if(choiceOne && choiceTwo) {
//     setDisabled(true)
//       if(choiceOne.src === choiceTwo.src)
//       {
//         setCards((prevCards:any)=>{
//           return prevCards.map((card:any) => {
//             if(card.src===choiceOne.src){
//               return {...card, matched:true}
//             }
//             else{
//               return card
//             }
//           })
//         })
//         resetTurn()
//       }else {
//         setTimeout(() => {
//           resetTurn()
//         }, 1000); 

//       }
//     }
//   },[choiceOne,choiceTwo])

//   const resetTurn = ()=>{
//     setChoiceOne(null)
//     setChoiceTwo(null)
//     setTurns(prevTurns => prevTurns + 1)
//     setDisabled(false)
//   }

//   //start new game automaticly
//   useEffect(()=>{
//     shuffleCards()
//   },[])

//   //timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((time) => {
//         if (time === 0) {
//           clearInterval(timer);
//           return 0;
//         } else return time - 1;
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white text-center place-items-center p-5  h-screen *:*:m-2">
//     <div className="  mx-72">
//       <p className="font-bold text-4xl">Magic Match</p>
//       <div className="  flex justify-evenly items-center p-5">
//       <button onClick={shuffleCards} className="border-2 border-gray-300 px-8 p-2">New Game</button>
//       <p className="text-xl">turns: {turns}</p>
//       <p className="text-xl">
//         Time left: {`${Math.floor(time / 60)}`.padStart(2, '0')}:
//         {`${time % 60}`.padStart(2, '0')}
//       </p>
//       </div>
//       <div className='flex flex-wrap *:w-32 *:h-44 justify-center'>
//         {cards.map((card:any) => (
//           <Card 
//           key={card.id} 
//           card={card}
//           handleChoice={handleChoice}
//           flipped={card === choiceOne || card === choiceTwo || card.matched}
//           disabled={disabled}
//           />
//         ))}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default App


import { useEffect, useState } from "react";
import Confetti from 'react-confetti';
import Card from "./components/Card";

interface CardType {
  src: string;
  matched: boolean;
  id: number;
}

const cardSet1 = [
  {'src': "/src/assets/lotm/0.jpg",matched:false},
  {'src': "/src/assets/lotm/1.jpg",matched:false},
  {'src': "/src/assets/lotm/2.jpg",matched:false},
  {'src': "/src/assets/lotm/3.jpg", matched:false},
  {'src': "/src/assets/lotm/4.jpg", matched:false},
  {'src': "/src/assets/lotm/5.jpg", matched:false},
  {'src': "/src/assets/lotm/6.jpg", matched:false},
  {'src': "/src/assets/lotm/7.jpg", matched:false},
  {'src': "/src/assets/lotm/8.jpg", matched:false},
  {'src': "/src/assets/lotm/9.jpg", matched:false},
  {'src': "/src/assets/lotm/10.jpg", matched:false},
  {'src': "/src/assets/lotm/11.jpg", matched:false},
]
const cardSet2 = [
  {'src': "/src/assets/1piece/0.jpg",matched:false},
  {'src': "/src/assets/1piece/1.jpg",matched:false},
  {'src': "/src/assets/1piece/2.jpg",matched:false},
  {'src': "/src/assets/1piece/3.jpg", matched:false},
  {'src': "/src/assets/1piece/4.jpg", matched:false},
  {'src': "/src/assets/1piece/5.jpg", matched:false},
  {'src': "/src/assets/1piece/6.jpg", matched:false},
  {'src': "/src/assets/1piece/7.jpg", matched:false},
  {'src': "/src/assets/1piece/8.jpg", matched:false},
  {'src': "/src/assets/1piece/9.jpg", matched:false},
  {'src': "/src/assets/1piece/10.jpg", matched:false},
  {'src': "/src/assets/1piece/11.jpg", matched:false},
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
    <div className={`${set==='lotm'? 'bg-[url(./assets/lotm/bgg.jpg)]' : 'bg-[url(./assets/1piece/bg.jpg)]'}  bg-cover text-white text-center place-items-center p-5 h-screen overflow-auto`}>
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



