import { View, TouchableOpacity, Text } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import Colors from '@/constants/Colors';

type Tabs = {
  name: '/' | '/soon' | '/profile';
  label: string;
  icon: 'home' | 'film-outline' | 'person';
};

const tabs: Tabs[] = [
  { name: '/', label: 'Home', icon: 'home' },
  { name: '/soon', label: 'Brevemente', icon: 'film-outline' },
  { name: '/profile', label: 'Perfil', icon: 'person' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Link href={tab.name} asChild key={tab.name}>
          <TouchableOpacity style={styles.tab}>
            <Ionicons
              name={tab.icon}
              size={24}
              color={pathname === tab.name ? Colors.dark.tint : 'gray'}
            />
            <Text
              style={{
                color: pathname === tab.name ? Colors.dark.tint : 'gray',
                fontSize: 12,
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
}
