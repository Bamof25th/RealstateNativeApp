import { Cards, FeaturedCards } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/globalProvider";
import seed from "@/lib/seed";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="h-full  bg-white">
      <Button title="seed" onPress={seed} />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Cards />}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <View className="px-5">
            <View className=" flex flex-row items-center justify-between mt-5">
              <View className=" flex flex-row ">
                <Image
                  source={{ uri: user?.avatar.toString() }}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            {/* Search Section */}
            <Search />
            <View className="my-5">
              {/* featured section */}
              <View className="flex flex-row  items-center justify-between ">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => <FeaturedCards />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
                showsHorizontalScrollIndicator={false}
              />
              <View className="flex flex-row gap-5 mt-5"></View>
            </View>
            {/* Our Recommendation section */}
            <View className="flex flex-row  items-center justify-between ">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />
            <View className="flex flex-row gap-5 mt-5"></View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
