// import React from 'react';
// import styled from 'styled-components';
// import games, { platforms } from './backlog-games';

// const StyledBacklog = styled.div`
//   width: 100%;
//   position: relative;
//   padding-top: 0px;
//   color: ${({ color }) => color};
//   margin-top: 50px;
// `;

// // const AboutHeader = styled.h1`
// //   font-family: serif;
// //   transform: scale(3.2, 1);
// //   transform-origin: top left;
// //   font-size: 63.5px;
// //   margin-bottom: 20px;
// // `;

// const TopText = styled.p`
//   color: inherit;
//   margin-bottom: 20px;
// `;

// const Content = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
// `;

// const ListWrapper = styled.div`
//   width: 50%;
// `;

// const ListItem = styled.div`
//   display: flex;
//   justify-content: left;
//   margin-bottom: 5px;
// `;

// const GameName = styled.p`
//   margin-right: 20px;
// `;

// const GamePlatform = styled.p`
//   opacity: 0.75;
//   margin-right: 10px;
// `;

// const GameReplay = styled.p`
//   opacity: 0.5;
//   margin-right: 10px;
// `;

// const GameStarted = styled.p`
//   opacity: 0.5;
//   margin-right: 10px;
// `;

// const Controls = styled.div`
//   width: 200px;
// `;

// // const Button = styled.div`
// //   cursor: pointer;
// //   border
// // `;

// const Backlog = ({ color, seed, recommendedGame }) => {
//   return (
//     <StyledBacklog color={color}>
//       <TopText>
//         This list contains games I plan on playing, but have not gotten to yet
//         (or have started but not completed). They are in no particular order. I
//         often have trouble choosing a new game to play, so I made this page to
//         help.
//       </TopText>
//       <Content>
//         <ListWrapper>
//           {games.map((game) => (
//             <ListItem key={game.name}>
//               <GameName>{game.name}</GameName>
//               <GamePlatform>[{game.platform}]</GamePlatform>
//               {game.replay && <GameReplay>(replay)</GameReplay>}
//               {game.started && <GameStarted>(started)</GameStarted>}
//             </ListItem>
//           ))}
//         </ListWrapper>
//         <Controls>
//           <p>Seed: {seed} recommends:</p>
//         </Controls>
//       </Content>
//     </StyledBacklog>
//   );
// };

// export default Backlog;
