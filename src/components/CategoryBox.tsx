import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

interface CategoryBoxProps {
  name: string;
  onPress: () => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get('window').width / 2 - 30,
    height: 150,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CategoryBox; 