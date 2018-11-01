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
            return <div className="projects-grid">
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background:
                        "url(data:image/png;base64,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) center / cover"
                    }}
                  >
                    Welcome
                  </CardTitle>
                  <CardText>
                    Here are some Project i have create.
                  </CardText>
                  <CardActions border>
                    <Button colored>github
                  <link>https://github.com/april7229</link></Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>;
        } else if ( this.state.activeTab === 1 )
        {
            return <div className="projects-grid">
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background:
                        "url(data:image/png;base64,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) center / cover"
                    }}
                  >
                    Welcome
                  </CardTitle>
                  <CardText>
                    Here are some of things i created
                  </CardText>
                  <CardActions border>
                    <Button colored>github
                  <link>https://github.com/april7229</link></Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>;
        } else if ( this.state.activeTab === 2 )
        {
            return <div className="projects-grid">
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle style={{ color: "#fff", height: "176px", background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAY1BMVEX///8AAADo6Ojy8vIvLy8SEhJQUFB9fX2zs7NlZWWenp729vb7+/t1dXXd3d3Q0NCnp6fIyMiXl5e/v79LS0tWVlY9PT1FRUUYGBjX19dsbGyNjY00NDRdXV0gICCGhoYoKCib3+nyAAAEDklEQVR4nO2Y2baiMBBFIXFglIQgCIj6/1/ZQCohA6jX273sh9pPmImTGpLCIEAQBEEQBEEQBEEQBEEQBEEQBPnrdPHEQMfHZJgeD+lXdIQSMj4e5SP9io496kAd7+nI/xMdRTTBsm/r+Crf10FEFHF6eaKD8ihJosJpbIWIBF+dkJ64EIK31PRtxiPGxGldhIhDCy9OW3bWnbl8KS1Y/limDMJasUgac8Frx+fNljfVcmw9FUUVOjh5Wxz2Zu9uWoJ4k+LFKLzZu72TjuRmtvTO1ZW4Uzwd7oh60vHwZjWQ42nnr7gf2x2jh52Vi8yf5OrwhozuJTt/Wi4dtrJgKPSCBmdDxmlpvmhjrurY1fUV+pml46Kfpg3SaqWjSQO+0hwtOrQNS94WYl3H6JeKFSRNCSxWah2PRBQtV4tMQXA3FuRSU83GDhXoHT8VanylQ+QE4q6yZf1+iXrtSdnYax1g2rO2U6teMbfLkBimWIf2uxWT+hSI5O8bJPTLe27v6DjI5lLbqQdHzPOyRQe8uQYL3PSGJHBKHK3XrOsgnPV31y8Hazulrujm40LpOC8WK2ExkHVQi0PktS90ZAIEb+gQqh2SpUlNHY12aKgOUm6bx71QNnQUKlGAZFNHYdkXdFwDq/KdaGVc1srcTvdGnIYO2zpg6B10yMS4+S863Wx7PGxzrepQKTAu2NTrOnR8RJY91Kng6wC7NSo+loTb1gHBmReEZuVTHYkyDMSHSoNFh7oNYcKgdEDC1dkTHTpX9fgtHUwfz3AwHLUOsExn7z9ROtRpG2/pSNVW0jd0RHrfD+npXusAQ+1b0y1LoZOpMqEShFLq68iCTD7IEyF5qkNoT4SXpCVENGqRgELKPaa1WwjLeLlxjVy46qvcqIO0a29lS0kbv9JRhCtkSwSMrun1WWQWdyvFwqxjCfXB69/SwRdXeDqys9ecGzKCrF7VkQ1ah/D6n+lI3XIHdATUrdHOdkGW5t68UQeV8qY6KvAGPPGLPkRN5CBin8qN94lGjmZR+zjn4wgif8jrO7KKwP1lqoPk7mo3X+ZsUL4+X00dY0G1lEC70lUx24wIVt77komW0NlcEG/gwqk4j4c476cBZPoQyE4S6Jc/9A7HuzlhnKSdrSOgIq+apjnk/N3vVUjbVdVvkx5Moyl+8qlKLobHPwace/98BUiy28aH15uw325G1fjVj2eWxtnUyli+fLqZQn8TFK8HO4yG7Kdgp4SrzcSfqUiXE/EDx87H3/5aL5dE6H/JvgXVn2+fbMS/BPrXk7Zg82HKXg98Q0f3es42Kauqz6LLvc1+dwB9TmmpGH6X97/iVOZDU9eH7h5958/5hWws7dLv/NOIIAiCIAiCIAiCIAiCIAiCIP+YP7A0L7FmBDGBAAAAAElFTkSuQmCC) center / cover" }}>
                    Welcome
                  </CardTitle>
                  <CardText>
                    Here are some of the things i create
                  </CardText>
                  <CardActions border>
                    <Button colored>github
                  <link>https://github.com/april7229</link></Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>;
        } else if ( this.state.activeTab === 3 )
        {
            return <div className="projects-grid">
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle style={{ color: "#fff", height: "176px", background: "url(data:image/png;base64,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) center / cover" }}>
                    Welcome
                  </CardTitle>
                  <CardText>
                    Here are some links to projects. I have done.
                  </CardText>
                  <CardActions border>
                    <Button colored>github
                  <link>https://github.com/april7229</link></Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>;
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
