import React from "react";
import videodetails from "../Assets/Data/video-details.json";
import videos from "../Assets/Data/videos.json";
import Mohan from "../Assets/Images/Mohan-muruge.jpg";
import "./styles.css"
import Views from "../Assets/Icons/views.svg";
import Likes from "../Assets/Icons/likes.svg";
import "./styles.css"

class PracticeVideoList extends React.Component {
    constructor(props) {
        super(props);

        //this state holds the api data
        this.state = {
            videos,
            videodetails
        };
        this.handleClick = this.handleClick.bind(this);
        
    }



    //event handler that will get called onClick and provide the videodetails data
    handleClick = (event) => {
        event.preventDefault();
        
        console.log(event.target.id)
        //onClick get the id of the video in the playlist and make the videodetails with the same id appear
        //if videos.id === videodetails.id
        //this.setState({
        //    videodetails
        //})

        this.setState({
            
        
        });
        
    }

    render() {
        return (
           <div>

               <Player
                key = {this.state.videodetails.id}
                id = {this.state.videodetails.id}
                title = {this.state.videodetails.title}
                channel = {this.state.videodetails.channel}
                image = {this.state.videodetails.image}
                description = {this.state.videodetails.description}
                views = {this.state.videodetails.views}
                likes = {this.state.videodetails.likes}
                duration = {this.state.videodetails.duration}
                timestamp = {this.state.videodetails.timestamp}
                comments = {this.state.videodetails[0].comments}
                handleClick = {this.handleClick}
                />
           

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

    const date = new Date(props.timestamp);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    
    const fullDate = day + "/" + month + "/" + year;

    return(
        <section className="main-video" key={props.id} id={props.id} onClick={props.handleClick}>
            <video
                controls
                poster={props.image}
                className="main-video__video"
                id={props.id}

            >
                <source src={props.video} />
            </video>

            <div className="main-video__description-box">
            <p className="main-video__description-title">{props.title}</p>
                <ul key={props.id} className="main-video__description">
                    <div className="main-video__description-box1">
                        <li className="main-video__description-channel">{props.channel}</li>
                        <li className="main-video__description-date">{fullDate}</li>
                    </div>

                    <div className="main-video__description-box2">
                        <li className="main-video__description-views"><img src={Views} alt="an eye icon"/>{props.views}</li>
                        <li className="main-video__description-likes"><img src={Likes} alt="a heart icon"/>{props.likes}</li>
                    </div>
                </ul>

                <p>{props.description}</p>
            </div>
            <div>
                <p className="comments-number">{props.comments.length} Comments</p>
                <form className='comment-form'>
                        <input type="image" className='comment-form__image' src={Mohan} alt="text" />
                        <div className='comment-form__input-container'>
                        <label>JOIN THE CONVERSATION</label>
                        <input type="text" className='comment-form__input'placeholder='Add a new comment'/>
                        <button type='submit' className='comment-form__button' onClick={props.changeVideo}>Comment</button>
                        </div>
                </form>
             </div>
                <br />
                
            <p className="comments-comments">{props.comments.map((comments) =>
            <ul className="comments-list">
            <hr />

                <div className="comment-list-column1">
                <li className="comments-list__avatar"><img src={props.image}></img></li>
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
