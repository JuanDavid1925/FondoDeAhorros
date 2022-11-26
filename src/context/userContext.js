import React, { useState } from 'react'

const Context = React.createContext()

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null)

  return (
    <Context.Provider value={{ userData, setUserData }}>
      {children}
    </Context.Provider>
  );
}

export default Context