import Character from './character';

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.setStats();
  }
}

export default Undead;