export const params = {
    Bowman: {
      attack: 25,
      defense: 25,
    },
    Swordsman: {
      attack: 40,
      defense: 10,
    },
    Magician: {
      attack: 10,
      defense: 40,
    },
    Undead: {
      attack: 25,
      defense: 25,
    },
    Zombie: {
      attack: 40,
      defense: 10,
    },
    Daemon: {
      attack: 10,
      defense: 40,
    },
  };
  
  export default class Character {
    constructor(name, type) {
      this.name = this.nameHandler(name);
      this.type = this.typeHandler(type);
    }
  
    setStats() {
      this.health = 100;
      this.level = 1;
      this.attack = params[this.type].attack;
      this.defence = params[this.type].defense;
    }
  
    nameHandler(name) {
      this.level = 1;
  
      if (typeof name !== 'string') {
        throw new Error('the name must be of the string type!');
      }
  
      if (name.length < 2) {
        throw new Error('the name must not be shorter than 2 characters!');
      }
  
      if (name.length > 10) {
        throw new Error('the name must not be longer than 10 characters!');
      }
  
      return name;
    }
  
    typeHandler(type) {
      this.level = 1;
  
      if (type in params) {
        return type;
      }
  
      throw new Error('the type must be from Bowman, Swordsman, Wizard, Daemon, Undead, Zombie');
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error('it is impossible to raise the level of a dead character!');
      }
  
      this.level += 1;
      this.attack += this.attack / (100 * 20);
      this.defence += this.defence / (100 * 20);
      this.health = 100;
    }
  
    damage(points) {
      if (this.health <= 0) {
        throw new Error('cannot damage a dead character');
      }
  
      this.health -= points * (1 - this.defence / 100);
    }
  }