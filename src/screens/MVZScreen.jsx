import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import PhoneInput from '../components/common/CustomPhoneInput'


const MVZScreen = () => {
  const handleSelectFile = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      // Haz algo con el archivo seleccionado
      console.log(response);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // El usuario canceló la selección de archivos
      } else {
        throw error;
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/images/Logotipo.png')} // Reemplaza con la ruta a tu logo
        style={styles.logo}
      />
      <PhoneInput
        placeholder="Ingresa tu teléfono"
        onChange={(number) => {
        console.log('Número de teléfono:', number);
    }}
    />
      {/* Resto de tu UI */}
      <TouchableOpacity onPress={handleSelectFile} style={styles.fileInput}>
        <Text style={styles.fileInputText}>Anexa tu Cédula Profesional</Text>
        {/* Icono y texto */}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSelectFile} style={styles.fileInput}>
        <Text style={styles.fileInputText}>Anexa tu Comprobante de Domicilío</Text>
        {/* Icono y texto */}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSelectFile} style={styles.fileInput}>
        <Text style={styles.fileInputText}>Anexa tu INE</Text>
        {/* Icono y texto */}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSelectFile} style={styles.fileInput}>
        <Text style={styles.fileInputText}>Anexa tu Cedula Fiscal</Text>
        {/* Icono y texto */}
      </TouchableOpacity>
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
  fileInput: {
    backgroundColor: '#E8E8E8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fileInputText: {
    color: '#000',
  },
  // Estilos para iconos y botones
  saveButton: {
    backgroundColor: '#00ADEF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Añade estilos para los iconos, textos y otros elementos según sea necesario
});

export default MVZScreen;
