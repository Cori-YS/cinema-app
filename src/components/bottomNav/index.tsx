import { View, TouchableOpacity, Text } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import Colors from '@/constants/Colors';

type Tabs = {
  name: '/home' | '/soon' | '/profile';
  label: string;
  icon: 'home' | 'film-outline' | 'person';
  alternativeName?: string;
};

const tabs: Tabs[] = [
  { name: '/home', label: 'Home', icon: 'home', alternativeName: '/' },
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
              color={
                pathname === tab.name || pathname === tab.alternativeName
                  ? Colors.dark.tint
                  : 'gray'
              }
            />
            <Text
              style={{
                color:
                  pathname === tab.name || pathname === tab.alternativeName
                    ? Colors.dark.tint
                    : 'gray',
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
