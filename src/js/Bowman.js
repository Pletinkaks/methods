import Character from './character';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.setStats();
  }
}

export default Bowman;