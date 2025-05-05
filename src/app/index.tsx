import { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import DropDown from '@/components/dropDown';

export default function Index() {
  const [name, setName] = useState('');

  function handleNext() {
    router.navigate('/dashboard');
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DropDown />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} activeOpacity={0.9}>
            <Feather name='search' size={20} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={0.9}>
            <FontAwesome name='user-circle' size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    height: 55,
    width: 55,
    borderRadius: 12.5,
    backgroundColor: Colors.dark.tint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: Colors.dark.text,
    fontSize: 30,
  },
});
