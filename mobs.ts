import {Fields} from './fields';

export class Mobs {
  health: Fields;
  speed: Fields;
  legs?: Fields;

  constructor() {

  };
};

export class Animals extends Mobs {

};

export class Monstres extends Mobs {
  legs: Fields;
};
