import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Animations.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./Pages/Home";
import AddedModel from "./Pages/AddedModel";
import Loading from "./Pages/Loading";
import UserManual from "./Pages/UserManual";

import HomeHeader from "./Components/HomeHeader";
import Footer from "./Components/Footer";
import SubHeader from "./Components/SubHeader";
import Description from "./Components/Description";
import {Sticky, StickyContainer} from "react-sticky";
import Testing from "./Pages/Testing";

// onLoad={e => (e.currentTarget.className += ' fadein-on')

function App() {
    const mainPage = window.location.pathname === '/'
    const [loaded, setLoaded] = useState(!mainPage)

    let classNameFadein = (!loaded ? "fadein" : " ")
    function timeout (ms) {
        return new Promise(res => setTimeout(res,ms));
    }

    async function animation()  {
        if  (!loaded && mainPage){
            await timeout(1000);
            document.getElementById('header').className += ' fadein-on'
            await timeout(2000);
            document.getElementById('description').className += ' fadein-on'
            await timeout(2000);
            document.getElementById('footer').className += ' fadein-on'
            await timeout(1000);
            document.getElementById('blocks').className += ' fadein-on'
            await timeout(2000);
            setLoaded(true)
        }
    }

    useEffect(() => {
        animation()
}, [loaded, animation, mainPage])


  return (
    <div className={"App bg-main"}>
      <Router>
        <div>
          <Switch>
              <Route path={"/loading"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>
                      <Loading/>
                  </StickyContainer>
                  <Footer/>
              </Route>

              <Route path={"/models/:id(\\d+)"} render={(props) =>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>

                      <AddedModel {...props} key={window.location.pathname}/>/>

                      <Footer/>
                  </StickyContainer>
              }/>

              <Route path={"/user-manual"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>
                      <UserManual/>
                  </StickyContainer>
                  <Footer/>
              </Route>

              <Route path={"/testing"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style}>
                              <SubHeader/>
                          </header>)}
                      </Sticky>
                      <Testing/>
                  </StickyContainer>
                  <Footer/>
              </Route>

              <Route path={"/"}>
                  <StickyContainer>
                      <Sticky>{({ style }) =>(
                          <header style={style} className={classNameFadein} id={'header'}>
                              <HomeHeader/>
                          </header>)}
                      </Sticky>
                      <div className={classNameFadein} id={'description'}>
                        <Description/>
                      </div>
                      <div className={classNameFadein} id={'blocks'}>
                        <Home/>
                      </div>
                  </StickyContainer>
                  <div className={classNameFadein} id={'footer'}>
                    <Footer/>
                  </div>
              </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
