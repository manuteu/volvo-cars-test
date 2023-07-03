import Image from "next/image";
import React, { useEffect, useState } from "react";
import carsResponse from "../../public/api/cars.json"
import Card from "./Card";
import Carousel from "./Carousel";

interface CarsProps {
  id: string;
  bodyType: string;
  modelName: string;
  modelType: string;
  imageUrl: string;
}

const Cars = () => {
  const [dataCars, setDataCars] = useState<Array<CarsProps>>([{
    id: '',
    bodyType: '',
    modelName: '',
    modelType: '',
    imageUrl: '',
  }])

  useEffect(() => {
    console.log(carsResponse);

    setDataCars(carsResponse)
  }, [])

  return (
    <>
      <div>Carros</div>
      <div className="lg:w-full mx-8 my-2">
        <Carousel loop>
          {dataCars.map((item, index) => {
            return (
              // 👇 style each individual slide.
              // relative - needed since we use the fill prop from next/image component
              // h-64 - arbitrary height
              // flex[0_0_100%]
              //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
              //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
              <div className="relative flex mx-2" key={index}>
                {/* use object-cover + fill since we don't know the height and width of the parent */}
                <Card
                  key={index}
                  imageUrl={item.imageUrl}
                  modelName={item.modelName}
                  modelType={item.modelType}
                  bodyType={item.bodyType}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  )
};

export default Cars