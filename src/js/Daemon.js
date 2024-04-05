import Character from './character';

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.setStats();
  }
}

export default Daemon;