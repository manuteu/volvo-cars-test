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
      <span className="font-bold text-gray-500 text-sm uppercase">{props.bodyType}</span>
      <div className="mb-4">
        <span className="font-bold text-black text-lg mr-1">{props.modelName}</span>
        <span className="text-gray-500 text-lg">{props.modelType}</span>
      </div>
      <Image
        src={props.imageUrl}
        width={400}
        height={300}
        alt="image"
      />
      <div className="flex justify-center mt-6 text-[#326BB4] ">
        <div className="flex items-center cursor-pointer hover:opacity-50 transition duration-500 ease-in-out">
          <span className="text-lg  mr-2 font-bold ">LEARN</span>
          <Image
            src={chevronSmall}
            width={14}
            height={14}
            alt="chevron"
          />
        </div>
        <div className="mx-3"/>
        <div className="flex items-center cursor-pointer hover:opacity-50 transition duration-500 ease-in-out">
          <span className="text-lg  mr-2 font-bold">SHOP</span>
          <Image
            src={chevronSmall}
            width={14}
            height={14}
            alt="chevron"
          />
        </div>
      </div>
    </div>
  )
};

export default Card