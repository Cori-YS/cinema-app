import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Feather, FontAwesome } from '@expo/vector-icons';
import DropDown from '../dropDown';

export default function LocationBar() {
  return (
    <View style={styles.container}>
      <DropDown />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Feather name='search' size={20} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <FontAwesome name='user-circle' size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
