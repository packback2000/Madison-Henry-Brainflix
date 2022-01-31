import React from "react";
import videodetails from "../Assets/Data/video-details.json";
import videos from "../Assets/Data/videos.json";
import Mohan from "../Assets/Images/Mohan-muruge.jpg";
import "./styles.css"
import Views from "../Assets/Icons/views.svg";
import Likes from "../Assets/Icons/likes.svg";
import Comment from "../Assets/Icons/add_comment.svg"

class PracticeVideoList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            videos,
            videodetails
        }
       
    }

    handleClick() {
        this.setState(
            console.log("has been clicked"+this.setState.videodetails.id)
            
        )
    }

    render() {
        return (
           <div>
               <Player
                key = {this.state.videodetails[0].id}
                title = {this.state.videodetails[0].title}
                channel = {this.state.videodetails[0].channel}
                image = {this.state.videodetails[0].image}
                description = {this.state.videodetails[0].description}
                views = {this.state.videodetails[0].views}
                likes = {this.state.videodetails[0].likes}
                duration = {this.state.videodetails[0].duration}
                timestamp = {this.state.videodetails[0].timestamp}
                comments = {this.state.videodetails[0].comments}
                />
           

               {this.state.videos.map((video) =>
                <VideoList 
                    key={video.id}
                    title={video.title}
                    image={video.image}
                    channel={video.channel}
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
        <section className="main-video">
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
                
                    <br />
                        <input type="image" className='comment-form__image' src={Mohan} alt="text" />
                        <div className='comment-form__input-container'>
                        <label>JOIN THE CONVERSATION</label>
                        <input type="text" className='comment-form__input'placeholder='Add a new comment'/>
                        <button type='submit' className='comment-form__button' onClick={props.changeVideo}><img src={Comment} alt="A plus sign"/>Comment</button>
                        </div>
                </form>
             </div>
                <br />
            <p>{props.comments.map((comments) =>
            <ul>
                <li>{comments.name}</li>
                <li>{comments.timestamp}</li>
                <li>{comments.comment}</li>
            </ul>)}</p>
        </section>
    )
}
  
function VideoList(props) {

    return (
        <section className="next-videos" onClick={props.handleClick}>
            <img src={props.image} className="video-list__image" alt="a man looking left in front of a purple background"  />
            <div className="video-list__container">
                <p className="video-list__title">{props.title}</p>
                <p className="video-list__channel">{props.channel}</p>
            </div>
        </section>
    )
}
