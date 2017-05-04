import React from 'react';
import ReactDOM from 'react-dom';

class MarqueeFeature extends React.Component {
  render () {
    return (
      <section id={this.props.config.id} className='marquee'>
        <h2>{this.props.config.header}</h2>
        <div className='marquee-content'>
          <img src={this.props.config.iconSrc}/>
          <p>{this.props.config.description}</p>
        </div>
        <div className='hover-text'>
            <p>{this.props.config.hoverText}</p>
        </div>
      </section>
    )
  }
}

export default MarqueeFeature;