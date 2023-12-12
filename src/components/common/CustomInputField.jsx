// CustomInputField.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const CustomInputField = ({ icon, title, ...rest }) => {
  return (
    <View style={styles.inputFieldContainer}>
      <View style={styles.row}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.inputTitle}>{title}</Text>
      </View>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 9,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%', // Ajusta este valor para cambiar el ancho del TextInput
    textAlign: 'center', // Centra el texto horizontalmente
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 25, // Ajusta este valor para controlar la redondez de las esquinas
    padding: 10,
    fontSize: 16,
    color: '#333',
    // Si quieres aún más control, puedes usar paddingHorizontal y paddingVertical
  },
});

export default CustomInputField;
