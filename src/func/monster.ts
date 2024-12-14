//utöka så alla egenskaper för monstret skrivs ut
type monsterInfo = {
  name: string;
  age: number;
  tentacles: number;
  hasWings: boolean | number;
};

export const prettyPrintMonster = (m: monsterInfo[]) => {
  m = [];
  return m;
};

export const averageMonsterAge = (m: monsterInfo[]) => {
  let allAges = 0;
  m.forEach((a) => {
    allAges += a.age;
  });
  return allAges / m.length;
};

export const averageNumberOfTentacles = (m: monsterInfo[]) => {
  let antalTencls = 0;
  m.forEach((t) => {
    antalTencls += t.tentacles;
  });
  return antalTencls / m.length;
};

export const numberOfMonstersWithWings = (m: monsterInfo[]) => {
  let antalWings = [];
  m.forEach((w) => {
    if (w.hasWings === true) {
      let x = w.hasWings;
      antalWings.push(x);
    }
  });
  return antalWings.length;
};

export const getAllNoWingedMonster = (m: monsterInfo[]) => {
  let noWings = [];
  m.forEach((n) => {
    if (n.hasWings !== true) {
      let x = n.hasWings;
      noWings.push(x);
    }
  });
  return noWings.length;
};
