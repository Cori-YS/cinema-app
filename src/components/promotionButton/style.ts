import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.dark.background,
    margin: 20,
    marginTop: 5,
    borderRadius: 20,
    height: 100,
    padding: 15,
  },
  promotionText: {
    color: Colors.dark.text,
    fontSize: 20,
  },
  promotionDays: {
    color: Colors.dark.text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  arrowContainer: {
    backgroundColor: Colors.dark.tint,
    color: Colors.dark.text,
    borderRadius: 12.5,
    fontSize: 60,
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: Colors.dark.text,
    fontSize: 60,
  },
});
