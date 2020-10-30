import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen413593Navigator from '../features/BlankScreen413593/navigator';
import BlankScreen313592Navigator from '../features/BlankScreen313592/navigator';
import BlankScreen813540Navigator from '../features/BlankScreen813540/navigator';
import BlankScreen713539Navigator from '../features/BlankScreen713539/navigator';
import BlankScreen513538Navigator from '../features/BlankScreen513538/navigator';
import BlankScreen613537Navigator from '../features/BlankScreen613537/navigator';
import BlankScreen413534Navigator from '../features/BlankScreen413534/navigator';
import BlankScreen213532Navigator from '../features/BlankScreen213532/navigator';
import BlankScreen213529Navigator from '../features/BlankScreen213529/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen413593: { screen: BlankScreen413593Navigator },
BlankScreen313592: { screen: BlankScreen313592Navigator },
BlankScreen813540: { screen: BlankScreen813540Navigator },
BlankScreen713539: { screen: BlankScreen713539Navigator },
BlankScreen513538: { screen: BlankScreen513538Navigator },
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
