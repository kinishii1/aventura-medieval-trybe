## Requisitos

### 1 - Crie uma função que encontre um personagem

<details>
  <summary>Implemente a função <code>findCharacter</code> que encontra um personagem dado seu ID</summary><br />

  A função `findCharacter` recebe em seu primeiro parâmetro o objeto que vem do arquivo `data.js` e como segundo parâmetro recebe o ID do personagem. Com isso, deve encontrar o personagem seja ele um monstro ou uma pessoa aventureira.

  Exemplo de uso da função:

  ```js
  import data from './data.js';

  const characterId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
  const foundCharacter = findCharacter(data, characterId);

  console.log(foundCharacter);
  ```

  Caso o código acima fosse executado, deveria ser impresso no console o seguinte objeto:

  ```js
  {
    id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
    name: 'Treant',
    size: 'Huge',
    type: 'plant',
    image: './images/treant.png',
    exp_by_defeating: 300,
    stats: {
      health_points: 138,
      strength: 23,
      dexterity: 8,
      constitution: 21,
      intelligence: 12,
      wisdom: 16,
      charisma: 12,
    },
    special_abilities: [
      {
        name: 'Rock',
        damage: 20,
      },
      {
        name: 'Slam',
        damage: 12,
      },
    ]
  }
  ```
</details>

### 2 - Crie uma função que encontre a pessoa aventureira mais letal

<details>
  <summary>Implemente a função <code>getLethalAdventurer</code> que encontra a pessoa aventureira mais letal</summary><br />

  A função `getLethalAdventurer` recebe em seu único parâmetro o objeto que vem do arquivo `data.js`. Com isso, deve verificar todas as pessoas aventureiras em busca da mais letal, e para isso, deve encontrar quem ter o conjunto de armas que soma o maior dano possível.

  Ou seja, cada pessoa aventureira tem seu conjunto de armas descrito por ID's na propriedade `weapons`, então precisará descobrir qual o dano de cada arma e realizar a soma, para entender o quão letal é aquela pessoa aventureira.

  Exemplo de uso da função:

  ```js
  import data from './data.js';

  const letalAdventurer = getLethalAdventurer(data);

  console.log(letalAdventurer);
  ```

  Caso o código acima fosse executado, deveria ser impresso no console o seguinte objeto:

  ```js
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    name: 'Ardith Wishart',
    class: 'Paladin',
    race: 'Dragonborn',
    level: 12,
    image: './images/ardith_wishart.png',
    weapons: [
      '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      lanceId,
    ],
    defeatedMonsters: [
      '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      airElementalId,
    ],
  },
  ```
</details>

### 3 - Crie uma função que encontre o monstro mais temido

<details>
  <summary>Implemente a função <code>getMostFearedMonster</code> que encontra o mostro mais temido</summary><br />

  A função `getMostFearedMonster` recebe em seu único parâmetro o objeto que vem do arquivo `data.js`. Com isso, deve verificar todos os monstros em busca do mais temido, e para isso, deve encontrar aquele que consegue causar o maior dano possível se liberar todas as suas habilidades especiais.

  Ou seja, cada monstro tem seu conjunto de habilidades especiais na propriedade `special_abilities`, então precisará coletar o dano de cada habilidade e realizar a soma, para entender o quão temido é aquele monstro.

  Exemplo de uso da função:

  ```js
  import data from './data.js';

  const fearedMonster = getMostFearedMonster(data);

  console.log(fearedMonster);
  ```

  Caso o código acima fosse executado, deveria ser impresso no console o seguinte objeto:

  ```js
  {
    id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
    name: 'Adult Black Dragon',
    size: 'Huge',
    type: 'dragon',
    image: './images/adult_black_dragon.png',
    exp_by_defeating: 500,
    stats: {
      health_points: 195,
      strength: 23,
      dexterity: 14,
      constitution: 21,
      intelligence: 14,
      wisdom: 13,
      charisma: 17,
    },
    special_abilities: [
      {
        name: 'Acid Breath',
        damage: 25,
      },
      {
        name: 'Tail',
        damage: 10,
      },
      {
        name: 'Bite',
        damage: 15,
      }
    ]
  }
  ```
</details>

### 4 - Crie uma função que ordene a lista de personagens por determinada propriedade

<details>
  <summary>Implemente a função <code>sortingByProperty</code> que ordena a lista de personagens, sejam monstros ou pessoas aventureiras, por determinada propriedade</summary><br />

  A função `sortingByProperty` recebe em seu primeiro parâmetro o array contendo determinada lista de personagens (monstros ou pessoas aventureias), como segundo parâmetro recebe uma propriedade do personagem, como o `level` no caso de pessoas aventureiras, e no terceiro parâmetro recebe de forma opcional uma propriedade aninhada, como `stats.strength` no caso dos monstros.

  Com isso, deve funcionar para ambas as listas de personagens, seja para ordenar as pessoas aventureiras por seu **nível** ou ordenar os montros por sua **força**.

  Exemplo de uso da função:

  ```js
  import data from './data.js';

  const sortedAdventurers = sortingByProperty(data.adventurers, 'level');
  const sortedMonsters = sortingByProperty(data.monsters, 'stats', 'strength');

  console.log(sortedAdventurers);
  console.log(sortedMonsters);
  ```

  Caso o código acima fosse executado, deveria ser impresso no console as listas ordenadas de forma decrescente (do maior para o menor) de pessoas aventureias e depois dos monstros.
</details>

