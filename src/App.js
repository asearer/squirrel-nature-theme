import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
// import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Routes>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/gallery" component={Gallery} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
