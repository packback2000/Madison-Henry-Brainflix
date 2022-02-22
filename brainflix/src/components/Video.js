import { Link } from "react-router-dom";
import "./styles.css";

function Video(video) {
    return (
        <Link className="Video" to={`/videos/${video.id}`}>
          <div className="next-videos">
                <img src={video.image} alt="video-thumbnails" className="video-list__image" />
                <p className="video-list__title" id={video.id}>{video.title}</p>
                <p className="video-list__channel" id={video.id}>{video.channel}</p>
          </div>
        </Link>
      );
    }

  export default Video;
  