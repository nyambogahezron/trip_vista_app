import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
const CustomButton = ({
  title,
  customStyles,
  handlePress,
  textStyles,
  isLoading,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        className={`py-3 px-7 rounded-md mb-2.5 ${customStyles} ${
          isLoading ? 'opacity-50' : ''
        }`}
        activeOpacity={0.8}
        disabled={isLoading}
      >
        <Text className={`text-white text-lg text-center ${textStyles}`}>
          {title}
        </Text>
        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color='#fff'
            size='small'
            className='ml-2'
          />
        )}
      </TouchableOpacity>
    </>
  );
};
export default CustomButton;
