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

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [searchTime, setSearchTime] = useState(setTimeout(() => { }, 0));

  const handleFilter = (value: string) => {
    setLoading(false)
    if (value) {
      setDataCars(carsResponse.filter((item) => {
        return item.bodyType === value
      }))
    }
  }

  const postValues = () => {
    setDataCars(carsResponse)
  }

  useEffect(() => {
    postValues()
  }, [])

  useEffect(() => {
    clearTimeout(searchTime);
    if (search === '') {
      postValues()
    }
    setLoading(true)
    let time = null;
    time = setTimeout(() => {
      handleFilter(search);
    }, 1000);

    setSearchTime(time);

  }, [search])

  return (
    <>
      <div className="w-1/4 min-w-[240px] mt-[5%] self-center">
        <div className="relative w-full flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-[#626262] bg-[#F2F2F5]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            className="bg-[#F2F2F5] peer h-full w-full outline-none text-sm uppercase text-gray-700 pr-2"
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {loading && (
        <div
          className="self-center mt-64 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
          >
        </div>
      )}
      {!loading && dataCars.length > 1 && (
        <Carousel>
          {dataCars.map((item, index) => {
            return (
              <div className="mr-6">
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
      )}
    </>
  )
};

export default Cars