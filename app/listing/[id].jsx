import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
const ListingDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Listing Details {id}</Text>
    </View>
  );
};
export default ListingDetails;
