/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react';
import './Carousel.css';
import { CarouselItem } from './CarouselItem';

export function Carousel ({ items, interval = 9000, maxCount = 10 }){
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setCounter] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    const findActive = () => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        if (newCounter >= maxCount) {
          return 0;
        }
        return newCounter;
      });

      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % items.length;
        return newIndex;
      });
    };

    intervalId.current = setInterval(findActive, interval);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [interval, maxCount, items.length]);

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={index} className={`carousel_item_container ${index === activeIndex ? 'active' : ''}`}>
          <CarouselItem source={item.source} type={item.type} title={item.title} />
        </div>
      ))}
    </div>
  );
}

