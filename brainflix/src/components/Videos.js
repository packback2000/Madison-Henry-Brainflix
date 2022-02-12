import React from "react";
import videodetails from "../Data/video-details.json";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Player from "./MainVideo";
import VideoList from "./VideoDetails";

// const apiKey = "427f0887-9b87-4dad-a425-2d49ecd8c162";

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentVideo: 0,
            videoDetails: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    fetchVideoDetails() {
        axios.get("https://project-2-api.herokuapp.com/videos/?api_key=427f0887-9b87-4dad-a425-2d49ecd8c162")
        .then(response => {
            const apiData = response.data
            this.setState({
                data: apiData
            }) 
        })
    }

    componentDidMount() {
        this.fetchVideoDetails()
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id === this.state.data.id) {
           console.log("id matches")
        }
    }
    
    handleDelete = (id) => {
        const updatedList =  this.state.data.filter((todoitem) => {
            return id !== todoitem.id;
        })
        this.setState({data: updatedList})
    }

    handleClick = (id) => {
        let videoIndex = this.state.data.map(function(x) {return x.id;}).indexOf(id);
        this.setState({
           currentVideo: videoIndex,
        }); 
        
        let details = axios.get("https://project-2-api.herokuapp.com/videos/" + this.state.data[videoIndex].id + "/?api_key=427f0887-9b87-4dad-a425-2d49ecd8c162")
        .then(response => {
           let profile = response.data;
           console.log(profile)
           this.setState({
               videoDetails: profile
           });
       }).catch(err => {
           console.log(err);
       })
       console.log(this.state.videoDetails)
       console.log(details)
       };
       

    render() {
        return (
           <div>

                <Player currentVideoDetails = {videodetails[this.state.currentVideo]}/>
           
                <p className="next-videos__label">Next Videos</p>
               {this.state.data.map((video) =>
               <Link to={"/videos/" + video.id} key={video.id}>
                <VideoList 
                    key={video.id}
                    id = {video.id}
                    title={video.title}
                    image={video.image}
                    channel={video.channel}
                    handleClick = {this.handleClick}
                    handleDelete = {this.handleDelete}
                    video = {video.video}
                />
                </Link>
               )} 
           </div>
        )
    }
}

export default Videos;