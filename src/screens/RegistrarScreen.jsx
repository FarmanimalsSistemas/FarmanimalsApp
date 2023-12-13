// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const [customerType, setCustomerType] = useState('Selecciona un tipo');
  const navigation = useNavigation();

  const handleValueChange = (itemValue) => {
    setCustomerType(itemValue);

    // Aquí es donde manejas la navegación basada en el valor seleccionado
    switch (itemValue) {
      case 'Publico General':
        // Navega a la pantalla para 'Publico General'
        navigation.navigate('PublicoGScreen');
        break;
      case 'Socio Amigo':
        // Navega a la pantalla para 'Socio Amigo'
        navigation.navigate('SocioAmigoScreen');
        break;
      // Agrega casos adicionales para otros valores de 'customerType'
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/Logotipo.png')} // Reemplaza con la ubicación de tu logo
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Bienvenido a la Farmacia de tu mascota</Text>
      <Text style={styles.title}>Ingresa tus Datos</Text>

      <Image
        source={require('../assets/images/Imagen1.png')} // Reemplaza con tu imagen de animales
        style={styles.animalsImage}
      />

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Tipo de Cliente</Text>
        <Picker
          selectedValue={customerType}
          onValueChange={(itemValue, itemIndex) => handleValueChange(itemValue)}
          style={styles.picker}
          dropdownIconColor={'#000'}
        >
          <Picker.Item label="Selecciona un tipo de cliente" value="" />
          <Picker.Item label="Publico General" value="Publico General" />
          <Picker.Item label="Socio Amigo" value="Socio Amigo" />
          <Picker.Item label="MVZ" value="MVZ" />
          <Picker.Item label="Cliente Institucional" value="Cliente Institucional" />
          <Picker.Item label="Empleado Institucional" value="Empleado Institucional" />
          <Picker.Item label="Mayorista" value="Mayorista" />

          
          {/* ...otros Picker.Item... */}
        </Picker>
      </View>

      {/* ...otros componentes... */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 350, // Ajustar según tu logo
    height: 160, // Ajustar según tu logo
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    color: '#00AEDD',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animalsImage: {
    width: 600, // Ajusta esto según tus necesidades
    height: 200, // Ajusta esto según tus necesidades
    resizeMode: 'contain',
    marginBottom: 20,
  },
  dropdownContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    padding: 10,
    color: '#000',
    backgroundColor: '#00AEDD',
  },
  picker: {
    width: '100%',
  },
  // ... otros estilos que necesites ...
});

export default RegistrationScreen;
