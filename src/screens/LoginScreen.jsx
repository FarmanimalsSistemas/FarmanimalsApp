// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomPasswordField from '../components/common/CustomPasswordField';
import CustomInputField from '../components/common/CustomInputField';
import CustomSocialButtons from '../components/common/CustomSocialButtons';


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
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Bienvenido al Mundo Farmanimals</Text>

      <CustomInputField
        icon={require('../assets/images/mail-icon.png')} // Asegúrate de tener la imagen en tu proyecto
        title="Usuario"
        placeholder="nombre"
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

      <View style={styles.socialLoginContainer}>
      <CustomSocialButtons
        icon={require('../assets/images/facebook.png')}
        facebookIcon={require('../assets/images/facebook.png')}
        googleIcon={require('../assets/images/Google.png')}
        title="Facebook"   
      />
       

      </View>

      
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
    
    
    paddingHorizontal: 20,
  },
  logo: {
    width: 500, // Ajustar según tu logo
    height: 150, // Ajustar según tu logo
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
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
    padding: 20,
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
  facebook: {
    backgroundColor: '#3b5998',
  },
  google: {
    backgroundColor: 'gray',
  },
  socialText: {
    color: '#ffffff',
    marginLeft: 10,
  },
  registerText: {
    fontSize: 16,
    color: '#0000FF',
    marginBottom: 5,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#0000FF',
    marginBottom: 5,
  },
});

export default LoginScreen;
