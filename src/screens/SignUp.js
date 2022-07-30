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
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '',
});
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      userAuth: null,
    };
  }

  componentDidMount = () => {
    const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    return () => {
      subscriber;
    };
  };

  onAuthStateChanged = async userAuth => {
    if (!userAuth) {
      return;
    }
    if (userAuth) {
      console.log(userAuth);
      this.setState({userAuth: userAuth});
    }
  };
  onAuthStateChanged = async userAuth => {
    if (!userAuth) {
      return;
    }
    if (userAuth) {
      console.log(userAuth);
      this.setState({userAuth: userAuth});
    }
  };
  signOut = async () => {
    auth().signOut();
    this.setState({userAuth: null});
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
        <View style={styles.loginIcon}>
          <SvgIcon icon={'signup'} width={300} height={300} />
        </View>
        <View style={styles.container}>
          <View style={styles.loginLblCon}>
            <Text style={styles.loginLbl}>Sign up</Text>
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
                <SvgIcon icon={'user'} width={20} height={20} />
              </View>
              <View style={styles.textCon}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Full Name'}
                  placeholderTextColor={'#aaa'}
                />
              </View>
            </View>
            <View style={[styles.textBoxCon, {marginTop: 30}]}>
              <View style={styles.at}>
                <SvgIcon icon={'phone'} width={20} height={20} />
              </View>
              <View style={styles.textCon}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Mobile'}
                  placeholderTextColor={'#aaa'}
                />
              </View>
            </View>
            <View style={styles.termsCon}>
              <Text style={styles.termsBy}>
                By signing up, you're agree to our{' '}
              </Text>
              <Pressable
                onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                <Text style={styles.termLbl}>Terms & Conditions </Text>
              </Pressable>
              <Text style={styles.termsBy}> and </Text>
              <Pressable
                onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                <Text style={styles.termLbl}>Privacy Policy</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.loginCon}>
            <Pressable style={styles.LoginBtn}>
              <Text style={styles.loginBtnLbl}>Continue</Text>
            </Pressable>
          </View>

          <View style={styles.registerCon}>
            <Text style={styles.registerNew}>Joined us before? </Text>
            <Pressable
              onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <Text style={styles.registerLbl}>Login</Text>
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
    // textAlign: 'right',
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
  termsCon: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    paddingVertical: 20,
  },
  termsBy: {
    fontSize: 12,
    color: '#aaa',
    fontFamily: Fonts.type.NotoSansSemiBold,
  },
  termLbl: {
    color: '#0057ff',
    fontFamily: Fonts.type.NotoSansSemiBold,
    fontSize: 12,
  },
});
