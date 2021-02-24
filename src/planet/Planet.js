import React, { useEffect, useRef, useState, useContext } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { openSimplexNoise } from './simplex';
import AppContext from '../Context';
import { profile } from '../constants';

const WIDTH = 500;
const HEIGHT = 500;

const hexToRgb = (hex) => {
  var bigint = parseInt(hex.replace('#', ''), 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b];
};

const initTexture = (seed, octaves, freq, persistence) => {
  const openSimplex = openSimplexNoise(seed);

  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  const values = new Array(HEIGHT);

  let numOct = octaves;
  let startFreq = freq;
  let startPer = persistence;

  for (let j = 0; j < HEIGHT; j++) {
    values[j] = new Array(WIDTH);
    for (let i = 0; i < WIDTH; i++) {
      let x1 = 0;
      let x2 = 1;
      let y1 = 0;
      let y2 = 1;
      let dx = x2 - x1;
      let dy = y2 - y1;

      let s = i / WIDTH;
      let t = j / HEIGHT;

      let nx = x1 + (Math.cos(s * 2 * Math.PI) * dx) / (2 * Math.PI);
      let ny = x1 + (Math.sin(s * 2 * Math.PI) * dx) / (2 * Math.PI);
      let nz = t;

      let value = 0;
      let amp = 1;
      let maxAmp = 0;
      let freq = startFreq;

      for (let r = 0; r < numOct; r++) {
        value += openSimplex.noise3D(nx * freq, ny * freq, nz * freq) * amp;
        maxAmp += amp;
        amp *= startPer;
        freq *= 2;
      }

      value /= maxAmp;
      value = (value * 255) / 2 + 127.5;

      min = Math.min(min, value);
      max = Math.max(max, value);

      values[j][i] = value;
    }
  }

  const norms = new Array(HEIGHT);
  for (let j = 0; j < HEIGHT; j++) {
    norms[j] = new Array(WIDTH);
    for (let i = 0; i < WIDTH; i++) {
      let norm = (max - values[j][i]) / (max - min);
      norms[j][i] = norm;
    }
  }

  return norms;
};

const updateCanvas = (ctx, texture, imageData, frame, primary, secondary) => {
  let index = 0;
  const time = Math.floor(frame / 1) % WIDTH;
  for (let j = 0; j < HEIGHT; j++) {
    for (let i = 0; i < WIDTH; i++) {
      //const dest = j * WIDTH + i;

      let px = i * (2 / WIDTH) - 1;
      let py = j * (2 / HEIGHT) - 1;
      const magSq = px * px + py * py;

      if (magSq > 1) {
        imageData.data[index++] = 255;
        imageData.data[index++] = 255;
        imageData.data[index++] = 255;
        imageData.data[index++] = 0;
        continue;
      }

      const widthAtHeight = Math.sqrt(1 - py * py);
      px = Math.asin(px / widthAtHeight) * (2 / Math.PI);
      py = Math.asin(py) * (2 / Math.PI);
      if (Number.isNaN(px)) {
        px = 0;
      }

      let sourceI = Math.round((px + 1) * (WIDTH / 2)) + time;
      sourceI = sourceI % WIDTH;
      let sourceJ = Math.round((py + 1) * (HEIGHT / 2));

      let showColor = profile[0].color;
      for (let k = 0; k < profile.length; k++) {
        if (texture[sourceJ][sourceI] > profile[k].val) {
          showColor = profile[k].color;
        }
      }

      if (showColor === 1) {
        imageData.data[index++] = primary[0];
        imageData.data[index++] = primary[1];
        imageData.data[index++] = primary[2];
        imageData.data[index++] = 255;
      } else if (showColor === 2) {
        imageData.data[index++] = secondary[0];
        imageData.data[index++] = secondary[1];
        imageData.data[index++] = secondary[2];
        imageData.data[index++] = 255;
      } else {
        imageData.data[index++] = 255;
        imageData.data[index++] = 255;
        imageData.data[index++] = 255;
        imageData.data[index++] = 0;
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);
};

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ top }) => (top ? 1 : 0.1)};

  canvas {
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
  }
`;

const Planet = () => {
  const location = useLocation();
  const context = useContext(AppContext);
  const canvasRef = useRef(null);
  const [texture, setTexture] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [primary, setPrimary] = useState([]);
  const [secondary, setSecondary] = useState([]);

  /*
  Update canvas
  */
  useEffect(() => {
    if (context.seed === null) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      if (imageData) {
        frameCount++;
        updateCanvas(ctx, texture, imageData, frameCount, primary, secondary);
        animationFrameId = window.requestAnimationFrame(render);
      }
    };
    render();

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [texture, context.color, context.seed]);

  /*
  Init texture and canvas
  */
  useEffect(() => {
    if (context.seed === null) {
      return;
    }

    setPrimary(hexToRgb(context.colors.p));
    setSecondary(hexToRgb(context.colors.s));

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = WIDTH;
    ctx.canvas.height = HEIGHT;
    setImageData(ctx.createImageData(WIDTH, HEIGHT));
    setTexture(
      initTexture(
        context.seed,
        context.octaves,
        context.freq,
        context.persistence
      )
    );
  }, [context.seed]);

  return (
    <CanvasContainer top={location.pathname === '/'}>
      <canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default withRouter(Planet);
