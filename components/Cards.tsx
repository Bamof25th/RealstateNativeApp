import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
  onPress?: () => void;
}

export const FeaturedCards = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      className="flex flex-col items-start w-60 h-80 relative"
      onPress={onPress}
    >
      <Image source={images.japan} className="size-full  rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full  rounded-2xl absolute bottom-0"
      />
      <View className="flex flex-row items-center absolute bg-white/90 px-3 py-1.5 rounded-full top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold ml-1">4.4 </Text>
      </View>
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className="text-base font-rubik text-white" numberOfLines={1}>
          22 W 15th St, New York
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">$300</Text>
          <Image source={icons.heart} className="size-4" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Cards = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 py-4 px-3 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
      onPress={onPress}
    >
      <View className="flex flex-row items-center absolute bg-white/90 px-2 p-1 z-50 rounded-full top-5 right-5">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold ml-0.5">4.4 </Text>
      </View>
      <Image source={images.newYork} className="w-full h-40 rounded-lg" />
      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          Cosy Studio
        </Text>
        <Text className="text-xs font-rubik text-black-200">
          22 W 15th St, New York
        </Text>
        <View className="flex flex-row items-center justify-between mt-2 ">
          <Text className="text-base font-rubik-bold text-primary-300">
            $300
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor={"#191d31"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
