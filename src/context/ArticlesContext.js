import React, { createContext, useState, useEffect } from 'react';

export const ArticlesContext = createContext();

// Provider donde se encuentran las funciones y el state
const ArticlesProvider = (props) => {
  // const classes = [{ 
  //   "container1": 
  // }]

  const [articles, saveArticles] = useState([]);
  const url = 'http://5dfb6cf80301690014b8fb0a.mockapi.io/api/v1/reports';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => saveArticles(data));
  }, []);


  return (

    <ArticlesContext.Provider
      value={{
        articles
      }}
    >
      {props.children}
    </ArticlesContext.Provider>
  )
}
export default ArticlesProvider; 