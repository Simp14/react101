import React from 'react';
import ReactDOM from 'react-dom';

class HeroArea extends React.Component {
  render () {
    return (
      <section id={this.props.config.id}>
        <h1>{this.props.config.text}</h1>
        <p>{this.props.config.subtitle}</p>
        <img src='./images/angular-logo.svg' className='skill' alt='Angular JS'/>
        <img src='./images/react-logo.svg' className='skill' alt='React JS'/>
        <img src='./images/node-logo.svg' className='skill' alt='Node JS'/>
      </section>
    )
  }
}

export default HeroArea;