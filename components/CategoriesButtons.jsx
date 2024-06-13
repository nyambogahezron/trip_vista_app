import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import categoriesData from '../utils/categoriesData';
import { useRef, useState, useEffect } from 'react';

const CategoriesButtons = ({ setSelectedCategory }) => {
  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, categoriesData.length);
  }, []);

  const handleButtonPress = (id, title) => {
    setIsActiveIndex(id);
    // scroll item to the start on Active
    itemRefs.current[id - 1].current.measure(
      (fx, fy, width, height, px, py) => {
        scrollRef.current.scrollTo({ x: px, y: 0, animated: true });
      }
    );

    setSelectedCategory(title);
  };

  return (
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
            ref={(itemRefs.current[index] = useRef())}
            key={category.id}
            onPress={() => handleButtonPress(category.id, category.title)}
            className={`flex-row items-center px-2 py-2 mx-1 rounded-[14px] ${
              isActiveIndex === category.id
                ? 'bg-[#ff7f36] text-white'
                : 'bg-white'
            }`}
          >
            <FontAwesome
              name={category.iconName}
              size={18}
              color={`${isActiveIndex === category.id ? '#fff' : '#333'}`}
            />
            <Text className='ml-2 text-black'>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesButtons;
