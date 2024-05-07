import React, { useState } from 'react';

export default function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  return <div>
    {darkMode && document.body.classList.add('dark-mode')}
    {!darkMode && document.body.classList.remove('dark-mode')}
    <button onClick={() => setDarkMode(!darkMode)}>Toggle dark mode</button>
  </div>;
}
