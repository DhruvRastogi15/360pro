import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    onSubmit = (obj) => {
        // this.props.history.push({
        //     pathname: "/home",
            // state: response.data
        // });
    }

    render() {
        return (
            <body>
                <div className="App">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="navbar-brand" href="">Navbar</div>
                        <button onClick={this.onSubmit('dh')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <div class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></div>
                                <div class="nav-item nav-link" href="#">Features</div>
                                <div class="nav-item nav-link" href="#">Pricing</div>
                                <div class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</div>
                            </div>
                        </div>
                    </nav>
                </div>
            </body>
        );
    }
}

export default Login;