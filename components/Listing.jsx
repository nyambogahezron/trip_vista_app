import Colors from '@/constants/Colors';
import { Feather, Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
const Listings = () => {
  return (
    <View>
      <TouchableOpacity className='bg-white p-2 rounded-lg mr-4 shadow-sm shadow-orange-600 border border-[#f3f3f3]'>
        <View className='relative mb-3'>
          <Image
            source={{
              uri: 'https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg',
            }}
            className='h-52  w-52 rounded-lg p-2'
          />
          <View className='absolute bottom-[-20px] right-4 bg-main p-3 rounded-full border-4 border-white'>
            <Feather name='bookmark' size={17} color={Colors.white} />
          </View>
        </View>

        <Text className='text-black ml-1 mt-3 font-pbold'>Alpine Chalet </Text>

        <View className='flex-row justify-between mt-3 mb-3 items-center'>
          <View className='flex-row gap-1 items-center'>
            <Ionicons
              name='location-outline'
              size={15}
              color={Colors.primaryColor}
            />
            <Text className='text-sm text-gray-500 font-pregular mt-2'>
              Switzerland
            </Text>
          </View>
          <Text className='text-orange-500 font-psemibold'>$200</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Listings;
