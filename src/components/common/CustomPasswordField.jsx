// CustomPasswordField.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomPasswordField = ({ icon, title, ...rest }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.passwordFieldContainer}>
      <View style={styles.row}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.passwordTitle}>{title}</Text>
      </View>
     
        <TextInput
          style={styles.input}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  passwordFieldContainer: {
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
  passwordTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 25,
    padding: 10,
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
  // ... otros estilos que necesites ...
});

export default CustomPasswordField;
