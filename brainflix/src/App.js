import Header from './components/Header'
import React from 'react';
import Videos from './components/Videos';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import uploadPage from './components/Upload';

export const API_URL = "https://project-2-api.herokuapp.com/videos/?api_key=427f0887-9b87-4dad-a425-2d49ecd8c162"

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