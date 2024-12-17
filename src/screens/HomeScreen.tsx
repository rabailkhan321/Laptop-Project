import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CategoryBox from '../components/CategoryBox';

const laptopCategories = [
  'Apple',
  'HP',
  'Dell',
  'Lenovo',
  'Asus',
  'Acer',
  'Microsoft',
  'MSI',
];

const HomeScreen: React.FC = () => {
  const handleCategoryPress = (category: string) => {
    console.log(`Selected category: ${category}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Laptop Brand</Text>
      <ScrollView>
        <View style={styles.boxContainer}>
          {laptopCategories.map((category) => (
            <CategoryBox
              key={category}
              name={category}
              onPress={() => handleCategoryPress(category)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
});

export default HomeScreen; 