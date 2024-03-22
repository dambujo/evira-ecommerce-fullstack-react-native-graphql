import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Walkthrough from './Walkthrough';

const Welcome = () => {
  return (
    <SafeAreaView className="flex-1 items-center, justify-center text-center">
      <View className="text-center flex-col items-center justify-center">
        <Image
          style={{ width: 130, height: 130, alignSelf: 'center' }}
          source={require('./img/loading.png')}
        />
        <Image
          className="top-36"
          source={require('./img/loading-2.png')}
          style={{ width: 50, height: 50, alignSelf: 'center' }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
  content: {
    color: 'red',
  },
});

export default Welcome;
