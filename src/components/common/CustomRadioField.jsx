// CustomRadioField.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomRadioField = ({ title, options, selectedValue, onValueChange }) => {
  return (
    <View style={styles.radioFieldContainer}>
     
      <Text style={styles.radioTitle}>{title}</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioButton}
          onPress={() => onValueChange(option.value)}
        >
          <View style={[
            styles.radioCircle,
            selectedValue === option.value ? styles.radioCircleSelected : {}
          ]} />
          <Text style={styles.radioLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  radioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
    marginLeft: 40,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  radioCircleSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4040ff',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomRadioField;
