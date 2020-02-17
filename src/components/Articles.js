import React, { useContext, useState } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

const Main = () => {
  const { articles } = useContext(ArticlesContext);
  const [order, saveOrder] = useState({
    order: 'id'
  })

  const handleOrder = ev => {
    saveOrder({
      ...order,
      [ev.target.name]: ev.target.value
    })
    orderBy();
  }

  const orderBy = () => {
    return order === 'id' ? articles.sort((a, b) => (a.id) - (b.id)) : articles.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  }

  console.log(order)
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