import React from "react";
import videodetails from "../Assets/Data/video-details.json";
import videos from "../Assets/Data/videos.json";
import Mohan from "../Assets/Images/Mohan-muruge.jpg";
import "./styles.css";
import Scrubber from "../Assets/Icons/scrub.svg";
import Play from "../Assets/Icons/play.svg";
import Fullscreen from "../Assets/Icons/fullscreen.svg";
import VolumeUp from "../Assets/Icons/volume_up.svg";

class PracticeVideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVideo: 0,
            videos
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.setState({
            currentVideo: this.state.currentVideo + 1
        });
    }

    render() {
        return (
           <div>

                <Player currentVideoDetails = {videodetails[this.state.currentVideo]}/>
           
                <p className="next-videos__label">Next Videos</p>
               {this.state.videos.map((video) =>
                <VideoList 
                    key={video.id}
                    id = {video.id}
                    title={video.title}
                    image={video.image}
                    channel={video.channel}
                    handleClick = {this.handleClick}
                />
               )} 
           </div>
        )
    }
}

export default PracticeVideoList;


function Player(props) {

    const date = new Date(props.currentVideoDetails.timestamp);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    
    const fullDate = day + "/" + month + "/" + year;

    return(
        <section className="main-video" key={props.currentVideoDetails.id} id={props.currentVideoDetails.id}>
            <div className="video-container">
            <video
                
                poster={props.currentVideoDetails.image}
                className="main-video__video"
                id={props.currentVideoDetails.id}
            >
                <source src={props.currentVideoDetails.video} />
            </video>
            </div>

            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause" type="button" data-state="play"><img src={Play} alt="play"/></button>
                
                <div class="progress">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"><img src={Scrubber} alt="scrubber"/><p>{props.currentVideoDetails.duration}</p></span>
                    </progress>
                </div>
                <button id="volinc" type="button" data-state="volup"><img src={VolumeUp} alt="volueup"/></button>
                <button id="fs" type="button" data-state="go-fullscreen"><img src={Fullscreen} alt="fullscreen"/></button>
            </div>

            <div className="main-video__description-box">
            <p className="main-video__description-title">{props.currentVideoDetails.title}</p>
            <hr/>
                <ul key={props.currentVideoDetails.id} className="main-video__description">
                    <div className="main-video__description-box1">
                        <li className="main-video__description-channel">{props.currentVideoDetails.channel}</li>
                        <li className="main-video__description-date">{fullDate}</li>
                    </div>

                    <div className="main-video__description-box2">
                        <li className="main-video__description-views">{props.currentVideoDetails.views}</li>
                        <li className="main-video__description-likes">{props.currentVideoDetails.likes}</li>
                    </div>
                </ul>
                <hr/>

                <p>{props.currentVideoDetails.description}</p>
            </div>
            
            <div>
                <p className="comments-number">{props.currentVideoDetails.comments.length} Comments</p>
                <form className='comment-form'>
            
                        <input type="image" className='comment-form__image' src={Mohan} alt="text" />
                        <div className='comment-form__input-container'>
                        <label className="under480">JOIN THE CONVERSATION
                        <input type="text" className='comment-form__input'placeholder='Add a new comment'/>
                        </label>
                        <button type='submit' className='comment-form__button' onClick={props.currentVideoDetails.changeVideo}>Comment</button>
                        </div>
                </form>
             </div>

                <br />
                
            <p className="comments-comments">{props.currentVideoDetails.comments.map((comments) =>
            <ul className="comments-list">
            <hr />
                <div className="comment-list-column1">
                <li className="comments-list__avatar"></li>
                </div>
                
                <div className="comments-list__line1">
                <li className="comments-list__name">{comments.name}</li>
                <li className="comments-list__timestamp">{comments.timestamp}</li>
                </div>
            
            <div>
                <li className="comments-list__comment">{comments.comment}</li>
            </div>
            
            </ul>)}</p>
            <hr />
            
        </section>
    )
}
  
function VideoList(props) {
    
    return (
        <section className="next-videos" onClick={props.handleClick} key={props.id} id={props.id}>
            <img id={props.id} src={props.image} className="video-list__image" alt="a man looking left in front of a purple background"  />
            <div className="video-list__container" id={props.id}>
                <p className="video-list__title" id={props.id}>{props.title}</p>
                <p className="video-list__channel" id={props.id}>{props.channel}</p>
            </div>
        </section>

    )
}

