import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// extras
import { dummy_recipes } from '@/data/dummy_recipes';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = width * 0.75;
const SPACING = 20;

export default function PopularRecipes() {
  return (
    <View>
      <Text className='text-xl font-semibold'>Popular Recipes</Text>
      <View className='mt-4'>
        <FlatList
          data={dummy_recipes}
          renderItem={({ item }) => (
            <View style={styles.carouselContainer}>
              <View className='w-12 h-12 rounded-full bg-white/80 flex items-center justify-center absolute right-2 top-3 z-10'>
                <FontAwesome name='heart-o' size={24} />
              </View>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View className='left-5 right-0 bottom-14'>
                <Text className='text-lg text-white font-semibold'>
                  {item.title}
                </Text>
                <Text className='text-white text-xs'>By {item.author}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH + SPACING}
          decelerationRate='fast'
          ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: ITEM_WIDTH,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 16,
  },
});
