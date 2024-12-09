import Bowman from '../class/Bowman';
import Character from '../class/Character';

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

test('Ошибка при создании персонажа с коротким именем', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
});

test('Ошибка при создании персонажа с длинным именем', () => {
  expect(() => new Character('A'.repeat(11), 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
});

test('Ошибка при создании персонажа с некорректным типом', () => {
  expect(() => new Character('Robin', 'Warrior')).toThrow('Такой класс не доступен в этой версии');
});

test('Создание персонажа с корректным именем и типом', () => {
  const character = new Character('Hero', 'Zombie');
  expect(character).toEqual({
    name: 'Hero',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('Метод levelUp увеличивает уровень, атаку и защиту, восстанавливает здоровье', () => {
  const character = new Character('Hero', 'Bowman');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();

  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(12); 
  expect(character.defence).toBeCloseTo(12); 
  expect(character.health).toBe(100);
});

test('Метод levelUp выбрасывает ошибку для персонажа с health = 0', () => {
  const character = new Character('Hero', 'Bowman');
  character.health = 0;

  expect(() => character.levelUp()).toThrow('Он мёртв, уже не получит уровень');
});

test('Метод damage уменьшает здоровье корректно', () => {
  const character = new Character('Hero', 'Bowman');
  character.defence = 20;
  character.damage(50);

  expect(character.health).toBe(60); // 100 - 50 * (1 - 20 / 100)
});

test('Метод damage не уменьшает здоровье ниже 0', () => {
  const character = new Character('Hero', 'Bowman');
  character.defence = 0;
  character.damage(150);

  expect(character.health).toBe(0);
});

test('Метод damage не уменьшает здоровье, если health = 0', () => {
  const character = new Character('Hero', 'Bowman');
  character.health = 0;
  character.damage(50);

  expect(character.health).toBe(0);
});