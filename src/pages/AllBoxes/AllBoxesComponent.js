import React from 'react';
import { MdFolder } from 'react-icons/md';
import './AllBoxes.css';

const AllBoxesComponent = ({ title, id, length }) => (
  <ul>
    <li>
      <a className="fileInfo" href={`/box/${id}`} target="blank">
        <MdFolder size={24} color="#7159c1" />
        <strong>{title}</strong>
      </a>
      <span>
        {length}
        {' '}
        files
      </span>
    </li>
  </ul>
);

export default AllBoxesComponent;
