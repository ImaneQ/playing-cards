export enum MonsterType {
  PLANT = "plant",
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water",
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: {
  [key: string]: IMonsterProperties
} =
{
  [MonsterType.PLANT]: {
    imageUrl: './assets/plant.jpg',
    color: 'rgba(135, 255, 124)'
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: './assets/electric.jpg',
    color: 'rgba(255, 255, 104)'
  },
  [MonsterType.FIRE]: {
    imageUrl: './assets/fire.jpg',
    color: 'rgba(255, 104, 104)'
  },
  [MonsterType.WATER]: {
    imageUrl: './assets/monstre-neige.jpg',
    color: 'rgba(0, 191, 255, 1)'  // Nouveau bleu électrique
  },
}
