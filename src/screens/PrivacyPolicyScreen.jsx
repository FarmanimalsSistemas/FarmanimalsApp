// src/screens/PrivacyPolicyScreen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Asegúrate de que esta librería esté instalada.

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bienvenido al Mundo Farmanimals</Text>
      
      <View style={styles.alertContainer}>
       
        <Text style={styles.alertText}>¡¡¡Alerta Aviso de privacidad!!!</Text>
      </View>

      <Text style={styles.content}>
        En FarmAnimals, el tratamiento legítimo de sus datos personales es de gran importancia; es
        por ello que protegemos los datos personales conforme a lo establecido en la Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares.
        {"\n\n"}
        El presente aviso de Privacidad tiene como objeto informarle sobre el tratamiento que se
        le dará a sus datos personales cuando los mismos son recabados y utilizados por
        FarmAnimals dentro de su portal: www.farmanimals.com.mx.
        {"\n\n"}
        Responsable del tratamiento de sus datos personales
        FarmAnimals, con domicilio en Av. Azcapotzalco No. 678 Delegación Azcapotzalco Col. Azcapotzalco Centro CP 02000 en la Ciudad de México será el responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
        Como contactarnos: email: contacto@farmanimals.com.mx Teléfono: 55 1524 0136 (Horarios: de lunes a viernes de 9:00 a 18:00 hrs)


      </Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acepto los Termino</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  alertIcon: {
    marginRight: 10,
  },
  alertText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498DB',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyScreen;
