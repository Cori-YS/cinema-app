import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { styles } from './style';

export default function BackButton() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={router.back}
    >
      <MaterialIcons name='play-arrow' style={styles.buttonIcon} />
    </TouchableOpacity>
  );
}
