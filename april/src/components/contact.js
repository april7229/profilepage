import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component
{
    render()
    {
        return <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
                <h2>April Martinez</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLc27x9X6auD18LIg4avh3nkz3tnjmlrH7ZiFwHscWuP9VVthlw" alt="avatar" style={{ height: "200px" }}/>
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
                <Cell col={6}>
                <h2>Contact Me</h2>
                <hr />
                <div className="Contact-List">
                    <List>
                    <ListItem>
                        <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        (123) 456-7898
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                        <i className="fa fa-fax" aria-hidden="true" />
                        (123) 456-7898
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        martinezapril56@yahoo.com
                            </ListItemContent>
                    </ListItem>
                    </List>
                </div>
            </Cell>
            </Grid>
        </div>;
    }
}
export default Contact;
