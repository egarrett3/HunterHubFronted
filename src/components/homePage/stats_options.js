import React, { useEffect, useState } from 'react';
import RenderList from "./render_list";

const StatsOptions = ({setPayload, setYears, animals, years, season, animalObj}) => {
    const [animal, setAnimal] = useState(animals[0]);
    const [year, setYear] = useState(years[0][0]);
    // const [season, setSeason] = useState(seasons[0]);

    useEffect(() => {
        setYears(Object.values(animalObj[animal][season]))
    }, [animal])

    useEffect(() => {
        // setSeasons(Object.keys(animalObj[animal]))
        setYear(Object.values(animalObj[animal][season])[0]);
    }, [animal,season])

    useEffect(() => {
      debugger
        setPayload({
            animal: animal,
            year: year,
            season: season
        })
      debugger
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
            {/* <div className="harvest-criteria">
              Hunt: {season}
              <div className="dropdown method">
                <RenderList setter={setSeason}>{seasons}</RenderList>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
}

export default StatsOptions;