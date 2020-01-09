import React from "react"
import ReactDOM from 'react-dom';
import Header from './components/navBar';

class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Header/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
