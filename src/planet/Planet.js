import React, { useEffect, useRef, useState } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Canvas, { WIDTH, HEIGHT } from './Canvas';
//import { contentWidth } from '../App';

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ centered }) => (centered ? 1 : 0.1)};

  canvas {
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
  }
`;

// const PlanetInfo = styled.div`
//   position: absolute;
//   top: calc(50% + 166px);
//   left: calc(50% + 115px);
//   //width: 100%;
//   //max-width: 740px;
//   //padding: 0 10px;
//   height: 400px;
//   text-align: right;
// `;
// const PlanetInfoText = styled.p`
//   color: ${({ color }) => color};
//   position: relative;
//   //left: ${({ left }) => `${left}px`};
// `;

const Planet = ({ planetColor, color, seed, octaves, freq, persistence }) => {
  const location = useLocation();
  const centered = location.pathname === '/';

  return (
    <CanvasContainer centered={centered}>
      <Canvas
        title="Stack Overflow"
        color={planetColor}
        seed={seed}
        octaves={octaves}
        freq={freq}
        persistence={persistence}
      />

      {/* <PlanetInfo>
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
          Persistence: <span>{persistence}</span>
        </PlanetInfoText>
      </PlanetInfo> */}
    </CanvasContainer>
  );
};

export default withRouter(Planet);
