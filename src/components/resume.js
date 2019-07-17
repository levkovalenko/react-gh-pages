import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import Education from "./resume/education";
import Experience from "./resume/expirience";
import Skills from "./resume/skill";


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} tablet={12} phone={12}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src={require('./avatar.png')}
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Lev Kovalenko</h2>
                        <h4 style={{color:'grey'}}>Student</h4>
                        <hr/>
                        <p> I'm an enthusiastic and self-motivated student of SPBU. Python dev and C++ enthusiast .
                            Currently in love with Go and its multithreaded features.</p>
                        <hr/>
                        <h5>Address</h5>
                        <p>St. Petersburg Botanicheskay st. 66/2</p>
                        <h5>Phone</h5>
                        <p>+7 (981) 855-10-97</p>
                        <h5>Email</h5>
                        <p>levozavr@mail.ru</p>
                        <h5>Telegram</h5>
                        <p>@levkovalenko</p>
                        <hr/>

                    </Cell>

                    <Cell col={8} tablet={12} phone={12} className='resume-right-col'>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName="St. Petersburg State University"
                            schoolDescription={"I'm studying at 'Applied Mathematics - Control Processes' faculty, " +
                            "on Technology of Programming department. I spend some time for since work in machine" +
                            " learning sphere. Actually we have some hobby groups on our faculty, so i attend Robotics,"+
                            "Web and Machine learning groups for additionally education."}
                        />
                        <Education
                            startYear={2019}
                            endYear={'now'}
                            schoolName="Machine Learning course on Coursera"
                            schoolDescription={"It's a simple course for basics of ML in python. I pass it only for "+
                            "calling to my mind and remember some hints."}
                        />
                        <h2>Experience</h2>
                        <Experience
                            startYear={'2018 december'}
                            endYear={'2019 may'}
                            jobName="OktetLabs"
                            jobDescription={"It was my  internship. I want to try myself in c/c++, "+
                            "but i understand that it isn't mine."}
                        />
                        <Experience
                            startYear={'2018 september'}
                            endYear={'now'}
                            jobName="Webim"
                            jobDescription={"I was working as python backend developer. Me stack was django + celery. " +
                            "Moreover sometimes i was got tasks for fronted, written on angular + material, so i know "+
                            "it in little bit."}
                        />
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={99}
                        />
                        <Skills
                            skill="ML"
                            progress={70}
                        />
                        <Skills
                            skill="Django"
                            progress={80}
                        />
                        <Skills
                            skill="Celery"
                            progress={50}
                        />
                        <Skills
                            skill="Angular"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
