import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';

export default function ProfileHeader() {
  return (
    <View style={styles.titleBar}>
      <Text style={styles.title}>Perfil</Text>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <FontAwesome name='gear' style={styles.gear} />
      </TouchableOpacity>
    </View>
  );
}
