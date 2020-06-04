import React, {Component} from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Aside from './components/Aside';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <>
          <header> {<Header />}</header>

          <section className="center">
            <aside>{<Aside />}</aside>
            <main>{<Main />}</main>
          </section>

          <footer>{<Footer />}</footer>
        </>
      </BrowserRouter>
    );
  }
}
 
export default App;
