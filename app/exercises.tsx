import { View, Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { dummyData } from "@/constants";
import { fetchExerciseBodyPart } from "@/api/API";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import List from "@/components/List";
import { ScrollView } from "react-native-virtualized-view";

export default function exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log(item);
  const [exercise, setExercises] = useState<any>(dummyData);

  const getExercise = async (bodyPart: any) => {
    console.log("Body part to fetch:", bodyPart);
    let data = await fetchExerciseBodyPart(bodyPart);
    setExercises(data);
  };

  useEffect(() => {
    // if (item) {
    //   getExercise(item.name);
    // }
  }, [item]);

  return (
    <ScrollView>
      <StatusBar style="dark"></StatusBar>

      <Image
        source={item.image}
        className="rounded-b-[40px] "
        style={{ width: wp(100), height: hp(40) }}
        resizeMode="cover"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 absolute flex rounded-full justify-center items-center"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7)  }}
      >
        <Ionicons name="caret-back-outline" size={hp(5)} color={"white"}  />
      </TouchableOpacity>
      {/* exercises  */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name}
        </Text>
        <View className="mb-10">
          <List data={exercise} />
        </View>
      </View>
    </ScrollView>
  );
}
