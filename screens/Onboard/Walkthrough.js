import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Walkthrough = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-gray-200 flex-1 items-center, justify-center text-center p-4">
      <View className="text-center flex-col items-center justify-center">
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
          <Image source={require('./img/shop-2.png')} />
          <View className="flex-col">
            <Text className="text-[30px] items-start">Welcome to</Text>
            <Text className="text-[100px] font-bold items-start ">Evira</Text>

            <Text className="top-3">
              The best e-commerce app of Century for your daily needed
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Walkthrough;
