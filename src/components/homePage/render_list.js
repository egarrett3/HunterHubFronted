import React from 'react';

const RenderList = ({children,setter}) => {

  const filterMethods = () => {
  
    return children.map((ele, idx) => {
      return (
        <div key={idx} onClick={(e) => setter(e.target.innerHTML)}>
          {ele}
        </div>
      );
    });
    
  }
   
    return (
      <>
        {filterMethods()}
      </>
    );
}

export default RenderList;