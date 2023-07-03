import React, { useEffect } from "react";
import Image from 'next/image'

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
        width={100}
        height={100}
        alt="Picture of the author"
      />
    </div>
  )
};

export default Card