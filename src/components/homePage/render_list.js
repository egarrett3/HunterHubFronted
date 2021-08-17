import React from 'react';

const RenderList = ({children,setter}) => {

  const filterMethods = () => (
  
    children.map((ele, idx) => {
      return (
        <div key={`list-item-${idx}`} onClick={(e) => setter(e.target.innerHTML)}>
          {ele}
        </div>
      );
    })
  )
  
   
    return (
      <>
        {filterMethods()}
      </>
    );
}

export default RenderList;