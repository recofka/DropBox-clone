import React from 'react';
import AllBoxesComponent from './AllBoxesComponent';
import './AllBoxes.css';


const AllBoxes = ({ boxes }) => {
  if (!boxes) {
    return (<div id="box-loading-home" >Loading all boxes...</div>);
  }
  return (
    <div id="boxes-container">
      {
        boxes.map(box => (
          <AllBoxesComponent
            title={box.title}
            key={box._id}
            id={box._id}
            length={box.files.length}
          />
        ))
      }
    </div>
  );
};

export default AllBoxes;
