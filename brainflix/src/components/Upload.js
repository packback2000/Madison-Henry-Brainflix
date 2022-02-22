import VideoPreview from "../Assets/Images/Upload-video-preview.jpg";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import publishButton from "../Assets/Icons/publish.svg";
import { Redirect } from "react-router-dom";

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
            e.preventDefault()
            alert("video was uploaded")
            this.props.history.push("/videos/84e96018-4022-434e-80bf-000ce4cd12b8")
        }
    

    render() {
        
        return(
            <section className="uploads" onSubmit={this.handleUpload}>
                <hr></hr>
                <h1 className="uploads-title">Upload Video</h1>
                <p className="uploads-thumbnail__title">Video Thumbnail</p>
                <div className="uploads-image__container">
                    <img src={VideoPreview} alt="" className="uploads-image"/>
                </div>

                <form className="uploads-form">
                    <label className="uploads-input__title-label">TITLE YOUR VIDEO</label>
                        <input type="text" className="uploads-input__title" name="title" onChange={this.handleChangeTitle} value={this.state.title} required/>
                    <label className="uploads-input__description-label">ADD A VIDEO DESCRIPTION</label>
                        <input type="text" className="uploads-input__description" name="description" onChange={this.handleChangeDescription} value={this.state.description} required />
                    
                        <button type="submit"  className="uploads-button__publish"> <img src={publishButton} alt="Button" />
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