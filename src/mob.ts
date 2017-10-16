import {IFields} from './fields';

export class Mob {
  health: IFields;
  speed: IFields;
  legs?: IFields;

  constructor(health, speed) {
      this.health = health;
      this.speed = speed;
  }
};

export class Animals extends Mob {

};

export class Monstres extends Mob {
  legs: IFields;
};
