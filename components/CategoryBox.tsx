import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image, ImageSourcePropType, View, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CategoryBoxProps {
  name: string;
  imageUrl: ImageSourcePropType;
  onPress: () => void;
  size?: 'large' | 'medium' | 'small';
  color: string;
  style?: StyleProp<ViewStyle>;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ 
  name, 
  imageUrl, 
  onPress, 
  size = 'medium',
  color 
}) => {
  const boxStyle = {
    ...styles.container,
    width: size === 'large' 
      ? Dimensions.get('window').width - 32 
      : size === 'medium' 
        ? Dimensions.get('window').width / 2 - 24 
        : Dimensions.get('window').width / 2 - 24,
    height: size === 'large' ? 220 : size === 'medium' ? 200 : 180,
  };

  return (
    <TouchableOpacity 
      style={boxStyle} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={[color, color + '99']}
        style={styles.box}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.subText}>View Collection</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image 
              source={imageUrl} 
              style={[
                styles.image,
                size === 'large' && styles.largeImage
              ]}
              resizeMode="contain"
            />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  box: {
    flex: 1,
    borderRadius: 25,
    padding: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: '90%',
    height: '90%',
  },
  largeImage: {
    width: '60%',
    height: '90%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
    opacity: 0.9,
  },
});

export default CategoryBox;
