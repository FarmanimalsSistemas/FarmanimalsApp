// CustomDateField.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDateField = ({ icon, title, date, onDateChange }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    onDateChange(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const formatDate = (date) => {
    if (!date) return 'No seleccionada';

    // Formatea la fecha a un formato legible, por ejemplo, 'DD/MM/YYYY'
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.dateFieldContainer}>
      <TouchableOpacity onPress={showDatePicker} style={styles.row}>
        {icon && <Image source={icon} style={styles.icon} />}
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateTitle}>{title}</Text>
          <Text style={styles.dateValue}>{formatDate(date)}</Text>
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateFieldContainer: {
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  dateTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  dateTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateValue: {
    fontSize: 14,
    color: '#666',
  },
  datePicker: {
    width: '100%',
    alignSelf: 'center',
  },
  // ... otros estilos que necesites ...
});

export default CustomDateField;
