import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './Skills';


class Resume extends Component
{
    render()
    {
        return <div>
            <Grid>
              <Cell className="resume-left-col" col={4}>
                <div style={{ textAlign: "center" }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLc27x9X6auD18LIg4avh3nkz3tnjmlrH7ZiFwHscWuP9VVthlw" alt="avatar" style={{ height: "200px" }} />
                </div>
                <h2 style={{ paddingTop: "2rem" }}>April Martinez</h2>
                <h4 style={{ color: "grey" }}>Programmer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                  Positive Attitude.
                  Supreme Communication Skills.
                  Great at Time and Task Management.
                  Quick Learning Ability.
                  Deep and Broad Technical Experience.
                  A Good Team Player.
                  These are a few things that make a good web developer.      
                </p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>Greenwood Lake, NY, 10925</p>
                <h5>Phone</h5>
                <p>(845)595-1053</p>
                <h5>Email</h5>
                <p>martinezapril56@yahoo.com</p>
                <h5>Web</h5>
                <p>Mywebsite.com</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              </Cell>

              <Cell className="resume-right-col" col={8}>
                <h2>Summary</h2>
                 {/* <Education startYear={2018} endYear={2018}  */}
                Team player software engineer with a can-do attitude, phenomenal time management skills, and a strong user focus. Has developed several web and mobile apps. Proﬁcient in a variety of platforms,  language and embedded systems. Skilled at team collaboration while working independently in remote environment.
                <hr style={{ borderTop: "3px solid #e22947" }} />
                
                <h2>Experience</h2>
                <Experience startYear={2018} endYear={2018} School Name=" Lambda School" jobDescription="Lambda School is a 6+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, software engineering, and web development. - Approached all coding challenges using pair programming - Utilized agile software development and Git workﬂow on all projects - Hands on experience with client and server testing, - Completed all curriculum course work including; React, react native, redux, node, express, mongoDB, jest, python, django, etc... " />

                <h2>Experience</h2>
                    <Experience startYear={2014} endYear={2018} jobName="Bartending/Waitressing" jobDescription="customer service, order taking, multi-tasking and cash-handling."  />
                <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Skills</h2>
                <Skills skill="HTML/CSS" progress={70} />
                <Skills skill="Javascript" progress={80} />
                <Skills skill="NodeJS" progress={90} />
                <Skills skill="React" progress={75} />
              </Cell>
            </Grid>
          </div>;
    }
}
export default Resume;
