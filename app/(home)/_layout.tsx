import { View, Text } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Stack>
      {/* <Stack.Screen
        options={{
          headerTitle: () => (
            <View className="ml-4">
              <Text className="text-lg font-semibold">Coffee</Text>
              <Text>Wai Min</Text>
            </View>
          ),
          headerRight: () => <Text>Logout</Text>,
          headerLeft: () => (
            <AntDesign
              onPress={() => router.push("/(setting)")}
              className="mr-4"
              name="setting"
              size={24}
              color="black"
            />
          ),
          headerBackVisible: false,
        }}
        name="index"
      />
      <Stack.Screen name="[area]" options={{title: 'Menu'}} /> */}
      <Stack.Screen name="payment/[orderId]" options={{title: 'Payment'}} />
    </Stack>
  );
}
