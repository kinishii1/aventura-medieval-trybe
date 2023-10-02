// A função findCharacter recebe em seu primeiro parâmetro o objeto que vem do arquivo data.js e como segundo parâmetro recebe o ID do personagem. Com isso, deve encontrar o personagem seja ele um monstro ou uma pessoa aventureira e retorná-lo.
// const characterId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
// const foundCharacter = findCharacter(data, characterId);

const findCharacter = (data, charId) => {
  const adventurer = data.adventurers.find((adventurer) => adventurer.id === charId);

  if (adventurer) return adventurer;

  const monster = data.monsters.find((monster) => monster.id === charId);

  if (monster) return monster;

  return null;
};

export default findCharacter;
