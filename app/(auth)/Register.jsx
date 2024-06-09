import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import AuthFooter from '../../components/AuthFooter';
import CustomButton from '../../components/CustomButton';
import { EvilIcons } from '@expo/vector-icons';

const Register = () => {
  return (
    <View className='flex-1 bg-white h-screen'>
      <AuthHeader title='Sign Up' />

      <View className='p-8'>
        <View>
          <TouchableOpacity className='items-center mt-4 mb-4 flex-row gap-2'>
            <Text className='text-blue-500 text-lg mt-2 capitalize font-pregular'>
              upload your profile picture
            </Text>
            <View className='flex items-center justify-center border-2 border-blue-300 rounded-full  h-14 w-14'>
              <EvilIcons
                name='camera'
                size={40}
                color='#333'
                className='m-auto'
              />
            </View>
          </TouchableOpacity>
        </View>

        <TextInput
          className='mt-4 border-b-2 border-gray-300 pb-2'
          placeholder='Email'
        />
        <TextInput
          className='mt-4 border-b-2 border-gray-300 pb-2'
          placeholder='Username'
        />
        <TextInput
          className='mt-4 border-b-2 border-gray-300 pb-2'
          placeholder='Password'
          secureTextEntry
        />

        <CustomButton
          title='SIGN UP'
          handlePress={() => router.push('/home')}
          customStyles={
            'border bg-blue-800 py-3 mt-8 rounded-full items-center'
          }
          textStyles={'text-white text-lg'}
        />

        <AuthFooter
          title='Sign in'
          desc={`Already Have An Account?`}
          link='/login'
        />
      </View>
    </View>
  );
};

export default Register;
