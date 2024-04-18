import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
const SocialButton = () => {
  return (
    <View>
      <View className="w-[300px]">
        <TouchableOpacity className=" bg-slate-50 flex-row shadow-lg justify-center p-3 rounded-full gap-2 text-center">
          <FontAwesome6
            name="facebook"
            size={24}
            color="blue"
            className="justify-center items-center text-center"
          />
          <Text className="text-[16px] text-center">
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View className="w-[300px] mt-6">
        <TouchableOpacity className=" bg-slate-50 flex-row shadow-lg justify-center p-3 rounded-full gap-2 text-center">
          <FontAwesome6
            name="google"
            size={24}
            color="blue"
            className="justify-center items-center text-center"
          />
          <Text className="text-[16px] text-center">Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <View className="w-[300px] mt-6">
        <TouchableOpacity className=" bg-slate-50 flex-row shadow-lg justify-center p-3 rounded-full gap-2 text-center">
          <FontAwesome6
            name="apple"
            size={24}
            color="black"
            className="justify-center items-center text-center"
          />
          <Text className="text-[16px] text-center">Continue with Apple</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-2 mt-4">
        <View className="flex-row items-center gap-2">
          <Text className=" bg-slate-200 h-[1px] w-32"></Text>
          <Text>or</Text>
          <Text className=" bg-slate-200 h-[1px] w-32"></Text>
        </View>
      </View>
      <View className="w-[300px] mt-6">
        <TouchableOpacity className=" shadow shadow-black border bg-black p-4 rounded-full  text-center items-center">
          <Text className="text-white">Sign With Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialButton;
