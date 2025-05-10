import { Image, Text, View } from 'react-native';
import { Movie } from '../moviesList';
import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieOverview({ movie }: { movie: Movie }) {
  const [genres, setGenres] = useState('');

  const fetchGenres = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=pt`
      );
      const json = await res.json();

      let g = '';
      for (const genre of json.genres) {
        g = g.length === 0 ? genre.name : g + ', ' + genre.name;
      }
      setGenres(g);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: POSTER_URL + movie.poster_path }}
        style={styles.image}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.genres}>{genres}</Text>
        <Text style={styles.location}>
          <Feather name='map-pin' /> Kilamba
        </Text>
      </View>
    </View>
  );
}
