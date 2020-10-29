import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213529Navigator from '../features/BlankScreen213529/navigator';
import BlankScreen113528Navigator from '../features/BlankScreen113528/navigator';
import BlankScreen013527Navigator from '../features/BlankScreen013527/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213529: { screen: BlankScreen213529Navigator },
BlankScreen113528: { screen: BlankScreen113528Navigator },
BlankScreen013527: { screen: BlankScreen013527Navigator },

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
