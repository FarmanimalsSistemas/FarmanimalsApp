// src/screens/RegistrationScreen.tsx
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RegistrationScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    clientType: 'MVZ, Franquicatareo',
    gender: 'Femenino',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });


  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
  };

  // Lógica para manejar el registro

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Icon name="user" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre(s)"
          onChangeText={(text) => handleInputChange('firstName', text)}
          value={formData.firstName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Icon name="user" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Apellido(s)"
          onChangeText={(text) => handleInputChange('lastName', text)}
          value={formData.lastName}
        />
      </View>

      <Text style={styles.label}>Tipo de Cliente</Text>
      <View style={styles.pickerGroup}>
        <Icon name="briefcase" size={20} style={styles.icon} />
        <Picker
          selectedValue={formData.clientType}
          style={styles.picker}
          onValueChange={(itemValue: string | boolean) =>
            {
              return handleInputChange('clientType', itemValue);
            }
          }>
          <Picker.Item label="MVZ" value="MVZ" />
          <Picker.Item label="Público" value="Public" />
        </Picker>
      </View>

      <Text style={styles.label}>Género</Text>
      <View style={styles.switchGroup}>
        <Text style={styles.switchLabel}>Femenino</Text>
        <Switch
          value={formData.gender === 'Femenino'}
          onValueChange={(value) =>
            handleInputChange('gender', value ? 'Femenino' : 'Masculino')
          }
        />
        <Text style={styles.switchLabel}>Masculino</Text>
      </View>

      {/* Repite para Correo, Fecha de Cumpleaños, Contraseña y Repetir Contraseña */}
      
      <View style={styles.termsGroup}>
        <Switch
          value={formData.acceptTerms}
          onValueChange={(value) => handleInputChange('acceptTerms', value)}
        />
        <Text style={styles.termsText}>
          Acepto los Términos y Condiciones y el Aviso de Privacidad
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log(formData)}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  pickerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  picker: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  switchGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
  },
  termsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default RegistrationScreen;