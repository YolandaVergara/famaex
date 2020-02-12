import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import Main from './Main';
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
