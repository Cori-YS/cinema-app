import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { styles } from './style';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export type Movie = {
  id: string;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: string[];
};

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt&page=1`
      );
      const json = await res.json();
      setMovies(json.results);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const openMovieDetails = (movie: Movie) => {
    router.navigate({
      pathname: '/movie',
      params: { data: JSON.stringify(movie) },
    });
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => openMovieDetails(item)}
    >
      <Image
        source={{ uri: POSTER_URL + item.poster_path }}
        style={styles.poster}
        resizeMode='cover'
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {item.release_date}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size='large' style={{ flex: 1 }} />;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    />
  );
}
