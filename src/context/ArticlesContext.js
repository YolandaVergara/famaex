import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ArticlesContext = createContext();

// Provider donde se encuentran las funciones y el state
const ArticlesProvider = (props) => {

  const [articles, saveArticles] = useState([]);


  const getArticles = async () => {
    const url = 'http://5dfb6cf80301690014b8fb0a.mockapi.io/api/v1/reports';
    axios
    .get(`${url}`)
    .then(response =>{
      const articles = response.data;
      saveArticles(articles);
    })
    .catch (error) {
      console.log()
    }
    saveArticles(articles);
  }
  getArticles();

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