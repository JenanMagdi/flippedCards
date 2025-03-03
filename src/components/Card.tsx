// /* eslint-disable @typescript-eslint/no-explicit-any */

// const Card = (props:any) => {

//   const handleClick = () => {
//     props.handleChoice(props.card)
//   }
//   return (
//     <div className="  relative transform">
//       <div className= {`h-fit *:p-3  ${props.flipped ? 'rotate-y-90 absolute' : 'rotate-y-0 ' }`}>
//         <img src={props.card.src} alt="card front" />
//         <img 
//         src="/src/assets/0.jpg" 
//         alt="card back"
//         onClick={handleClick}
//         />
//       </div>
//     </div>
//   );
// };

// export default Card;
/* eslint-disable @typescript-eslint/no-explicit-any */

const Card = (props: any) => {
  const handleClick = () => {
    props.handleChoice(props.card);
  };

  return (
    <div className="relative w-24 h-32 cursor-pointer">
      <div
        className={`relative w-full h-full transform transition-transform duration-500 ${
          props.flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Card Front */}
        <img
          src={props.card.src}
          alt="card front"
          className={`absolute w-full h-full rounded-lg shadow-lg backface-hidden ${
            props.flipped ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Card Back */}
        <img
          src="/src/assets/0.jpg"
          alt="card back"
          className={`absolute w-full h-full rounded-lg shadow-lg backface-hidden ${
            props.flipped ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
