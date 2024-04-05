import Character from './character';

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.setStats();
  }
}

export default Magician;