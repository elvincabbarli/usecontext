import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme || 'light')

    const initialState = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={initialState}>
            {children}
        </ThemeContext.Provider>
    )
}
