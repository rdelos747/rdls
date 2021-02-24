import React, { useContext } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';
import AppContext from '../Context';
import PageHeader from '../common/PageHeader';

const StyledHome = styled.div`
  width: 100%;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const HomeTopText = styled.div`
  padding-left: 10px;
`;

const HomeTopTextItem = styled.p`
  text-align: left;
  display: flex;
  justify-content: space-between;

  & span {
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 30px;
  }
`;

const HomeMiddleOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const HomeMiddle = styled.div`
  padding-left: 10px;
  //padding-top: 5px;
  width: 50%;
  //border-top: ${({ color }) => `1px solid ${color}`};

  & p {
    //display: flex;
    //justify-content: space-between;
  }
`;

const Home = () => {
  const context = useContext(AppContext);

  return (
    <StyledHome>
      <PageHeader name={'home'}>
        <HomeTopText>
          <HomeTopTextItem>
            <span>Your seed:</span> <span>{context.seed}</span>
          </HomeTopTextItem>
          <HomeTopTextItem>
            <span>Color:</span>
            <span>
              [{context.colors.p}, {context.colors.s}]
            </span>
          </HomeTopTextItem>
        </HomeTopText>
      </PageHeader>
      <HomeMiddleOuter>
        <HomeMiddle color={context.colors.s}>
          <HomeTopTextItem>
            Octaves: <span>{context.octaves}</span>
          </HomeTopTextItem>
          <HomeTopTextItem>
            Frequency: <span>{context.freq}</span>
          </HomeTopTextItem>
          <HomeTopTextItem>
            Persistence: <span>{context.persistence}</span>
          </HomeTopTextItem>
        </HomeMiddle>
      </HomeMiddleOuter>
    </StyledHome>
  );
};

export default Home;
