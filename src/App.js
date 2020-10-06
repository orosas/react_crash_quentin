import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


// import CounterExample from './components/CounterExample';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Views/Home';
import About from './Views/About';
import ContactUs from './Views/ContactUs';
import Post from './Views/Post';

function App() {
  return (
    <div>

    <Router>

      <Header />      
      
      {/* <CounterExample /> */}
      <div className='p-3'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/posts">
            <Post />
          </Route>
        </Switch>
      </div>

      <Footer />
    </Router>
      
    </div>
  );
}

export default App;

// Continuar video 1:17:30
