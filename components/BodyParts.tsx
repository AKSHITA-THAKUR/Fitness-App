import { View, Text, FlatList } from "react-native";
import React from "react";
import BodyPartCard from "./BodyPartCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "@/constants";
import { useRouter } from "expo-router";

export default function BodyParts() {
  const router = useRouter();
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
       EXERCISES ...
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({item}) =><BodyPartCard Item={item}  router={router}/> }
      />
    </View>
  );
}
