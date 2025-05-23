import BackButton from '@/components/backButton';
import MovieOverview from '@/components/movieOverview';
import { Movie } from '@/components/moviesList';
import PayMethodSelector from '@/components/payMethodSelector';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Pay() {
  const { data } = useLocalSearchParams();
  const { movie }: { movie: Movie } = JSON.parse(data as string);

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
          Comprar
        </Text>
      </View>

      <MovieOverview movie={movie} />

      <PayMethodSelector />

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: Colors.dark.tint,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 57,
          width: 300,
          paddingLeft: 30,
          paddingRight: 30,
          borderRadius: 20,
          position: 'absolute',
          bottom: 20,
          left: 40,
        }}
        onPress={() => router.navigate('/invoice')}
      >
        <Text
          style={{
            color: Colors.dark.text,
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          5000 AOA | Pagar
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
