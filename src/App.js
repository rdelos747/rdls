import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';

import AppContext, { AppProvider } from './Context';
import Planet from './planet';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Home from './pages/Home';
import About from './pages/About';
import MyGames from './pages/MyGames';

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
  }

  a {
    text-decoration: none;
  }

  p, a, h1 {
    font-family: sans-serif;
    //color: inherit;
    color:black;
  }
`;

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background: ${({ colors }) => `linear-gradient(
    45deg,
    ${colors.p} 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 80%,
    ${colors.p} 100%
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
`;

/*
Content is left over from a previous layout, but it
may be needed in the future.
*/
const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Page = ({ children }) => {
  const context = useContext(AppContext);
  return (
    <>
      <GlobalStyle colors={context.colors} />
      <StyledPage colors={context.colors}>
        <PageInner>{children}</PageInner>
      </StyledPage>
    </>
  );
};

const App = () => {
  return (
    <AppProvider>
      <HashRouter basename="/">
        <Page>
          <Content>
            <Planet />
            <Header />
            <HeaderMobile />
            <Home />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/my-games">
                <MyGames />
              </Route>
              {/* <Route path="/" exact>
                <Home />
              </Route> */}
            </Switch>
          </Content>
        </Page>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
