import React, { useEffect, useState } from "react";
import carsResponse from "../../public/api/cars.json"
import Card from "./Card";

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
      {dataCars && dataCars.map((item: CarsProps) => (
        <Card
          imageUrl={item.imageUrl}
          modelName={item.modelName}
          modelType={item.modelType}
          bodyType={item.bodyType}
        />
      ))}
    </>
  )
};

export default Cars