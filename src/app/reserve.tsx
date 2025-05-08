import SeatSelector from '@/components/seatSelector';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Reserve() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SeatSelector />
    </SafeAreaView>
  );
}
