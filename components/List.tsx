import { View, Text , FlatList } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import ExerciseCard from './ExerciseCrad';
interface List{
    data:any;
}
const List:React.FC<List> = ({data}) => {
    const router = useRouter();
  return (
    <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
       renderItem={({item})=> <ExerciseCard data={item} router={router}/>}
      />

  )
}
export default List