import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
interface BodyProps{
  Item : {
    id: number;
    name: string;
    image: number;
  };
  router : ReturnType <typeof useRouter>
}

const BodyPartCard: React.FC<BodyProps> = ({ Item  , router}) => {
  return (
    <Animated.View entering={FadeInDown.duration(300)}>
      <TouchableOpacity onPress={()=> router.push({pathname:'/exercises' ,params:Item})}
        style={{ width: wp(44), height: wp(72) }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={Item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(72) }}
          className="rounded-2xl absolute"
        />
        <LinearGradient
          colors={["transparent", "#18181b"]}
          style={{ width: wp(44), height: hp(10) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-2xl"
        ></LinearGradient>
        <Text
          style={{ fontSize: hp(3) }}
          className="text-white font-semibold text-center tracking-wide bottom-0"
        >
          {Item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
export default BodyPartCard;
