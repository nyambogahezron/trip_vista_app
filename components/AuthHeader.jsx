import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image} from 'react-native';
const AuthHeader = ({ title }) => {
  return (
    <>
      <View className='relative flex-1 items-center'>
        <LinearGradient
          colors={['#2c5282', '#f4f4f4']}
          className='absolute left-0 right-0 top-0 h-[300px] rounded-b-[35px] '
        />
        <Image
          source={require('../assets/images/logo.png')}
          className='w-16 h-16 mt-20 rounded-full'
        />
        <View className='mt-8'>
          <Text className='text-white text-3xl font-pbold'>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default AuthHeader;
