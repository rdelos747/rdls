import React from 'react';
import styled from 'styled-components';
import PageHeader from '../common/PageHeader';

const StyledMyGames = styled.div`
  width: 100%;
  position: relative;
  padding-top: 0px;
  color: ${({ color }) => color};
`;

const MyGamesHeader = styled.h1`
  padding-left: 10px;
  line-height: 37.3px;
  font-size: 48px;
  top: 3px;
  position: relative;
  transform: scale(2, 1);
  transform-origin: top left;
  display: inline-block;
  font-family: serif;
  color: ${({ color }) => color};
`;

const MyGames = ({ color }) => {
  return <StyledMyGames color={color}></StyledMyGames>;
};

export default MyGames;
