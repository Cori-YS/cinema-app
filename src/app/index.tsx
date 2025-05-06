import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { setBackgroundColorAsync } from 'expo-system-ui';
import LocationBar from '@/components/locationBar';
import PromotionButton from '@/components/promotionButton';
import MovieList from '@/components/moviesList';

export default function Index() {
  setBackgroundColorAsync('#000');

  return (
    <SafeAreaView>
      <LocationBar />
      <PromotionButton />
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} style={styles.selectedButton}>
          <Text style={styles.selectedTitle}>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.title}>Cinemas</Text>
        </TouchableOpacity>
      </View>

      <MovieList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 5,
  },
  button: {
    backgroundColor: Colors.dark.background,
    borderRadius: 18,
    height: 55,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.dark.background,
    borderRadius: 18,
    height: 55,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.dark.tint,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 20,
  },
  selectedTitle: {
    color: Colors.dark.tint,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
