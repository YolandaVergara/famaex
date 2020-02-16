import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Main from './Articles';
import Footer from './Footer';
import ArticlesProvider from '../context/ArticlesContext';

function App() {
  return (
    <ArticlesProvider>
      <Header />
      <Main />
      <Footer />
    </ArticlesProvider>
  );
}

export default App;
