import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';

const StyledAbout = styled.div`
  width: 50%;
  margin-bottom: 50px;
  position: relative;
  padding-top: 0px;
  color: ${({ color }) => color};

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

// const AboutHeader = styled.h1`
//   font-family: serif;
//   transform: scale(3.2, 1);
//   transform-origin: top left;
//   font-size: 63.5px;
//   margin-bottom: 20px;
// `;

// const AboutHeader = styled.h1`
//   padding-left: 10px;
//   line-height: 37.3px;
//   font-size: 48px;
//   top: 3px;
//   position: relative;
//   transform: scale(2, 1);
//   transform-origin: top left;
//   display: inline-block;
//   font-family: serif;
//   color: ${({ color }) => color};
// `;

const AboutText = styled.p`
  color: inherit;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const WorkItem = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    flex-wrap: wrap;
  }
`;

const WorkName = styled.p`
  margin-right: 10px;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

const DateItem = styled.p`
  opacity: 0.75;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

const About = ({ color }) => {
  return (
    <StyledAbout color={color}>
      {/* <PageHeader name={'about'}>
        <AboutHeader color={color}>ABOUT</AboutHeader>
      </PageHeader> */}
      <AboutText>
        My name is Rafael De Los Santos. I&apos;m a software engineer from New
        Jersey, currently living and working in NYC. I have been building and
        maintaining websites since 2014, and have focussed mainly on React since
        2019.
        <br />
        <br />
        In my free time I enjoy playing or making video games.
      </AboutText>
      <WorkItem>
        <WorkName>Walmart - Senior Frontend Engineer</WorkName>
        <DateItem>[2020 - 20xx]</DateItem>
      </WorkItem>
      <WorkItem>
        <WorkName>Jetblack - Frontend Engineer</WorkName>
        <DateItem>[2019 - 2020]</DateItem>
      </WorkItem>
      <WorkItem>
        <WorkName>x.ai - Fullstack Engineer</WorkName>
        <DateItem>[2018 - 2019]</DateItem>
      </WorkItem>
      <WorkItem>
        <WorkName>Pentagram Design - Web developer</WorkName>
        <DateItem>[2014 - 2018]</DateItem>
      </WorkItem>
    </StyledAbout>
  );
};

export default About;
