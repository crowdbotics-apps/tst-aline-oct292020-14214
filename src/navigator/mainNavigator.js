import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen513533Navigator from '../features/BlankScreen513533/navigator';
import BlankScreen213532Navigator from '../features/BlankScreen213532/navigator';
import BlankScreen413531Navigator from '../features/BlankScreen413531/navigator';
import BlankScreen313530Navigator from '../features/BlankScreen313530/navigator';
import BlankScreen213529Navigator from '../features/BlankScreen213529/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen513533: { screen: BlankScreen513533Navigator },
BlankScreen213532: { screen: BlankScreen213532Navigator },
BlankScreen413531: { screen: BlankScreen413531Navigator },
BlankScreen313530: { screen: BlankScreen313530Navigator },
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
