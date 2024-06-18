
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Listing from '../../components/Listing.jsx';
import listingData from '../../utils/listingsData.js';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

const Favorite = () => {
 
  return (
    <SafeAreaView className='flex-1'>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Bookmarks',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#333' },
          headerStyle: { backgroundColor: '#f2f2f3' },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View className='bg-[#fffefe] p-[8] rounded-[10px]'>
                <Feather name='arrow-left' size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View className=' bg-bgColor items-center'>
        <FlatList
          data={listingData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Listing
              id={item.id}
              name={item.title}
              price={item.price}
              location={item.location}
              image={item.image}
              customCardStyle='w-full m-1'
              width={width}
              showFavIcon={true}
              customImageStyle='h-60 w-full'
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default Favorite;
