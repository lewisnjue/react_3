import { Children, createContext ,useState } from "react";

const ThemeContext = createContext('light'); // default theme 

const ThemeProvider = ({Children}) =>{
    const [theme , setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light'?'dark':'light');
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    );


};
export {ThemeContext,ThemeProvider}



