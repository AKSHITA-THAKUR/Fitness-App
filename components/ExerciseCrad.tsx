import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Card{
    data:any ,
    router: ReturnType <typeof useRouter>
}
const ExerciseCard:React.FC<Card> = ({data , router}) => {

  return (
    <View>
      <TouchableOpacity className='flex py-3 rounded-xl mt-1 space-y-2 border border-neutral-300' onPress={()=> router.push({pathname: '/exerciseDetail' , params:data})}>
         <View className='bg-neutral-200 shadow rounded-[25px]'>
         <Image 
                source={{ uri: data.gifUrl }} 
                style={{ width: wp(45), height: hp(25) }} 
                contentFit="cover" 
              />
         </View>
         <Text style={{fontSize:hp(1.7)}} className='text-neutral-700 font-semibold ml-1 tracking-wide'>{data?.name?.length>20 ? data.name.slice(0,20)+'...' : data.name}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default ExerciseCard