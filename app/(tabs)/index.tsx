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
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoriesButtons from '../../components/CategoriesButtons';
import Listings from '../../components/Listings';
import TravelGroups from '@/components/TravelGroups';
import SearchInput from '@/components/SearchInput';
import LoadingScreen from '@/components/LoadingScreen';
const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <SafeAreaView className='bg-bgColor'>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <View className='flex flex-row  items-center justify-between py-2 px-4'>
                <TouchableOpacity onPress={() => router.replace('/profile')}>
                  <Image
                    source={{
                      uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
                    }}
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
                <CategoriesButtons
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
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
      )}
      <StatusBar barStyle='dark-content' backgroundColor='#f3f3f3' />
    </SafeAreaView>
  );
};

export default HomePage;
