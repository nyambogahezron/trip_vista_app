import { View, Text, FlatList } from 'react-native';
import travelGroups from '../utils/travelGroups';
const TravelGroups = () => {
  return (
    <View className='mt-5 ml-1 mb-4'>
        <Text className='text-md font-psemibold ml-4 my-2'>
            Travel Groups
        </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={travelGroups ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='items-center justify-center border-2 border-gray-100 shadow-sm shadow-main bg-white h-32 w-72 rounded-lg ml-2'>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default TravelGroups;
