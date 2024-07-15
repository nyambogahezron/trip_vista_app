import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoadingScreen = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          <View className='flex flex-row items-center justify-between py-2 px-4'>
            <View className='w-10 h-10 rounded-full bg-gray-300' />
            <View
              style={{
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 10,
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name='notifications' size={28} color='#ccc' />
            </View>
          </View>
          <View>
            <Text className='text-xl font-psemibold ml-4 my-2 bg-gray-300 h-6 w-3/4' />
          </View>
          <View className='flex-row my-3'>
            <View className='flex-1 bg-gray-300 h-10 rounded-[10px] mr-3' />
            <View className='bg-main rounded-[10px] p-2 mr-3'>
              <Ionicons name='options' size={25} color='#ccc' />
            </View>
          </View>
          <View>
            <View className='flex-row justify-between my-2'>
              <View className='bg-gray-300 h-10 w-20 rounded-[10px]' />
              <View className='bg-gray-300 h-10 w-20 rounded-[10px]' />
              <View className='bg-gray-300 h-10 w-20 rounded-[10px]' />
            </View>
            <View>
              <View className='bg-gray-300 h-40 rounded-[10px] my-2' />
              <View className='bg-gray-300 h-40 rounded-[10px] my-2' />
            </View>
          </View>
        </>
      )}
      ListFooterComponent={() => (
        <View className='bg-gray-300 h-40 rounded-[10px] my-2' />
      )}
    />
  );
};

export default LoadingScreen;
