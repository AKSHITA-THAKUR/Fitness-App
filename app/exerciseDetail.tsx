import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { BlurView } from "@react-native-community/blur";
import { ScrollView } from "react-native-virtualized-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
export default function exerciseDetail() {
  const data = useLocalSearchParams();
  console.log("The modal should opened for ", data);
  return (
    <View
      className="flex flex-1"
      style={{ marginTop: heightPercentageToDP(5) }}
    >
      <View className="shadow-md bg-neutral-300 rounded-b-[40px]">
    

        <Image
          source={{uri: typeof data.gifUrl === 'string' ? data.gifUrl : ''}}
          contentFit="cover"
          style={{
            width: widthPercentageToDP(100),
            height: widthPercentageToDP(100),
          }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0 bg-rose-500"
      >
        <Ionicons
          name="close-circle-outline"
          size={heightPercentageToDP(6)}
          color="white"
        />
      </TouchableOpacity>

      {/* Details of component */}
      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
        <View className="flex justify-center items-center">
          <Text
            style={{ fontSize: heightPercentageToDP(3) }}
            className="font-semibold text-neutral-800 tracking-wide"
          >
            {data.name}
          </Text>
        </View>
        <View className="mt-5  gap-y-2">
          <Text
            style={{ fontSize: heightPercentageToDP(2.5) }}
            className="font-semibold text-neutral-700 tracking-wide "
          >
            Equipment :
            <Text className="font-bold text-neutral-800">
              {data?.equipment}
            </Text>
          </Text>
          <Text
            style={{ fontSize: heightPercentageToDP(2.5) }}
            className="font-semibold text-neutral-700 tracking-wide "
          >
            Muscles :
            <Text className="font-bold text-neutral-800">
              {data?.secondaryMuscles}
            </Text>
          </Text>
          <Text
            style={{ fontSize: heightPercentageToDP(2.5) }}
            className="font-semibold text-neutral-700 tracking-wide "
          >
            Target :
            <Text className="font-bold text-neutral-800">{data?.target}</Text>
          </Text>
          <Text
            style={{ fontSize: heightPercentageToDP(2.5) }}
            className="font-semibold text-neutral-700 tracking-wide "
          >  
            Instruction :
            </Text>
            {typeof data.instructions === 'string'
    ? data.instructions.split(',').map((instruction, index) => (
        <Text key={index} style={{ fontSize: heightPercentageToDP(2) }} className="text-neutral-800">
          {instruction}
        </Text>
      ))
    : data.instructions?.map((instruction, index) => (
        <Text key={index} style={{ fontSize: heightPercentageToDP(2) }} className="text-neutral-800">
          {instruction}
        </Text>
      ))}

        </View>
      </ScrollView>
    </View>
  );
}
