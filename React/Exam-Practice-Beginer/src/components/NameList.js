import React, { useState } from 'react';

const NameList = () => {
  const [names, setNames] = useState(['Спас', 'Гроздан', 'Седеф', 'Марая']);

  const handleNameClick = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <span className="text-primary">{name}</span>
          <span
            style={{
              marginLeft: '10px',
              color: 'red',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={() => handleNameClick(index)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NameList;