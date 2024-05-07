import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClickAdd = () => {
    setCount(count + 1);
  };
  const handleClickDelete = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleClickAdd}>+</button>
      <div>{count}</div>
      <button onClick={handleClickDelete}>-</button>
    </div>
  );
}
