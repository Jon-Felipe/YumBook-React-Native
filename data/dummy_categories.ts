import { Category } from '@/utils/types';

export const dummy_categories: Category[] = [
  {
    id: '1',
    name: 'Breakfast',
    description: 'Start your day with these morning favourites.',
    imageUrl: require('../assets/icons/breakfast-icon.png'),
  },
  {
    id: '2',
    name: 'Lunch',
    description: 'Midday meals to keep you going',
    imageUrl: require('../assets/icons/lunch-icon.png'),
  },
  {
    id: '3',
    name: 'Burgers',
    description:
      'Juicy, stacked, and packed with flavor — from classic beef to creative plant-based patties.',
    imageUrl: require('../assets/icons/burger-icon.png'),
  },
  {
    id: '4',
    name: 'Noodles',
    description:
      'Slurp-worthy dishes from stir-fry to soup, spanning Asian-inspired flavors and beyond.',
    imageUrl: require('../assets/icons/noodles-icon.png'),
  },
  {
    id: '5',
    name: 'Pasta',
    description:
      'Comfort food at its finest — creamy, saucy, and carb-loving classics from Italy and more.',
    imageUrl: require('../assets/icons/pasta-icon.png'),
  },
  {
    id: '6',
    name: 'Pizza',
    description:
      'Cheesy, crispy, and endlessly customizable — a slice of heaven for every taste.',
    imageUrl: require('../assets/icons/pizza-icon.png'),
  },
];
