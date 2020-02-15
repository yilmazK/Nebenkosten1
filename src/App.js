import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Main from "./pages/Main";
import ScrollToTop from 'react-router-scroll-top';
import Datenschutz from "./pages/Datenschutz";
import Agb from "./pages/Agb";
import Impressum from "./pages/Impressum";
import Erfolg from "./pages/Erfolg";



function App() {


    return (
        <Router>
            <div className="App">
                <Switch>
                    <ScrollToTop>
                    <Route path="/" exact component={Main}/>
                    <Route path="/impressum" component={Impressum}/>
                    <Route path="/agb" component={Agb}/>
                    <Route path="/datenschutz" component={Datenschutz}/>
                    <Route path="/erfolg" component={Erfolg}/>
                    </ScrollToTop>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
