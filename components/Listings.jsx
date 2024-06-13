import { View, Text, FlatList, Image } from 'react-native';
import listingsData from '../utils/listingsData';
import Listing from './Listing';
import { useEffect, useState } from 'react';
const Listings = ({ selectedCategory }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // filter data based on selected category
    if (selectedCategory === 'All') {
      setData(listingsData);
      return;
    }
    const selectedData = listingsData.filter(
      (item) => item.category === selectedCategory
    );
    setData(selectedData);
    return () => {
      setData([]);
    };
  }, [selectedCategory]);

  console.log(selectedCategory);
  return (
    <View className='flex h-full '>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Listing
            id={item.id}
            name={item.name}
            title={item.title}
            location={item.location}
            price={item.price}
            rating={item.rating}
            duration={item.duration}
            image={item.image}
            description={item.description}
            category={item.category}
          />
        )}
        // return when no listing found
        ListEmptyComponent={() => (
          <View className='flex flex-1 items-center ml-8 p-0 justify-center w-64 h-52 '>
            <Image
              source={require('../assets/images/notFound.png')}
              resizeMode='contain'
              className='w-full'
            />
            <Text className='font-pbold text-main'>
              No Listings Found for {selectedCategory}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default Listings;
