import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

interface BrandScreenProps {
  brand: string;
}

const BrandScreen: React.FC<BrandScreenProps> = ({ brand }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{brand}</Text>
      <Pressable 
        style={styles.button} 
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BrandScreen; 