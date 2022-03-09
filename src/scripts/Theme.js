import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const Theme = (props) => {
    
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

};

export default Theme;