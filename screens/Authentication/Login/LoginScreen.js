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
const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}
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
            <FontAwesome6 name="facebook" size={24} color="blue" />
            <AntDesign name="google" size={24} color="blue" />
            <AntDesign name="apple1" size={24} color="black" />
          </View>
          <View>
            <Text>or</Text>
          </View>
          <View>
            <Text>Sign in with password</Text>
            <Text>Dont have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text>Sign Up</Text>
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
});
