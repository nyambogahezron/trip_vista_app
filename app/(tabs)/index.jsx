import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoriesButtons from '../../components/CategoriesButtons';
import Listings from '../../components/Listings';
import TravelGroups from '@/components/TravelGroups';
import SearchInput from '@/components/SearchInput';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  return (
    <SafeAreaView className='bg-bgColor'>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className='flex flex-row  items-center justify-between py-2 px-4'>
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
              <SearchInput />
              <View className='bg-main rounded-[10px] p-2 mr-3'>
                <Ionicons name='options' size={25} color='#fff' />
              </View>
            </View>
            {/* Categories */}
            <View>
              <CategoriesButtons setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
              <View>
                <Listings selectedCategory={selectedCategory} />
              </View>
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View className=''>
            <TravelGroups />
          </View>
        )}
       
      />
      <StatusBar barStyle='dark-content' backgroundColor='#f3f3f3' />
    </SafeAreaView>
  );
};

export default HomePage;
