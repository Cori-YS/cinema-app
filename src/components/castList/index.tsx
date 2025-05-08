import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { styles } from './style';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

type Cast = {
  cast_id: string;
  character: string;
  name: string;
  profile_path: string;
};

export default function CastList({ movie_id }: { movie_id: string }) {
  const [cast, setCast] = useState<Cast[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=pt`
      );
      const json = await res.json();
      setCast(json.cast);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderItem = ({ item }: { item: Cast }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: IMAGE_URL + item.profile_path }}
        style={styles.poster}
        resizeMode='cover'
      />
    </View>
  );

  if (loading) {
    return <ActivityIndicator size='large' style={{ flex: 1 }} />;
  }

  return (
    <FlatList
      data={cast}
      keyExtractor={(item) => item.cast_id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    />
  );
}
