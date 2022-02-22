import React from "react";
import Mohan from "../Assets/Images/Mohan-muruge.jpg";
import "./styles.css";
import Scrubber from "../Assets/Icons/scrub.svg";
import Play from "../Assets/Icons/play.svg";
import Fullscreen from "../Assets/Icons/fullscreen.svg";
import VolumeUp from "../Assets/Icons/volume_up.svg";

function Player(props) {

    const formatMyDate = (timestamp) => {
        const date = new Date(timestamp)
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }
    
    return(
        <section className="main-video" key={props.currentVideoDetails.id} id={props.currentVideoDetails.id}>
            <div className="video-container">
            <video
                controls
                src = {props.video}
                poster={props.currentVideoDetails.image}
                className="main-video__video"
                id={props.currentVideoDetails.id}
            >
                <source src={props.currentVideoDetails.video} />
            </video>
            </div>

            <div id="video-controls" className="controls" data-state="hidden">
                <button id="playpause" type="button" data-state="play"><img src={Play} alt="play"/></button>
                
                <div className="progress">
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
                        <li className="main-video__description-date">{formatMyDate(props.currentVideoDetails.timestamp)}</li>
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
                <p className="comments-number">Comments</p>
                <form className='comment-form' onSubmit={props.handleSubmit}>
            
                        <input type="image" className='comment-form__image' src={Mohan} alt="text" value={props.image} />
                        <div className='comment-form__input-container'>
                        <label className="under480">JOIN THE CONVERSATION
                        <input type="text" className='comment-form__input'placeholder='Add a new comment' value={props.text} />
                        </label>
                        <button type='submit' className='comment-form__button' onClick={props.currentVideoDetails.changeVideo}>Comment</button>
                        </div>
                </form>
             </div>

             <div className="comments-comments">{props.currentVideoDetails.comments ? props.currentVideoDetails.comments.map((comments) =>
                <div className="comments-list">
                    <ul className="comment-list__one" key={props.id}>
                        <li className="comments-list__avatar"><img src="" alt=""></img></li>
                    </ul>
                    <ul className="comment-list__two" key={props.id}>
                        <div className="comments-list__line1">
                        <li className="comments-list__name">{comments.name}</li>
                        <li className="comments-list__timestamp">{formatMyDate(comments.timestamp)}</li>
                        </div>
                        <div>
                            <li className="comments-list__comment">{comments.comment}</li>
                        </div>
                    </ul>
            
                </div>): <div>Comments Loading</div>}</div>
                <hr />
           </section>
    )
}
export default Player;