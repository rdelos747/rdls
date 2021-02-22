import React from 'react';
import styled from 'styled-components';
import { breakpoints } from './constants';

const StyledHome = styled.div`
  width: 100%;
  position: relative;
  padding-top: 0px;
  color: ${({ color }) => color};
  margin-top: 550px;
  color: ${({ color }) => color};
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const HomeColumn = styled.div`
  width: 50%;
  color: inherit;
`;

const PlanetInfoText = styled.p`
  text-align: right;
  color: inherit;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 30px;
  }
`;

const Home = ({ color, planetColor, seed, octaves, freq, persistence }) => {
  return (
    <StyledHome color={color}>
      <HomeColumn></HomeColumn>
      <HomeColumn>
        <PlanetInfoText color={color} left={130}>
          Your seed: <span>{seed}</span>
        </PlanetInfoText>
        <PlanetInfoText color={color} left={110}>
          Color: <span>[{planetColor.join(',')}]</span>
        </PlanetInfoText>
        <PlanetInfoText color={color} left={80}>
          Octaves: <span>{octaves}</span>
        </PlanetInfoText>
        <PlanetInfoText color={color} left={50}>
          Frequency: <span>{freq}</span>
        </PlanetInfoText>
        <PlanetInfoText color={color} left={10}>
          Persistence: <span>{Math.round(persistence * 10000) / 10000}</span>
        </PlanetInfoText>
      </HomeColumn>
    </StyledHome>
  );
};

export default Home;
