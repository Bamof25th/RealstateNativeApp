import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";
import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [select, setSelect] = useState(params.filter || "All");

  const handelCategoryPress = (category: string) => {
    if (select === category) {
      setSelect("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelect(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handelCategoryPress(item.category)}
          key={index}
          className={`flex flex-col items-start mr-6 py-2 px-4 rounded-full
                ${
                  select === item.category
                    ? "bg-primary-300"
                    : "bg-primary-100 border border-primary-200"
                }
            `}
        >
          <Text
            className={`text-sm  ${
              select === item.category
                ? "text-white font-rubik-bold mt-0.5"
                : "text-black font-rubik"
            } `}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
