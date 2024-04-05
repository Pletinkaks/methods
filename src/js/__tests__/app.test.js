import {
    createDaemon, createBowman, createMagician, createSwordsman, createUndead, createZombie,
  } from '../app';
  
  
  test('The Daemon must be created with the correct parameters', () => {
    expect(createDaemon('Ks', 'Daemon')).toEqual({
      name: createDaemon('Ks', 'Daemon').name, type: createDaemon('Ks', 'Daemon').type, health: 100, level: 1, attack: 10, defence: 40,
    });
  });
  
  test('The Bowman must be created with the correct parameters', () => {
    expect(createBowman('Ks', 'Bowman')).toEqual({
      name: createBowman('Ks', 'Bowman').name, type: createBowman('Ks', 'Bowman').type, health: 100, level: 1, attack: 25, defence: 25,
    });
  });
  
  test('The Magician must be created with the correct parameters', () => {
    expect(createMagician('Ks', 'Magician')).toEqual({
      name: createMagician('Ks', 'Magician').name, type: createMagician('Ks', 'Magician').type, health: 100, level: 1, attack: 10, defence: 40,
    });
  });
  
  test('The Swordsman must be created with the correct parameters', () => {
    expect(createSwordsman('Ks', 'Swordsman')).toEqual({
      name: createSwordsman('Ks', 'Swordsman').name, type: createSwordsman('Ks', 'Swordsman').type, health: 100, level: 1, attack: 40, defence: 10,
    });
  });
  
  test('The Undead must be created with the correct parameters', () => {
    expect(createUndead('Ks', 'Undead')).toEqual({
      name: createUndead('Ks', 'Undead').name, type: createUndead('Ks', 'Undead').type, health: 100, level: 1, attack: 25, defence: 25,
    });
  });
  
  test('The Zombie must be created with the correct parameters', () => {
    expect(createZombie('Ks', 'Zombie')).toEqual({
      name: createZombie('Ks', 'Zombie').name, type: createZombie('Ks', 'Zombie').type, health: 100, level: 1, attack: 40, defence: 10,
    });
  });
  
  // Проверка ошибок
  
  test('name check <2', () => {
    expect(() => { createZombie('A', 'Zombie'); }).toThrow('the name must not be shorter than 2 characters!');
  });
  
  test('name check >10', () => {
    expect(() => { createZombie('Ks Zombie 2', 'Zombie'); }).toThrow('the name must not be longer than 10 characters!');
  });
  
  test('name check string', () => {
    expect(() => { createZombie(1234, 'Zombie'); }).toThrow('the name must be of the string type!');
  });
  
  test('type check', () => {
    expect(() => { createZombie('Ks', 'flyer'); }).toThrow('the type must be from Bowman, Swordsman, Wizard, Daemon, Undead, Zombie');
  });

  // Методы

test('chek levelUp method', () => {
    const char = createZombie('Ks', 'Zombie');
  
    char.level += 1;
    char.attack += char.attack / (100 * 20);
    char.defence += char.defence / (100 * 20);
  
    const expected = createZombie('Ks', 'Zombie');
    expected.levelUp();
  
    expect(expected).toEqual(char);
  });
  
  test('checking up 1LVL for 0HP', () => {
    expect(() => {
      const expected = createZombie('Ks', 'Zombie');
      expected.health = 0;
      expected.levelUp();
    }).toThrow('it is impossible to raise the level of a dead character!');
  });
  
  test('chek damage method', () => {
    const expected = createZombie('Ks', 'Zombie');
    expected.damage(10);
  
    expect(expected.health).toEqual(91);
  });
  
  test('checking damage error', () => {
    expect(() => {
      const expected = createZombie('Ks', 'Zombie');
      expected.health = 0;
      expected.damage();
    }).toThrow('cannot damage a dead character');
  });