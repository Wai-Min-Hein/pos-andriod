import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function index() {
  const tableArea: string[] = ["Walkin", "Foodpanda", "Grab"];

  const [active, setActive] = useState<string>('Walkin')

  const handlePress = () => {
    router.push(`/(home)/${active}`)
  };

  const renderItem = ({ item }: { item: string }) => (
    <CustomButton
      btnText={item}
      containerStyle={` bg-blue-400 mr-4 px-4 py-2 rounded-sm ${active == item? 'bg-red-400': ''}`}
      textStyle={"text-[15px]"}
      handlePress={() => setActive(item)}
    />
  );
  return (
    <View>
      <View className="pl-4 mt-2">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tableArea}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />

        <CustomButton
          btnText={"Add New"}
          containerStyle={" bg-blue-400 mr-4 px-4 py-8 flex items-center rounded-md w-28 mt-10"}
          textStyle={"text-[15px]"}
          handlePress={handlePress}
        />
      </View>
    </View>
  );
}
