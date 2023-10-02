// A função getMostFearedMonster recebe em seu único parâmetro o objeto que vem do arquivo data.js. Com isso, deve verificar todos os monstros em busca do mais temido, e para isso, deve encontrar aquele que consegue causar o maior dano possível se liberar todas as suas habilidades especiais.
// Ou seja, cada monstro tem seu conjunto de habilidades especiais na propriedade special_abilities, então precisará coletar o dano de cada habilidade e realizar a soma, para entender o quão temido é aquele monstro.

const getMostFearedMonster = ({monsters}) => {
  let mostFearedMonster = monsters[0];
  let mostFearedDamage = 0;

  monsters.forEach((monster) => {
    let monsterDamage = 0;
    monster.special_abilities.forEach((ability) => {
      monsterDamage += ability.damage;
    });

    if (monsterDamage > mostFearedDamage) {
      mostFearedDamage = monsterDamage;
      mostFearedMonster = monster;
    }
  }
  );
  return mostFearedMonster;
};

export default getMostFearedMonster;