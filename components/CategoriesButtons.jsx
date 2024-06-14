import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import categoriesData from '../utils/categoriesData';
import { useState, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useAnimatedRef,
  useSharedValue,
  scrollTo,
} from 'react-native-reanimated';

const CategoriesButtons = ({ setSelectedCategory, selectedCategory }) => {
  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const scrollRef = useAnimatedRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, categoriesData.length);
  }, []);

  const handleButtonPress = (id, title) => {
    setSelectedCategory(title);
    setIsActiveIndex(id);
    // itemRefs.current[id - 1].current.measure(
    //   (fx, fy, width, height, px, py) => {
    //     scrollTo(scrollRef, px, 0, true);
    //   }
    // );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View>
        <Text className='text-xl font-pbold px-3 py-1'>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='flex-row p-4 bg-bgColor'
          ref={scrollRef}
        >
          {categoriesData.map((category, index) => (
            <TouchableOpacity
              ref={(ref) => (itemRefs.current[index] = ref)}  
              key={category.id}
              onPress={() => handleButtonPress(category.id, category.title)}
              
              className={`flex-row items-center px-2 py-2 mx-1 rounded-lg ${
                selectedCategory === category.title
                  ? 'bg-[#ff7f36] text-white'
                  : 'bg-white'
              }`}
            >
              <FontAwesome
                name={category.iconName}
                size={18}
                color={`${
                  selectedCategory === category.title ? '#fff' : '#333'
                }`}
              />
              <Text className='ml-2 text-black'>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default CategoriesButtons;
