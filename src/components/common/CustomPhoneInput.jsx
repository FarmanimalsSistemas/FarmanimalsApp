import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const PhoneInput = ({ placeholder, onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Esta función se asegura de que sólo se ingresen números
  const handlePhoneChange = (text) => {
    const cleanedNumber = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanedNumber);
    if (onChange) onChange(cleanedNumber);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handlePhoneChange}
        value={phoneNumber}
        placeholder={placeholder}
        keyboardType="phone-pad"
        maxLength={10} // Ajustar según la longitud deseada
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Estilos del contenedor, si es necesario
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  // Puedes añadir más estilos si es necesario
});

export default PhoneInput;
