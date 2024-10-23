import { StatusBar, Text, View, Image, TouchableOpacity } from "react-native";
import { FadeIn , FadeOut  , FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useRouter } from "expo-router";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1  flex justify-end ">
      <StatusBar barStyle={"light-content"} />
      <Image
        className="w-full h-full absolute"
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
      <Animated.View entering={FadeInDown.delay(100)} className=" flex items-center">
        <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">
          Best  <Text className="text-rose-500"> Workouts</Text>
        </Text>
        <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">
         For you
        </Text>
         </Animated.View>
 <Animated.View entering={FadeInDown.delay(200)}>
  <TouchableOpacity  style={{width:wp(70) , height:hp(7)}} className="bg-rose-500  rounded-full justify-center mx-auto border-[2px] border-neutral-200 items-center" 
  onPress={()=> router.push('/home')}>
  <Text style={{fontSize:hp(3)}}  className="text-white font-bold text-3xl tracking-wide">
    Get Started
  </Text>
  </TouchableOpacity>

 </Animated.View >
      </LinearGradient>
    </View>
  );
}
