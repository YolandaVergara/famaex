import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

const Footer = () => {
  const { articles } = useContext(ArticlesContext);
  return (
    <footer>
Footer
    </footer>
  );
};

export default Footer;