import { Mob } from './mob';

const showMob = (): void => {
    let zombie1 = new Mob(50, 24);
    for (let key in zombie1) {
        console.log(key);
    }
};

export default showMob;
