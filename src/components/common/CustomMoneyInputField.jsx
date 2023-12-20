import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const CustomMoneyInputField = ({ icon, title, onChange, value, ...rest }) => {
    // Función para formatear el texto ingresado como moneda
    const handleChange = (text) => {
      // Elimina el signo de pesos y cualquier carácter que no sea numérico
      let numericValue = text.replace(/[^0-9]/g, '');
  
      // Convierte el texto limpio en un número
      let numberValue = parseInt(numericValue, 10);
  
      // Utiliza Intl.NumberFormat para convertir el número a formato de moneda
      const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
      });
  
      let formattedValue = formatter.format(numberValue / 100); // Divide por 100 para manejar centavos
  
      // Actualiza el estado con el valor formateado como moneda
      onChange(formattedValue);
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
          onChangeText={handleChange}
          value={value}
          {...rest}
        />
      </View>
    );
  };

// Los estilos permanecen igual que en tu componente CustomInputField original
// ...
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
      marginRight: 8,
    },
    inputTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center', // Asegúrate de que el texto esté centrado
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
      // Si quieres aún más control, puedes usar paddingHorizontal y paddingVertical
    },
  });
export default CustomMoneyInputField;
