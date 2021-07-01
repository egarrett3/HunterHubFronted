import React from 'react';


const RenderList = ({children,setter}) => {

    return (
      <>
        {children.map((ele,idx) => {
          return <div key={idx} onClick={(e) => setter(e.target.innerHTML)}>{ele}</div>;
        })}
      </>
    );
}

export default RenderList;