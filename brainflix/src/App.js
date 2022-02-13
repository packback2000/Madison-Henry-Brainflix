import Header from './components/Header'
import React from 'react';
import Videos from './components/Videos';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import page404 from './components/Page404';
import uploadPage from './components/Upload';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Videos} />
          <Route path="/videos" component={Videos} />
          <Route 
            path="/videos/:videoID"
            render={(routerProps) => {

            return (
              <videoDetails
                {...routerProps}
              />
            )
            }}
          />
          <Route path="/uploads" component={uploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;