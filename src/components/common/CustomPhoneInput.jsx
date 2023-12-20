import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const CustomNumberInputField = ({ icon, title, onChangeText, ...rest }) => {
  const handleInputChange = (text) => {
    // Asegúrate de que solo se ingresen números
    const numericText = text.replace(/[^0-9]/g, '');
    onChangeText(numericText);
  };

  return (
    <View style={styles.inputFieldContainer}>
      <View style={styles.row}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.inputTitle}>{title}</Text>
      </View>
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        onChangeText={handleInputChange}
        {...rest} 
      />
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
      justifyContent: 'center', // Centra los elementos de la fila horizontalmente
      marginBottom: 4,
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
      textAlign: 'center',
  },
  input: {
    width: '90%', // Ajusta este valor para cambiar el ancho del TextInput
      alignSelf: 'center', // Centra el TextInput en la pantalla
      borderWidth: 1,
      borderColor: '#C4C4C4',
      borderRadius: 25, // Ajusta este valor para controlar la redondez de las esquinas
      padding: 10,
      fontSize: 16,
      color: '#333',
  },
  // ...otros estilos si es necesario...
});

export default CustomNumberInputField;
