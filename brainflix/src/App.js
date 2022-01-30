import Header from './components/Header';
import VideoList from './components/VideoList';
import ReactDOM from 'react-dom';
import React from 'react';
import vidlist from './3.0 - Assets/Data/video-details.json';
import Comments from './components/Comments';
import VideoPlayer from './components/VidepPlayer';
import PracticeVideoList from './components/practiceVideoLists';
import { Video } from './components/practiceVideoLists';


function App() { 
  return (
    <div className="App">

      <Header />
      <PracticeVideoList />

    </div>
  );
}

export default App;

//<Header /> 
//<VideoPlayer />
//<Comments />
//<VideoList />