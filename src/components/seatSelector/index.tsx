import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import Colors from '@/constants/Colors';

const NUM_ROWS = 6;
const NUM_COLS = 8;
const BEFORE_MIDDLE = NUM_COLS / 2;

const seatStates = {
  AVAILABLE: 'available',
  SELECTED: 'selected',
  RESERVED: 'reserved',
};

// Gera matriz de assentos
const generateSeats = () => {
  const seats = [];
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      seats.push({
        id: `${row}-${col}`,
        status:
          Math.random() > 0.8 ? seatStates.RESERVED : seatStates.AVAILABLE,
        col,
      });
    }
  }
  return seats;
};

export default function SeatSelector() {
  const [seats, setSeats] = useState(generateSeats());

  const toggleSeat = (id: string) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id && seat.status !== seatStates.RESERVED
          ? {
              ...seat,
              status:
                seat.status === seatStates.SELECTED
                  ? seatStates.AVAILABLE
                  : seatStates.SELECTED,
            }
          : seat
      )
    );
  };

  const renderSeat = ({
    item,
  }: {
    item: { id: string; status: string; col: number };
  }) => (
    <TouchableOpacity
      onPress={() => toggleSeat(item.id)}
      disabled={item.status === seatStates.RESERVED}
      style={[
        styles.seat,
        item.status === seatStates.RESERVED && styles.reserved,
        item.status === seatStates.SELECTED && styles.selected,
        BEFORE_MIDDLE === item.col && styles.afterCenter,
      ]}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <FlatList
          data={seats}
          keyExtractor={(item) => item.id}
          numColumns={NUM_COLS}
          renderItem={renderSeat}
        />
      </View>
      <View style={styles.screen} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: Colors.dark.text, fontSize: 12 }}>Tela</Text>
      </View>
      <View style={styles.legend}>
        <LegendItem color={Colors.dark.tint} label='Selecionado' />
        <LegendItem color='#5C6BC0' label='Reservado' />
        <LegendItem borderColor={Colors.dark.tint} label='Disponivel' />
      </View>
    </View>
  );
}

const LegendItem = ({
  color,
  label,
  borderColor,
}: {
  color?: string;
  label: string;
  borderColor?: string;
}) => (
  <View style={styles.legendItem}>
    <View
      style={[
        styles.legendBox,
        {
          backgroundColor: color,
          borderColor,
          borderWidth: 2,
          borderRadius: 5,
        },
        !borderColor && { borderColor: color },
      ]}
    />
    <Text style={styles.legendText}>{label}</Text>
  </View>
);
