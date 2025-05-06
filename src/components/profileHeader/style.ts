import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  titleBar: {
    position: 'relative',
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    color: Colors.dark.text,
    textAlign: 'center',
    fontSize: 26,
  },
  button: {
    backgroundColor: Colors.dark.tint,
    height: 55,
    width: 55,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gear: {
    color: Colors.dark.text,
    fontSize: 30,
  },
});
