import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';

export default function DropDown(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.dropDown} activeOpacity={0.9} {...props}>
      <Text style={styles.dropTitle}>Escolha o cinema</Text>
      <View style={styles.dropContent}>
        <Text style={styles.dropText}>Kilamba</Text>
        <Feather name='chevron-down' style={styles.dropArrow} />
      </View>
    </TouchableOpacity>
  );
}
