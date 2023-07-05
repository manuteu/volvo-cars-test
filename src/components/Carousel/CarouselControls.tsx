import Image from "next/image";
import chevronCircled from "../../../docs/chevron-circled.svg";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end mr-6 mt-10 mb-10 sm:visible invisible">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className="flex mr-2"
      >
        <Image
          src={chevronCircled}
          width={42}
          height={42}
          alt="chevron"
          className="rotate-180"
        />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className="flex"
      >
        <Image
          src={chevronCircled}
          width={42}
          height={42}
          alt="chevron"
        />
      </button>
    </div>
  );
};
export default CarouselControls;