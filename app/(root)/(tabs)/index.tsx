import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold font-rubik text-primary-300   text-2xl">
        Welcome to RealState
      </Text>

    </View>
  );
}
