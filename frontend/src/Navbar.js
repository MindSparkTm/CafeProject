import React, {Component} from "react";
export default class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">CAFE REACT</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}