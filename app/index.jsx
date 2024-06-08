import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 h-screen bg-[#031F2A] p-4'>
      <View className='flex-1 justify-between'>
        <View className='flex-1 items-center justify-center'>
          <View className='mb-5'>
            <Image
              source={require('../assets/images/welcome.png')}
              className='w-72 h-48 rounded-md relative border-black'
            />
          </View>
          <Text className='text-2xl font-bold text-center mb-2.5 font-pbold text-white capitalize'>
            Escape the ordinary life
          </Text>
          <Text className='text-lg text-center mb-5 text-gray-500 font-pmedium'>
            Discover great experiences around you and make you live interesting{' '}
            <Text className='text-red-400'>!</Text>
          </Text>
        </View>

        <View className='p-2 w-full items-center mb-5'>
          <CustomButton
            title='Get Started'
            handlePress={() => router.push('/home')}
            customStyles={'w-full text-center  bg-[#5EDFFF] mb-5 rounded-md'}
            textStyles={'font-psemibold'}
          />
          <CustomButton
            title='Login'
            handlePress={() => router.push('/login')}
            customStyles={'border border-blue-300 w-full text-center'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
