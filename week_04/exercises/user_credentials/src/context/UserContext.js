import React, {createContext, useState} from 'react'

export const UserContext = createContext();

export const LogInArea = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>{children}</UserContext.Provider>
  )
}
