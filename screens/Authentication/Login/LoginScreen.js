import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import SocialButton from '../../../components/Auth/Login/SocialButton';
import Button from '../../../components/Auth/Button/Button';
const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('OnBoarding')}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Image
            style={{
              width: 250,
              height: 200,
              alignSelf: 'center',
              marginTop: 40,
            }}
            resizeMode="contain"
            source={require('../../../assets/imgs/auth.png')}
          />
          <Text style={styles.in}>Lets's you in</Text>
          <View style={styles.social}>
            <SocialButton />
          </View>
          <View></View>
          <View className="flex-row mt-4 ">
            <Text className="text-slate-400">Dont have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              className="ml-2"
            >
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  icon: {
    marginTop: 20,
  },
  in: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: '700',
  },
  social: {
    marginTop: 30,
    flexDirection: 'column',
  },
  button: {
    flexDirection: 'row',
    // padding: 2,
  },
});
