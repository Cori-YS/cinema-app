import BackButton from '@/components/backButton';
import { Movie } from '@/components/moviesList';
import SeatSelector from '@/components/seatSelector';
import SessionSelector from '@/components/sessionSelector';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Reserve() {
  const { data } = useLocalSearchParams();
  const movie: Movie = JSON.parse(data as string);

  const openPay = (movie: Movie) => {
    router.navigate({
      pathname: '/pay',
      params: { data: JSON.stringify({ movie }) },
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='#161621' />
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

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: Colors.dark.tint,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 57,
          width: 200,
          paddingLeft: 30,
          paddingRight: 30,
          borderRadius: 20,
          position: 'absolute',
          bottom: 20,
          left: 90,
        }}
        onPress={() => openPay(movie)}
      >
        <Text
          style={{
            color: Colors.dark.text,
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          Comprar
        </Text>
        <MaterialCommunityIcons
          name='play'
          style={{
            color: Colors.dark.text,
            fontSize: 25,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
