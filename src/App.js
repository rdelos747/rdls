import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import rand from './rng';
import colors from './colors';
import Planet from './planet';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Home from './Home';
import About from './About';
//import Backlog from './Backlog';
//import backlogGames from './backlog-games';
// import Footer from './Footer';

export const contentWidth = 740;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    outline: inherit;
    margin: 0;
  }
  
  html {
    box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    //background: linear-gradient(29deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 50%, rgba(255,0,0,1) 100%);
  }

  a {
    text-decoration: none;
  }

  p, a, h1 {
    font-family: sans-serif;
    color: inherit;
    //color: black;
  }

  .canvas {
    position: fixed;
  }
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background: ${({ color }) => `linear-gradient(
    45deg,
    ${color} 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 80%,
    ${color} 100%
  )`};
`;

const PageInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${contentWidth}px;
  min-height: 100vh;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  /* background: ${({ color }) => `linear-gradient(
    45deg,
    ${color} 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 80%,
    ${color} 100%
  )`}; */
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  //min-height: calc(100% - 108px);
`;

const App = () => {
  const [appSeed, setAppSeed] = useState(null);
  const [planetColor, setPlanetColor] = useState([255, 255, 255]);
  const [appColor, setAppColor] = useState('rgba(255,255,255,1)');
  /*
  Todo: let the user change these. But not today, too tired.
  */
  const [octaves, setOctaves] = useState(4);
  const [freq, setFreq] = useState(3);
  const [persistence, setPersistence] = useState(0.5);

  useEffect(() => {
    const seed = Math.floor(Math.random() * 100000000);
    rand.init(seed);
    setAppSeed(seed);

    setOctaves(rand.randInt(2, 9));
    setFreq(rand.randInt(4, 8));
    setPersistence(rand.randArb(0, 1));

    const color = rand.choose(colors);
    setPlanetColor(color);
    setAppColor(`rgba(${color[0]}, ${color[1]}, ${color[2]})`);
  }, []);

  return (
    <>
      <GlobalStyle color={appColor} />

      <HashRouter basename="/">
        <Page color={appColor}>
          <PageInner color={appColor}>
            <Content>
              <Planet
                planetColor={planetColor}
                color={appColor}
                seed={appSeed}
                octaves={octaves}
                freq={freq}
                persistence={persistence}
              />
              <Header color={appColor} />
              <HeaderMobile
                color={appColor}
                planetColor={planetColor}
                seed={appSeed}
                octaves={octaves}
                freq={freq}
                persistence={persistence}
              />
              <Switch>
                <Route path="/about">
                  <About color={appColor} />
                </Route>
                {/* <Route path="/backlog">
                <Backlog color={appColor} seed={appSeed} />
              </Route> */}
                <Route path="/" exact>
                  <Home
                    color={appColor}
                    planetColor={planetColor}
                    seed={appSeed}
                    octaves={octaves}
                    freq={freq}
                    persistence={persistence}
                  />
                </Route>
              </Switch>
            </Content>
            {/* <Footer color={appColor} /> */}
          </PageInner>
        </Page>
      </HashRouter>
    </>
  );
};

export default App;
