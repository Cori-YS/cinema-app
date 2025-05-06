import ProfileHeader from '@/components/profileHeader';
import Colors from '@/constants/Colors';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView>
      <ProfileHeader />
      <View style={styles.container}>
        <FontAwesome name='user-circle' style={styles.icon} />
        <View>
          <Text style={styles.welcome1}>Olá, usuário</Text>
          <Text style={styles.welcome2}>Seja bem vindo</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <MaterialCommunityIcons
            name='ticket-confirmation'
            style={styles.leftIcon}
          />
          <Text style={styles.buttonText}>Meus bilhetes</Text>
          <MaterialCommunityIcons name='play' style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <MaterialCommunityIcons name='credit-card' style={styles.leftIcon} />
          <Text style={styles.buttonText}>Meus Cartões</Text>
          <MaterialCommunityIcons name='play' style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <MaterialCommunityIcons name='history' style={styles.leftIcon} />
          <Text style={styles.buttonText}>Historico</Text>
          <MaterialCommunityIcons name='play' style={styles.rightIcon} />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20, alignItems: 'center', marginTop: 100 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: Colors.dark.tint,
            height: 58,
            width: 280,
            borderRadius: 12.5,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <MaterialCommunityIcons
            name='logout'
            style={{ color: Colors.dark.text, fontSize: 25, marginLeft: 20 }}
          />
          <Text
            style={{
              color: Colors.dark.text,
              fontSize: 22,
              fontWeight: 'medium',
              marginLeft: 70,
            }}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    color: Colors.dark.text,
    fontSize: 90,
    backgroundColor: Colors.dark.tint,
    padding: 10,
    borderRadius: 27,
  },
  welcome1: {
    fontSize: 18,
    color: Colors.dark.text,
  },
  welcome2: {
    color: Colors.dark.text,
    fontSize: 22,
    fontWeight: 'bold',
  },
  // below it is the buttons style
  buttonsContainer: {
    marginTop: 40,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    gap: 15,
  },
  button: {
    backgroundColor: Colors.dark.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    height: 58,
    width: 280,
    borderRadius: 16,
  },
  leftIcon: {
    color: Colors.dark.tint,
    fontSize: 25,
    marginLeft: 20,
  },
  rightIcon: {
    color: Colors.dark.text,
    fontSize: 22,
    marginRight: 20,
  },
  buttonText: {
    color: Colors.dark.text,
    fontSize: 22,
    fontWeight: 'medium',
  },
});
