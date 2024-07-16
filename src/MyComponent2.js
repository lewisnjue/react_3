import React , {useContext} from "react";

import { ThemeContext } from "./ThemeContext";

const MyComponent2 = () =>{
    const {theme} = useContext(ThemeContext);

    return (
        <div style={{backgroundColor:theme === 'light'?'white':'black'}}>
            <h1>this is what is my name </h1> 
        </div>
    )
}

export default MyComponent2