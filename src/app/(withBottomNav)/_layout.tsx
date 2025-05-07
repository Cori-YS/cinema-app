import BottomNav from '@/components/bottomNav';
import { Slot } from 'expo-router';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { StatusBar, View } from 'react-native';

export default function RootLayout() {
  setBackgroundColorAsync('#161621');

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='#161621' />
      <Slot />
      <BottomNav />
    </View>
  );
}
