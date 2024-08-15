// import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
// import React from "react";
// import { TextInput } from "react-native-gesture-handler";

// export default function orderIdPayment() {
//   const discountCard: string[] = [
//     "D5%",
//     "D6%",
//     "D7%",
//     "D8%",
//     "D9%",
//     "D10%",
//     "D11%",
//     "D12%",
//     "D13%",
//     "D14%",
//     "D15%",
//     "D16%",
//     "D17%",
//   ];

//   const paymentMethod: string[] = ["Credit Card", "Cash", "Bank Transfer"];

//   const paymentRender = ({ item }: { item: string }) => (
//     <View className="flex items-center justify-between border mb-2 rounded-md border-gray-400 py-4  basis-[32%]">
//         <Text>

//       {item}
//         </Text>
//     </View>
//   );

//   const discountRender = ({ item }: { item: string }) => (
//     <View className="flex items-center justify-between border mb-2 rounded-md border-gray-400 py-2  basis-[23.7%]">
//       <Text>Voucher</Text>
//       <Text>{item}</Text>
//     </View>
//   );
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View className="px-2">
//           <View className="flex items-center justify-between flex-row border-b border-gray-400 py-2">
//             <Text>Amount</Text>
//             <Text>$ 100</Text>
//           </View>
//           <View className="py-2">
//             <Text className="mb-2">Discount Card</Text>
//             <FlatList
//               scrollEnabled={false}
//               numColumns={4}
//               data={discountCard}
//               columnWrapperStyle={{ justifyContent: "space-between", gap: 6 }}
//               renderItem={discountRender}
//               keyExtractor={(item) => item}
//             />
//           </View>

//           <View>
//             <View className="flex items-center justify-between flex-row ">
//               <Text>Amount after diacount</Text>
//               <Text>100 $</Text>
//             </View>

//             <View className="flex items-center justify-between flex-row ">
//               <Text>VAT Tax</Text>
//               <Text>5 $</Text>
//             </View>
//             <View className="flex items-center justify-between flex-row ">
//               <Text className="text-lg text-red-500 font-semibold">
//                 Total Amount
//               </Text>
//               <Text className="text-lg text-red-500 font-semibold">105 $</Text>
//             </View>
//           </View>

//           <View className="mt-4 ">
//             <View className="flex items-center justify-between flex-row  border-b border-gray-400 pb-2">
//               <Text>Customer paid amount</Text>
//               <Text>110 $</Text>
//             </View>

//             <View className="flex items-center justify-between flex-row  pt-1">
//               <Text>Refund amount</Text>
//               <Text>5 $</Text>
//             </View>
//           </View>

//           <View className="mt-4  ">
//             <View className="border-b border-b-gray-400 pb-2 mb-2">
//               <Text className="text-lg">Payment Method</Text>
//             </View>
//             <FlatList
//               scrollEnabled={false}
//               numColumns={4}
//               data={paymentMethod}
//               columnWrapperStyle={{ justifyContent: "space-between", gap: 6 }}
//               renderItem={paymentRender}
//               keyExtractor={(item) => item}
//             />

//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";

export default function orderIdPayment() {
  interface menuInterface {
    _id: number;
    name: string;
    price: number;
    quantity: number;
  }
  const discountCard: string[] = [
    "D5%",
    "D6%",
    "D7%",
    "D8%",
    "D9%",
    "D10%",
    "D11%",
    "D12%",
    "D13%",
    "D14%",
    "D15%",
    "D16%",
    "D17%",
  ];

  const paymentMethod: string[] = ["Credit Card", "Cash", "Bank Transfer"];

  const menus: menuInterface[] = [
    { _id: 1, name: "Coffee", price: 3000, quantity: 2 },
    { _id: 2, name: "Coffee", price: 3000, quantity: 2 },
  ];

  const paymentRender = ({ item }: { item: string }) => (
    <View className="flex items-center justify-between border mb-2 rounded-md border-gray-400 py-4 basis-[32%]">
      <Text>{item}</Text>
    </View>
  );

  const discountRender = ({ item }: { item: string }) => (
    <View className="flex items-center justify-between border mb-2 rounded-md border-gray-400 py-2 basis-[23.7%]">
      <Text>Voucher</Text>
      <Text>{item}</Text>
    </View>
  );

  const menuRender = ({ item }: { item: menuInterface }) => (
    <View className="border-b border-gray-400 py-2">
      <Text className="px-6">{item.name}</Text>
      <Text className="text-center">
        {" "}
        {item.quantity} * {item.price} = {item.price * item.quantity}
      </Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-2 pb-8">
          <View className="flex items-center justify-between flex-row border-b border-gray-400 py-2">
            <Text>Amount</Text>
            <Text>$ 100</Text>
          </View>
          <View className="py-2">
            <Text className="mb-2">Discount Card</Text>
            <FlatList
              scrollEnabled={false}
              numColumns={4}
              data={discountCard}
              columnWrapperStyle={{ justifyContent: "space-between", gap: 6 }}
              renderItem={discountRender}
              keyExtractor={(item) => item}
            />
          </View>

          <View>
            <View className="flex items-center justify-between flex-row">
              <Text>Amount after discount</Text>
              <Text>$ 100</Text>
            </View>

            <View className="flex items-center justify-between flex-row">
              <Text>VAT Tax</Text>
              <Text>$ 5</Text>
            </View>
            <View className="flex items-center justify-between flex-row">
              <Text className="text-lg text-red-500 font-semibold">
                Total Amount
              </Text>
              <Text className="text-lg text-red-500 font-semibold">$ 105</Text>
            </View>
          </View>

          <View className="mt-4">
            <View className="flex items-center justify-between flex-row border-b border-gray-400 pb-2">
              <Text>Customer paid amount</Text>
              <Text>$ 110</Text>
            </View>

            <View className="flex items-center justify-between flex-row pt-1">
              <Text>Refund amount</Text>
              <Text>$ 5</Text>
            </View>
          </View>

          <View className="mt-4">
            <View className="border-b border-b-gray-400 pb-2 mb-2">
              <Text className="text-lg">Payment Method</Text>
            </View>
            <FlatList
              scrollEnabled={false}
              numColumns={4}
              data={paymentMethod}
              columnWrapperStyle={{ justifyContent: "space-between", gap: 6 }}
              renderItem={paymentRender}
              keyExtractor={(item) => item}
            />
          </View>

          <View className="mt-4">
            <TextInput
              className="border border-gray-400 rounded-md p-2"
              placeholder="Enter Customer Payment Amount"
              keyboardType="numeric"
            />
          </View>

          <View className="mt-2">
            <View className="border-b border-b-gray-400 pb-2">
              <Text className="text-lg">List of products</Text>
            </View>
            <View>
              <FlatList
                scrollEnabled={false}
                data={menus}
                renderItem={menuRender}
                keyExtractor={(item) => item._id.toString()}
              />
            </View>
          </View>

          <View className="mt-2">
            <View className="border-b border-b-gray-400 pb-2">
                <Text className="text-lg">Cashier</Text>
            </View>

            <View className="flex items-center justify-between flex-row mt-2">
                <Text>Branch Name -</Text>
                <Text>Coffee</Text>
            </View>

            <View className="flex items-center justify-between flex-row mt-2">
                <Text>Cashier Name -</Text>
                <Text>Wai Min</Text>
            </View>
          </View>

          <View className="flex items-center">

          <CustomButton btnText={'Print Receipt'} textStyle={'text-lg'} containerStyle={'bg-blue-400 w-1/2 px-2 py-2 rounded-md mt-4 flex items-center'} handlePress={() => console.log('Print Receipt')}/>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
