import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen313597Navigator from '../features/CopyOfBlankScreen313597/navigator';
import BlankScreen713596Navigator from '../features/BlankScreen713596/navigator';
import BlankScreen613595Navigator from '../features/BlankScreen613595/navigator';
import BlankScreen513594Navigator from '../features/BlankScreen513594/navigator';
import BlankScreen413593Navigator from '../features/BlankScreen413593/navigator';
import BlankScreen813540Navigator from '../features/BlankScreen813540/navigator';
import BlankScreen713539Navigator from '../features/BlankScreen713539/navigator';
import BlankScreen613537Navigator from '../features/BlankScreen613537/navigator';
import BlankScreen413534Navigator from '../features/BlankScreen413534/navigator';
import BlankScreen213532Navigator from '../features/BlankScreen213532/navigator';
import BlankScreen213529Navigator from '../features/BlankScreen213529/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen313597: { screen: CopyOfBlankScreen313597Navigator },
BlankScreen713596: { screen: BlankScreen713596Navigator },
BlankScreen613595: { screen: BlankScreen613595Navigator },
BlankScreen513594: { screen: BlankScreen513594Navigator },
BlankScreen413593: { screen: BlankScreen413593Navigator },
BlankScreen813540: { screen: BlankScreen813540Navigator },
BlankScreen713539: { screen: BlankScreen713539Navigator },
BlankScreen613537: { screen: BlankScreen613537Navigator },
BlankScreen413534: { screen: BlankScreen413534Navigator },
BlankScreen213532: { screen: BlankScreen213532Navigator },
BlankScreen213529: { screen: BlankScreen213529Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
