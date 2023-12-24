import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    const intervalId = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      <h3>Час и Дата в реално време:</h3>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default Clock;