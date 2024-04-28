import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Flowchart from "./Pages/Flowchart_Editor/Flowchart";
import Tracker from "./Pages/Tracker/Tracker";
import ParticleBackground from "./ParticleBackground";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/flowcharts">
                    <Flowchart />
                </Route>
                <Route path="/tracker">
                    <div className="tracker">
                        <Tracker />
                    </div>
                    <div className="particles">
                        <ParticleBackground />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
