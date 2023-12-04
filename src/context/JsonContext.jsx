import React, { useEffect, createContext, useState } from 'react'


export const JsonContext = createContext({})

const JSON_URL = "/photos.json"

const JsonContextProvider = ({children}) => {

    const [fotos, setFotos] = useState([]);

    useEffect (()=>{
        const getData = async () =>{
            const res = await fetch(JSON_URL);
            const data = await res.json();
            setFotos(data.photos)
        }
       getData();
    },[])

  return (
    <JsonContext.Provider value={{fotos, setFotos}}>
      {children}
    </JsonContext.Provider>
  )
}

export default JsonContextProvider
