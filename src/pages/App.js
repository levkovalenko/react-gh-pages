import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { HashLink as Link } from 'react-router-hash-link';
import Landing from "../components/landingpage";
import Projects from "../components/projects";
import Resume from "../components/resume";

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
              <Content>
                  <section id='#' style={{height: '100vh'}}>
                      <Landing/>
                  </section>
                  <br/>




              </Content>
          </Layout>
      </div>
  );
}

export default App;
