import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import {MdSunny, MdDarkMode } from 'react-icons/md';
export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);

  return (
    <div>
        <button onClick={()=>{
            setIsDarkMode(!isDarkMode);
            document.body.classList.toggle('dark');
            }}>
            {isDarkMode ? <MdSunny /> : <MdDarkMode />}
        </button>
    </div>
  )
}
