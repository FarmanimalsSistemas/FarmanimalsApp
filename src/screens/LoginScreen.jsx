// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomPasswordField from '../components/common/CustomPasswordField';
import CustomInputField from '../components/common/CustomInputField';



  const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
  
    const handleLoginSuccess = () => {
      navigation.navigate('PrivacyPolicy');
    }; // Cada que quieras ligar una nueva pantalla, debes crear una funcion como esta,ponle un nombre acorde a la funion
    
    const handleRegisterAction = () => {
      navigation.navigate('RegistrarScreen');
    };
    const handleLogin = () => {
      // Aquí iría la lógica para validar el inicio de sesión
      // Si el inicio de sesión es exitoso, llamar a handleLoginSuccess
      handleLoginSuccess();
    };
  
  

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Logotipo.png')} // Reemplaza con la ubicación de tu logo
        style={styles.imageStyle}
      />

      <Text style={styles.welcomeText}>Bienvenido al Mundo Farmanimals</Text>
      <Image
        source={require('../assets/images/login.png')} // Asegúrate de cambiar 'tu-imagen.png' por el nombre correcto de tu archivo de imagen
        style={styles.imageStyle}
      />

      <CustomInputField
        icon={require('../assets/images/mail-icon.png')} // Asegúrate de tener la imagen en tu proyecto
        title="Usuario"
        placeholder="Correo"
      />
    <CustomPasswordField
        icon={require('../assets/images/password-icon.png')}
        title="Contraseña"
        value={password}
        onChangeText={setPassword}
        placeholder="Introduce tu contraseña"
      />
      

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={handleRegisterAction}>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Navegar a la pantalla de recuperar contraseña')}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste Tu Contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    
  },
  imageStyle: {
    width: '100%', // Asegúrate de ajustar el ancho según tu diseño
    height:130, // Ajusta la altura como necesites
    resizeMode: 'cover', // o 'cover', dependiendo de cómo quieras que se muestre la imagen
    marginBottom: 20, // Añade espacio debajo de la imagen, si es necesario
  },
  logo: {
    width: 350, // Ajustar según tu logo
    height: 200, // Ajustar según tu logo
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center', // Centra el texto horizontalmente
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    width: '80%', // Mantiene el botón al 80% del ancho del contenedor
    backgroundColor: '#00ADEF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center', // Asegura que el botón se centre en el contenedor padre
    marginBottom: 20,
  },

  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centra los elementos hijos horizontalmente
    alignItems: 'center', // Centra los elementos hijos verticalmente si es necesario
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  socialText: {
    color: '#ffffff',
    marginLeft: 10,
  },
  registerText: {
    fontSize: 16,
    color: '#0000FF',
    marginBottom: 5,
    textAlign: 'center', // Centra el texto horizontalmente
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#0000FF',
    marginBottom: 5,
    textAlign: 'center', // Centra el texto horizontalmente
  },
});

export default LoginScreen;
