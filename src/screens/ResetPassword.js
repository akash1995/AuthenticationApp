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

export default class ResetPasswordScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
        <View style={{padding: 20}}>
          <Pressable onPress={() => this.props.navigation.goBack(null)}>
            <SvgIcon icon={'back'} width={30} height={30} />
          </Pressable>
        </View>
        <View style={{position: 'relative', bottom: 30}}>
          <View style={styles.loginIcon}>
            <SvgIcon icon={'reset'} width={300} height={300} />
          </View>
          <View style={styles.container}>
            <View style={styles.loginLblCon}>
              <Text style={styles.loginLbl}>Reset {'   '} Password</Text>
            </View>
            <View style={styles.formCon}>
              <View style={[styles.textBoxCon]}>
                <View style={styles.at}>
                  <SvgIcon icon={'lock'} width={20} height={20} />
                </View>
                <View style={[styles.passCon]}>
                  <View style={styles.textCon}>
                    <TextInput
                      style={styles.textInput}
                      placeholder={'New Password'}
                      placeholderTextColor={'#aaa'}
                      secureTextEntry={true}
                    />
                  </View>
                  <View style={styles.show}>
                    <SvgIcon icon={'show'} width={20} height={20} />
                  </View>
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
                      placeholder={'Confirm Password'}
                      placeholderTextColor={'#aaa'}
                      secureTextEntry={true}
                    />
                  </View>
                  <View style={styles.show}>
                    <SvgIcon icon={'show'} width={20} height={20} />
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.loginCon, {marginTop: 30}]}>
              <Pressable style={styles.LoginBtn}>
                <Text style={styles.loginBtnLbl}>Submit</Text>
              </Pressable>
            </View>
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
