import Ticket from '@/components/ticket';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Invoice() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='#161621' />
      <Text
        style={{
          color: Colors.dark.text,
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 60,
          margin: 15,
        }}
      >
        "Obrigado por comprar seu ingresso de cinema conosco. Esperamos que você
        aproveite sua experiência cinematográfica."
      </Text>

      <Ticket width='100%' style={{ marginTop: 30, position: 'relative' }} />

      <View
        style={{
          position: 'absolute',
          height: 345,
          width: 311,
          margin: 40,
          padding: 30,
          top: 210,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <View style={{}}>
          <Text
            style={{
              color: Colors.dark.text,
              fontSize: 22.5,
              marginBottom: 20,
            }}
          >
            Titulo do filme
          </Text>
          <Text style={{ color: Colors.dark.text, fontSize: 22.5 }}>
            Cinema
          </Text>
          <Text
            style={{
              color: '#4A4B56',
              fontSize: 18.61,
              marginBottom: 20,
            }}
          >
            Kilamba
          </Text>

          <Text style={{ color: Colors.dark.text, fontSize: 22.5 }}>
            Bilhetes
          </Text>
          <Text
            style={{
              color: '#4A4B56',
              fontSize: 18.61,
            }}
          >
            4
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: '#4A4B56',
              fontSize: 18.61,
              marginTop: 5,
              marginBottom: 20,
            }}
          >
            Data
          </Text>
          <Text style={{ color: Colors.dark.text, fontSize: 22.5 }}>Ordem</Text>
          <Text
            style={{
              color: '#4A4B56',
              fontSize: 18.61,
              marginBottom: 20,
            }}
          >
            QW1E0RTY
          </Text>

          <Text style={{ color: Colors.dark.text, fontSize: 22.5 }}>
            Assento
          </Text>
          <Text
            style={{
              color: '#4A4B56',
              fontSize: 18.61,
            }}
          >
            B1 - C1 -C2
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: Colors.dark.tint,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 57,
          width: 170,
          paddingLeft: 30,
          paddingRight: 30,
          borderRadius: 20,
          position: 'absolute',
          bottom: 20,
          left: 110,
        }}
        onPress={() => router.back()}
      >
        <MaterialCommunityIcons
          name='play'
          style={{
            color: Colors.dark.text,
            fontSize: 25,
            transform: [{ rotate: '180deg' }],
          }}
        />
        <Text
          style={{
            color: Colors.dark.text,
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          Voltar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
