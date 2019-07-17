import React, {Component} from "react";
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardMenu, CardText, Button} from "react-mdl";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if ( this.state.activeTab === 0) {
            return (
                <Grid>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #1 */ }
                        <Card shadow={5} style={{width: '100%', margin: 'auto', maxHeight:'250px'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://kkmax-develop.com/wp-content/uploads/2018/08/sklearn.png) center / cover'}}>
                                Pet-Project
                            </CardTitle>
                            <CardText>
                                Recommendation system for It events. <br/>Backend - flask, Frontend - React. TeamWork.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/robot-lab/PetProject"  target="_blank">
                                    GitHub
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'orange'}}>
                                (IN PROGRESS)
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #2 */ }
                        <Card shadow={5} style={{width: '100%', margin: 'auto', maxHeight:'250px'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://s3.amazonaws.com/keras.io/img/keras-logo-2018-large-1200.png) center / cover'}}>
                                Science Work
                            </CardTitle>
                            <CardText>
                                A CNN for prediction timeseries bu coding it to heatmaps.<br/>
                                Written using keras + tensorflow.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/levkovalenko/finance-ml"  target="_blank">
                                    GitHub
                                </Button>
                                <Button colored href="https://elibrary.ru/item.asp?id=38095774"  target="_blank">
                                    Article
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'orange'}}>
                                (IN PROGRESS)
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #3 */ }
                        <Card shadow={5} style={{width: '100%', margin: 'auto', maxHeight:'250px'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://kkmax-develop.com/wp-content/uploads/2018/08/sklearn.png) center / cover'}}>
                                Practicum project
                            </CardTitle>
                            <CardText>
                                Task for text theme modeling. Solved by naive bayes.
                                Transport routes classification. Solved by RandomForest
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/levkovalenko/pm_task_2018"  target="_blank">
                                    GitHub
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'green'}}>
                                (COMPLETED)
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        } else if ( this.state.activeTab === 1) {
            return (
                <Grid>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #1 */ }
                        <Card shadow={5} style={{minWidth: '100%', margin: 'auto', maxHeight:'250px'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://www.i2tutorials.com/wp-content/uploads/2018/11/Flask_python_i2tutorials.com_.png) center / cover'}}>
                                Pet-Project
                            </CardTitle>
                            <CardText>
                                Recommendation system for It events. <br/>Backend - flask, Frontend - React. TeamWork.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://github.com/robot-lab/PetProject"  target="_blank">
                                    GitHub
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'orange'}}>
                                (IN PROGRESS)
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #2 */ }
                        <Card shadow={5} style={{minWidth: '100%', margin: 'auto', maxHeight:'250px'}}>
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
                            <CardMenu style={{color: 'orange'}}>
                                (IN PROGRESS)
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #3 */ }
                        <Card shadow={5} style={{minWidth: '100%', margin: 'auto', maxHeight:'250px'}}>
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
                                    Backend
                                </Button>
                                <Button colored href="https://github.com/robot-lab/judyst-frontend"  target="_blank">
                                    Frontend
                                </Button>
                                <Button colored href="https://github.com/robot-lab/judyst-main-web-service"  target="_blank">
                                    Prototype Repo
                                </Button>
                                <Button colored href="https://elibrary.ru/item.asp?id=38095769"  target="_blank">
                                    Article
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'blue'}}>
                                (FROZEN)
                            </CardMenu>
                        </Card>

                    </Cell>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #4 */ }
                        <Card shadow={5} style={{minWidth: '100%', margin: 'auto', maxHeight:'250px'}}>
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
                            <CardMenu style={{color: 'blue'}}>
                                (FROZEN)
                            </CardMenu>
                        </Card>

                    </Cell>
                </Grid>
            )
        } else if ( this.state.activeTab === 2) {
            return (
                <Grid>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #1 */ }
                        <Card shadow={5} style={{minWidth: '100%', margin: 'auto', maxHeight:'250px'}}>
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
                            <CardMenu style={{color: 'green'}}>
                                (COMPLETED)
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #2 */ }
                        <Card shadow={5} style={{minWidth: '100%', margin: 'auto',maxHeight:'250px'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://miro.medium.com/max/3200/1*S8Il5ethl3YFh0M9XKVz-A.png) center / cover'}}>
                                Computer vision system
                            </CardTitle>
                            <CardText>
                                A system for detecting objects and get its coordinates by simple webcams.
                                Written on c++ & python. TeamWork.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://elibrary.ru/item.asp?id=29675897"  target="_blank">
                                    Article
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'green'}}>
                                (COMPLETED)
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4} tablet={10} phone={12}>
                        { /* project #3 */ }
                        <Card shadow={5} style={{minWidth: '100%', margin: 'auto', maxHeight:'250px'}}>
                            <CardTitle style={{color: '#000', height: '176px',
                                background: 'url(https://upload.wikimedia.org/wikipedia/ru/a/a5/Nanotube_6_9-spheres.jpg) bottom / cover'}}>
                                Carbon nanotubes modeling
                            </CardTitle>
                            <CardText>
                                A software on c# & c++ for creating 3d models of nuclear structures of carbon nanotubes.
                            </CardText>
                            <CardActions border style={{margin:'auto'}}>
                                <Button colored href="https://elibrary.ru/item.asp?id=26786428"  target="_blank">
                                    Article
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'green'}}>
                                (COMPLETED)
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>

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
                {this.toggleCategories()}

            </div>
        )
    }
}

export default Projects;
