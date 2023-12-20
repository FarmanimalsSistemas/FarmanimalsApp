import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import CustomNumberInputField from '../components/common/CustomPhoneInput'
import CustomFileInput from '../components/common/CustomFileInput'

const MVZScreen = () => {

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/images/Logotipo.png')} // Reemplaza con la ruta a tu logo
        style={styles.logo}
      />
      <Text style={styles.headerTitle}>Carga tus datos MVZ en formato PDF O JPG</Text>
      <CustomNumberInputField
  icon={require('../assets/images/phone-icon.png')} // Reemplaza con la ruta a tu icono
  title="Número de Teléfono"
  onChangeText={(text) => console.log('Número de teléfono:', text)}
  // ...otros props que necesites...
/>
      {/* Resto de tu UI */}
      
      <CustomFileInput
        icon={require('../assets/images/upload-icon.png')}
        title="Anexa tu Cédula Profesional"
      />
      <CustomFileInput
        icon={require('../assets/images/upload-icon.png')}
        title="Anexa tu Comprobante de Domicilío"
      />
      <CustomFileInput
        icon={require('../assets/images/upload-icon.png')}
        title="Anexa tu INE"
      />
      <CustomFileInput
        icon={require('../assets/images/upload-icon.png')}
        title="Anexa tu Cedula Fiscal"
      />
      {/* Repite los botones para otros archivos */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar</Text>
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
  logo: {
    height: 200, // Ajusta según las dimensiones de tu logo
    width: 350,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  // Estilos para iconos y botones
  saveButton: {
    backgroundColor: '#00ADEF', // Un tono de azul, cámbialo según tu paleta de colores
    paddingVertical: 15, // Aumenta la altura del botón
    paddingHorizontal: 20, // Aumenta el ancho del botón si es necesario
    borderRadius: 25, // Aumenta para bordes más redondeados
    alignItems: 'center',
    justifyContent: 'center', // Asegura que el texto del botón esté centrado
    width: '90%', // O un ancho fijo si prefieres
    alignSelf: 'center', // Centra el botón en el contenedor
    marginTop: 20, // Espacio desde el último elemento
    marginBottom: 30, // Espacio antes del final del ScrollView
  },

  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18, // Aumenta el tamaño de la fuente
    fontWeight: 'bold',
    color: 'red', // Cambia el color a azul
    marginBottom: 20,
    textAlign: 'center',
  },
  // Añade estilos para los iconos, textos y otros elementos según sea necesario
});

export default MVZScreen;
