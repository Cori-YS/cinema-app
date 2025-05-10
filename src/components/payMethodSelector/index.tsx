import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { FontAwesome6 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

type PaymentMethod = {
  name: string;
  state: string;
  icon: 'credit-card' | 'qrcode' | 'apple-pay' | 'google-pay';
  last?: boolean;
};

const states = {
  SELECTED: 'selected',
  NOT_SELECTED: 'not_selected',
};

const paymentMethods: PaymentMethod[] = [
  {
    name: 'Cartão Multicaixa',
    state: states.NOT_SELECTED,
    icon: 'credit-card',
  },
  {
    name: 'Express',
    state: states.NOT_SELECTED,
    icon: 'qrcode',
  },
  {
    name: 'Apple Pay',
    state: states.NOT_SELECTED,
    icon: 'apple-pay',
  },
  {
    name: 'Google Pay',
    state: states.NOT_SELECTED,
    icon: 'google-pay',
    last: true,
  },
];

export default function PayMethodSelector() {
  const [methods, setMethods] = useState(paymentMethods);

  const toggleMethod = (name: string) => {
    setMethods(
      methods.map((method) =>
        method.name === name
          ? {
              ...method,
              state:
                method.state === states.NOT_SELECTED
                  ? states.SELECTED
                  : states.NOT_SELECTED,
            }
          : {
              ...method,
              state: states.NOT_SELECTED,
            }
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metodo de Pagamento</Text>
      {methods.map((method) => (
        <View
          style={[styles.method, method.last && styles.last]}
          key={method.name}
        >
          <FontAwesome6 name={method.icon} style={styles.icon} />
          <View style={styles.nameCheck}>
            <Text style={styles.methodName}>{method.name}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => toggleMethod(method.name)}
              style={styles.checkBox}
            >
              <FontAwesome6
                name='check'
                style={[
                  styles.checkMark,
                  method.state === states.SELECTED && {
                    color: Colors.dark.tint,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
