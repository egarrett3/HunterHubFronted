import React, { useEffect, useState } from 'react';
import RenderList from "./render_list";

const StatsOptions = ({setPayload}) => {
    const [animal, setAnimal] = useState("deer");
    const [year, setYear] = useState("2019");
    const [season, setSeason] = useState("general");

    useEffect(() => {
        setPayload({
            animal: animal,
            year: year,
            season: season
        })
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
              Method: {season}
              <div className="dropdown method">
                <RenderList setter={setSeason}>{methods}</RenderList>
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
  "General",
  "All Weapons Combined",
  "Any Weapon",
  "Archery",
  "Muzzleloader",
];

export default StatsOptions;