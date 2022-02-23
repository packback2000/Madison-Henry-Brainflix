import React from "react";
import Mohan from "../Assets/Images/Mohan-muruge.jpg";
import "./styles.css";
import Comment from "../Assets/Icons/add_comment.svg";

function CommentList(props) {

    const formatMyDate = (timestamp) => {
        const date = new Date(timestamp)
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }

    return (
        <div className="comments-section">
                <p className="comments-number">Comments</p>
                <form className='comment-form' onSubmit={props.handleSubmit}>
            
                        <input type="image" className='comment-form__image' src={Mohan} alt="text" value={props.image} />
                        <div className='comment-form__input-container'>
                        <label className="under480">JOIN THE CONVERSATION
                        <input type="text" className='comment-form__input'placeholder='Add a new comment' value={props.text} />
                        </label>
                        <button type='submit' className='comment-form__button' onClick={props.currentVideoDetails.changeVideo}><img src={Comment} alt="Comment"/><p>Comment</p></button>
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
                </div>
    )
}

export default CommentList;