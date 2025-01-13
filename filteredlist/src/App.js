import React from 'react';
import FilteredList from './FilteredList';

const App = () => {
  const fruitItems = [
    'Apple 🍎',
    'Banana 🍌',
    'Cherry 🍒',
    'Durian 榴莲',
    'Elderberry Elderberry',
    'Fig 🪺',
    'Grapefruit 🍈',
    'Honeydew Melon 🍈',
    'Indian Gooseberry 🍋',
    'Jackfruit 🪗',
    'Kiwi 🥝',
    'Lemon 🍋',
    'Mango 🥭',
    'Nectarine 🍑',
    'Orange 🍊',
    'Papaya 🥭',
    'Pineapple 🍍',
    'Quince 🍐',
    'Raspberry Raspberries',
    'Starfruit ⭐️',
    'Tangerine 🍊',
    'Ugli Fruit 🍈',
    'Watermelon 🍉',
    'Xigua (Chinese Watermelon) 🍉',
    'Yellow Plum 🍋',
    'Zucchini (Summer Squash) 🥒',
  ];

  return <FilteredList items={fruitItems} title="Fruit Filter" />;
};

export default App;
