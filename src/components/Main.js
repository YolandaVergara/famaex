import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

const Main = () => {
  const { articles } = useContext(ArticlesContext);
  return (
    <main>
      <section>Section</section>
      <article>
        Article
      </article>
    </main>
  );
};

export default Main;