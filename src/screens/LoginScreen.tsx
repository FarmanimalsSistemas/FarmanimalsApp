// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    PrivacyPolicy: undefined;
    // Define otros componentes de tu stack de navegación aquí
  };
  
  type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'PrivacyPolicy'
  >;//asi se seclaran las pantallas que vamos a llamr
  
  const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation<LoginScreenNavigationProp>();
  
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

      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={24} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Usuario"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-outline" size={24} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          {/* Iconos de redes sociales */}
          <Icon name="facebook" size={24} color="#fff" />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <Icon name="google" size={24} color="#fff" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => console.log('Navegar a la pantalla de registro')}>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 500, // Ajustar según tu logo
    height: 150, // Ajustar según tu logo
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#00ADEF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
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
    backgroundColor: 'red',
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
