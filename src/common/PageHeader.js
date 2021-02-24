/*
This was initially meant to be a reusable component
on every page... but the concept of "pages" isn't
really as much of a thing as I anticipated. Leaving
this here for now.
*/

import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../Context';

const StyledPageHeader = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

const PageHeaderBoxOuter = styled.div`
  width: 50%;
  height: auto;
`;

const PageHeaderBox = styled.div`
  width: ${({ loaded }) => (loaded ? '100%' : '0%')};
  height: 100%;
  background: ${({ primary, secondary }) => `linear-gradient(
    90deg,
    ${primary} 0%,
    ${secondary} 100%
  )`};

  transition: width 1s ease-in-out;
`;

const PageHeaderContent = styled.div`
  width: 50%;
  //opacity: ${({ loaded }) => (loaded ? '1' : '0')};
  //transition: opacity 0.5s linear 0.8s;
`;

const PageHeader = ({ children }) => {
  const context = useContext(AppContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <StyledPageHeader>
      <PageHeaderBoxOuter>
        <PageHeaderBox
          loaded={loaded}
          primary={context.colors.p}
          secondary={context.colors.s}
        />
      </PageHeaderBoxOuter>
      <PageHeaderContent loaded={loaded}>{children}</PageHeaderContent>
    </StyledPageHeader>
  );
};

export default PageHeader;
