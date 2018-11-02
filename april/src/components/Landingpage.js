import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landingpage extends Component {
    render() {
    return (
        <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
            <Cell col={12}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLc27x9X6auD18LIg4avh3nkz3tnjmlrH7ZiFwHscWuP9VVthlw"
                alt="avatar"
                className="avatar-img"
                />
            <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <hr />
                <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native |
                NodeJS | Express | Mongodb
                </p>
                <div className="social-links">
                {/* LinkedIn*/}
                <a
                    href="https://www.linkedin.com/in/aprilgmartinez74/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub*/}
                <a
                    href="https://github.com/april7229"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Freecodecamp*/}
                <a
                    href="https://www.freecodecamp.org/april7229"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                    </div>
                </div>
            </Cell>
        </Grid>
        </div>
        );
    }
}
export default Landingpage;
