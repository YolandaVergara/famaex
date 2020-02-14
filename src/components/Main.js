import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

const Main = () => {
  const { articles } = useContext(ArticlesContext);


  return (
    <div className="row mb-0 mb-md-5 py-0 py-md-5">
      {articles.map(article => {
        return (
          <div key={article.id} className="col-12 col-md-4 p-2">
            <div class="p-2 border h-100">
              <h2>{article.name}</h2>
              <p>{article.Text}</p>
            </div>
          </div>
        )
      })}
    </div>)
};

export default Main;