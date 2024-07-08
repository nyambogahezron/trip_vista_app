import { Feather } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';

import CustomButton from '../../components/CustomButton';
const Profile = () => {
  const isLogin = false;
  return (
    <SafeAreaView
      className='bg-bgColor'
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          statusBarStyle: 'dark',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              className='bg-white bg-opacity-50 rounded-lg p-1 '
            >
              <View className='bg-gray-200 ml-2 p-2 rounded-lg'>
                <Feather name='arrow-left' size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: '#333',
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        }}
      />

      {isLogin ? (
        <View>
          <TouchableOpacity
            onPress={() => router.push('(auth)/login')}
            className='px-6 py-3 bg-main rounded-md'
          >
            <Text className='text-white font-pbold text-lg'>Login Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className='flex-1 h-full w-full'>
          <View className='mt-8 items-center mx-auto relative w-36 border-2 border-[#f2f2f2] rounded-full'>
            <Image
              className='rounded-full h-32 w-32'
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
              }}
            />
            <TouchableOpacity className='absolute bottom-1 right-1 w-10 h-10 bg-[#f7f8f5] p-1 border-2 border-gray-200 rounded-full items-center justify-center'>
              <Icon name='camera' size={24} color='#ff7f36' />
            </TouchableOpacity>
          </View>
          <View className='mt-5 mx-3'>
            <Text className='font-psemibold ml-1 text-[15px]'>Name</Text>
            <View className='flex p-4 bg-gray-800 rounded-lg mb-3'>
              <Text className='text-white font-pbold text-sm'>Junior</Text>
            </View>
            <Text className='font-psemibold ml-1 text-[15px]'>Email</Text>
            <View className='flex p-4 bg-gray-800 rounded-lg mb-3'>
              <Text className='text-white font-pbold text-sm'>
                user@gmail.com
              </Text>
            </View>
            <View className='mt-5 opacity-75'>
              <CustomButton
                title='Edit Profile'
                customStyles={'bg-main'}
                textStyles={'font-pbold'}
                handlePress={() => router.push('(auth)/login')}
              />
            </View>
          </View>
        </View>
      )}
      <StatusBar style='dark' backgroundColor='#fff' />
    </SafeAreaView>
  );
};

export default Profile;
