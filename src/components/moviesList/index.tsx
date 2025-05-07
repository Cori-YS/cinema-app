import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { styles } from './style';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

type Movie = {
  id: string;
  title: string;
  subtitle: string;
  poster_path: string;
  release_date: string;
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

  const renderItem = ({ item }: { item: Movie }) => (
    <View style={styles.card}>
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
    </View>
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
