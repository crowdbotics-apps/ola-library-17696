import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps87741Navigator from '../features/Maps87741/navigator';
import Add-Item87740Navigator from '../features/Add-Item87740/navigator';
import Maps87736Navigator from '../features/Maps87736/navigator';
import UserProfile87732Navigator from '../features/UserProfile87732/navigator';
import UserProfile57958Navigator from '../features/UserProfile57958/navigator';
import Maps57954Navigator from '../features/Maps57954/navigator';
import Add-Item57950Navigator from '../features/Add-Item57950/navigator';
import Maps57949Navigator from '../features/Maps57949/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps87741: { screen: Maps87741Navigator },
Add-Item87740: { screen: Add-Item87740Navigator },
Maps87736: { screen: Maps87736Navigator },
UserProfile87732: { screen: UserProfile87732Navigator },
UserProfile57958: { screen: UserProfile57958Navigator },
Maps57954: { screen: Maps57954Navigator },
Add-Item57950: { screen: Add-Item57950Navigator },
Maps57949: { screen: Maps57949Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
