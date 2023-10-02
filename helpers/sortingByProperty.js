
// A função sortingByProperty recebe em seu primeiro parâmetro o array contendo determinada lista de personagens (monstros ou pessoas aventureias), como segundo parâmetro recebe uma propriedade do personagem, como o level no caso de pessoas aventureiras, e no terceiro parâmetro recebe de forma opcional uma propriedade aninhada, como stats.strength no caso dos monstros.

// Com isso, deve funcionar para ambas as listas de personagens, seja para ordenar as pessoas aventureiras por seu nível ou ordenar os montros por sua força.

// const sortedAdventurers = sortingByProperty(data.adventurers, 'level');
// const sortedMonsters = sortingByProperty(data.monsters, 'stats', 'strength');

const sortingByProperty = (characters, property, nestedProperty) => {
  const sortedCharacters = characters.sort((a, b) => {
    if (nestedProperty) {
      return b[property][nestedProperty] - a[property][nestedProperty];
    }
    return b[property] - a[property];
  });
  return sortedCharacters;
};

export default sortingByProperty;
