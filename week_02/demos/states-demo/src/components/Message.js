import React, { useState } from 'react'

export default function Message() {
    const [messageVisibility, setMessageVisibility] = useState(true);
  return (
    <div>
        {messageVisibility && <p>A message</p>}
        <button onClick={() => setMessageVisibility(!messageVisibility)}>Toggle message</button>
    </div>
  )
}
