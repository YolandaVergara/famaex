import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

const Header = () => {
  const { articles } = useContext(ArticlesContext);
  return (
    <header>
      Header
    </header>
  );
};

export default Header;