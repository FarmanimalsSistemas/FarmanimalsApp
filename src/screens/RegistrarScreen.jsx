// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
// Asegúrate de que RadioButton esté importado de la biblioteca correcta
import { RadioButton } from 'react-native-paper';

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    customerType: 'Publico',
    gender: 'Masculino',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle the form submission, validate data, etc.
    console.log(formData);
  };
  // Funciones para manejar el formulario aquí...

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Reemplazar con la imagen de tu logotipo */}
        <Image source={require('../assets/images/Logotipo.png')} style={styles.logo} />
      </View>
     <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nombre(s)"
          onChangeText={(text) => handleInputChange('firstName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido(s)"
          onChangeText={(text) => handleInputChange('lastName', text)}
        />
        <Picker
          selectedValue={formData.customerType}
          style={styles.picker}
          onValueChange={(itemValue) => handleInputChange('customerType', itemValue)}>
          <Picker.Item label="MVZ" value="MVZ" />
          <Picker.Item label="Publico" value="Publico" />
        </Picker>
        {/* Radio buttons for gender selection */}
        <View style={styles.radioContainer}>
          <RadioButton
            value="Femenino"
            status={formData.gender === 'Femenino' ? 'checked' : 'unchecked'}
            onPress={() => handleInputChange('gender', 'Femenino')}
          />
          <RadioButton
            value="Masculino"
            status={formData.gender === 'Masculino' ? 'checked' : 'unchecked'}
            onPress={() => handleInputChange('gender', 'Masculino')}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={(text) => handleInputChange('email', text)}
        />
        {/* Date picker for birthday - Consider using a date picker library */}
        <TextInput
          style={styles.input}
          placeholder="dd - mm - yyyy"
          onChangeText={(text) => handleInputChange('birthday', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => handleInputChange('password', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir contraseña"
          secureTextEntry
          onChangeText={(text) => handleInputChange('confirmPassword', text)}
        />
        {/* Accept terms */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>Acepto los Términos y Condiciones y el Aviso de Privacidad</Text>
          {/* Checkbox component can be added here */}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logo: {
    width: 500, // Ajustar según el tamaño de tu logo
    height: 150, // Ajustar según el tamaño de tu logo
    resizeMode: 'contain', // Esto asegura que el logo se escale correctamente
  },
  form: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#333',
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007AFF', // Color del botón azul
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  // ...otros estilos que necesitas...
});

export default RegistrationScreen;
