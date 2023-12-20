import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import CustomInputField from '../components/common/CustomInputField'; 
import CustomPickerField from '../components/common/CustomPickerField'; 
import CustomRadioField from '../components/common/CustomRadioField'; 
import CustomDateField from '../components/common/CustomDateField';
import CustomPasswordField from '../components/common/CustomPasswordField';
import TermsSwitch from '../components/common/CustomSwitchField';
import { useNavigation } from '@react-navigation/native';

const PublicoGScreen = () => {
  const navigation = useNavigation();
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState('Masculino');
  const [customerType, setCustomerType] = useState('Publico');
  const [password, setPassword] = useState('');
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
  
  

  const handleRegister = () => {
    console.log('Registrado');
    // Aquí iría la lógica para manejar la acción de registro
  };
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
      <CustomInputField
        icon={require('../assets/images/users-icon.png')} // Asegúrate de tener la imagen en tu proyecto
        title="Nombre(s)"
        placeholder="Nombre(s)"
      />
     <CustomInputField
        icon={require('../assets/images/users-icon.png')} // Asegúrate de tener la imagen en tu proyecto
        title="Apellido(s)"
        placeholder="Apellidos(s)"
      />
     
      <CustomRadioField
        title="Género"
        selectedValue={gender}
        onValueChange={(value) => setGender(value)}
        options={[
          { label: 'Masculino', value: 'Masculino' },
          { label: 'Femenino', value: 'Femenino' },
        ]}
      />
      
      <CustomDateField
        icon={require('../assets/images/calendar-icon.png')}
        title="Fecha de Nacimiento"
        date={dateOfBirth}
        onDateChange={(newDate) => setDateOfBirth(newDate)}
        
      />
      <Text style={styles.welcomeText}>Para formar parte de la  App Farmanimals, necesitas ser mayor de 13 años.</Text>
      <CustomInputField
        icon={require('../assets/images/mail-icon.png')} // Asegúrate de tener la imagen en tu proyecto
        title="Correo"
        placeholder="example@email.com"
      />
      <CustomPasswordField
        icon={require('../assets/images/password-icon.png')}
        title="Contraseña"
        value={password}
        onChangeText={setPassword}
        placeholder="Introduce tu contraseña"
      />
      <Text style={styles.welcomeText}>Contraseña con al menos 8 caracteres, una mayúscula, no  numeros consecutivos</Text>

      <CustomPasswordField
        icon={require('../assets/images/password-icon.png')}
        title="Repetir contraseña"
        value={password}
        onChangeText={setPassword}
        placeholder="Repetir contraseña"
      />
       <TermsSwitch />
       <View style={styles.buttonContainer}>
        
        <TouchableOpacity onPress={handleRegister} style={[styles.button, styles.registerButton]}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
       </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 15,
    
    color: 'red',
    marginBottom: 20,
    textAlign: 'center', // Centra el texto horizontalmente
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  logo: {
    width: 500, // Ajustar según el tamaño de tu logo
    height: 150, // Ajustar según el tamaño de tu logo
    resizeMode: 'contain', // Esto asegura que el logo se escale correctamente
  },
  form: {
    paddingHorizontal: 30,
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
    borderRadius: 3,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'center', // Centra los elementos horizontalmente
  alignItems: 'center', // Centra los elementos verticalmente
  marginTop: 8,
  paddingHorizontal: 20, // Agrega espaciado horizontal
},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 2, // Sombra para Android
  },

  registerButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  // ...otros estilos que necesitas...
});

export default PublicoGScreen;