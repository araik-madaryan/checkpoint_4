import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavbarStrap from './user/NavbarStrap'
import Userfront from './user/Userfront';
import Footer from './user/Footer';
import Adminhome from './admin/Adminhome'

function App() {
  return (
    <div className="App">
      <NavbarStrap />
        <Switch>
          <Route exact path="/" component={Userfront} />
          <Route exact path="/admin" component={Adminhome} />
        </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
