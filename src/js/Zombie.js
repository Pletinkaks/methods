import Character from './character';

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.setStats();
  }
}

export default Zombie;