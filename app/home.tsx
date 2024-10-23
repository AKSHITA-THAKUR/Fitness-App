import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import ImageSlider from "@/components/imageSlider";
import BodyParts from "@/components/BodyParts";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function home() {
  return (
    <SafeAreaView className="flex-1 g-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      {/* Punchline and avatar */}

      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(3.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY FOR
          </Text>
          <Text
            style={{ fontSize: hp(3.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(5), width: wp(10) }}
            className="rounded-full"
          />
          {/* <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="notifications" size={hp(4)} color="gray" />
          </View> */}
        </View>
      </View>

      {/* Exercses container */}
      <View className="flex-1">
    <BodyParts/>
      </View>
    </SafeAreaView>
  );
}
