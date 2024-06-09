import { View, Text, Image } from 'react-native';
const AuthHeader = ({ title }) => {
  return (
    <View className='flex-1 bg-blue-800 rounded-b-3xl items-center'>
      <Image
        source={require('../assets/images/logo.png')}
        className='w-16 h-16 mt-20 rounded-full'
      />
      <View className='mt-8'>
        <Text className='text-white text-3xl font-pbold'>{title}</Text>
      </View>
    </View>
  );
};
export default AuthHeader;
