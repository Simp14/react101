import React from 'react';
import ReactDOM from 'react-dom';
import HeroArea from '../components/hero-area/heroArea.js'
import Header from '../components/header/header.js'

require('../../scss/home/main.scss');

let config = {
    id : 'home-hero',
    text: 'Steve Simpson',
    subtitle: 'Web Developer'
}

class Home extends React.Component {
    render() {
        return (
            <main>
                <Header/>
                <HeroArea config={config}/>
            </main>
        )
    }
}
ReactDOM.render(
    <Home id='homePage'/>,
    document.getElementById('app')
);