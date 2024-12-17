import { useLocalSearchParams } from 'expo-router';
import BrandScreen from '../../components/BrandScreen';

export default function BrandPage() {
  const { name } = useLocalSearchParams();
  return <BrandScreen brand={String(name).toUpperCase()} />;
} 