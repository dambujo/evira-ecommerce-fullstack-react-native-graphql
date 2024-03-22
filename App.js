import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './screens';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View className="flex-1 justify-center items-center flex-col">
    //   <Text>Hello World</Text>
    // </View>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
