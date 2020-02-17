import React, { useContext, useState } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

const Main = () => {
  const { articles } = useContext(ArticlesContext);
  const [order, saveOrder] = useState([]);

  return (
    <div className="articles">
      {articles.map((article, id) => {
        console.log(article);
        return (
          <div key={article.id} className={`articles__${id}`}>
            <h2 className="articles__title">{article.name}</h2>
            <p className="articles__text">{article.Text}</p>
          </div>
        )
      })}
      <div className="select">
        <select name="order">
          <option value="id">Ordenar por ID</option>
          <option value="date">Ordenar por fecha</option>
        </select>
      </div>
    </div>)
};

export default Main;