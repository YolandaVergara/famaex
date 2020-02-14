import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ArticlesProvider from '../context/ArticlesContext';

function App() {
  return (
    <ArticlesProvider>
      <div className="container px-2">
      <Header />
      <Main />
      <Footer />
      </div>
    </ArticlesProvider>
  );
}

export default App;
