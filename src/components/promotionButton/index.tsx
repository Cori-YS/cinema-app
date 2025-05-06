import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Feather } from '@expo/vector-icons';

export default function PromotionButton() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View>
        <Text style={styles.promotionText}>Saiba das promoções</Text>
        <Text style={styles.promotionDays}>Terças e Quartas</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Feather name='arrow-down-right' style={styles.arrow} />
      </View>
    </TouchableOpacity>
  );
}
