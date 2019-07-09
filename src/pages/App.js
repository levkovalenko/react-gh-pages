import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { HashLink as Link } from 'react-router-hash-link';
import Landing from "../components/landingpage";
import Projects from "../components/projects";
import Resume from "../components/resume";
import Contact from "../components/contact";

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
              <Header waterfall className="header-color" title="Portfolio" scroll>
                  <Navigation>
                      <Link to="/#projects" className="mdl-color-text--black">Projects</Link>
                      <Link to="/#resume" className="mdl-color-text--black">Resume</Link>
                      <Link to="/#contact" className="mdl-color-text--black">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                      <Link to="/#projects">Projects</Link>
                      <Link to="/#resume">Resume</Link>
                      <Link to="/#contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <section id='#' style={{height: '100vh'}}>
                      <Landing/>
                  </section>
                  <br/>
                  <section id='projects' style={{minHeight: '100vh'}}>
                      <Projects />
                  </section>
                  <section id='resume' style={{minHeight: '100vh'}}>
                      <Resume/>
                  </section>
                  <section id='contact' style={{minHeight: '100vh'}}>
                      <Contact/>
                  </section>




              </Content>
          </Layout>
      </div>
  );
}

export default App;
