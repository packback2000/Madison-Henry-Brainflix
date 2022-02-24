import React from "react";
import Mohan from "../Assets/Images/Mohan-muruge.jpg";
import "./styles.css";
import Comment from "../Assets/Icons/add_comment.svg";
import axios from "axios";
import { useState } from "react";

function CommentList(props) {

    const formatMyDate = (timestamp) => {
        const date = new Date(timestamp)
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }

    

    const [comment, setComment] = useState('');

    const formHandler = (event) => {
        event.preventDefault();
        const postData = {
            "name": "name",
            "comment": "comment"
        }
        console.log(postData)
        console.log(props.currentVideoDetails.id)
        let videoidentification = props.currentVideoDetails.id
        axios.post("https://project-2-api.herokuapp.com/videos/" + videoidentification + "/comments/?api_key=427f0887-9b87-4dad-a425-2d49ecd8c162", postData)
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <div className="main-video__details">
            <section className="main-video__description-box">
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
            </section>

            
            <section className="comments-section">
                <p className="comments-number">Comments</p>
                <form className='comment-form' onSubmit={formHandler}>
            
                        <input type="image" className='comment-form__image' src={Mohan} alt="text" value={props.image} />
                        <div className='comment-form__input-container'>
                        <label className="under480">JOIN THE CONVERSATION
                        <input type="text" className='comment-form__input'placeholder='Add a new comment' value={comment} onChange={(event) => {setComment(event.target.value)}} />
                        </label>
                        <div className="comment-form__button-container">
                            <button type='submit' className='comment-form__button' onClick={props.currentVideoDetails.changeVideo}><img src={Comment} alt="Comment"/><p>Comment</p></button>
                        </div>
                        </div>
                </form>
             
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
                </section>
                </div>
    )
}

export default CommentList;