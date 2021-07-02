import React, { useEffect, useState } from 'react';
import RenderList from "./render_list";

const StatsOptions = ({setPayload}) => {
    const [animal, setAnimal] = useState("Deer");
    const [year, setYear] = useState("2019");
    const [season, setSeason] = useState("general");

    useEffect(() => {
        setPayload({
            animal: animal,
            year: year,
            season: season
        })
        if (animal === "Deer" ||
            animal === "Elk" ||
            animal === "Bear" ||
            animal === "Pronghorn" ||
            animal === "Turkey") {
              setSeason('general')
          } else if (
            animal === "Lion" || 
            animal === "Wolf"
          ) {
              setSeason('general')
          } else if (
            animal === "Moose" || 
            animal === "Sheep" || 
            animal === "Goat"
          ) {
              setSeason("controlled")
          }
    }, [animal,year,season])

    return (
      <>
        <div className="options-container">
          <div className="search-options">
            <div className="harvest-criteria">
              Animal: {animal}
              <div className="dropdown animal">
                <RenderList setter={setAnimal}>{animals}</RenderList>
              </div>
            </div>
            <div className="harvest-criteria">
              Year: {year}
              <div className="dropdown year">
                <RenderList setter={setYear}>{years}</RenderList>
              </div>
            </div>
            <div className="harvest-criteria">
              Hunt: {season}
              <div className="dropdown method">
                <RenderList setter={setSeason} animal={animal}>{methods}</RenderList>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

const animals = [
  "Elk",
  "Sheep",
  "Deer",
  "Moose",
  "Bear",
  "Wolf",
  "Pronghorn",
  "Lion",
  "Turkey",
  "Goat",
];

const years = [
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
];

const methods = [
  "general",
  "controlled"
]

export default StatsOptions;