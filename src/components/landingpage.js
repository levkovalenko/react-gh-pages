import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/people-3-2/128/Programmer-Avatar-Backend-Developer-Nerd-512.png"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Data Scientist</h1>
                        <hr/>
                        <p>
                            Python | Sklearn | Pandas |  | TensorFlow | Keras
                        </p>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
