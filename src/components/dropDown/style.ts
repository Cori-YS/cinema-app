import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
  dropDown: {
    backgroundColor: Colors.dark.background,
    width: 130,
    height: 55,
    borderRadius: 10,
    padding: 10,
  },
  dropTitle: {
    color: Colors.dark.tint,
    fontWeight: 'bold',
    fontSize: 12,
  },
  dropContent: {
    color: Colors.dark.text,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropText: {
    color: Colors.dark.text,
    fontSize: 16,
  },
  dropArrow: {
    color: Colors.dark.tint,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
