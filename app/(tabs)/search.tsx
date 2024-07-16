import { View,  SafeAreaView } from 'react-native';
import SearchInput from '../../components/SearchInput';
const Search = () => {
  return (
    <SafeAreaView className='bg-bgColor'>
      <View className='flex-row my-3'>
        <SearchInput />
      </View>
    </SafeAreaView>
  );
};
export default Search;
