import React from 'react';
import ReactDOM from 'react-dom';
import HeroArea from '../../components/hero-area/heroArea.js'
import Header from '../../components/header/header.js'
import MarqueeFeature from '../../components/marquee-feature/marqueeFeature.js'
import ConfigData from './configData.js'

require('../../../scss/home/main.scss');

class Home extends React.Component {
    render() {
        return (
            <main>
                <Header/>
                <HeroArea config={ConfigData.heroConfig}/>
                <MarqueeFeature config={ConfigData.aboutConfig}/>
                <MarqueeFeature config={ConfigData.projectsConfig}/>
            </main>
        )
    }
}
ReactDOM.render(
    <Home id='homePage'/>,
    document.getElementById('app')
);