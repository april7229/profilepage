import React, { Component } from 'react';
import { Grid, Cell} from "react-mdl";

class Aboutme extends Component
{
    render()
    {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>April Martinez</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLc27x9X6auD18LIg4avh3nkz3tnjmlrH7ZiFwHscWuP9VVthlw" alt="avatar" style={{ height: "200px" }} />
                        <p
                            style={{
                                width: "75%",
                                margin: "auto",
                                paddingTop: "1em"
                            }}
                        >
                            Hi! My name is April. I am a Lambda School Graduate. I have been Programming Non-Stop for a little over a year.
                            I have played around with Javascript, Python, Angular and Ruby. I love Building and learning new ways to make beautyful websites.
                            My lack of experience is waivered by my love of learning and dedication to my art.
                </p>
                                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Aboutme;
