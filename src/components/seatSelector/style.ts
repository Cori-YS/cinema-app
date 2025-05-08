import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: Colors.dark.background,
    justifyContent: 'center',
    borderRadius: 23.71,
    margin: 20,
  },
  grid: {
    alignItems: 'center',
    marginBottom: 25,
  },
  seat: {
    width: 25.5,
    height: 25.5,
    margin: 2.5,
    borderRadius: 6,
    borderColor: Colors.dark.tint,
    borderWidth: 2.74,
  },
  selected: {
    backgroundColor: Colors.dark.tint,
  },
  reserved: {
    borderColor: '#4C4F90',
    backgroundColor: '#4C4F90',
  },
  afterCenter: {
    marginLeft: 20,
  },
  screen: {
    height: 10,
    borderBottomStartRadius: '50%',
    borderBottomEndRadius: '50%',
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#4C4F90',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#fff',
  },
});
