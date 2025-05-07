import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark.tint,
    height: 55,
    width: 55,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    left: 20,
  },
  buttonIcon: {
    color: Colors.dark.text,
    fontSize: 30,
    transform: [{ rotate: '180deg' }],
  },
});
