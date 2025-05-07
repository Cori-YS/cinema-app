import LocationBar from '@/components/locationBar';
import MovieList from '@/components/soonMoviesList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Soon() {
  return (
    <SafeAreaView>
      <LocationBar />
      <MovieList />
    </SafeAreaView>
  );
}
