import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { PropsWithChildren, useEffect, useState, ReactNode } from "react";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";

type PropsReact = PropsWithChildren<ReactNode>;
type PropsEmbla = EmblaOptionsType;

const Carousel = ({ children }: PropsReact, { ...options }: PropsEmbla) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);
  return (
    <>
      <div className="ml-3 mt-[5%] overflow-hidden" ref={emblaRef}>
        <div className="children">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </>
  );
};
export default Carousel;