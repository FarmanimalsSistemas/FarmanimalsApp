// CustomPickerField.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomPickerField = ({ icon, title, selectedValue, onValueChange, items }) => {
  return (
    <View style={styles.pickerFieldContainer}>
      <View style={styles.row}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.pickerTitle}>{title}</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerFieldContainer: {
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  pickerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 25,
    overflow: 'hidden', // Esto es para que el borderRadius se aplique en Android
    width: '90%', // Ajusta este valor para cambiar el ancho del Picker
    alignSelf: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  pickerItem: {
    height: 50,
  },
});

export default CustomPickerField;
