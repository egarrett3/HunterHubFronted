import React from 'react';

const RenderList = ({children,setter,animal}) => {

  const filterMethods = () => {
    if (
      animal === "Deer" ||
      animal === "Elk" ||
      animal === "Bear" ||
      animal === "Pronghorn" ||
      animal === "Turkey"
    ) {
      return children.map((ele, idx) => {
        return (
          <div key={idx} onClick={(e) => setter(e.target.innerHTML)}>
            {ele}
          </div>
        );
      });    
    } else if (animal === "Lion" || animal === "Wolf") {
        return (
          <div onClick={(e) => setter(e.target.innerHTML)}>
            {"general"}
          </div>
        );
    } else if (animal === "Moose" || animal === "Sheep" || animal === "Goat") {
        return (
          <div onClick={(e) => setter(e.target.innerHTML)}>
            {"controlled"}
          </div>
        );
    } else {
      return children.map((ele, idx) => {
        return (
          <div key={idx} onClick={(e) => setter(e.target.innerHTML)}>
            {ele}
          </div>
        );
      });
    }
  }
   
    return (
      <>
        {filterMethods()}
      </>
    );
}

export default RenderList;