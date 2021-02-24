import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from './constants';
import AppContext from './Context';

const StyledHeader = styled.div`
  display: none;
  width: 100%;
  position: relative;
  padding-top: 10px;
  color: ${({ color }) => color};

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    display: block;
  }
`;

// const HeaderTop = styled.div`
//   width: 100%;
//   overflow: hidden;
//   /* height: 67px;
//   display: flex;
//   flex-wrap: nowrap;
//   margin-bottom: 12px; */

//   a {
//     display: inline-block;
//   }
// `;

const HeaderTextLink = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HeaderText = styled.h1`
  font-family: serif;
  transform: scale(calc(7.3 / 3), 1);
  //transform-origin: top left;
  font-size: 50px;
  line-height: 67px;
  display: inline-block;
`;

const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderLinks = styled.div`
  width: 50%;
  justify-content: space-between;
  a {
    display: block;
  }
`;

const StyledLink = styled.p`
  width: 100%;
  cursor: pointer;
  padding: 0px 0px;
  transition: padding-left 0.1s, background-color 1s;
  //text-align: center;
  margin-bottom: 10px;
  font-size: 30px;

  &:hover {
    background: ${({ color }) => `linear-gradient(
      90deg,
      ${color} 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 75%,
      ${color} 100%
    );`};
  }
`;

const HeaderData = styled.div`
  width: 50%;
`;

const PlanetInfoText = styled.p`
  text-align: right;
  color: inherit;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 22px;
  }
`;

const HeaderBreak = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => color};
  margin-bottom: 8px;
`;

const HeaderContacts = styled.div`
  width: 100%;
`;

const HeaderContact = styled.a`
  margin-right: 0px;
  padding: 2px 0px;
  display: block;
  font-size: 30px;

  &:hover {
    background: ${({ color }) => `linear-gradient(
      90deg,
      ${color} 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 75%,
      ${color} 100%
    );`};
  }
`;

const HeaderMobile = () => {
  const context = useContext(AppContext);

  return (
    <StyledHeader color={context.colors.p}>
      <HeaderTextLink href="/">
        <HeaderText>RDLS</HeaderText>
      </HeaderTextLink>
      <HeaderTop>
        <HeaderLinks>
          <Link to={'/about'}>
            <StyledLink color={context.colors.p}>About</StyledLink>
          </Link>
          <Link to={'/games'}>
            <StyledLink color={context.colors.p}>My games </StyledLink>
          </Link>
          <a
            href="https://rdelos747.github.io/backlog/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledLink color={context.colors.p}>Backlog</StyledLink>
          </a>
        </HeaderLinks>
        <HeaderData>
          <PlanetInfoText color={context.colors.p} left={130}>
            Your seed: <span>{context.seed}</span>
          </PlanetInfoText>
          <PlanetInfoText color={context.colors.p} left={110}>
            Color:{' '}
            <span>
              [{context.colors.p}, {context.colors.s}]
            </span>
          </PlanetInfoText>
          <PlanetInfoText color={context.colors.p} left={80}>
            Octaves: <span>{context.octaves}</span>
          </PlanetInfoText>
          <PlanetInfoText color={context.colors.p} left={50}>
            Frequency: <span>{context.freq}</span>
          </PlanetInfoText>
          <PlanetInfoText color={context.colors.p} left={10}>
            Persistence: <span>{context.persistence}</span>
          </PlanetInfoText>
        </HeaderData>
      </HeaderTop>

      <HeaderBreak color={context.colors.p} />
      <HeaderBreak color={context.colors.p} />
      <HeaderContacts>
        <HeaderContact
          href="mailto:rdelos747@gmail.com"
          color={context.colors.p}
        >
          rdelos747@gmail.com
        </HeaderContact>
        <HeaderContact
          href="https://github.com/rdelos747"
          target="_blank"
          rel="noreferrer"
          color={context.colors.p}
        >
          github.com/rdelos747
        </HeaderContact>
        <HeaderContact
          href="https://www.instagram.com/rraafffffff"
          target="_blank"
          rel="noreferrer"
          color={context.colors.p}
        >
          instagram.com/rraafffffff
        </HeaderContact>
      </HeaderContacts>
    </StyledHeader>
  );
};

export default HeaderMobile;
