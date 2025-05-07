import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: 164,
    marginRight: 16,
    marginTop: 10,
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.dark.tint,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.dark.tint,
  },
});
