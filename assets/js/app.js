import React from "react"
import ReactDOM from "react-dom";
import Header from "./components/navBar";
import MainMenu from "./components/mainMenu";

class App extends React.Component {

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
