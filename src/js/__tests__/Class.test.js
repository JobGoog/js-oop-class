import Bowman from "../class/Bowman";
import Demon from "../Class/Demon";
import Magician from "../class/Magician";
import Swordman from "../class/Swordman";
import Undead from "../class/Undead";
import Zombie from "../class/Zombie";

test('Создание Bowman персонажа', () => {
    const bowman = new Bowman('Robin');
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
});

test('Создание Demon персонажа', () => {
    const bowman = new Demon('Robin');
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Demon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
});

test('Создание Magician персонажа', () => {
    const bowman = new Magician('Robin');
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
});

test('Создание Swordman персонажа', () => {
    const bowman = new Swordman('Robin');
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Swordman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
});

test('Создание Undead персонажа', () => {
    const bowman = new Undead('Robin');
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
});

test('Создание Zombie персонажа', () => {
    const bowman = new Zombie('Robin');
    expect(bowman).toEqual({
      name: 'Robin',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
});
