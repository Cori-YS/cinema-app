import BackButton from '@/components/backButton';
import CastList from '@/components/castList';
import { Movie } from '@/components/moviesList';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Genre = {
  id: string;
  name: string;
};

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetails() {
  const { data } = useLocalSearchParams();
  const [genres, setGenres] = useState<Genre[]>([]);
  const movie: Movie = JSON.parse(data as string);

  const openReserve = (movie: Movie) => {
    router.navigate({
      pathname: '/reserve',
      params: { data: JSON.stringify(movie) },
    });
  };

  const fetchGenres = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=pt`
      );
      const json = await res.json();
      setGenres(json.genres);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor='#161621' />
        <ImageBackground
          source={{ uri: POSTER_URL + movie.poster_path }}
          style={styles.image}
        >
          {/* Sombra no topo */}
          <LinearGradient
            colors={['#161621', 'transparent']}
            style={styles.topGradient}
          />

          <BackButton />

          {/* Sombra embaixo */}
          <LinearGradient
            colors={['transparent', '#161621']}
            style={styles.bottomGradient}
          />
        </ImageBackground>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <MaterialCommunityIcons
            name='play-circle'
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Trailer</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: Colors.dark.tint,
              fontSize: 28,
              fontWeight: 'bold',
              marginTop: 0,
            }}
          >
            {movie.title}
          </Text>
          <Text style={{ color: Colors.dark.tint, fontSize: 20 }}>
            {movie.original_title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 10,
              margin: 15,
            }}
          >
            {genres.map((genre) => (
              <Text
                key={genre.id}
                style={{
                  color: Colors.dark.text,
                  backgroundColor: Colors.dark.background,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderRadius: 40,
                }}
              >
                {genre.name}
              </Text>
            ))}
          </View>

          <CastList movie_id={movie.id} />

          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: Colors.dark.text,
                textAlign: 'center',
                padding: 20,
                paddingTop: 5,
              }}
            >
              {movie.overview}
            </Text>
          </View>
        </View>

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
          onPress={() => openReserve(movie)}
        >
          <Text
            style={{
              color: Colors.dark.text,
              fontSize: 25,
              fontWeight: 'bold',
            }}
          >
            Reserva
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
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    marginBottom: 15,
  },
  content: {
    padding: 20,
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  button: {
    backgroundColor: Colors.dark.tint,
    height: 57,
    width: 155,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 300,
    right: 50,
    flexDirection: 'row',
    gap: 10,
  },
  buttonIcon: {
    color: Colors.dark.text,
    fontSize: 35,
    transform: [{ rotate: '180deg' }],
  },
  buttonText: {
    color: Colors.dark.text,
    fontSize: 22,
  },
});
