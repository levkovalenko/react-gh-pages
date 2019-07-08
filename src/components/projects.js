import React, {Component} from "react";
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardMenu, CardText, Button, IconButton} from "react-mdl";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if ( this.state.activeTab === 0) {
            return (
                <div>
                    <div className="projects-grid">
                        { /* project # */ }
                        <Card shadow={5} style={{minWidth: '550px', margin: 'auto'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://kkmax-develop.com/wp-content/uploads/2018/08/sklearn.png) center / cover'}}>
                                Practicum project
                            </CardTitle>
                            <CardText>
                                1. Task for text theme modeling. Solved by naive bayes.<br/>
                                2. Transport routes classification. Solved by RandomForest
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/levkovalenko/pm_task_2018"  target="_blank">
                                    GitHub
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#000'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                    </div>
                </div>
            )
        } else if ( this.state.activeTab === 1) {
            return (
                <div>
                    <div className="projects-grid">
                        { /* project # */ }
                        <Card shadow={5} style={{minWidth: '550px', margin: 'auto'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://pythonprogramming.net/static/images/categories/django.png) center / cover'}}>
                                Judyst
                            </CardTitle>
                            <CardText>
                                Project for judicial texts analysis.
                                Backend on Django, Frontend on VueJS, Database - postgres sql. TeamWork.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/robot-lab/judyst-backend"  target="_blank">
                                    Backend Repo
                                </Button>
                                <Button colored href="https://github.com/robot-lab/judyst-frontend"  target="_blank">
                                    Frontend Repo
                                </Button>
                                <Button colored href="https://github.com/robot-lab/judyst-main-web-service"  target="_blank">
                                    Prototype Repo
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#000'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        { /* project # */ }
                        <Card shadow={5} style={{minWidth: '550px', margin: 'auto'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://www.pixelstech.net/article/images/golang.png) center / cover'}}>
                                Practicum project
                            </CardTitle>
                            <CardText>
                                An api for a bank credit system on micro-service architecture.
                                Written on GoLang, deployed with Docker. TeamWork.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/apmath-web/data"  target="_blank">
                                    GitHub
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#000'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        { /* project # */ }
                        <Card shadow={5} style={{minWidth: '550px', margin: 'auto'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover'}}>
                                Portfolio
                            </CardTitle>
                            <CardText>
                                A simple website for showing my own projects.
                                Hosted oh gh-pages with travis auto-build.
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/levkovalenko/react-gh-pages"  target="_blank">
                                    GitHub
                                </Button>
                                <Button colored href="https://levkovalenko.github.io/"  target="_blank">
                                    Live Demo
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#000'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if ( this.state.activeTab === 2) {
            return (
                <div>
                    <div className="projects-grid">
                        { /* project #1 */ }
                        <Card shadow={5} style={{minWidth: '550px', margin: 'auto'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://www.okuma.com/stuff/contentmgr/files/0/7dde068af32b6e89c7e65ef54e517cc9/image/okuma_partner_fanuc_730x730.png) center / cover'}}>
                                Robot Control System
                            </CardTitle>
                            <CardText>
                                Backend of RCS written on python & c++.
                                Communication on TCP protocol. Tested on real robot Fanuc. TeamWork.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/robot-lab/robot-control-system"  target="_blank">
                                    GitHub
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#000'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        { /* project #2 */ }
                        <Card shadow={5} style={{minWidth: '550px', margin: 'auto'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://miro.medium.com/max/3200/1*S8Il5ethl3YFh0M9XKVz-A.png) center / cover'}}>
                                Computer vision system
                            </CardTitle>
                            <CardText>
                                A system for detecting objects and get its coordinates by simple webcams.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://elibrary.ru/item.asp?id=29675897"  target="_blank">
                                    Article
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#000'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>

            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Machine Learning</Tab>
                    <Tab>Web</Tab>
                    <Tab>R&D</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;
