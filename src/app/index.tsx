import { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function Index() {
  const [name, setName] = useState('');

  function handleNext() {
    router.navigate('/dashboard');
  }

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Escolha o cinema</Text>
        <Text>
          Kilamba <Feather name='chevron-down' size={16} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name='search' size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    color: '#453467',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
