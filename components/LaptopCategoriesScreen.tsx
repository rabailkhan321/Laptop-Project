import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryBox from './CategoryBox';
import { laptopCategories } from '../constants/laptopData';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const BOX_WIDTH = width;

const brandColors = {
  Apple: '#000000',
  HP: '#0096D6',
  Dell: '#007DB8',
  Lenovo: '#E2231A',
  Asus: '#00539B',
  Acer: '#83B81A',
};

const LaptopCategoriesScreen: React.FC = () => {
  const router = useRouter();

  const handleCategoryPress = (category: string) => {
    router.push({
      pathname: "/brand/[name]",
      params: { name: category }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#ffffff', '#f8f9fa']}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Explore</Text>
          <Text style={styles.subHeading}>Find your perfect laptop</Text>
        </View>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          decelerationRate="fast"
          snapToInterval={BOX_WIDTH + 20}
          snapToAlignment="center"
        >
          {laptopCategories.map((category, index) => (
            <CategoryBox
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              onPress={() => handleCategoryPress(category.name)}
              color={brandColors[category.name as keyof typeof brandColors]}
              style={[
                styles.box,
                index === 0 && styles.firstBox,
                index === laptopCategories.length - 1 && styles.lastBox
              ]}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 24,
    paddingBottom: 16,
  },
  heading: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subHeading: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '500',
  },
  scrollContent: {
    paddingVertical: 20,
  },
  box: {
    width: BOX_WIDTH,
    marginHorizontal: 0,
  },
  firstBox: {
    marginLeft: 0,
  },
  lastBox: {
    marginRight: 0,
  }
});

export default LaptopCategoriesScreen; 