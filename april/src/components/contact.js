import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component
{
    render()
    {
        return (
            <div className="contact-body">
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
                Do you remember Socrates? He was repeating over and over one sentence: Oida ouden eidos!, which means: I know that I know nothing. The same applies to a good programmer. He admits when he doesn't know something, in contrary to many coders who only appear to know everything. In fact, they search every answer online and act as they knew them from the beginning. That strategy won't suffice, and anyone using it will end up kidding themselves and everyone around them. Programming is a job based on knowledge, and no one knows everything. A good programmer is not afraid to ask questions to those wiser than himself. He will invite them to solve a given problem together and in the process gain new experience. A good coder seeks clues and solutions from different sources, e.g. companies' articles on Bulldogjob. Accepting our limitations is the first step towards greatness, also in programming.
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
                        (845) 595-1053
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                        <i className="fa fa-fax" aria-hidden="true" />
                        (845) 300-0936
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
            </div>
        )
    }
}
export default Contact;
