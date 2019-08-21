'use strict';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './src/classes/home';
import SpellList from './src/classes/spellList';
import Converter from './src/classes/converter';
import SpellSpecific from './src/classes/spellSpecific';
import Character from './src/classes/character';


const RootStack = createStackNavigator({
  Home: { screen: Home },
  SpellList: { screen: SpellList},
  Converter: { screen: Converter },
  SpellSpecific: { screen: SpellSpecific },
  Character: { screen: Character }
});

const App = createAppContainer(RootStack);

export default App;