import Header from './components/Header'
import React from 'react';
import Videos from './components/Videos';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import uploadPage from './components/Upload';


function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Videos} />
          <Route path="/videos/:videoID" render = {(props) => <Videos match={props.match}/>} />
          <Route path="/uploads" component={uploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;