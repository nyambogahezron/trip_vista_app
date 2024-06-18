import { Stack, router, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Listing from '../../components/Listing.jsx';
import listingData from '../../utils/listingsData.js';
import { Feather } from '@expo/vector-icons';
const CategoriesDetails = () => {
  const { title } = useLocalSearchParams();
  const listing = listingData.filter((item) => item.category === title);
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: `${title}`,
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
      <View className='mt-2 bg-bgColor items-center flex-1 h-full w-full'>
        <FlatList
          data={listing}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Listing
              id={item.id}
              name={item.title}
              price={item.price}
              location={item.location}
              image={item.image}
            />
          )}
        />
      </View>
    </>
  );
};
export default CategoriesDetails;
