import React from "react"
import ReactDOM from "react-dom";
import Header from "./components/navBar";
import MainMenu from "./components/mainMenu";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                accessToken: null
            }
        }
    }

    componentDidMount() {
        const accessToken = localStorage.getItem('accessToken');
        this.setState({
            ...this.state,
            accessToken: accessToken
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <MainMenu/>
                        </div>
                        <div className="col-md-10">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
