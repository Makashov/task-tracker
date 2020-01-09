import React from "react"
import Octicon, {Home, GithubAction} from "@primer/octicons-react";
import '../../css/app.css';

class Header extends React.Component {

    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <Octicon icon={Home}/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Octicon icon={GithubAction}/>
                        <span className="nav-icon-txt">Boards</span>
                    </a>
                </li>
            </ul>
        );
    }
}

export default Header;
