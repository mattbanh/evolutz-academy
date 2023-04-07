import { useState, useEffect } from "react";

export default function Carousel({ cardNumber, carouselContent }) {
  //   const [slideRight, setSlideRight] = useState(false);
  //   useEffect(() => {
  //     setSlideRight(false);
  //   });
  let displayNumber = cardNumber;
  if (carouselContent.length < cardNumber) {
    displayNumber = carouselContent.length;
  }

  const initialToDisplay = [carouselContent.length - 1];

  for (let i = 0; i <= displayNumber; i++) {
    initialToDisplay.push(i);
  }

  const [toDisplay, setToDisplay] = useState(initialToDisplay);

  const totalCards = carouselContent.length;

  const leftClickHandler = () => {
    const newToDisplay = [...toDisplay];
    newToDisplay.pop();
    if (newToDisplay[0] === 0) {
      newToDisplay.unshift(totalCards - 1);
    } else {
      newToDisplay.unshift(newToDisplay[0] - 1);
    }
    setToDisplay(newToDisplay);
  };

  const rightClickHandler = () => {
    // setSlideRight(true);
    const newToDisplay = [...toDisplay];

    if (newToDisplay[displayNumber + 1] === totalCards - 1) {
      newToDisplay.push(0);
    } else {
      newToDisplay.push(newToDisplay[displayNumber + 1] + 1);
    }
    newToDisplay.shift();
    // setTimeout(() => setToDisplay(newToDisplay), 50);
  };

  return (
    <section className="mx-auto max-w-[1300px] flex gap-8 items-center">
      <span onClick={leftClickHandler} className="text-3xl inline-block">
        ‹
      </span>
      <div className="max-w-[1150px] h-72 flex gap-8 overflow-hidden items-center justify-center px-4">
        {toDisplay.map((displayIndex, i) => {
          return (
            <div
              key={i}
              className={
                carouselContent[displayIndex].includes("gsx")
                  ? "w-64 h-64 flex shrink-0 items-center justify-center drop-shadow-lg rounded-sm bg-black/80"
                  : "w-64 h-64 flex shrink-0 items-center justify-center drop-shadow-lg rounded-sm bg-white"
              }
              //   className={
              //     slideRight
              //       ? "w-64 h-64 flex shrink-0 items-center justify-center drop-shadow-lg rounded-sm bg-white transition ease-in duration-200"
              //       : "w-64 h-64 flex shrink-0 items-center justify-center drop-shadow-lg rounded-sm bg-white"
              //   }
            >
              {/* <img
                className="w-32"
                src={carouselContent[displayIndex]}
                alt=""
              /> */}
            </div>
          );
        })}
      </div>
      <span onClick={rightClickHandler} className="text-3xl inline-block">
        ›
      </span>
    </section>
  );
}
