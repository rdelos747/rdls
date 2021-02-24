import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from './constants';
import AppContext from './Context';

const StyledHeader = styled.div`
  width: 100%;
  position: relative;
  padding-top: 90px;
  margin-bottom: 20px;
  color: ${({ color }) => color};

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 12px;
`;

const HeaderText = styled.h1`
  font-family: serif;
  transform: scale(calc(7.3 / 3), 1);
  transform-origin: top left;
  font-size: 97px;
  line-height: 67px;
  color: ${({ color }) => color};
`;

const HeaderLinks = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    display: block;
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
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
`;

const HeaderContact = styled.a`
  margin-right: 0px;
  padding: 2px 0px;

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

const StyledLink = styled.p`
  width: 100%;
  cursor: pointer;
  padding: 0px 0px;
  transition: padding-left 0.1s, background-color 1s;

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

const Header = () => {
  const context = useContext(AppContext);

  return (
    <StyledHeader color={context.colors.p}>
      <HeaderTop>
        <HeaderLinks>
          <Link to={'/about'}>
            <StyledLink color={context.colors.p}>About</StyledLink>
          </Link>
          <Link to={'/my-games'}>
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
        <a
          href={
            // eslint-disable-next-line
            process.env.NODE_ENV === 'production'
              ? 'https://rdelos747.github.io/rdls/'
              : '/'
          }
        >
          <HeaderText color={context.colors.p}>RDLS</HeaderText>
        </a>
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

export default Header;
