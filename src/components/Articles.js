import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

const Main = () => {
  const { articles, saveArticles } = useContext(ArticlesContext);

  const handleOrder = ev => {
saveArticles() 
  }

  
  console.log(articles)
  return (
    <div className="articles">
      {articles.map((article, id) => {
        return (
          <div key={article.id} className={`articles__${id}`}>
            <h2 className="articles__title">{article.name}</h2>
            <p className="articles__text">{article.Text}</p>
          </div>
        )
      })}
      <div className="select" value>
        <select name="order" onChange={handleOrder}
        >
          <option value="id">Ordenar por ID</option>
          <option value="date">Ordenar por fecha</option>
        </select>
      </div>
    </div>)
};

export default Main;