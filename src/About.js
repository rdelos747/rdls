import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  width: 100%;
  position: relative;
  padding-top: 0px;
  color: ${({ color }) => color};
  margin-top: 50px;
`;

// const AboutHeader = styled.h1`
//   font-family: serif;
//   transform: scale(3.2, 1);
//   transform-origin: top left;
//   font-size: 63.5px;
//   margin-bottom: 20px;
// `;

const AboutText = styled.p`
  color: inherit;
`;

const About = ({ color }) => {
  return (
    <StyledAbout color={color}>
      {/* <AboutHeader>ABOUT</AboutHeader> */}
      <AboutText>
        I know, I know this is not a good way to update a component in react but bare with me for
        now. We were just trying to use global variable to store global state and it just worked so
        lets just cerebrate this for now.
      </AboutText>
    </StyledAbout>
  );
};

export default About;
