import React, { useState } from "react"

export const ContextTheme = React.createContext()

export const ThemeData = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ContextTheme.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </ContextTheme.Provider>
  )
}