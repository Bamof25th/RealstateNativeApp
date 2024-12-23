import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";

const SignIn = () => {
  const handelLogin = async () => {
    // Implement login function here
    const result = await login();
    if (result) {
      console.log("Login Success");
    } else {
      Alert.alert('flailed to login');
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center font-rubik uppercase text-black-200 ">
            Welcome to RealState
          </Text>
          <Text className="text-3xl text-center font-rubik-bold  text-black-300 mt-2 ">
            Let's Get You Closer To {"\n"}{" "}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-black-200 text-center mt-12  font-rubik">
            Login To RealState with Google
          </Text>
          <TouchableOpacity
            onPress={handelLogin}
            className="bg-white shadow-md shadow-zinc-300 w-full rounded-full py-4 mt-5"
          >
            <View className="flex flex-row justify-center items-center">
              <Image
                source={icons.google}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="text-black-300 text-base font-rubik-medium ml-2">
                Sign In with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
