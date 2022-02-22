import React from "react";
import "./styles.css";
import axios from "axios";
import Player from "./Player.js";
import Video from "./Video";
import { API_URL } from "../App";

// const apiKey = "427f0887-9b87-4dad-a425-2d49ecd8c162";


class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentVideo: {},
            videoDetails: [],
            comment: "",
            image: "",
            title: "",
            id: "",
            channel: "",
        }
    }

  
    fetchVideoDetails() {
        const apiURL = `${API_URL}`
        axios.get(apiURL)
        .then((response) => {
            const apiData = response.data;
            this.setState({
               data: apiData,
               title: apiData.channel,
               id: apiData.id,
               channel: apiData.channel,
               image: apiData.image
            })
        })
    }

    

    componentDidMount() {
        this.fetchVideoDetails();
        let videoidentification = this.props.match.params.videoID
        axios.get("https://project-2-api.herokuapp.com/videos/" + videoidentification + "/?api_key=427f0887-9b87-4dad-a425-2d49ecd8c162")
        .then(response => {
            let mainvideoData = response.data
            this.setState({
                currentVideo: mainvideoData,
            })
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
       if (prevState.currentVideo.id !== this.props.match.params.videoID) {
        console.log("componentDidUpdate")
       }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }
 
    render() {

        return (
           <div>
             <Player currentVideoDetails = {this.state.currentVideo}/>
           
                <p className="next-videos__label">Next Videos</p>
               {this.state.data.map((video) =>
               <div key={video.id} className="Videos__item">
                    <Video
                        key={video.id}
                        id = {video.id}
                        title={video.title}
                        image={video.image}
                        channel={video.channel}
                        handleClick = {this.handleClick}
                        handleDelete = {this.handleDelete}
                        video = {video.video}
                        handleSubmit = {this.handleSubmit}
                    />
                 </div>
               )} 
           </div>
        )
    }
}

export default Videos;

/*
    CONST vIDEOS = (PROPS) => {
        const newVideoArray = props.video.filter((video, index) => {
            console.log(video.id, props.currentVideo);
            return video.id !== props.currentVideo;
        })
    }
    return newVideoArray.map((video, index))
*/