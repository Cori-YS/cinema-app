import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    alignItems: 'center',
    borderRadius: 23.71,
    margin: 20,
    marginTop: 5,
    marginBottom: 0,
    padding: 20,
    height: '100%',
  },
  title: {
    color: Colors.dark.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  datesContainer: { flexDirection: 'row', margin: 10, gap: 10 },
  dateButton: {
    backgroundColor: '#4A4B56',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 14.13,
    height: 55,
    width: 55,
    alignItems: 'center',
  },
  month: {
    color: Colors.dark.text,
    fontSize: 11,
    paddingTop: 5,
  },
  day: {
    color: Colors.dark.text,
    fontSize: 19.3,
    fontWeight: 'bold',
  },
  sessionsContainer: { flexDirection: 'row', margin: 10, gap: 5 },
  sessionButton: {
    backgroundColor: '#4A4B56',
    borderRadius: 13.5,
    height: 22,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  session: { color: Colors.dark.text, fontSize: 13, fontWeight: 'medium' },
});
