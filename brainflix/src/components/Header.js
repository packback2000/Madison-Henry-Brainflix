import React from 'react';
import Logo from "../Assets/Logo/BrainFlix-logo.svg"
import Mohan from "../Assets/Images/Mohan-muruge.jpg"
import "./styles.css"


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
                    <button type='submit' className='header-form__button'>Upload</button>
                    <input type="image" className='mohan-over480' src={Mohan} alt="text" />
                </form>
            </section>
        )
    }
}

export default Comments;