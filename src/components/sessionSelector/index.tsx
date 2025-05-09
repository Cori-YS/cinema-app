import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { useState } from 'react';
import Colors from '@/constants/Colors';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const states = {
  SELECTED: 'selected',
  NOT_SELECTED: 'not_selected',
};

const generateDates = () => {
  const dates = [];
  let date = new Date();
  for (let i = 0; i < 5; i++) {
    dates.push({
      month: months[date.getMonth()],
      day: date.getDate(),
      state: states.NOT_SELECTED,
    });
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }

  return dates;
};

export default function SessionSelector() {
  const [dates, setDates] = useState(generateDates());

  const toggleDate = (day: number) => {
    setDates(
      dates.map((date) =>
        date.day === day && date.state
          ? {
              ...date,
              state:
                date.state === states.NOT_SELECTED
                  ? states.SELECTED
                  : states.NOT_SELECTED,
            }
          : {
              ...date,
              state: states.NOT_SELECTED,
            }
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o dia</Text>
      <View style={styles.datesContainer}>
        {dates.map((date) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={date.day}
            style={[
              styles.dateButton,
              date.state === states.SELECTED && {
                backgroundColor: Colors.dark.tint,
              },
            ]}
            onPress={() => toggleDate(date.day)}
          >
            <Text style={styles.month} numberOfLines={1}>
              {date.month}
            </Text>
            <Text style={styles.day}>{date.day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.title}>Selecione a sessão</Text>
      <Text style={styles.title}>Selecione a qualidade</Text>
    </View>
  );
}
