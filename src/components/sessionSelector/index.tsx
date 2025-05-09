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

const generateSessions = () => {
  return [
    { time: '1:00 pm', state: states.NOT_SELECTED },
    { time: '3:00 pm', state: states.NOT_SELECTED },
    { time: '5:00 pm', state: states.NOT_SELECTED },
    { time: '8:00 pm', state: states.NOT_SELECTED },
  ];
};

const generateQuality = () => {
  return [
    { type: '2D', state: states.NOT_SELECTED },
    { type: '3D', state: states.NOT_SELECTED },
  ];
};

export default function SessionSelector() {
  const [dates, setDates] = useState(generateDates());
  const [sessions, setSessions] = useState(generateSessions());
  const [qualities, setQualities] = useState(generateQuality());

  const toggleDate = (day: number) => {
    setDates(
      dates.map((date) =>
        date.day === day
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

  const toggleSession = (time: string) => {
    setSessions(
      sessions.map((session) =>
        session.time === time
          ? {
              ...session,
              state:
                session.state === states.NOT_SELECTED
                  ? states.SELECTED
                  : states.NOT_SELECTED,
            }
          : {
              ...session,
              state: states.NOT_SELECTED,
            }
      )
    );
  };

  const toggleQuality = (type: string) => {
    setQualities(
      qualities.map((quality) =>
        quality.type === type
          ? {
              ...quality,
              state:
                quality.state === states.NOT_SELECTED
                  ? states.SELECTED
                  : states.NOT_SELECTED,
            }
          : {
              ...quality,
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
      <View style={styles.sessionsContainer}>
        {sessions.map((session) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={session.time}
            style={[
              styles.sessionButton,
              session.state === states.SELECTED && {
                backgroundColor: Colors.dark.tint,
              },
            ]}
            onPress={() => toggleSession(session.time)}
          >
            <Text style={styles.session}>{session.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.title}>Selecione a qualidade</Text>

      <View style={styles.sessionsContainer}>
        {qualities.map((quality) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={quality.type}
            style={[
              styles.sessionButton,
              quality.state === states.SELECTED && {
                backgroundColor: Colors.dark.tint,
              },
            ]}
            onPress={() => toggleQuality(quality.type)}
          >
            <Text style={styles.session}>{quality.type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
