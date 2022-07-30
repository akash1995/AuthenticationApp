import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import {SignInScreen} from './route';
import SignUpScreen from '../screens/SignUp';
import HomeScreen from '../screens/Home';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import ResetPasswordScreen from '../screens/ResetPassword';
import EnterOTPScreen from '../screens/EnterOtp';

const AppNavigation = createStackNavigator(
  {
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    EnterOTP: {
      screen: EnterOTPScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
  },
  {
    navigationOptions: {
      getSelection: false,
      headerVisible: false,
    },
    headerMode: 'screen',
  },
);

export default createAppContainer(AppNavigation);
