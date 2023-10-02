// A função getLethalAdventurer recebe em seu único parâmetro o objeto que vem do arquivo data.js. Com isso, deve verificar todas as pessoas aventureiras em busca da mais letal, e para isso, deve encontrar quem ter o conjunto de armas que soma o maior dano possível.
// Ou seja, cada pessoa aventureira tem seu conjunto de armas descrito por ID's na propriedade weapons, então precisará descobrir qual o dano de cada arma e realizar a soma, para entender o quão letal é aquela pessoa aventureira.

const getLethalAdventurer = ({adventurers, weapons}) => {
  let lethalAdventurer = adventurers[0];
  let lethalDamage = 0;

  adventurers.forEach((adventurer) => {
    let adventurerDamage = 0;
    adventurer.weapons.forEach((weapon) => {
      const foundWeapon = weapons.find((dataWeapon) => dataWeapon.id === weapon);
      adventurerDamage += foundWeapon.damage;
    });

    if (adventurerDamage > lethalDamage) {
      lethalDamage = adventurerDamage;
      lethalAdventurer = adventurer;
    }
  }
  );
  return lethalAdventurer;
}

export default getLethalAdventurer;
