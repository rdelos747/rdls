import React, { createContext, useEffect, useState } from 'react';
import rand from './utils/rng';
import { colors as allColors } from './constants';

const AppContext = createContext({});
export default AppContext;

export const AppProvider = ({ children }) => {
  const [seed, setSeed] = useState(null);
  const [colors, setColors] = useState({ p: '#fff' });
  /*
  Todo: let the user change these. But not today, too tired.
  */
  const [octaves, setOctaves] = useState(4);
  const [freq, setFreq] = useState(3);
  const [persistence, setPersistence] = useState(0.5);

  useEffect(() => {
    const newSeed = Math.floor(Math.random() * 100000000);
    rand.init(newSeed);
    setSeed(newSeed);

    setOctaves(rand.randInt(2, 9));
    setFreq(rand.randInt(4, 8));
    setPersistence(Math.round(rand.randArb(0, 1) * 10000) / 10000);

    setColors(rand.choose(allColors));
  }, []);

  return (
    <AppContext.Provider value={{ seed, colors, octaves, freq, persistence }}>
      {children}
    </AppContext.Provider>
  );
};
