import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                        src={require('./avatar.png')}
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Just a Student</h1>
                        <hr/>
                        <p>
                            Docker | Go | Gin | Git | Django | Celery | Python | SkLearn | Keras | Pandas |
                        </p>
                        <div className="social-links">
                            {/* telegram */}
                            <a href="https://t.me/levkovalenko" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-telegram" aria-hidden="true"/>
                            </a>
                            {/* github */}
                            <a href="https://github.com/levkovalenko" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" aria-hidden="true"/>
                            </a>
                            {/* kaggle */}
                            <a href="https://www.kaggle.com/karlkori/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-kaggle" />
                            </a>
                            {/* vk */}
                            <a href="https://vk.com/levkovalenko" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-vk" aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
