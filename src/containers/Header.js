import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'

import Home from './Home'
import Indo from './Indonesia'

export default function Header() {
    return (
        <>
            <div className="full-height">
                <header>
                    <Router>
                        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                            <button className="navbar-brand"><strong>Navbar</strong></button>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/indonesia" className="nav-link" >Indonesia</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sembuh">Sembuh</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="view intro-2" >
                            <div className="full-bg-img">
                                <div className="mask rgba-purple-light flex-center">
                                    <div className="container text-center white-text wow fadeInUp">
                                        <h2>This Navbar is fixed and transparent</h2>
                                        <br />
                                        <h5>It will always stay visible on the top, even when you scroll down</h5>
                                        <p>Navbar's background will switch from transparent to solid color while scrolling down</p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/sembuh"><h1>Sembuh...</h1>
                            </Route>
                            <Route path="/indonesia" ><Indo /></Route>
                        </Switch>
                    </Router>
                </header>

            </div>
        </>
    )
}