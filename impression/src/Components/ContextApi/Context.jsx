import React from 'react';

import { createContext } from 'react';

import { useState, useEffect } from 'react'; 

export const Context = createContext();



export const ContextApiProvider = ({children}) => {

    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {

         const id = setTimeout(() => {

            setisLoaded(true);
            

         },1000)

    },[]);



    return (
        <Context.Provider value = {{isLoaded}}>

            {children}
            
        </Context.Provider>
    );
}

export default Context;
