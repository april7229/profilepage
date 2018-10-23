import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                </p>
                                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Aboutme;
