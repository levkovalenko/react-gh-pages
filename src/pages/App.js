import React from 'react';
import './App.css';
import { Layout,  Content } from "react-mdl";
import Landing from "../components/landingpage";

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
