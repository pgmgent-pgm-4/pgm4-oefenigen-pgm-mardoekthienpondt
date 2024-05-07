import React, { useState } from 'react'

export default function Color() {
    const [color, setColor] = useState(['red','green','blue']);
    function getRandomHexColor() {
        // Array of possible hex characters
        const hexChars = '0123456789ABCDEF';
        let color = '#';
    
        // Generate a 6-digit hex color
        for (let i = 0; i < 6; i++) {
            // Pick a random index from hexChars
            const randomIndex = Math.floor(Math.random() * hexChars.length);
            color += hexChars[randomIndex];
        }
    
        return color;
    }
  return (
    <div>
        
      <button onClick={()=>{setColor([...color, getRandomHexColor()])}}>Add a random color</button>
        <ul>
            {color.map((color, index) => (
            <li className="color-rectangle" key={index} style={{"backgroundColor" : color}}>{color}</li>
            ))}
        </ul>
      <button onClick={()=>{setColor(color.filter((item, index) => index !== color.length - 1))}}>Remove a color</button>
    </div>
  )
}
