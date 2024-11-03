import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ImageRequireSource,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import type { PagerViewOnPageScrollEventData } from 'react-native-pager-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import * as Animatable from 'react-native-animatable';
import data from '../data/WelcomeSliderData';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');
const DOT_SIZE = 40;
const TICKER_HEIGHT = 50;
const CIRCLE_SIZE = width * 0.6;

// circle animation for pagination
const Circle = ({
  scrollOffsetAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
}) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      {data.map(({ color }, index) => {
        const inputRange = [0, 0.5, 0.99];
        const inputRangeOpacity = [0, 0.5, 0.99];
        const scale = scrollOffsetAnimatedValue.interpolate({
          inputRange,
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        });

        const opacity = scrollOffsetAnimatedValue.interpolate({
          inputRange: inputRangeOpacity,
          outputRange: [0.2, 0, 0.2],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

// header ticker
const Ticker = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateY = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * -TICKER_HEIGHT],
  });
  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({
  imageUri,
  heading,
  description,
  scrollOffsetAnimatedValue,
}: {
  imageUri: ImageRequireSource;
  description: string;
  heading: string;
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, 0.5, 0.99];
  const inputRangeOpacity = [0, 0.5, 0.99];
  const scale = scrollOffsetAnimatedValue.interpolate({
    inputRange,
    outputRange: [1, 0, 1],
  });

  const opacity = scrollOffsetAnimatedValue.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [1, 0, 1],
  });

  return (
    <View style={styles.itemStyle}>
      <Animated.Image
        source={{ uri: imageUri }}
        style={[
          styles.imageStyle,
          {
            transform: [{ scale }],
          },
        ]}
      />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity,
            },
          ]}
        >
          {heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity,
            },
          ]}
        >
          {description}
        </Animated.Text>
      </View>
    </View>
  );
};

const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * DOT_SIZE],
  });

  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            transform: [{ translateX: translateX }],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, { backgroundColor: item.color }]}
            />
          </View>
        );
      })}
    </View>
  );
};

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

// main content
export default function WelcomePage() {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          width: 450,
          height: 460,
          backgroundColor: '#99c1c4',
          borderRadius: 215,
          position: 'absolute',
          bottom: -80,
          right: -36,
          opacity: 0.2,
        }}
      ></View>

      <View
        style={{
          width: 450,
          height: 430,
          backgroundColor: '#ac826a',
          borderRadius: 215,
          position: 'absolute',
          top: -50,
          left: -36,
          opacity: 0.2,
        }}
      ></View>
      <StatusBar
        animated={true}
        backgroundColor='#333'
        barStyle='light-content'
        showHideTransition='slide'
      />
      <Circle scrollOffsetAnimatedValue={scrollOffsetAnimatedValue} />
      <AnimatedPagerView
        initialPage={0}
        style={{ width: '100%', height: '100%' }}
        onPageScroll={Animated.event<PagerViewOnPageScrollEventData>(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            listener: ({ nativeEvent: { offset, position } }) => {
              // console.log(`Position: ${position} Offset: ${offset}`);
            },
            useNativeDriver: true,
          }
        )}
      >
        {data.map((item, index) => (
          <View collapsable={false} key={index}>
            <Item
              {...item}
              scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
              positionAnimatedValue={positionAnimatedValue}
            />
          </View>
        ))}
      </AnimatedPagerView>
      <TouchableOpacity onPress={() => router.push('/(tabs)')}>
        <Animatable.View
          animation={'pulse'}
          easing='ease-in-out'
          iterationCount={'infinite'}
          style={{
            position: 'absolute',
            bottom: 80,
            opacity: 0.7,
            marginBottom: 10,
            left: width / 2 - 20,
            height: 60,
            width: 60,
            padding: 10,
            backgroundColor: '#00BCC9',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
          }}
        >
          <Text style={{ color: '#333', fontSize: 20, fontWeight: 'bold' }}>
            Go
          </Text>
        </Animatable.View>
      </TouchableOpacity>
      <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />
      <Ticker
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f2',
    position: 'relative',
  },
  itemStyle: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: width,
    height: height,
    resizeMode: 'cover',
    flex: 1,
    paddingTop: 30,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 10,
    opacity: 0.7,
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  heading: {
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: '#333',
    fontWeight: '600',
    textAlign: 'left',
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },

  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tickerContainer: {
    position: 'absolute',
    top: 45,
    left: 20,
    overflow: 'hidden',
    height: 50,
  },
  tickerText: {
    fontSize: 30,
    padding: 5,
    lineHeight: TICKER_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: '#ff7f',
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '15%',
  },
});
