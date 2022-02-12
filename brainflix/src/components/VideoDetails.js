import React from "react";
import "./styles.css";

function VideoList(props) {
    
    return (
        <section className="next-videos" onClick={() => {props.handleClick(props.id); props.handleDelete(props.id)}} key={props.id} id={props.id}>
            <img id={props.id} src={props.image} className="video-list__image" alt="a man looking left in front of a purple background"  />
            <div className="video-list__container" id={props.id}>
                <p className="video-list__title" id={props.id}>{props.title}</p>
                <p className="video-list__channel" id={props.id}>{props.channel}</p>
            </div>
        </section>

    )
}
 
export default VideoList;