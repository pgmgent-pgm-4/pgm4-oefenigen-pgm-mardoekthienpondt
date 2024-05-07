import React, { useEffect, useState } from 'react';

export default function HearthstoneList() {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_HEARTHSTONE_INFO_KEY,
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
        setIsLoading(false);
      });
  }, []);
  return <div>
    {console.log(classes)}
    {isLoading && <p>Loading...</p>}
    {!isLoading && classes.map((classItem, index) => (
      <div key={index}>
        <h2>{classItem.name}</h2>
      </div>
    ))
    }
  </div>;
}
