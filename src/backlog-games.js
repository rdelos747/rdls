export const Platforms = {
  DreamCast: 'Dream Cast',
  DS: 'DS',
  GBA: 'GBA',
  GCN: 'GCN',
  Genesis: 'Genesis',
  NES: 'NES',
  PC: 'PC',
  PS1: 'PS1',
  PS2: 'PS2',
  PS4: 'PS4',
  PS5: 'PS5',
  Saturn: 'Saturn',
  SNES: 'SNES/SFC',
  Switch: 'Switch'
};

export default [
  {
    name: 'Shin Megami Tensei',
    platform: Platforms.SNES,
    started: true,
    replay: false
  },
  {
    name: 'Shin Megami Tensei II',
    platform: Platforms.SNES,
    started: false,
    replay: false
  },
  {
    name: 'Panzer Dragoon',
    platform: Platforms.Saturn,
    started: false,
    replay: false
  },
  {
    name: 'Advance Wars',
    platform: Platforms.GBA,
    started: false,
    replay: false
  },
  {
    name: 'Daemon X Machina',
    platform: Platforms.Switch,
    started: false,
    replay: false
  },
  { name: 'Black', platform: Platforms.PS2, started: false, replay: false },
  {
    name: 'Half Life Alyx',
    platform: Platforms.PC,
    started: false,
    replay: false
  },
  {
    name: 'Symphony of the Night',
    platform: Platforms.PS1,
    started: false,
    replay: false
  },
  {
    name: 'Wario Land 4',
    platform: Platforms.GBA,
    started: false,
    replay: true
  },
  {
    name: 'God of War',
    platform: Platforms.PS4,
    started: false,
    replay: false
  },
  {
    name: 'Rouge Leader: Rouge Squadron II',
    platform: Platforms.GCN,
    started: false,
    replay: false
  },
  {
    name: 'Metroid Prime',
    platform: Platforms.GCN,
    started: true,
    replay: false
  },
  {
    name: 'Metroid Prime II',
    platform: Platforms.GCN,
    started: false,
    replay: false
  },
  {
    name: 'Metroid Prime III',
    platform: Platforms.GCN,
    started: false,
    replay: false
  }
];
