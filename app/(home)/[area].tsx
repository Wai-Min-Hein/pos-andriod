import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/CustomButton";

interface menuInterface {
  _id: number;
  name: string;
  price: number;
}
export default function area() {
  const { area } = useLocalSearchParams<{ area: string }>();

  if (!area) {
    return <Text>No area specified</Text>;
  }

  const category: string[] = [
    "All",
    "Food",
    "Coffee",
    "Tea",
    "Potato",
    "Chocolate",
    "Cold Drink",
    "Waffle",
  ];

  const menus: menuInterface[] = [
    {
      _id: 1,
      name: "Pizza",
      price: 12.99,
    },
    {
      _id: 2,
      name: "Pizza",
      price: 12.99,
    },
    {
      _id: 3,
      name: "Pizza",
      price: 12.99,
    },
    {
      _id: 4,
      name: "Pizza",
      price: 12.99,
    },
    {
      _id: 5,
      name: "Pizza",
      price: 12.99,
    },
  ];

  const categoryRender = ({ item }: { item: string }) => (
    <CustomButton
      btnText={item}
      handlePress={() => console.log("Test")}
      containerStyle={`bg-blue-400 rounded-sm mb-3 px-2 py-2 flex items-center`}
      textStyle={"text-[16px]"}
    />
  );

  const menusRender = ({ item }: { item: menuInterface }) => (
    <View className="flex-col flex  items-center border border-gray-400 rounded-md mb-4 px-2 py-2 basis-[48%]">
      <Text>{item.name}</Text>
      <Text>$ {item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
        <View className="flex items-start justify-between flex-row min-h-screen">
          <View className="basis-1/3 pt-4  px-2 border-r relative ">

          <CustomButton
      btnText={'Pay'}
      handlePress={() => router.push(`/(home)/payment/[1]`)}
      containerStyle={`bg-blue-400 rounded-sm mb-3 px-2 py-2 flex items-center`}
      textStyle={"text-[16px]"}
    />
            <FlatList
              data={category}
              renderItem={categoryRender}
              keyExtractor={(item) => item}
            />
           

          </View>

          <View className="flex-1  px-2 pt-4">
            <FlatList
              data={menus}
              renderItem={menusRender}
              keyExtractor={(item) => item._id.toString()}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between", gap: 6 }}
              contentContainerStyle={{}}
            />
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
