import { createStackNavigator } from 'react-navigation';

import Home from './component/Home';
import SlideMenu from './component/sidemenu/SlideMenu';
import ListCate from './component/ListItem';

const HomeScreen = createStackNavigator(
  {
    /* Màn hình chính */
    Screen_SlideMenu: {
      screen: SlideMenu
    },
    Screen_Home: {
      screen: Home
    },
    Screen_ListCate: {
      screen: ListCate
    }
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      header: null
      // headerTitleStyle: {
      //     textAlign: 'center',
      //     alignSelf: 'center',
      //     fontSize: moderateScale(18)
      // },
      // headerStyle: {
      //     backgroundColor: '#fff',
      //     borderBottomWidth: 1,
      //     borderBottomColor: '#a2a2a2',
      //     shadowColor: '#dcdcdc',
      //     shadowOpacity: 0.3,
      //     elevation: 3
      // },
      // headerRight: <View />,
      // headerBackTitle: '',
      // headerLeft: renderButtonBack(navigation)
    })
    // transitionConfig: () => ({
    //screenInterpolator: CardStackStyleInterpolator.forHorizontal })
  }
);

export default HomeScreen;
