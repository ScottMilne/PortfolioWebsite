import "./App.css";
import React from 'react'
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import LipSync from "./ProjectPages/LipSync";
import Flock from "./ProjectPages/Flock";
import Questie from "./ProjectPages/Questie";
import Home from "./Home";


function App() {
    return (
        <div>

            <Router>
                <Switch>
                <Route exact path="/" component={withRouter(Home)} />
                <Route exact path="/Projects/Lipsync" component={withRouter(LipSync)} />
                <Route exact path="/Projects/Flock" component={withRouter(Flock)} />
                <Route exact path="/Projects/Questie" component={withRouter(Questie)} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
