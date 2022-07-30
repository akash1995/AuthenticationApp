import React, {Component} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Fonts from '../common/assets/fonts';
import SvgIcon from '../common/assets/images/SvgIcon';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      userData: {},
      userName: '',
      userPhotos: '',
    };
  }
  componentDidMount = () => {
    GoogleSignin.configure({
      webClientId:
        '365061123247-086ik9op8tb4nrer57jdav4833anq39k.apps.googleusercontent.com',

      offlineAccess: false,
    });
  };

  firebaseGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
        this.getCurrentUserInfo();
      }
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({user: null, loggedIn: false}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      // this.setState({userInfo});
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        // this.setState({loggedIn: false});
      } else {
        // some other error
        // this.setState({loggedIn: false});
      }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
        <View style={styles.loginIcon}>
          <SvgIcon icon={'login'} width={300} height={300} />
        </View>
        <View style={styles.container}>
          <View style={styles.loginLblCon}>
            <Text style={styles.loginLbl}>Login</Text>
          </View>
          <View style={styles.formCon}>
            <View style={styles.textBoxCon}>
              <View style={styles.at}>
                <SvgIcon icon={'at'} width={20} height={20} />
              </View>
              <View style={styles.textCon}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Email ID'}
                  placeholderTextColor={'#aaa'}
                />
              </View>
            </View>
            <View style={[styles.textBoxCon, {marginTop: 30}]}>
              <View style={styles.at}>
                <SvgIcon icon={'lock'} width={20} height={20} />
              </View>
              <View style={[styles.passCon]}>
                <View style={styles.textCon}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={'Password'}
                    placeholderTextColor={'#aaa'}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.show}>
                  <SvgIcon icon={'show'} width={20} height={20} />
                </View>
              </View>
            </View>
            <View style={styles.forgotAction}>
              <Pressable
                onPress={() =>
                  this.props.navigation.navigate('ForgotPassword')
                }>
                <Text style={styles.forgotLbl}>Forgot Password?</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.loginCon}>
            <Pressable style={styles.LoginBtn}>
              <Text style={styles.loginBtnLbl}>Login</Text>
            </Pressable>
          </View>
          <View style={styles.deviderCon}>
            <View style={styles.devider} />
            <Text style={styles.or}>OR</Text>
          </View>
          <View style={styles.googleIconCon}>
            <View style={styles.googleIcon}>
              <SvgIcon icon={'google'} width={20} height={20} />
            </View>
            <View style={styles.googleLblCon}>
              <TouchableOpacity onPress={() => this.firebaseGoogleLogin()}>
                <Text style={styles.googleLbl}>Login with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.registerCon}>
            <Text style={styles.registerNew}>New User? </Text>
            <Pressable
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.registerLbl}>Register</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: '#fff',
    flex: 1,
  },
  loginIcon: {
    alignSelf: 'center',
  },
  formCon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  container: {
    paddingHorizontal: 20,
  },
  loginLblCon: {
    position: 'relative',
    bottom: 40,
  },
  loginLbl: {
    color: '#000',
    fontSize: 40,
    fontFamily: Fonts.type.NotoSansExtraBold,
  },
  at: {
    alignSelf: 'center',
    width: '10%',
  },
  show: {
    alignSelf: 'center',
    width: '10%',
    position: 'relative',
    right: 20,
    zIndex: 10,
  },
  textBoxCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCon: {
    width: '90%',
  },
  passCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderBottomColor: '#aaa',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: '#000',
    fontSize: 16,
    fontFamily: Fonts.type.NotoSansMedium,
    height: 40,
  },
  forgotAction: {
    paddingVertical: 20,
  },
  registerCon: {flexDirection: 'row', justifyContent: 'center', paddingTop: 10},
  registerLbl: {color: '#0057ff', fontFamily: Fonts.type.NotoSansSemiBold},
  registerNew: {
    color: '#aaa',
    fontFamily: Fonts.type.NotoSansSemiBold,
  },
  forgotLbl: {
    color: '#0057ff',
    textAlign: 'right',
    fontFamily: Fonts.type.NotoSansSemiBold,
  },
  LoginBtn: {
    backgroundColor: '#0057ff',
    borderRadius: 20,
  },
  loginBtnLbl: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.type.NotoSansBlack,
    color: '#fff',
    paddingVertical: 10,
  },
  devider: {
    borderBottomColor: '#aaa',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
  },
  or: {
    color: '#aaa',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 60,
    alignSelf: 'center',
    fontFamily: Fonts.type.NotoSansSemiBold,
    position: 'relative',
    bottom: 13,
  },
  deviderCon: {
    paddingVertical: 10,
  },
  googleIconCon: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  googleLbl: {
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 30,
    fontFamily: Fonts.type.NotoSansBlack,
  },
});
