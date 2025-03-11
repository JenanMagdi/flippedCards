/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Card from "./components/Card";
const cardSet = [
    {'src': "/src/assets/0.jpg",matched:false},
    {'src': "/src/assets/1.jpg",matched:false},
    {'src': "/src/assets/2.jpg",matched:false},
    {'src': "/src/assets/3.jpg", matched:false},
    {'src': "/src/assets/4.jpg", matched:false},
    {'src': "/src/assets/5.jpg", matched:false},
    {'src': "/src/assets/6.jpg", matched:false},
    {'src': "/src/assets/7.jpg", matched:false},
    {'src': "/src/assets/8.jpg", matched:false},
    {'src': "/src/assets/9.jpg", matched:false},
    {'src': "/src/assets/9.jpg", matched:false},
    {'src': "/src/assets/9.jpg", matched:false},
  ]
function App() {
  const [cards, setCards]:any = useState([]); // Defined state type explicitly
  const [turns,setTurns] = useState(0)
  const [choiceOne,setChoiceOne] = useState<any>(null)
  const [choiceTwo,setChoiceTwo] = useState<any>(null)
  
  const shuffleCards = () => {
    const shuffleCards = [...cardSet, ...cardSet ]
    .sort(()=>Math.random() - 0.5)
    .map((card)=>({...card, id:Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }
  console.log(turns);

  const handleChoice = (card:any) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    
  }  
  useEffect(()=>{
    if(choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src)
      {
        setCards((prevCards:any)=>{
          return prevCards.map((card:any) => {
            if(card.src===choiceOne.src){
              return {...card, matched:true}
            }
            else{
              return card
            }
          })
        })
        resetTurn()
      }else {
        setTimeout(() => {
          resetTurn()
        }, 1000); 

      }
    }
  },[choiceOne,choiceTwo])
console.log(cards);

  const resetTurn = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  return (
    <div className="bg-gray-900 text-white text-center place-items-center p-5 min-h-screen *:*:m-2">
    <div className="  place-items-center ">
      <p className="font-bold text-4xl">Magic Match</p>
      <button onClick={shuffleCards} className="border-2 border-gray-300 px-8 p-2">New Game</button>
      <p className="font-bold text-4xl">{turns}</p>
      <div className='border border-white w-2/3 flex flex-wrap *:w-28 *:h-40 gap-3 justify-center'>
        {cards.map((card:any) => (
          <Card 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default App
