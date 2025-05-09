import BackButton from '@/components/backButton';
import SeatSelector from '@/components/seatSelector';
import SessionSelector from '@/components/sessionSelector';
import Colors from '@/constants/Colors';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Reserve() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton />
      <View
        style={{
          alignItems: 'center',
          height: 90,
          paddingTop: 40,
        }}
      >
        <Text
          style={{
            color: Colors.dark.text,
            fontSize: 27,
            fontWeight: 'bold',
          }}
        >
          Selecione a data
        </Text>
      </View>

      <SeatSelector />

      <SessionSelector />
    </SafeAreaView>
  );
}
