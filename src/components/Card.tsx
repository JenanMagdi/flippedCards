/* eslint-disable @typescript-eslint/no-explicit-any */

const Card = (props: any) => {
  const handleClick = () => {
    if(!props.disabled )
    {
      props.handleChoice(props.card);
    }
  };

  return (
    <div className="relative cursor-pointer">
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
          src={`${import.meta.env.BASE_URL}/assets/${props.back}back.jpg`}
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
