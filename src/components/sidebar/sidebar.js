import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {
    render() {
        return (
            <aside id='sidebar'>
               {this.props.content}
            </aside>
        )
    }
}

ReactDOM.render(
    <Home id='homePage'/>,
    document.getElementById('app')
);