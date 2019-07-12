import React, {Component} from "react";
import {Grid, Cell, List, ListItemContent, ListItem} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} tablet={12} phone={12}>
                        <h2>Lev Kovalenko</h2>
                        <img
                            src="https://avatars2.githubusercontent.com/u/30433199?s=400&u=0bae6af99973114e5735a249abb07bdfe331c97f&v=4"
                            alt="avatar"
                            style={{height:'250px', margin:'auto'}}
                        />
                        <p style={{ width:'75%', margin: 'auto', paddingTop: '1em'}}>
                            I'm an enthusiastic and self-motivated student of SPBU. Python dev and C++ enthusiast . Currently in love with Go and its multithreaded features.
                        </p>
                    </Cell>
                    <Cell col={6} hideTablet={true} hidePhone={true}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +7 (981) 855-10-97
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        levozavr@mail.ru
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-telegram" aria-hidden="true"/>
                                        @levkovalenko
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                    <Cell tablet={12} phone={12} hideDesktop={true}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list-phone">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +7 (981) 855-10-97
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        levozavr@mail.ru
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-telegram" aria-hidden="true"/>
                                        @levkovalenko
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
