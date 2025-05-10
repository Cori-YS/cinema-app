import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 10, marginTop: 20 },
  title: {
    color: Colors.dark.text,
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  method: {
    flexDirection: 'row',
    width: 309,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderBottomColor: '#4A4B56',
    paddingBottom: 15,
  },
  nameCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
  },
  icon: {
    color: Colors.dark.tint,
    fontSize: 35,
  },
  methodName: {
    fontSize: 20,
    fontWeight: 'medium',
    color: '#4A4B56',
  },
  checkBox: {
    borderWidth: 3,
    borderColor: '#4C4F90',
    borderRadius: 5.33,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#161621',
    fontSize: 20,
  },
  last: {
    borderBottomWidth: 0,
  },
});
