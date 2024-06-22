import { Link } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import images from '../constants/images';
const CategoriesCard = ({ item }) => {
  return (
    <>
      <Link href={`/categories/${item.title}`} asChild>
        <TouchableOpacity className='flex-1 m-2 h-36 rounded-lg overflow-hidden'>
          <ImageBackground
            source={{
              uri: 'https://media.istockphoto.com/id/157696633/photo/african-beach.jpg?s=612x612&w=0&k=20&c=gwiDHUQtIJjJXjd6-WdOTHTHhhyzCg_1dNmEECPpJ-Y=',
            }}
            className='flex-1 justify-end opacity-90 bg-green-50'
          >
            <View className='bg-bgColor bg-opacity-30 p-2 flex-row justify-between items-center'>
              <Text className='text-black text-[16px] font-pbold'>
                {item.title}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </Link>
    </>
  );
};

export default CategoriesCard;
