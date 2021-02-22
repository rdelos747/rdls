import React, { useEffect, useRef, useState } from 'react';
import { openSimplexNoise } from './simplex';

export const WIDTH = 500;
export const HEIGHT = 500;

const PROFILE = [
  { val: 0.0, color: false },
  { val: 0.1, color: false },
  { val: 0.2, color: false },
  { val: 0.3, color: true },
  { val: 0.4, color: true },
  { val: 0.5, color: false },
  { val: 0.6, color: false },
  { val: 0.7, color: false },
  { val: 0.8, color: true },
  { val: 0.9, color: true }
];
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

  console.log('vals', min, max);
  console.log('==');

  return norms;
};

const updateCanvas = (ctx, texture, imageData, frame, color) => {
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

      let showColor = PROFILE[0].color;
      for (let k = 0; k < PROFILE.length; k++) {
        if (texture[sourceJ][sourceI] > PROFILE[k].val) {
          showColor = PROFILE[k].color;
        }
      }

      if (showColor) {
        imageData.data[index++] = color[0];
        imageData.data[index++] = color[1];
        imageData.data[index++] = color[2];
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

const Canvas = ({ color, seed, octaves, freq, persistence }) => {
  const canvasRef = useRef(null);
  const [texture, setTexture] = useState([]);
  const [imageData, setImageData] = useState(null);

  /*
  Update canvas
  */
  useEffect(() => {
    if (seed === null) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      if (imageData) {
        frameCount++;
        updateCanvas(ctx, texture, imageData, frameCount, color);
        animationFrameId = window.requestAnimationFrame(render);
      }
    };
    render();

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [texture, color, seed]);

  /*
  Init texture and canvas
  */
  useEffect(() => {
    if (seed === null) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = WIDTH;
    ctx.canvas.height = HEIGHT;
    setImageData(ctx.createImageData(WIDTH, HEIGHT));
    setTexture(initTexture(seed, octaves, freq, persistence));
  }, [seed]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
