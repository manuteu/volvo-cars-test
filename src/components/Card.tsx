import React, { useEffect } from "react";
import Image from 'next/image'
import chevronSmall from "../../docs/chevron-small.svg";
import chevronCircled from "../../docs/chevron-circled.svg";

interface CardProps {
  imageUrl: string;
  bodyType: string;
  modelName: string;
  modelType: string;
}

const Card = (props: CardProps) => {

  return (
    <div>
      <span>{props.bodyType}</span>
      <div>
        <span>{props.modelName}</span>
        <span>{props.modelType}</span>
      </div>
      <Image
        src={props.imageUrl}
        width={400}
        height={300}
        alt="Picture of the author"
      />
      <div>
        <div className="flex items-center">
          <span>LEARN</span>
          <Image
            src={chevronSmall}
            width={16}
            height={16}
            alt="Picture of the author"
          />
        </div>
        <div className="flex items-center">
          <span>SHOP</span>
          <Image
            src={chevronSmall}
            width={16}
            height={16}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  )
};

export default Card