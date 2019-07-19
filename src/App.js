import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Userfront from './user/Userfront';
import Adminhome from './admin/Adminhome'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Userfront} />
          <Route exact path="/admin" component={Adminhome} />
        </Switch>      
    </div>
  );
}

export default App;
