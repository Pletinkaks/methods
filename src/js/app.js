import Daemon from './daemon';
import Zombie from './zombie';
import Swordsman from './swordsman';
import Magician from './magician';
import Bowman from './bowman';
import Undead from './undead';

export function createDaemon(name, type) {
  return new Daemon(name, type);
}

export function createBowman(name, type) {
  return new Bowman(name, type);
}

export function createMagician(name, type) {
  return new Magician(name, type);
}

export function createSwordsman(name, type) {
  return new Swordsman(name, type);
}

export function createUndead(name, type) {
  return new Undead(name, type);
}

export function createZombie(name, type) {
  return new Zombie(name, type);
}