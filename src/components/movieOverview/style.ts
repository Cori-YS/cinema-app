import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    gap: 20,
  },
  image: {
    height: 202,
    width: 144,
    borderRadius: 10,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 30,
    width: 210,
    fontWeight: 'medium',
  },
  description: {
    justifyContent: 'center',
    gap: 10,
  },
  location: {
    color: Colors.dark.text,
    fontSize: 14.55,
    fontWeight: 'medium',
  },
  genres: {
    fontSize: 15.88,
    fontWeight: 'medium',
    color: '#4A4B56',
  },
});
