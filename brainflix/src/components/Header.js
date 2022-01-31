import React from 'react';
import Logo from "../Assets/Logo/BrainFlix-logo.svg"
import "./Header.css"
import Mohan from "../Assets/Images/Mohan-muruge.jpg"
import Upload from "../Assets/Icons/upload.svg"



class Comments extends React.Component {
    state = {
        searchTerm: " ",
    }
    
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }
    
    render() {
        return(
            <section className='Header'>
                <img src={Logo} className='logo' alt="Brainflix logo" />
                <form onSubmit={this.handleSubmit} className='header-form'>
                    <div className='header-input__container'>
                    <input type="text" onChange={this.handleChange} className='header-form__input' placeholder="Search" />
                    
                    <input type="image" className='header-form__image' src={Mohan} alt='Mohan' />
                    </div>
                    <button type='submit' className='header-form__button'><img src={Upload} alt="upload icon"></img>Upload</button>
                </form>
            </section>
        )
    }
}

export default Comments;