import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoriesButtons from '../../components/CategoriesButtons';
const HomePage = () => {
  return (
    <SafeAreaView className='bg-bgColor h-screen'>
      <StatusBar barStyle='dark-content' backgroundColor='#f3f3f3' />
      {/* Header */}
      <View className='flex-row items-center justify-between py-2 px-4'>
        <TouchableOpacity onPress={() => router.replace('/profile')}>
          <Image
            source={require('../../assets/images/user.png')}
            className='w-10 h-10 rounded-full'
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/notifications')}
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
          <Ionicons name='notifications' size={28} color='#000' />
        </TouchableOpacity>
      </View>

      <View>
        <Text className='text-xl font-psemibold ml-4 my-2'>
          Explore the beautiful world!
        </Text>
      </View>

      {/* Search Bar */}
      <View className='flex-row my-3'>
        <View className='flex-1 flex-row items-center mx-4 p-2 bg-white rounded-[10px]'>
          <Ionicons name='search-outline' size={18} color='#000' />
          <TextInput
            placeholder='Search place...'
            className='flex-1 ml-2 text-gray-700 font-rbold text-base'
          />
        </View>
        <View className='bg-main rounded-[10px] p-2 mr-3'>
          <Ionicons name='options' size={25} color='#fff' />
        </View>
      </View>

      {/* Categories */}
      <CategoriesButtons />

      {/* Listings */}
      <ScrollView className='p-4'>
        <View className='flex-row justify-between mb-4'>
          <TouchableOpacity className='bg-gray-100 p-4 rounded-lg w-40'>
            <Image
              source={{
                uri: 'https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg',
              }}
              className='h-24 w-full rounded-lg'
            />
            <Text className='text-lg font-bold mt-2'>
              Tropical Paradise Resort
            </Text>
            <Text className='text-gray-500'>Pacific Ocean</Text>
            <Text className='text-orange-500 mt-1'>$150</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-gray-100 p-4 rounded-lg w-40'>
            <Image
              source={{
                uri: 'https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg',
              }}
              className='h-24 w-full rounded-lg'
            />
            <Text className='text-lg font-bold mt-2'>Alpine Chalet</Text>
            <Text className='text-gray-500'>Switzerland</Text>
            <Text className='text-orange-500 mt-1'>$200</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
