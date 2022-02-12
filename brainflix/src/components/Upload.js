import VideoPreview from "../Assets/Images/Upload-video-preview.jpg";
import React from "react";
import { Link } from "react-router-dom";

class uploadPage extends React.Component {


    handleUpload(event) {
       
        
    }

    

    render() {
        return(
            <section className="uploads">
                <h1 className="uploads-title">Upload Video</h1>
                <p className="uploads-thumbnail title">Video Thumbnail</p>
                <img src={VideoPreview} alt="" className="uploads-image"/>

                <form className="uploads-form">
                    <label className="uploads-input__title-label">TITLE YOUR VIDEO</label>
                    <input type="text" className="uploads-input__title"/>
                    <label className="uploads-input__description-label">
                        ADD A VIDEO DESCRIPTION
                        <input type="text" className="uploads-input__description" />
                    </label>

                    <Link to={"/videos"}>
                        <button type="submit" onclick={this.handleUpload()} className="uploads-button__publish">
                            PUBLISH
                        </button>
                    </Link>

                    <button className="uploads-button__cancel">
                        CANCEL
                    </button>
                </form>
            </section>

        )
    }
}

export default uploadPage;