import VideoPreview from "../Assets/Images/Upload-video-preview.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { CreateRef} from "react-router-dom"


class uploadPage extends React.Component {
    state = {
        video: [],
        title: "",
        description: "",
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
      };

      handleChangeDescription = (event) => {
          this.setState({
              description: event.target.value
          })
      }

        handleCancel = () => {
            this.setState({
                title: "",
                description: ""
            })
        }

        handleUpload = (e) => {
            e.preventDefault();
            <Link to ="/videos" />
        }
      /* 
        const title = event.target.title
        const description = event.target.description

        if (title !== "" && description !== ""){
        alert("You have uploaded a video")
        
        } else {
            alert("All fields must be completed to upload a video")
        }
        */
    

    render() {
        return(
            <section className="uploads">
                <h1 className="uploads-title">Upload Video</h1>
                <p className="uploads-thumbnail title">Video Thumbnail</p>
                <img src={VideoPreview} alt="" className="uploads-image"/>

                <form className="uploads-form">
                    <label className="uploads-input__title-label">TITLE YOUR VIDEO</label>
                    <input type="text" className="uploads-input__title" name="title" onChange={this.handleChangeTitle} value={this.state.title}/>
                    <label className="uploads-input__description-label">
                        ADD A VIDEO DESCRIPTION
                        <input type="text" className="uploads-input__description" name="description" onChange={this.handleChangeDescription} value={this.state.description}/>
                    </label>

                        <button type="submit" onclick={this.handleUpload} className="uploads-button__publish">
                            PUBLISH
                        </button>

                    <button className="uploads-button__cancel" onClick={this.handleCancel}>
                        CANCEL
                    </button>

                </form>
            </section>

        )
    }
}

export default uploadPage;