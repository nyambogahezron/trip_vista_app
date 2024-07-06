import { Feather } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
const Profile = () => {
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
      <View>
        <TouchableOpacity
          onPress={() => router.push('(auth)/login')}
          className='px-6 py-3 bg-main rounded-md'
        >
          <Text className='text-white font-pbold text-lg'>Login Now</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='dark' backgroundColor='#fff' />
    </SafeAreaView>
  );
};
export default Profile;
