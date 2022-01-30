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
        //this state holds the video data
        this.state = {
            videos,
            videodetails
        }
    }


    //event handler that will get called onClick and change video based on id
    //takes in the current video id  and determines if we need to change it
    changeVideo = () => {
        this.setState({
            //searchterm: event.target.value
            videodetails: this.state.videodetails.id
            
            //find id of video
        })
        
    }

    render() {
        return (
           <div>

                {this.state.videodetails.map((mainvideo)=>
                    <MainVideo 
                        key={mainvideo.id}
                        id={mainvideo.id}
                        title={mainvideo.title}
                        image={mainvideo.image}
                        channel={mainvideo.channel}
                        description={mainvideo.description}
                        views={mainvideo.views}
                        likes={mainvideo.likes}
                        duration={mainvideo.duration}
                        //add video here at the end
                        timestamp = {mainvideo.timestamp}
                        comments = {mainvideo.comments}
                    />
                )}


               {this.state.videos.map((video) =>
               
                <Video 
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

function MainVideo(props) {
   
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
                        <li className="main-video__description-views"><img src={Views}/>{props.views}</li>
                        <li className="main-video__description-likes"><img src={Likes}/>{props.likes}</li>
                    </div>
                </ul>

                <p>{props.description}</p>
            </div>
            <div>
                <p className="comments-number">{props.comments.length} Comments</p>
                <form className='comment-form'>
                
                    <br />
                        <input type="image" className='comment-form__image' src={Mohan} />
                        <div className='comment-form__input-container'>
                        <label>JOIN THE CONVERSATION</label>
                        <input type="text" className='comment-form__input'placeholder='Add a new comment'/>
                        <button type='submit' className='comment-form__button' onClick={props.changeVideo}><img src={Comment}></img>Comment</button>
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

function Video(props) {

    return (
        <section className="next-videos">
            <img src={props.image} className="video-list__image"  />
            <div className="video-list__container">
                <p className="video-list__title">{props.title}</p>
                <p className="video-list__channel">{props.channel}</p>
            </div>
        </section>
    )
}

