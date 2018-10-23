import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, IconButton, CardText, CardMenu } from 'react-mdl';


class Projects extends Component
{
    constructor( props )
    {
        super( props );
        this.state = { activeTab: 0 };
    }

    toggleCategories()
    {
        if ( this.state.activeTab === 0 )
        {
            return (
                <div>
                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                        <CardActions border>
                            <Button colored>Mongodb</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if ( this.state.activeTab === 1 )
        {
            return (
                <div>
                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                        <CardActions border>
                            <Button colored>github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Django</Button>
                            <Button colored>Django</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if ( this.state.activeTab === 2 )
        {
            return (
                <div>
                    <Card shadow={5} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>React Progect</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                        <CardActions border>
                            <Button colored>Ruby</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if ( this.state.activeTab === 3 )
        {
            return (
                <div><Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                    <CardActions border>
                        <Button colored>React</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card></div>
            )
        }
    }



    
    
    render()
    {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={( tabId ) => this.setState( { activeTab: tabId } )} ripple>
                    <Tab>React</Tab>
                    <Tab>Ruby</Tab>
                    <Tab>Django</Tab>
                    <Tab>Mongodb</Tab>
                </Tabs> 
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content" >{this.toggleCategories()}</div>                           
                            
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}
    
export default Projects;
