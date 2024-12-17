import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CategoryBox from '../../components/CategoryBox';

const laptopCategories = [
  {
    id: '1',
    name: 'Apple',
    imageUrl: 'https://www.apple.com/v/macbook-pro-14-and-16/c/images/overview/hero_endframe__e1wrhhv4eoae_large.jpg'
  },
  {
    id: '2',
    name: 'HP',
    imageUrl: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08163600.png'
  },
  {
    id: '3',
    name: 'Dell',
    imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full'
  },
  {
    id: '4',
    name: 'Lenovo',
    imageUrl: 'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-x1-carbon-gen-10-series-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTk2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3w0OGQ3YmQ5NGZkZGJiZjNhZWZkYzY4M2E0YjgzZTc5YTQyNmI3ZDNhZDNhZjMyNjkzNjRlNTk2ZTJiMzk5ODVj'
  },
  {
    id: '5',
    name: 'Asus',
    imageUrl: 'https://dlcdnwebimgs.asus.com/gain/28124a72-9d14-474e-8ea6-b17d3e1d4d2f/'
  },
  {
    id: '6',
    name: 'Acer',
    imageUrl: 'https://assets.acer.com/is/image/acer/swift-3-sf314-71-fingerprint-backlit-steel-gray-01?$Product-Cards-XL$'
  }
];

export default function TabOneScreen() {
  const handleCategoryPress = (category: string) => {
    console.log(`Selected category: ${category}`);
    // Add navigation logic here when needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Your Laptop Brand </Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.boxContainer}>
          {laptopCategories.map((category) => (
            <CategoryBox
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              onPress={() => handleCategoryPress(category.name)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  scrollContent: {
    flexGrow: 1,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
});
