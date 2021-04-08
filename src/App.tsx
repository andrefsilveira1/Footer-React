import React from 'react';
import './Styles/Global.css';
import './Styles/Home.css';
import './App.css';
import { Header} from './Components/Header'
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <div className="Container">
        <h1>Menu</h1>
        <Header />
        <Header/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
